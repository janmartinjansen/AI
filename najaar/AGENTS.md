# AI Cursus & Google Workspace Agent Richtlijnen

## Google Workspace MCP Integratie
- Dit project maakt gebruik van de **`google-workspace`** MCP-server.
- **Geautoriseerd Google-account:** `jan.martin.jansen@gmail.com`
- **Belangrijk:** Geef bij het aanroepen van ALLE Google Workspace MCP-tools (Google Slides, Drive, Docs, Sheets, Gmail) altijd expliciet mee:
  ```json
  "user_google_email": "jan.martin.jansen@gmail.com"
  ```
- Nooit handmatig Google Apps Script copy-paste voorstellen als een actie direct via de MCP-tools (`create_presentation`, `batch_update_presentation`, `search_drive_files`, `create_doc`, etc.) kan worden uitgevoerd.

## Presentatiestijl (Dark-Slate Palette)
- **Achtergrond:** `#0f172a` (Slate 900)
- **Cards/Containers:** `#1e293b` (Slate 800) met border `#334155` (Slate 700) of themakleur
- **Themakleuren:**
  - Techniek / Prompting: `#38bdf8` (Cyan)
  - Theorie / Ethiek: `#c084fc` (Purple)
  - Praktijk / Veiligheid: `#34d399` (Green)
  - Aandachtspunten / Regels: `#fbbf24` (Amber)
  - Valkuilen / Niet doen: `#fb7185` (Rose)
