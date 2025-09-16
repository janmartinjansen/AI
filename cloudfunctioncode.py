import functions_framework
from firebase_admin import auth, firestore, initialize_app
from flask import jsonify

# LET OP: deze code moet in de Cload function draaien en dus niet in de client
# Initialiseer de Firebase Admin SDK.
# De functie heeft automatisch de juiste rechten als deze in hetzelfde project draait.
initialize_app()

@functions_framework.http
def handle_submission(request):
    """
    Een HTTP Cloud Function die een opdracht van een geverifieerde gebruiker
    ontvangt en opslaat in Firestore.
    """
    # Stap 0: CORS-headers instellen voor browser-verzoeken.
    # Dit is nodig zodat je webapp op GitHub Pages met deze API kan praten.
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*', # In productie kun je dit beperken tot je domein
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    # De headers voor het daadwerkelijke antwoord.
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    # Stap 1: Controleer of er een authenticatie-token is meegestuurd.
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return (jsonify({"error": "Unauthorized: Missing or invalid token"}), 401, headers)

    id_token = auth_header.split('Bearer ')[1]

    try:
        # Stap 2: Verifieer het ID-token.
        # Als het token ongeldig is, wordt hier een error gegenereerd.
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid'] # De unieke ID van de gebruiker.

        # Stap 3: Haal de data uit het verzoek.
        request_json = request.get_json(silent=True)
        if not request_json or 'opdracht' not in request_json:
            return (jsonify({"error": "Bad Request: Missing 'opdracht' data"}), 400, headers)

        opdracht_data = request_json['opdracht']

        # Stap 4: Sla de data op in Firestore.
        db = firestore.client()
        doc_ref = db.collection('submissions').document() # Maak een nieuw document met een unieke ID
        doc_ref.set({
            'student_uid': uid,
            'opdracht_content': opdracht_data,
            'ingeleverd_op': firestore.SERVER_TIMESTAMP # Voeg een tijdstempel toe
        })

        print(f"Opdracht opgeslagen voor gebruiker: {uid}")
        
        # Stap 5: Stuur een succesbericht terug.
        return (jsonify({"status": "success", "message": "Opdracht succesvol ontvangen!"}), 200, headers)

    except auth.InvalidIdTokenError:
        return (jsonify({"error": "Unauthorized: Invalid token"}), 401, headers)
    except Exception as e:
        print(f"Er is een onverwachte fout opgetreden: {e}")
        return (jsonify({"error": "Internal Server Error"}), 500, headers)