/**
 * Cursus Toegangsbeveiliging (School 7 - Aan de slag met AI)
 */
(function () {
  const ACCESS_CODE = "AI2026";
  const STORAGE_KEY = "school7_ai_access";

  // Controleer of er een code in de URL staat (bijv. ?code=... of ?toegang=...)
  try {
    const params = new URLSearchParams(window.location.search);
    const paramCode = (params.get("code") || params.get("toegang") || "").trim().toUpperCase();
    if (paramCode === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, ACCESS_CODE);
    }
  } catch (e) {}

  function isAuthorized() {
    try {
      return (localStorage.getItem(STORAGE_KEY) || "").trim().toUpperCase() === ACCESS_CODE;
    } catch (e) {
      return false;
    }
  }

  // Als de cursist al toegang heeft, direct doorgaan
  if (isAuthorized()) {
    return;
  }

  // Voorkom flitsen van de inhoud voor ongeautoriseerde bezoekers
  const styleGuard = document.createElement("style");
  styleGuard.id = "auth-guard-style";
  styleGuard.innerHTML = `
    body > *:not(#auth-lock-overlay) {
      display: none !important;
    }
  `;
  document.head.appendChild(styleGuard);

  function createLockScreen() {
    if (document.getElementById("auth-lock-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "auth-lock-overlay";
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f8fafc;
      background-image: radial-gradient(at 0% 0%, rgba(219, 234, 254, 0.6) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(241, 245, 249, 0.8) 0px, transparent 50%);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #0f172a;
      box-sizing: border-box;
    `;

    overlay.innerHTML = `
      <div style="
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        padding: 2.2rem 2rem;
        max-width: 440px;
        width: 100%;
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05);
        text-align: center;
        box-sizing: border-box;
      ">
        <div style="
          width: 56px;
          height: 56px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
        ">🔐</div>

        <div style="
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #2563eb;
          background: #eff6ff;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 0.8rem;
          border: 1px solid #bfdbfe;
        ">School 7 • Praktijkcursus AI</div>

        <h2 style="
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.6rem 0;
          letter-spacing: -0.01em;
        ">Cursuscode Vereist</h2>

        <p style="
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        ">
          Deze lespagina is exclusief toegankelijk voor cursisten. Voer hieronder de code in die je per mail hebt ontvangen:
        </p>

        <form id="auth-lock-form" style="margin: 0;">
          <input 
            type="text" 
            id="auth-code-input" 
            placeholder="Voer cursuscode in..." 
            autocomplete="off" 
            autocorrect="off" 
            autocapitalize="characters" 
            spellcheck="false"
            required
            style="
              width: 100%;
              padding: 12px 16px;
              font-size: 1.15rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-align: center;
              text-transform: uppercase;
              border: 2px solid #cbd5e1;
              border-radius: 12px;
              color: #0f172a;
              background: #f8fafc;
              outline: none;
              box-sizing: border-box;
              margin-bottom: 1rem;
              transition: border-color 0.2s;
            "
          />
          <div id="auth-error-msg" style="
            display: none;
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #b91c1c;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 8px;
            margin-bottom: 1rem;
            line-height: 1.4;
            text-align: left;
          ">
            ⚠️ Onjuiste code. Controleer de code in je mail of vraag het aan de docent.
          </div>

          <div style="display: flex; gap: 10px; margin-bottom: 1.2rem;">
            <a href="../index.html" style="
              flex: 1;
              background: #f1f5f9;
              color: #475569;
              border: 1px solid #cbd5e1;
              font-weight: 600;
              font-size: 0.9rem;
              padding: 12px 14px;
              border-radius: 10px;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
            ">← Overzicht</a>

            <button type="submit" style="
              flex: 2;
              background: #2563eb;
              color: #ffffff;
              border: none;
              font-weight: 700;
              font-size: 0.92rem;
              padding: 12px 16px;
              border-radius: 10px;
              cursor: pointer;
              box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
              box-sizing: border-box;
            ">Ontgrendelen →</button>
          </div>
        </form>

        <p style="
          font-size: 0.78rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.4;
        ">
          💡 <em>Na invoeren onthoudt je browser de code voor alle lessen op dit apparaat.</em>
        </p>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById("auth-code-input");
    const form = document.getElementById("auth-lock-form");
    const errorMsg = document.getElementById("auth-error-msg");

    setTimeout(() => {
      if (input) input.focus();
    }, 100);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const val = (input.value || "").trim().toUpperCase();
      if (val === ACCESS_CODE) {
        try {
          localStorage.setItem(STORAGE_KEY, ACCESS_CODE);
        } catch (err) {}

        // Verwijder overlay en stijlbeveiliging
        overlay.remove();
        if (styleGuard) styleGuard.remove();
      } else {
        errorMsg.style.display = "block";
        input.focus();
        input.select();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createLockScreen);
  } else {
    createLockScreen();
  }
})();
