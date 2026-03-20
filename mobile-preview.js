(function () {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  if (document.documentElement.dataset.mobilePreviewApplied === "true") return;
  document.documentElement.dataset.mobilePreviewApplied = "true";

  const CONFIG = {
    phone: "+390835335921",
    whatsapp: "393927737079",
    email: "info@farmaciamontesano.it",
    maps: "https://maps.google.com/?q=Farmacia+Montesano+Matera",

    homeLink: "index.html",
    serviziLink: "servizi.html",
    promoLink: "promo.html",
    beautyLink: "giornate.html",
    turnoLink: "turno.html",
    prenotaLink: "giornate.html",
    miaLink: "assistente.html",

    heroImage: "farmacia3.jpg",
    cardImages: {
      servizi: "images/servizi.jpg",
      promo: "images/promo.jpg",
      beauty: "images/beauty.jpg",
      turno: "images/turno.jpg"
    },

    promoBadge: "1",
    beautyBadge: "2"
  };

  const existingLogo = document.querySelector(
    "header img, .logo img, .navbar-brand img, .brand img, img[alt*='logo' i]"
  );

  const logoSrc = existingLogo ? existingLogo.getAttribute("src") : "logo.png";

  /* FIX MIA: usa direttamente il file giusto */
  const miaSrc = "images/mia.png";

  const style = document.createElement("style");
  style.id = "mobile-preview-style";
  style.textContent = `
    @media (max-width: 768px) {
      html, body {
        overflow-x: hidden !important;
      }

      body.mobile-preview-mode {
        background:
          radial-gradient(circle at top left, rgba(255,255,255,0.92), rgba(244,247,245,0.92)),
          linear-gradient(180deg, #f4f6f5 0%, #eef3f1 100%) !important;
        font-family: Inter, Arial, sans-serif !important;
        padding-bottom: 16px !important;
        color: #1f4a43;
      }

      body.mobile-preview-mode *,
      body.mobile-preview-mode *::before,
      body.mobile-preview-mode *::after {
        box-sizing: border-box;
      }

      body.mobile-preview-mode .mobile-preview-original-hide {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      body.mobile-preview-mode .mobile-preview-root {
        width: 100%;
        max-width: 430px;
        margin: 0 auto;
        padding: calc(env(safe-area-inset-top) + 8px) 10px 14px;
      }

      body.mobile-preview-mode .glass-card {
        background: rgba(255,255,255,0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 10px 24px rgba(21, 56, 49, 0.08);
        border: 1px solid rgba(255,255,255,0.55);
      }

      body.mobile-preview-mode .mobile-preview-topbar {
        margin-bottom: 8px;
      }

      body.mobile-preview-mode .mobile-preview-topbar-inner {
        min-height: 78px;
        border-radius: 24px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
      }

      body.mobile-preview-mode .mobile-preview-topbar-inner img {
        display: block;
        max-width: 150px;
        width: 100%;
        height: auto;
      }

      body.mobile-preview-mode .mobile-preview-statusbar {
        margin-bottom: 10px;
      }

      body.mobile-preview-mode .mobile-preview-statusbar-inner {
        min-height: 52px;
        border-radius: 18px;
        padding: 0 14px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      body.mobile-preview-mode .status-dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #2aa06f;
        flex: 0 0 14px;
        box-shadow: 0 0 0 6px rgba(42,160,111,0.10);
      }

      body.mobile-preview-mode .status-text {
        min-width: 0;
        flex: 1;
        font-size: 14px;
        line-height: 1.15;
        font-weight: 800;
        color: #264d46;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      body.mobile-preview-mode .status-text .light {
        font-weight: 500;
        color: #526e68;
      }

      body.mobile-preview-mode .mobile-preview-hero {
        display: block;
        width: 100%;
        position: relative;
        min-height: 190px;
        border-radius: 26px;
        overflow: hidden;
        margin-bottom: 10px;
        box-shadow: 0 14px 28px rgba(21, 56, 49, 0.09);
        text-decoration: none;
        color: inherit;
      }

      body.mobile-preview-mode .mobile-preview-hero-bg {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0.16) 100%),
          url('${CONFIG.heroImage}') center/cover no-repeat;
        filter: saturate(0.96) brightness(1.02);
      }

      body.mobile-preview-mode .mobile-preview-bubble {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 58%;
        z-index: 2;
        background: rgba(255,255,255,0.93);
        border-radius: 20px;
        padding: 12px 12px 14px;
        box-shadow: 0 12px 24px rgba(21,56,49,0.09);
      }

      body.mobile-preview-mode .mobile-preview-bubble::after {
        content: "";
        position: absolute;
        right: -12px;
        top: 34px;
        width: 24px;
        height: 18px;
        background: rgba(255,255,255,0.93);
        border-radius: 0 0 0 18px;
        transform: skewX(-24deg);
      }

      body.mobile-preview-mode .mobile-preview-bubble-title {
        margin: 0 0 8px;
        font-size: 20px;
        line-height: 1.02;
        font-weight: 900;
        color: #234942;
      }

      body.mobile-preview-mode .mobile-preview-bubble-subtitle {
        margin: 0;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 500;
        color: #3c5f58;
      }

      body.mobile-preview-mode .mobile-preview-mia {
        position: absolute;
        right: 4px;
        bottom: 0;
        height: 100%;
        width: auto;
        max-width: none;
        z-index: 2;
        display: flex;
        align-items: flex-end;
      }

      body.mobile-preview-mode .mobile-preview-mia img {
        display: block;
        height: 100%;
        width: auto;
        object-fit: contain;
        filter: drop-shadow(0 10px 18px rgba(0,0,0,0.12));
      }

      body.mobile-preview-mode .mobile-preview-actions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 10px;
      }

      body.mobile-preview-mode .mobile-preview-action {
        min-height: 48px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 0 8px;
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        font-weight: 800;
        box-shadow: 0 10px 20px rgba(21,56,49,0.10);
      }

      body.mobile-preview-mode .mobile-preview-action .icon {
        font-size: 16px;
        line-height: 1;
      }

      body.mobile-preview-mode .action-call {
        background: linear-gradient(135deg, #18574f 0%, #2f7b70 100%);
      }

      body.mobile-preview-mode .action-whatsapp {
        background: linear-gradient(135deg, #6fa65f 0%, #80c76e 100%);
      }

      body.mobile-preview-mode .action-book {
        background: linear-gradient(135deg, #69b5af 0%, #47a9b0 100%);
      }

      body.mobile-preview-mode .mobile-preview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      body.mobile-preview-mode .mobile-preview-card {
        position: relative;
        display: block;
        min-height: 124px;
        border-radius: 20px;
        overflow: hidden;
        text-decoration: none;
        box-shadow: 0 12px 24px rgba(21,56,49,0.09);
      }

      body.mobile-preview-mode .mobile-preview-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      body.mobile-preview-mode .mobile-preview-card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.26) 100%);
      }

      body.mobile-preview-mode .mobile-preview-card-content {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 10px;
        z-index: 2;
      }

      body.mobile-preview-mode .mobile-preview-card-title {
        margin: 0 0 4px;
        font-size: 18px;
        line-height: 1.02;
        font-weight: 900;
        color: #fff;
        text-shadow: 0 2px 8px rgba(0,0,0,0.16);
      }

      body.mobile-preview-mode .mobile-preview-card-text {
        margin: 0;
        font-size: 12px;
        line-height: 1.12;
        font-weight: 500;
        color: rgba(255,255,255,0.96);
        text-shadow: 0 2px 8px rgba(0,0,0,0.14);
      }

      body.mobile-preview-mode .mobile-preview-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 3;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #ff6a84;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 900;
        box-shadow: 0 10px 18px rgba(255,106,132,0.28);
      }

      body.mobile-preview-mode .mobile-preview-dots,
      body.mobile-preview-mode .mobile-preview-bottom-links {
        display: none;
      }

      @media (max-width: 390px) {
        body.mobile-preview-mode .mobile-preview-root {
          padding-left: 8px;
          padding-right: 8px;
        }

        body.mobile-preview-mode .mobile-preview-topbar-inner {
          min-height: 72px;
          border-radius: 22px;
          padding: 10px 14px;
        }

        body.mobile-preview-mode .mobile-preview-topbar-inner img {
          max-width: 138px;
        }

        body.mobile-preview-mode .mobile-preview-statusbar-inner {
          min-height: 48px;
          padding: 0 12px;
        }

        body.mobile-preview-mode .status-text {
          font-size: 13px;
        }

        body.mobile-preview-mode .mobile-preview-hero {
          min-height: 178px;
          border-radius: 24px;
        }

        body.mobile-preview-mode .mobile-preview-bubble {
          width: 58%;
          padding: 10px 10px 12px;
        }

        body.mobile-preview-mode .mobile-preview-bubble-title {
          font-size: 18px;
        }

        body.mobile-preview-mode .mobile-preview-bubble-subtitle {
          font-size: 12px;
        }

        body.mobile-preview-mode .mobile-preview-action {
          min-height: 46px;
          font-size: 12px;
        }

        body.mobile-preview-mode .mobile-preview-card {
          min-height: 118px;
          border-radius: 18px;
        }

        body.mobile-preview-mode .mobile-preview-card-title {
          font-size: 17px;
        }

        body.mobile-preview-mode .mobile-preview-card-text {
          font-size: 11px;
        }
      }
    }
  `;
  document.head.appendChild(style);

  document.body.classList.add("mobile-preview-mode");

  Array.from(document.body.children).forEach((child) => {
    if (child.tagName !== "SCRIPT" && child.tagName !== "STYLE" && child.id !== "mobile-preview-root") {
      child.classList.add("mobile-preview-original-hide");
    }
  });

  const root = document.createElement("div");
  root.id = "mobile-preview-root";
  root.className = "mobile-preview-root";

  root.innerHTML = `
    <div class="mobile-preview-topbar">
      <div class="mobile-preview-topbar-inner glass-card">
        <img src="${logoSrc}" alt="Logo Farmacia Montesano">
      </div>
    </div>

    <div class="mobile-preview-statusbar">
      <div class="mobile-preview-statusbar-inner glass-card">
        <span class="status-dot" id="mobilePreviewStatusDot"></span>
        <div class="status-text" id="mobilePreviewStatusText">Siamo aperti <span class="light">| Chiudiamo alle 20:00</span></div>
      </div>
    </div>

    <a href="${CONFIG.miaLink}" class="mobile-preview-hero" aria-label="Apri assistente Mia">
      <div class="mobile-preview-hero-bg"></div>

      <div class="mobile-preview-bubble">
        <h2 class="mobile-preview-bubble-title">Ciao, sono MIA❤️❤️</h2>
        <p class="mobile-preview-bubble-subtitle">Ti aiuto a prenotare<br>esami e servizi in farmacia</p>
      </div>

      <div class="mobile-preview-mia">
        <img src="${miaSrc}" alt="MIA assistente farmacia" onerror="this.onerror=null;this.src='mia.png';">
      </div>
    </a>

    <section class="mobile-preview-actions" aria-label="Azioni rapide">
      <a href="tel:${CONFIG.phone}" class="mobile-preview-action action-call">
        <span class="icon">📞</span>
        <span>Chiama</span>
      </a>

      <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="mobile-preview-action action-whatsapp">
        <span class="icon">💬</span>
        <span>WhatsApp</span>
      </a>

      <a href="${CONFIG.prenotaLink}" class="mobile-preview-action action-book">
        <span class="icon">🗓️</span>
        <span>Prenota</span>
      </a>
    </section>

    <section class="mobile-preview-grid" aria-label="Collegamenti rapidi">
      <a href="${CONFIG.serviziLink}" class="mobile-preview-card">
        <img src="${CONFIG.cardImages.servizi}" alt="Servizi">
        <div class="mobile-preview-card-content">
          <h3 class="mobile-preview-card-title">Servizi</h3>
          <p class="mobile-preview-card-text">Esami e consulenze</p>
        </div>
      </a>

      <a href="${CONFIG.promoLink}" class="mobile-preview-card">
        <img src="${CONFIG.cardImages.promo}" alt="Offerte">
        <span class="mobile-preview-badge">${CONFIG.promoBadge}</span>
        <div class="mobile-preview-card-content">
          <h3 class="mobile-preview-card-title">Offerte</h3>
          <p class="mobile-preview-card-text">Promozioni</p>
        </div>
      </a>

      <a href="${CONFIG.beautyLink}" class="mobile-preview-card">
        <img src="${CONFIG.cardImages.beauty}" alt="Giornate Beauty">
        <span class="mobile-preview-badge">${CONFIG.beautyBadge}</span>
        <div class="mobile-preview-card-content">
          <h3 class="mobile-preview-card-title">Giornate<br>Beauty</h3>
          <p class="mobile-preview-card-text">Eventi benessere</p>
        </div>
      </a>

      <a href="${CONFIG.turnoLink}" class="mobile-preview-card">
        <img src="${CONFIG.cardImages.turno}" alt="Farmacie di turno">
        <div class="mobile-preview-card-content">
          <h3 class="mobile-preview-card-title">Farmacie<br>di turno</h3>
          <p class="mobile-preview-card-text">Trova la farmacia aperta</p>
        </div>
      </a>
    </section>
  `;

  document.body.appendChild(root);

   (function updateOpeningStatus() {
    const dot = document.getElementById("mobilePreviewStatusDot");
    const text = document.getElementById("mobilePreviewStatusText");
    if (!dot || !text) return;

    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();

    let isOpen = false;
    let closingText = "Chiudiamo alle 20:00";

    if (day >= 1 && day <= 5) {
      const morningOpen = 8 * 60 + 30;
      const morningClose = 13 * 60;
      const afternoonOpen = 16 * 60;
      const afternoonClose = 20 * 60;

      if (minutes >= morningOpen && minutes < morningClose) {
        isOpen = true;
        closingText = "Chiudiamo alle 13:00";
      } else if (minutes >= afternoonOpen && minutes < afternoonClose) {
        isOpen = true;
        closingText = "Chiudiamo alle 20:00";
      }
    } else if (day === 6) {
      const saturdayOpen = 8 * 60 + 30;
      const saturdayClose = 13 * 60;
      if (minutes >= saturdayOpen && minutes < saturdayClose) {
        isOpen = true;
        closingText = "Chiudiamo alle 13:00";
      }
    }

    if (isOpen) {
      dot.style.background = "#2aa06f";
      dot.style.boxShadow = "0 0 0 6px rgba(42,160,111,0.10)";
      text.innerHTML = `Siamo aperti <span class="light">| ${closingText}</span>`;
    } else {
      dot.style.background = "#db6b6b";
      dot.style.boxShadow = "0 0 0 6px rgba(219,107,107,0.10)";
      text.innerHTML = `Siamo chiusi <span class="light">| Riapriamo domani</span>`;
    }
  })();
})();
