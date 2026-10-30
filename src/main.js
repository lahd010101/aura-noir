import {
  APP_CONFIG,
  PERFUMES_DATA,
  DISCOVERY_SETS,
  VERTICE_DATA,
  ATOMIZER_COLORS,
  QUIZ_QUESTIONS,
  DEFAULT_PROMOTIONS
} from './data.js';

/* ===================================================================
   AUDIO SYSTEM (Synthesized Web Audio API - Zero External Files)
   =================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playLaser() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(3200, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playSpray() {
    try {
      this.init();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 3500;
      filter.Q.value = 1.8;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {}
  }

  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.06, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

/* ===================================================================
   APPLICATION STATE & PERSISTENT DATA
   =================================================================== */
const state = {
  currentStore: 'aura', // 'aura' | 'vertice'
  activeFilter: 'all',
  apparelActiveBrand: 'all',
  
  // Dynamic persistent catalogs
  perfumes: JSON.parse(localStorage.getItem('aura_perfumes_data')) || PERFUMES_DATA,
  apparel: JSON.parse(localStorage.getItem('aura_apparel_data')) || VERTICE_DATA,
  promotions: JSON.parse(localStorage.getItem('aura_promotions_data')) || DEFAULT_PROMOTIONS,

  cart: JSON.parse(localStorage.getItem('aura_noir_cart') || '[]'),
  promoCode: null,
  promoDiscount: 0,
  deliveryMethod: 'tepic-express',
  deliveryCost: 50,
  studio: {
    color: 'noir',
    text: 'ALEJANDRO G.',
    font: 'font-serif',
    perfumeId: 'tf-noir-extreme'
  },
  verticeSelectedSizes: {},
  quiz: {
    step: 0,
    answers: {}
  },
  admin: {
    activeTab: 'tab-perfumes',
    editingType: null, // 'perfume' | 'apparel' | 'coupon'
    editingId: null
  }
};

/* ===================================================================
   DOM REFERENCES
   =================================================================== */
const els = {
  // Store Switching
  btnSwitchAura: document.getElementById('btnSwitchAura'),
  btnSwitchVertice: document.getElementById('btnSwitchVertice'),
  viewAura: document.getElementById('viewAuraNoir'),
  viewVertice: document.getElementById('viewVertice'),
  headerLogoAura: document.getElementById('headerLogoAura'),
  headerLogoVertice: document.getElementById('headerLogoVertice'),
  brandIdentityLink: document.getElementById('brandIdentityLink'),
  dynamicNavList: document.getElementById('dynamicNavList'),

  // Hero & Bridge CTAs
  btnGoToVerticeFromBridge: document.getElementById('btnGoToVerticeFromBridge'),
  btnQuickAddTeeCombo: document.getElementById('btnQuickAddTeeCombo'),
  btnBackToAuraFromHero: document.getElementById('btnBackToAuraFromHero'),
  btnSwitchToAuraFromVerticeBanner: document.getElementById('btnSwitchToAuraFromVerticeBanner'),
  btnAddDiscoverySet: document.getElementById('btnAddDiscoverySet'),

  // Laser Studio & Atomizer Model
  atomizerCylinder: document.getElementById('atomizerCylinder'),
  atomizerNozzle: document.getElementById('atomizerNozzle'),
  atomizerMist: document.getElementById('atomizerMist'),
  btnSprayTest: document.getElementById('btnSprayTest'),
  laserBeam: document.getElementById('laserBeam'),
  sparkEmitter: document.getElementById('sparkEmitter'),
  engravedLiveText: document.getElementById('engravedLiveText'),
  engravedPerfumeTag: document.getElementById('engravedPerfumeTag'),
  atomizerColorPicker: document.getElementById('atomizerColorPicker'),
  inputLaserText: document.getElementById('inputLaserText'),
  charCount: document.getElementById('charCount'),
  fontButtons: document.querySelectorAll('.font-btn'),
  selectStudioPerfume: document.getElementById('selectStudioPerfume'),
  studioPriceDisplay: document.getElementById('studioPriceDisplay'),
  btnAddToCartCustom: document.getElementById('btnAddToCartCustom'),

  // Catalogs & Brand Filters
  perfumesGrid: document.getElementById('perfumesGrid'),
  verticeInHouseGrid: document.getElementById('verticeInHouseGrid'),
  verticeGuestGrid: document.getElementById('verticeGuestGrid'),
  guestBrandsBlock: document.getElementById('guestBrandsBlock'),
  apparelBrandFilterBar: document.getElementById('apparelBrandFilterBar'),
  filterPills: document.querySelectorAll('.filter-pill'),

  // Cart Drawer
  btnOpenCart: document.getElementById('btnOpenCart'),
  btnCloseCart: document.getElementById('btnCloseCart'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartDrawerBackdrop: document.getElementById('cartDrawerBackdrop'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartCountBadge: document.getElementById('cartCountBadge'),
  cartSubtitleSummary: document.getElementById('cartSubtitleSummary'),
  cartPerkText: document.getElementById('cartPerkText'),
  cartPerkFill: document.getElementById('cartPerkFill'),
  bundleBanner: document.getElementById('bundleBanner'),
  rowBundleDiscount: document.getElementById('rowBundleDiscount'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartTotal: document.getElementById('cartTotal'),
  inputPromoCode: document.getElementById('inputPromoCode'),
  btnApplyPromo: document.getElementById('btnApplyPromo'),
  discountTag: document.getElementById('discountTag'),
  discountAmount: document.getElementById('discountAmount'),
  btnGoToCheckout: document.getElementById('btnGoToCheckout'),

  // Modals
  quizModal: document.getElementById('quizModal'),
  btnOpenQuiz: document.getElementById('btnOpenQuiz'),
  btnCloseQuiz: document.getElementById('btnCloseQuiz'),
  quizContainer: document.getElementById('quizContainer'),
  footerLinkQuiz: document.getElementById('footerLinkQuiz'),

  productModal: document.getElementById('productModal'),
  btnCloseProductModal: document.getElementById('btnCloseProductModal'),
  modalProductContent: document.getElementById('modalProductContent'),

  checkoutModal: document.getElementById('checkoutModal'),
  btnCloseCheckout: document.getElementById('btnCloseCheckout'),
  checkoutForm: document.getElementById('checkoutForm'),
  checkoutFinalTotal: document.getElementById('checkoutFinalTotal'),

  orderSuccessModal: document.getElementById('orderSuccessModal'),
  btnCloseSuccessModal: document.getElementById('btnCloseSuccessModal'),
  successTicketBox: document.getElementById('successTicketBox'),
  btnWhatsappShare: document.getElementById('btnWhatsappShare'),

  toastContainer: document.getElementById('toastContainer'),
  footerLinkVertice: document.getElementById('footerLinkVertice'),

  // Visual Live Editor Elements
  liveEditorToolbar: document.getElementById('liveEditorToolbar'),
  btnLaunchVisualEditor: document.getElementById('btnLaunchVisualEditor'),
  btnSaveVisualEdits: document.getElementById('btnSaveVisualEdits'),
  btnResetVisualEdits: document.getElementById('btnResetVisualEdits'),
  btnExitVisualEditor: document.getElementById('btnExitVisualEditor'),

  // Back Office Elements
  adminAuthModal: document.getElementById('adminAuthModal'),
  formAdminAuth: document.getElementById('formAdminAuth'),
  inputAdminPin: document.getElementById('inputAdminPin'),
  btnCancelAdminAuth: document.getElementById('btnCancelAdminAuth'),
  adminAuthError: document.getElementById('adminAuthError'),
  adminModal: document.getElementById('adminModal'),
  btnCloseAdmin: document.getElementById('btnCloseAdmin'),
  adminToggleVertice: document.getElementById('adminToggleVertice'),
  adminVerticeStatusText: document.getElementById('adminVerticeStatusText'),
  btnToggleVerticeAction: document.getElementById('btnToggleVerticeAction'),
  adminTabs: document.querySelectorAll('.admin-tab'),
  adminTabPanes: document.querySelectorAll('.admin-tab-pane'),

  adminPerfumesTableBody: document.getElementById('adminPerfumesTableBody'),
  adminApparelTableBody: document.getElementById('adminApparelTableBody'),
  adminCouponsTableBody: document.getElementById('adminCouponsTableBody'),
  adminPerfumesCountTag: document.getElementById('adminPerfumesCountTag'),
  adminApparelCountTag: document.getElementById('adminApparelCountTag'),

  btnAdminAddPerfume: document.getElementById('btnAdminAddPerfume'),
  btnAdminAddApparel: document.getElementById('btnAdminAddApparel'),
  btnAdminAddCoupon: document.getElementById('btnAdminAddCoupon'),

  inputSettingComboDiscount: document.getElementById('inputSettingComboDiscount'),
  inputSettingFreeShipping: document.getElementById('inputSettingFreeShipping'),
  inputSettingTepicShipping: document.getElementById('inputSettingTepicShipping'),
  inputSettingNationalShipping: document.getElementById('inputSettingNationalShipping'),
  btnSavePromoSettings: document.getElementById('btnSavePromoSettings'),

  btnExportDataJs: document.getElementById('btnExportDataJs'),
  btnResetToDefaults: document.getElementById('btnResetToDefaults'),
  inputNewAdminPin: document.getElementById('inputNewAdminPin'),
  btnChangeAdminPin: document.getElementById('btnChangeAdminPin'),

  adminItemFormModal: document.getElementById('adminItemFormModal'),
  btnCloseItemForm: document.getElementById('btnCloseItemForm'),
  btnCancelItemForm: document.getElementById('btnCancelItemForm'),
  adminItemForm: document.getElementById('adminItemForm'),
  adminFormTitle: document.getElementById('adminFormTitle'),
  adminFormFields: document.getElementById('adminFormFields')
};

/* ===================================================================
   TOAST NOTIFICATION ENGINE
   =================================================================== */
function showToast(message, type = 'gold') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : '✦'}</span>
    <div>${message}</div>
  `;
  els.toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/* ===================================================================
   LAUNCH MODE & FEATURE TOGGLE (AURA NOIR vs DUAL STORE)
   =================================================================== */
function isVerticeEnabled() {
  // 1. Explicit setting saved in browser (localStorage has highest priority!)
  const savedSetting = localStorage.getItem('aura_enable_vertice');
  if (savedSetting !== null) {
    return savedSetting === 'true';
  }

  // 2. URL parameter preview (e.g., ?vertice=1 or ?vertice=preview)
  const params = new URLSearchParams(window.location.search);
  if (params.has('vertice')) {
    const val = params.get('vertice');
    if (val === '0' || val === 'false' || val === 'no' || val === 'off') return false;
    return true;
  }

  // 3. Master config in data.js
  return typeof APP_CONFIG !== 'undefined' && !!APP_CONFIG.ENABLE_VERTICE;
}

function setVerticeEnabledState(enabled) {
  localStorage.setItem('aura_enable_vertice', enabled ? 'true' : 'false');

  // Strip ?vertice query parameter from the browser URL address bar to avoid sticky state
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('vertice')) {
      url.searchParams.delete('vertice');
      const cleanUrl = url.pathname + (url.search ? url.search : '') + url.hash;
      window.history.replaceState({}, '', cleanUrl);
    }
  } catch (err) {}

  applyVerticeVisibility();
  sounds.playClick();

  if (enabled) {
    showToast('🚀 VÉRTICE ACTIVADO: Ahora la tienda dual está visible.', 'success');
  } else {
    showToast('🔒 VÉRTICE DESACTIVADO: La tienda ahora es 100% Aura Noir Decants.', 'info');
  }
}

function applyVerticeVisibility() {
  const enabled = isVerticeEnabled();
  document.body.classList.toggle('vertice-disabled', !enabled);

  if (!enabled && state.currentStore === 'vertice') {
    switchStore('aura');
  }

  // Update Admin toggle UI if available
  if (els.adminToggleVertice) {
    els.adminToggleVertice.checked = enabled;
  }
  if (els.btnToggleVerticeAction) {
    els.btnToggleVerticeAction.textContent = enabled ? 'Desactivar VÉRTICE' : 'Activar VÉRTICE';
    els.btnToggleVerticeAction.className = enabled 
      ? 'btn btn-sm btn-outline-silver' 
      : 'btn btn-sm btn-gold';
  }
  if (els.adminVerticeStatusText) {
    if (enabled) {
      els.adminVerticeStatusText.textContent = 'TIENDA DUAL ACTIVA (Aura Noir + VÉRTICE)';
      els.adminVerticeStatusText.style.color = '#38bdf8';
    } else {
      els.adminVerticeStatusText.textContent = 'SOLO AURA NOIR (Perfumería)';
      els.adminVerticeStatusText.style.color = '#10b981';
    }
  }

  renderDynamicNav();
}

/* ===================================================================
   STORE SWITCHING ENGINE (AURA NOIR <-> VÉRTICE)
   =================================================================== */
function switchStore(store) {
  if (store === 'vertice' && !isVerticeEnabled()) {
    showToast('VÉRTICE Concept Store estará disponible próximamente en el Drop Oficial.', 'info');
    return;
  }

  sounds.playClick();
  state.currentStore = store;

  if (store === 'aura') {
    document.body.classList.remove('theme-vertice');
    document.body.classList.add('theme-aura');
    els.btnSwitchAura.classList.add('active');
    els.btnSwitchAura.setAttribute('aria-selected', 'true');
    els.btnSwitchVertice.classList.remove('active');
    els.btnSwitchVertice.setAttribute('aria-selected', 'false');

    els.viewAura.classList.add('active');
    els.viewVertice.classList.remove('active');

    els.headerLogoAura.classList.remove('hidden');
    els.headerLogoVertice.classList.add('hidden');
  } else {
    document.body.classList.remove('theme-aura');
    document.body.classList.add('theme-vertice');
    els.btnSwitchVertice.classList.add('active');
    els.btnSwitchVertice.setAttribute('aria-selected', 'true');
    els.btnSwitchAura.classList.remove('active');
    els.btnSwitchAura.setAttribute('aria-selected', 'false');

    els.viewVertice.classList.add('active');
    els.viewAura.classList.remove('active');

    els.headerLogoVertice.classList.remove('hidden');
    els.headerLogoAura.classList.add('hidden');
  }

  renderDynamicNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDynamicNav() {
  if (state.currentStore === 'aura') {
    if (!isVerticeEnabled()) {
      els.dynamicNavList.innerHTML = `
        <li class="nav-item"><a href="#catalogoDecants">Decants 5ml</a></li>
        <li class="nav-item"><a href="#laserCustomizer">Estudio Láser</a></li>
        <li class="nav-item"><a href="#discoverySetsSection">Discovery Sets</a></li>
      `;
    } else {
      els.dynamicNavList.innerHTML = `
        <li class="nav-item"><a href="#catalogoDecants">Decants 5ml</a></li>
        <li class="nav-item"><a href="#laserCustomizer">Estudio Láser</a></li>
        <li class="nav-item"><a href="#conceptStoreSec">Concept Store</a></li>
      `;
    }
  } else {
    els.dynamicNavList.innerHTML = `
      <li class="nav-item"><a href="#verticeInHouseBlock">Drop 01</a></li>
      <li class="nav-item"><a href="#guestBrandsBlock">Marcas Invitadas</a></li>
      <li class="nav-item"><a href="#appMain">The Standard</a></li>
    `;
  }
}

/* ===================================================================
   3D LASER STUDIO ENGINE
   =================================================================== */
function initLaserStudio() {
  // Populate Color Options
  els.atomizerColorPicker.innerHTML = ATOMIZER_COLORS.map(c => `
    <button class="color-swatch-btn ${c.id === state.studio.color ? 'active' : ''}" data-color="${c.id}">
      <span class="swatch-circle" style="background-color: ${c.hex}; border-color: ${c.border}"></span>
      <span>${c.name}</span>
    </button>
  `).join('');

  els.atomizerColorPicker.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.onclick = () => {
      sounds.playClick();
      const colorId = btn.dataset.color;
      state.studio.color = colorId;
      els.atomizerColorPicker.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      els.atomizerCylinder.dataset.color = colorId;
      triggerLaserAnimation();
    };
  });

  // Populate Perfume Selector from dynamic state.perfumes
  populateStudioPerfumeSelect();

  els.selectStudioPerfume.onchange = (e) => {
    sounds.playClick();
    state.studio.perfumeId = e.target.value;
    updateStudioPerfumeDetails();
    triggerLaserAnimation();
  };

  // Font Picker
  els.fontButtons.forEach(btn => {
    btn.onclick = () => {
      sounds.playClick();
      els.fontButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const font = btn.dataset.font;
      state.studio.font = font;
      els.engravedLiveText.className = `engraved-text ${font}`;
      triggerLaserAnimation();
    };
  });

  // Text Input with Laser Feedback
  els.inputLaserText.oninput = (e) => {
    const val = e.target.value.toUpperCase();
    e.target.value = val;
    state.studio.text = val || 'AURA NOIR';
    els.engravedLiveText.textContent = state.studio.text;
    els.charCount.textContent = `${val.length}/18`;
    triggerLaserAnimation();
  };

  // Add Custom Engraved Decant To Cart
  els.btnAddToCartCustom.onclick = () => {
    const perfume = state.perfumes.find(p => p.id === state.studio.perfumeId) || state.perfumes[0];
    if (!perfume) return;

    triggerAtomizerSpray();
    addToCart({
      id: `custom-${perfume.id}-${Date.now()}`,
      refId: perfume.id,
      type: 'decant',
      name: `${perfume.name} (5ml)`,
      brand: perfume.brand,
      price: perfume.price5ml,
      image: perfume.image,
      engraving: {
        text: state.studio.text,
        color: state.studio.color,
        font: state.studio.font
      }
    });

    showToast(`Decant grabado "${state.studio.text}" agregado a tu bolsa`, 'gold');
    openCart();
  };

  // Interactive Spray on Nozzle or Test Button
  if (els.atomizerNozzle) {
    els.atomizerNozzle.onclick = () => triggerAtomizerSpray();
  }
  if (els.btnSprayTest) {
    els.btnSprayTest.onclick = () => triggerAtomizerSpray();
  }

  updateStudioPerfumeDetails();
}

let sprayTimeout;
function triggerAtomizerSpray() {
  sounds.playSpray();
  if (els.atomizerNozzle) {
    els.atomizerNozzle.classList.add('spraying');
  }
  if (els.atomizerMist) {
    els.atomizerMist.classList.remove('active');
    void els.atomizerMist.offsetWidth; // Force CSS reflow
    els.atomizerMist.classList.add('active');
  }
  clearTimeout(sprayTimeout);
  sprayTimeout = setTimeout(() => {
    if (els.atomizerNozzle) els.atomizerNozzle.classList.remove('spraying');
    if (els.atomizerMist) els.atomizerMist.classList.remove('active');
  }, 950);
}

function populateStudioPerfumeSelect() {
  els.selectStudioPerfume.innerHTML = state.perfumes.map(p => `
    <option value="${p.id}" ${p.id === state.studio.perfumeId ? 'selected' : ''}>
      ${p.brand} - ${p.name} ($${p.price5ml} MXN)
    </option>
  `).join('');
}

function updateStudioPerfumeDetails() {
  const perfume = state.perfumes.find(p => p.id === state.studio.perfumeId) || state.perfumes[0];
  if (perfume) {
    els.engravedPerfumeTag.textContent = perfume.name;
    els.studioPriceDisplay.textContent = `$${perfume.price5ml} MXN`;
  }
}

let laserTimeout;
function triggerLaserAnimation() {
  sounds.playLaser();
  els.laserBeam.classList.add('active');
  els.sparkEmitter.classList.add('active');

  clearTimeout(laserTimeout);
  laserTimeout = setTimeout(() => {
    els.laserBeam.classList.remove('active');
    els.sparkEmitter.classList.remove('active');
  }, 900);
}

/* ===================================================================
   MEDIA RENDERER (IMAGES & AUTOPLAY VIDEO SUPPORT)
   =================================================================== */
function renderMediaTag(url, className = '', altText = '') {
  if (!url) return '';
  const isVideo = url.startsWith('data:video/') ||
                  url.endsWith('.mp4') ||
                  url.endsWith('.webm') ||
                  url.endsWith('.mov') ||
                  url.includes('/video');
  if (isVideo) {
    return `<video src="${url}" class="${className}" autoplay loop muted playsinline></video>`;
  }
  return `<img src="${url}" alt="${altText}" class="${className}" loading="lazy">`;
}

/* ===================================================================
   PERFUMES CATALOG RENDERER
   =================================================================== */
function renderPerfumesCatalog() {
  const filtered = state.activeFilter === 'all'
    ? state.perfumes
    : state.perfumes.filter(p => p.category === state.activeFilter);

  els.perfumesGrid.innerHTML = filtered.map(p => {
    const savings = Math.max(0, (p.fullBottlePrice || (p.price5ml * 10)) - p.price5ml);
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-image-wrap">
          ${renderMediaTag(p.image, 'product-thumb', `${p.name} decant de lujo`)}
          <span class="product-badge">${p.badge || 'Decant 5ml'}</span>
          <div class="product-rating-pill">
            <span>★</span>
            <span>${p.rating || 5.0}</span>
            <small>(${p.reviewsCount || 24})</small>
          </div>
        </div>

        <div class="product-body">
          <span class="product-brand">${p.brand}</span>
          <h3 class="product-name">${p.name}</h3>

          <div class="product-notes-snippet">
            ${p.notes?.corazon ? p.notes.corazon.slice(0, 3).map(n => `<span class="note-tag">${n}</span>`).join('') : '<span class="note-tag">Extracto Puro</span>'}
          </div>

          <div class="saving-pill">Ahorras $${savings.toLocaleString()} MXN probando 5ml</div>

          <div class="product-price-box">
            <div>
              <span class="price-main">$${p.price5ml} MXN</span>
              <small style="display:block; font-size:0.65rem; color:var(--gold-bright);">+ Grabado Láser Gratis</small>
            </div>
            <div style="text-align:right;">
              <span class="price-bottle-ref">$${(p.fullBottlePrice || (p.price5ml * 10)).toLocaleString()} MXN</span>
              <small style="display:block; font-size:0.65rem; color:#888;">Botella oficial</small>
            </div>
          </div>

          <div class="product-actions">
            <button class="btn-card-details btn-view-perfume" data-id="${p.id}">Notas & Fit</button>
            <button class="btn-card-add btn-quick-add" data-id="${p.id}">Pedir 5ml</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach Event Listeners
  els.perfumesGrid.querySelectorAll('.btn-view-perfume').forEach(btn => {
    btn.onclick = () => openProductModal(btn.dataset.id);
  });

  els.perfumesGrid.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.onclick = () => {
      const p = state.perfumes.find(item => item.id === btn.dataset.id);
      if (!p) return;
      sounds.playSpray();
      addToCart({
        id: `decant-${p.id}-${Date.now()}`,
        refId: p.id,
        type: 'decant',
        name: `${p.name} (5ml)`,
        brand: p.brand,
        price: p.price5ml,
        image: p.image,
        engraving: {
          text: 'AURA NOIR',
          color: 'noir',
          font: 'font-serif'
        }
      });
      showToast(`Decant 5ml de ${p.name} agregado a tu bolsa`, 'gold');
      openCart();
    };
  });
}

function initCatalogFilters() {
  els.filterPills.forEach(pill => {
    pill.onclick = () => {
      sounds.playClick();
      els.filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.dataset.filter;
      renderPerfumesCatalog();
    };
  });
}

/* ===================================================================
   VÉRTICE CONCEPT STORE APPAREL RENDERER (IN-HOUSE & GUEST BRANDS)
   =================================================================== */
function renderApparelBrandFilterBar() {
  if (!els.apparelBrandFilterBar) return;
  // Extract all guest brands (brands other than VÉRTICE)
  const guestItems = state.apparel.filter(i => (i.brand || 'VÉRTICE').toUpperCase() !== 'VÉRTICE');
  const guestBrands = ['all', ...new Set(guestItems.map(i => i.brand || 'GUEST BRAND'))];

  els.apparelBrandFilterBar.innerHTML = guestBrands.map(brand => {
    const label = brand === 'all' ? 'Todas las Marcas Invitadas' : brand;
    const isActive = state.apparelActiveBrand === brand;
    return `
      <button class="brand-pill ${isActive ? 'active' : ''}" data-brand="${brand}">
        ${label}
      </button>
    `;
  }).join('');

  els.apparelBrandFilterBar.querySelectorAll('.brand-pill').forEach(btn => {
    btn.onclick = () => {
      sounds.playClick();
      state.apparelActiveBrand = btn.dataset.brand;
      renderApparelBrandFilterBar();
      renderVerticeCatalog();
    };
  });
}

function renderApparelCardHtml(item, isInHouse) {
  const selectedSize = state.verticeSelectedSizes[item.id] || item.sizes[0];
  const brandName = item.brand || 'VÉRTICE';
  const badgeText = item.badge || (isInHouse ? 'Drop 01 // In-House' : 'Edición Curada');
  const badgeClass = isInHouse ? 'inhouse-badge' : 'guest-badge';
  const brandTagText = isInHouse ? 'VÉRTICE // LÍNEA PROPIA' : `${brandName} // GUEST BRAND`;

  return `
    <article class="vertice-card" data-id="${item.id}">
      <div class="vertice-img-wrap">
        ${renderMediaTag(item.image, 'vertice-thumb', item.name)}
        <span class="product-badge ${badgeClass}">
          ${badgeText}
        </span>
      </div>

      <div class="vertice-body">
        <span class="vertice-brand-tag">${brandTagText}</span>
        <span class="vertice-stock-badge">⚡ Quedan ${item.stockRemaining} piezas</span>
        <h3 class="vertice-card-title">${item.name}</h3>

        <div class="size-selector-row">
          ${item.sizes.map(s => `
            <button class="btn-size-chip ${s === selectedSize ? 'selected' : ''}" data-product="${item.id}" data-size="${s}">
              ${s}
            </button>
          `).join('')}
        </div>

        <div class="vertice-bottom-row">
          <span class="vertice-price">$${item.price.toLocaleString()} MXN</span>
          <button class="btn btn-silver btn-add-vertice" data-id="${item.id}" style="padding:0.5rem 0.9rem; font-size:0.72rem;">
            <span>AGREGAR</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderVerticeCatalog() {
  const inHouseItems = state.apparel.filter(i => (i.brand || 'VÉRTICE').toUpperCase() === 'VÉRTICE');
  let guestItems = state.apparel.filter(i => (i.brand || 'VÉRTICE').toUpperCase() !== 'VÉRTICE');

  if (state.apparelActiveBrand !== 'all') {
    guestItems = guestItems.filter(i => i.brand === state.apparelActiveBrand);
  }

  // 1. Render Official In-House Collection (VÉRTICE Drop 01)
  if (els.verticeInHouseGrid) {
    els.verticeInHouseGrid.innerHTML = inHouseItems.map(item => renderApparelCardHtml(item, true)).join('');
  }

  // 2. Render Guest Brands & Curated Archive
  if (els.verticeGuestGrid) {
    if (guestItems.length === 0) {
      els.verticeGuestGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: var(--radius-md); border: 1px dashed rgba(255,255,255,0.1);">
          <p style="font-size: 0.95rem; color: #fff; margin-bottom: 0.3rem;">No hay prendas en este filtro de marca invitada.</p>
          <span style="font-size: 0.78rem;">Selecciona "Todas las Marcas Invitadas" para explorar el catálogo completo.</span>
        </div>
      `;
    } else {
      els.verticeGuestGrid.innerHTML = guestItems.map(item => renderApparelCardHtml(item, false)).join('');
    }
  }

  // Bind size picker listeners across both grids
  document.querySelectorAll('.btn-size-chip').forEach(chip => {
    chip.onclick = () => {
      sounds.playClick();
      const pId = chip.dataset.product;
      const size = chip.dataset.size;
      state.verticeSelectedSizes[pId] = size;
      renderVerticeCatalog();
    };
  });

  // Bind Add to Cart listeners across both grids
  document.querySelectorAll('.btn-add-vertice').forEach(btn => {
    btn.onclick = () => {
      sounds.playClick();
      const item = state.apparel.find(v => v.id === btn.dataset.id);
      if (!item) return;

      const size = state.verticeSelectedSizes[item.id] || item.sizes[0];
      addToCart({
        id: `vertice-${item.id}-${size}-${Date.now()}`,
        refId: item.id,
        type: 'vertice',
        name: `${item.name} (${item.brand || 'VÉRTICE'})`,
        size: size,
        price: item.price,
        image: item.image
      });

      showToast(`${item.name} (${item.brand || 'VÉRTICE'}) [Talla ${size}] agregado`, 'silver');
      openCart();
    };
  });
}

/* ===================================================================
   PRODUCT QUICK VIEW MODAL
   =================================================================== */
function openProductModal(perfumeId) {
  sounds.playClick();
  const p = state.perfumes.find(item => item.id === perfumeId) || state.perfumes[0];
  if (!p) return;

  const salidaNotes = p.notes?.salida ? p.notes.salida.join(' • ') : 'Notas cítricas y aromáticas puras';
  const corazonNotes = p.notes?.corazon ? p.notes.corazon.join(' • ') : 'Acordes de alta perfumería';
  const fondoNotes = p.notes?.fondo ? p.notes.fondo.join(' • ') : 'Maderas nobles y ámbar';

  els.modalProductContent.innerHTML = `
    <div>
      ${renderMediaTag(p.image, 'modal-p-img', p.name)}
    </div>
    <div>
      <span class="product-brand">${p.brand}</span>
      <h2 style="font-size:1.8rem; margin-bottom:0.4rem;">${p.name}</h2>
      <p style="font-size:0.88rem; margin-bottom:1rem;">${p.description || 'Fragancia de alta gama decantada en atomizador metálico con grabado láser gratuito.'}</p>

      <div class="modal-notes-grid">
        <div class="note-tier">
          <strong>Notas de Salida:</strong>
          <span>${salidaNotes}</span>
        </div>
        <div class="note-tier">
          <strong>Corazón del Perfume:</strong>
          <span>${corazonNotes}</span>
        </div>
        <div class="note-tier">
          <strong>Fondo & Longevidad:</strong>
          <span>${fondoNotes}</span>
        </div>
      </div>

      <div class="metrics-row">
        <div class="metric-pill">
          <small style="color:var(--text-subtle); display:block;">Longevidad</small>
          <strong>${p.metrics?.longevidad || '9/10 (8-10 hrs)'}</strong>
        </div>
        <div class="metric-pill">
          <small style="color:var(--text-subtle); display:block;">Estela</small>
          <strong>${p.metrics?.estela || 'Magnética'}</strong>
        </div>
      </div>

      <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:8px; padding:0.9rem; margin:1rem 0;">
        <strong style="color:var(--gold-bright); font-size:0.82rem; display:block;">👕 Concept Fit Pairing:</strong>
        <p style="font-size:0.8rem; margin:0.2rem 0 0.5rem;">${p.verticePairing?.description || 'Combínalo con prendas de algodón pesado para máxima presencia.'}</p>
        <span style="font-size:0.75rem; color:#55f3a0; font-weight:700;">¡Recibe -$${state.promotions.comboDiscount} MXN en tu bolsa al agregar una prenda!</span>
      </div>

      <div style="margin-top:1.5rem; display:flex; align-items:center; justify-content:space-between; gap:1rem;">
        <div>
          <span style="font-size:0.75rem; color:#888; text-transform:uppercase;">Decant 5ml (+70 sprays):</span>
          <h3 style="font-size:1.6rem; color:var(--gold-bright);">$${p.price5ml} MXN</h3>
        </div>
        <button class="btn btn-gold btn-large" id="btnModalAddToCart">
          <span>ORDENAR DECANT 5ML</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnModalAddToCart').onclick = () => {
    sounds.playSpray();
    addToCart({
      id: `decant-${p.id}-${Date.now()}`,
      refId: p.id,
      type: 'decant',
      name: `${p.name} (5ml)`,
      brand: p.brand,
      price: p.price5ml,
      image: p.image,
      engraving: {
        text: 'AURA NOIR',
        color: 'noir',
        font: 'font-serif'
      }
    });
    closeProductModal();
    showToast(`Decant ${p.name} agregado a tu bolsa`, 'gold');
    openCart();
  };

  els.productModal.classList.add('open');
}

function closeProductModal() {
  els.productModal.classList.remove('open');
}

/* ===================================================================
   OLFACTORY QUIZ
   =================================================================== */
function openQuiz() {
  sounds.playClick();
  state.quiz.step = 0;
  state.quiz.answers = {};
  renderQuizStep();
  els.quizModal.classList.add('open');
}

function closeQuiz() {
  els.quizModal.classList.remove('open');
}

function renderQuizStep() {
  const currentQ = QUIZ_QUESTIONS[state.quiz.step];
  if (!currentQ) {
    renderQuizResult();
    return;
  }

  const progressPercent = ((state.quiz.step + 1) / QUIZ_QUESTIONS.length) * 100;

  els.quizContainer.innerHTML = `
    <div class="quiz-step-progress">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
    </div>
    <span class="section-tag">PREGUNTA ${state.quiz.step + 1} DE ${QUIZ_QUESTIONS.length}</span>
    <h3 class="quiz-question-title">${currentQ.question}</h3>

    <div class="quiz-options-list">
      ${currentQ.options.map((opt, idx) => `
        <button class="quiz-opt-btn" data-idx="${idx}">
          <span class="quiz-opt-text">${opt.text}</span>
          ${opt.hint ? `<span class="quiz-opt-hint">${opt.hint}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;

  els.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.onclick = () => {
      sounds.playClick();
      const idx = parseInt(btn.dataset.idx, 10);
      const chosen = currentQ.options[idx];
      state.quiz.answers[currentQ.id] = chosen;
      state.quiz.step++;
      renderQuizStep();
    };
  });
}

function renderQuizResult() {
  sounds.playSuccess();
  const q1 = state.quiz.answers[1];
  let matchedPerfume = state.perfumes.find(p => p.category === (q1?.category || 'citas')) || state.perfumes[0];
  const verticeActive = isVerticeEnabled();

  if (!verticeActive) {
    // Pure Aura Noir Perfume Experience
    els.quizContainer.innerHTML = `
      <div class="quiz-result-card">
        <span class="section-tag">TU MATCH OLFATIVO IDEAL</span>
        <h2 style="font-size:1.8rem; margin:0.25rem 0 0.5rem;" class="text-gold-gradient">${matchedPerfume.name}</h2>
        <p style="font-size:0.88rem; max-width:440px; margin:0 auto;">${matchedPerfume.description}</p>
        
        ${renderMediaTag(matchedPerfume.image, 'quiz-result-img', matchedPerfume.name)}

        <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:10px; padding:1.2rem; margin:1.5rem 0; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <strong style="color:#fff; font-size:0.9rem;">Presentación Monolith (5ml Decant):</strong>
            <span style="font-size:1.2rem; font-weight:700; color:var(--gold-bright);">
              $${matchedPerfume.price5ml} MXN
            </span>
          </div>
          <p style="font-size:0.82rem; margin:0; color:#aaa;">
            Incluye atomizador de aluminio hermético con grabado láser personalizado gratuito.
          </p>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          <button class="btn btn-gold btn-large" id="btnAddOnlyPerfumeQuiz">
            <span>AGREGAR DECANT A LA BOLSA ($${matchedPerfume.price5ml} MXN)</span>
            <span>🛍️</span>
          </button>
          <button class="btn btn-outline-gold" id="btnGoToStudioFromQuiz">
            <span>PERSONALIZAR MI GRABADO LÁSER</span>
            <span>✨</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnAddOnlyPerfumeQuiz').onclick = () => {
      sounds.playSpray();
      addToCart({
        id: `decant-${matchedPerfume.id}-${Date.now()}`,
        refId: matchedPerfume.id,
        type: 'decant',
        name: `${matchedPerfume.name} (5ml)`,
        brand: matchedPerfume.brand,
        price: matchedPerfume.price5ml,
        image: matchedPerfume.image,
        engraving: { text: 'AURA NOIR', color: 'noir', font: 'font-serif' }
      });
      closeQuiz();
      showToast(`Decant 5ml de ${matchedPerfume.name} agregado a tu bolsa`, 'gold');
      openCart();
    };

    document.getElementById('btnGoToStudioFromQuiz').onclick = () => {
      closeQuiz();
      state.studio.perfume = matchedPerfume.id;
      if (els.selectStudioPerfume) els.selectStudioPerfume.value = matchedPerfume.id;
      updateStudioPerfumeDetails();
      const studioSec = document.getElementById('laserCustomizer');
      if (studioSec) studioSec.scrollIntoView({ behavior: 'smooth' });
    };

    return;
  }

  // Dual Store Combo Experience (When VÉRTICE is enabled)
  const matchedVertice = state.apparel.find(v => v.id === (state.quiz.answers[2]?.verticePair || 'v-hoodie-structural')) || state.apparel[0];
  const comboDiscount = state.promotions.comboDiscount || 200;

  els.quizContainer.innerHTML = `
    <div class="quiz-result-card">
      <span class="section-tag">TU MATCH OLFATIVO IDEAL</span>
      <h2 style="font-size:1.8rem; margin:0.25rem 0 0.5rem;" class="text-gold-gradient">${matchedPerfume.name}</h2>
      <p style="font-size:0.88rem; max-width:440px; margin:0 auto;">${matchedPerfume.description}</p>
      
      ${renderMediaTag(matchedPerfume.image, 'quiz-result-img', matchedPerfume.name)}

      <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:10px; padding:1.2rem; margin:1.5rem 0; text-align:left;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <strong style="color:#fff; font-size:0.9rem;">Combo Fit Recomendado:</strong>
          <span style="background:#10b981; color:#000; font-size:0.65rem; font-weight:800; padding:0.2rem 0.5rem; border-radius:3px;">
            AHORRO -$${comboDiscount} MXN
          </span>
        </div>
        <p style="font-size:0.82rem; margin-bottom:0.5rem;">
          Decant 5ml de <strong>${matchedPerfume.name}</strong> + <strong>${matchedVertice.name}</strong> (${matchedVertice.brand || 'VÉRTICE'})
        </p>
        <span style="font-size:1.15rem; font-weight:700; color:var(--gold-bright);">
          $${(matchedPerfume.price5ml + matchedVertice.price - comboDiscount).toLocaleString()} MXN
        </span>
        <span style="font-size:0.8rem; color:#888; text-decoration:line-through; margin-left:0.5rem;">
          $${(matchedPerfume.price5ml + matchedVertice.price).toLocaleString()} MXN
        </span>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        <button class="btn btn-gold btn-large" id="btnAddQuizCombo">
          <span>AGREGAR EL COMBO RECOMENDADO (-$${comboDiscount} MXN)</span>
          <span>🛍️</span>
        </button>
        <button class="btn btn-outline-gold" id="btnOnlyPerfumeQuiz">
          <span>Solo llevar el Decant 5ml ($${matchedPerfume.price5ml} MXN)</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnAddQuizCombo').onclick = () => {
    sounds.playSpray();
    addToCart({
      id: `decant-${matchedPerfume.id}-${Date.now()}`,
      refId: matchedPerfume.id,
      type: 'decant',
      name: `${matchedPerfume.name} (5ml)`,
      brand: matchedPerfume.brand,
      price: matchedPerfume.price5ml,
      image: matchedPerfume.image,
      engraving: { text: 'AURA NOIR', color: 'noir', font: 'font-serif' }
    });

    addToCart({
      id: `vertice-${matchedVertice.id}-${Date.now()}`,
      refId: matchedVertice.id,
      type: 'vertice',
      name: `${matchedVertice.name} (${matchedVertice.brand || 'VÉRTICE'})`,
      size: matchedVertice.sizes[0],
      price: matchedVertice.price,
      image: matchedVertice.image
    });

    closeQuiz();
    showToast(`¡Combo agregado con -$${comboDiscount} MXN de descuento!`, 'success');
    openCart();
  };

  document.getElementById('btnOnlyPerfumeQuiz').onclick = () => {
    sounds.playSpray();
    addToCart({
      id: `decant-${matchedPerfume.id}-${Date.now()}`,
      refId: matchedPerfume.id,
      type: 'decant',
      name: `${matchedPerfume.name} (5ml)`,
      brand: matchedPerfume.brand,
      price: matchedPerfume.price5ml,
      image: matchedPerfume.image,
      engraving: { text: 'AURA NOIR', color: 'noir', font: 'font-serif' }
    });
    closeQuiz();
    showToast(`Decant 5ml de ${matchedPerfume.name} agregado a tu bolsa`, 'gold');
    openCart();
  };
}

/* ===================================================================
   CART ENGINE (DYNAMIC PROMOTIONS & PERSISTENCE)
   =================================================================== */
function addToCart(item) {
  const existingIndex = state.cart.findIndex(i =>
    i.refId === item.refId &&
    i.type === item.type &&
    i.size === item.size &&
    (!i.engraving || i.engraving.text === item.engraving?.text)
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += (item.qty || 1);
  } else {
    state.cart.push({ ...item, qty: item.qty || 1 });
  }

  saveCart();
  renderCart();
}

function updateCartQty(index, delta) {
  sounds.playClick();
  if (state.cart[index]) {
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  sounds.playClick();
  state.cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('aura_noir_cart', JSON.stringify(state.cart));
}

function renderCart() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  els.cartCountBadge.textContent = totalCount;
  els.cartSubtitleSummary.textContent = `${totalCount} ${totalCount === 1 ? 'artículo' : 'artículos'}`;

  const freeShippingThreshold = state.promotions.freeShippingMin || 600;
  const comboDiscountValue = state.promotions.comboDiscount || 200;

  if (state.cart.length === 0) {
    els.cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-icon">🛍️</div>
        <h4 style="margin-bottom:0.5rem; color:#fff;">Tu bolsa está vacía</h4>
        <p style="font-size:0.85rem; margin-bottom:1.5rem;">Descubre decants de lujo con grabado láser gratis o piezas del Concept Store.</p>
        <button class="btn btn-outline-gold" id="btnExploreFromCart">EXPLORAR CATÁLOGO</button>
      </div>
    `;
    const expBtn = document.getElementById('btnExploreFromCart');
    if (expBtn) expBtn.onclick = () => { closeCart(); window.location.href = '#catalogoDecants'; };

    els.bundleBanner.classList.add('hidden');
    els.rowBundleDiscount.classList.add('hidden');
    els.cartSubtotal.textContent = '$0 MXN';
    els.cartTotal.textContent = '$0 MXN';
    els.cartPerkFill.style.width = '0%';
    els.cartPerkText.textContent = `Agrega $${freeShippingThreshold} MXN para ENVÍO EXPRESS GRATIS en Tepic`;
    return;
  }

  // Render items
  els.cartItemsList.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item">
      ${renderMediaTag(item.image, 'cart-item-img', item.name)}
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.size ? `<small style="color:#aaa; font-size:0.75rem;">Talla: <strong>${item.size}</strong></small>` : ''}
        ${item.engraving ? `
          <div class="cart-item-custom-laser">
            ✒️ Grabado: <strong>${item.engraving.text}</strong> (${item.engraving.color})
          </div>
        ` : ''}
        <div class="cart-item-price">$${(item.price * item.qty).toLocaleString()} MXN</div>

        <div class="cart-item-ctrls">
          <button class="qty-btn" onclick="window.appUpdateCartQty(${idx}, -1)">-</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="window.appUpdateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="window.appRemoveCartItem(${idx})">&times;</button>
    </div>
  `).join('');

  // Calculate Subtotal & Bundle discounts
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const hasDecant = state.cart.some(item => item.type === 'decant' || item.type === 'discovery');
  const hasVertice = state.cart.some(item => item.type === 'vertice');
  const bundleDiscount = (hasDecant && hasVertice) ? comboDiscountValue : 0;

  if (bundleDiscount > 0) {
    els.bundleBanner.classList.remove('hidden');
    els.bundleBanner.innerHTML = `<span>🎉 <strong>¡Combo Élite Activado!</strong> Descuento cruzado de -$${comboDiscountValue} MXN aplicado por combinar Decant + Prenda.</span>`;
    els.rowBundleDiscount.classList.remove('hidden');
    document.getElementById('cartBundleDiscount').textContent = `-$${comboDiscountValue} MXN`;
  } else {
    els.bundleBanner.classList.add('hidden');
    els.rowBundleDiscount.classList.add('hidden');
  }

  // Free shipping perk bar
  const progress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  els.cartPerkFill.style.width = `${progress}%`;

  if (subtotal >= freeShippingThreshold) {
    els.cartPerkText.innerHTML = '✨ ¡Felicidades! Tienes <strong>ENVÍO EXPRESS GRATIS</strong> en Tepic';
  } else {
    const diff = freeShippingThreshold - subtotal;
    els.cartPerkText.innerHTML = `Agrega <strong>$${diff.toLocaleString()} MXN</strong> para <strong>ENVÍO GRATIS</strong> en Tepic`;
  }

  // Coupon handling
  const totalDiscount = bundleDiscount + state.promoDiscount;
  const finalTotal = Math.max(0, subtotal - totalDiscount);

  els.cartSubtotal.textContent = `$${subtotal.toLocaleString()} MXN`;
  els.cartTotal.textContent = `$${finalTotal.toLocaleString()} MXN`;
}

window.appUpdateCartQty = updateCartQty;
window.appRemoveCartItem = removeCartItem;

function openCart() {
  sounds.playClick();
  els.cartDrawer.classList.add('open');
  els.cartDrawerBackdrop.classList.add('open');
}

function closeCart() {
  els.cartDrawer.classList.remove('open');
  els.cartDrawerBackdrop.classList.remove('open');
}

/* Promo Code Engine */
function initPromoCodeEngine() {
  els.btnApplyPromo.onclick = () => {
    sounds.playClick();
    const code = els.inputPromoCode.value.trim().toUpperCase();
    if (!code) return;

    // Check dynamic coupons
    const match = state.promotions.coupons.find(c => c.code.toUpperCase() === code);
    if (match) {
      state.promoDiscount = match.discount;
      state.promoCode = match.code;
      showToast(`¡Cupón ${match.code} aplicado! -$${match.discount} MXN de descuento`, 'success');
      els.discountTag.classList.remove('hidden');
      els.discountAmount.textContent = `-$${match.discount} MXN`;
    } else {
      showToast('Código no válido o expirado', 'gold');
      return;
    }

    renderCart();
  };
}

/* ===================================================================
   CHECKOUT SIMULATOR & WHATSAPP
   =================================================================== */
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Tu bolsa está vacía', 'gold');
    return;
  }
  sounds.playClick();
  closeCart();
  updateCheckoutTotal();
  els.checkoutModal.classList.add('open');
}

function closeCheckout() {
  els.checkoutModal.classList.remove('open');
}

function updateCheckoutTotal() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const hasDecant = state.cart.some(item => item.type === 'decant' || item.type === 'discovery');
  const hasVertice = state.cart.some(item => item.type === 'vertice');
  const bundleDiscount = (hasDecant && hasVertice) ? (state.promotions.comboDiscount || 200) : 0;
  const discounts = bundleDiscount + state.promoDiscount;

  let deliveryCost = 0;
  const freeThreshold = state.promotions.freeShippingMin || 600;

  if (state.deliveryMethod === 'tepic-express') {
    deliveryCost = subtotal >= freeThreshold ? 0 : (state.promotions.tepicShippingCost || 50);
  } else if (state.deliveryMethod === 'national') {
    deliveryCost = state.promotions.nationalShippingCost || 149;
  } else {
    deliveryCost = 0; // Pick-up
  }

  state.deliveryCost = deliveryCost;
  const total = Math.max(0, subtotal - discounts) + deliveryCost;
  els.checkoutFinalTotal.textContent = `$${total.toLocaleString()} MXN`;
}

function initCheckoutListeners() {
  const deliveryRadios = els.checkoutForm.querySelectorAll('input[name="deliveryMethod"]');
  deliveryRadios.forEach(radio => {
    radio.onchange = (e) => {
      sounds.playClick();
      state.deliveryMethod = e.target.value;
      updateCheckoutTotal();
    };
  });

  els.checkoutForm.onsubmit = (e) => {
    e.preventDefault();
    sounds.playSuccess();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const email = document.getElementById('custEmail').value.trim();
    const city = document.getElementById('custCity').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const payment = els.checkoutForm.querySelector('input[name="paymentOption"]:checked').value;

    const orderId = `AN-${Math.floor(10000 + Math.random() * 90000)}`;
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const hasDecant = state.cart.some(item => item.type === 'decant' || item.type === 'discovery');
    const hasVertice = state.cart.some(item => item.type === 'vertice');
    const bundleDiscount = (hasDecant && hasVertice) ? (state.promotions.comboDiscount || 200) : 0;
    const total = Math.max(0, subtotal - bundleDiscount - state.promoDiscount) + state.deliveryCost;

    let deliveryLabel = 'Entrega Express Tepic';
    if (state.deliveryMethod === 'tepic-pickup') deliveryLabel = 'Pick-up Ciudad del Valle / Plaza Fórum';
    if (state.deliveryMethod === 'national') deliveryLabel = 'Envío Nacional México';

    let payLabel = 'Mercado Pago / Tarjeta';
    if (payment === 'spei') payLabel = 'Transferencia SPEI';
    if (payment === 'cash') payLabel = 'Efectivo contra-entrega (Tepic)';

    els.successTicketBox.innerHTML = `
      <div class="ticket-header">
        <strong>Orden: ${orderId}</strong>
        <span style="color:var(--gold-bright);">RECIBIDO</span>
      </div>

      <div class="ticket-items-list">
        ${state.cart.map(item => `
          <div class="ticket-item-row">
            <div>
              <span>${item.qty}x ${item.name}</span>
              ${item.engraving ? `<small>✒️ Láser: "${item.engraving.text}"</small>` : ''}
              ${item.size ? `<small>Talla: ${item.size}</small>` : ''}
            </div>
            <span>$${(item.price * item.qty).toLocaleString()} MXN</span>
          </div>
        `).join('')}
      </div>

      <div style="font-size:0.75rem; color:#888; margin-bottom:0.75rem;">
        <div>📍 <strong>Entrega:</strong> ${deliveryLabel} ($${state.deliveryCost} MXN)</div>
        <div>👤 <strong>Cliente:</strong> ${name} (${phone})</div>
        <div>🏠 <strong>Dirección:</strong> ${address}, ${city}</div>
        <div>💳 <strong>Método de Pago:</strong> ${payLabel}</div>
      </div>

      <div class="ticket-total-row">
        <span>TOTAL OFICIAL:</span>
        <span style="color:var(--gold-bright); font-size:1.15rem;">$${total.toLocaleString()} MXN</span>
      </div>
    `;

    const orderItemsSummary = state.cart.map(item => {
      let desc = `- ${item.qty}x ${item.name} ($${item.price * item.qty} MXN)`;
      if (item.engraving) desc += ` [Láser: "${item.engraving.text}"]`;
      if (item.size) desc += ` [Talla: ${item.size}]`;
      return desc;
    }).join('\n');

    const whatsappMessage = encodeURIComponent(
      `⚜️ *NUEVO PEDIDO AURA NOIR & CONCEPT STORE*\n\n` +
      `*Orden:* #${orderId}\n` +
      `*Cliente:* ${name}\n` +
      `*Teléfono:* ${phone}\n` +
      `*Ciudad / Dirección:* ${address}, ${city}\n` +
      `*Método de Entrega:* ${deliveryLabel}\n` +
      `*Método de Pago:* ${payLabel}\n\n` +
      `*Artículos:*\n${orderItemsSummary}\n\n` +
      (bundleDiscount > 0 ? `🎉 *Descuento Combo Fit:* -$${bundleDiscount} MXN\n` : '') +
      (state.promoDiscount > 0 ? `🏷️ *Cupón (${state.promoCode}):* -$${state.promoDiscount} MXN\n` : '') +
      `📦 *Costo de Envío:* $${state.deliveryCost} MXN\n` +
      `💰 *TOTAL A PAGAR:* $${total.toLocaleString()} MXN\n\n` +
      `Favor de confirmar recepción y detalles de preparación. ¡Gracias!`
    );

    els.btnWhatsappShare.href = `https://wa.me/523110000000?text=${whatsappMessage}`;

    state.cart = [];
    state.promoDiscount = 0;
    state.promoCode = null;
    saveCart();
    renderCart();

    closeCheckout();
    els.orderSuccessModal.classList.add('open');
  };
}

/* ===================================================================
   LIVE VISUAL WYSIWYG EDITOR SYSTEM (UNIVERSAL)
   =================================================================== */
let isVisualEditorActive = false;

function getDomPath(el) {
  if (el.id) return `#${el.id}`;
  const stack = [];
  let curr = el;
  while (curr && curr.parentNode && curr.tagName !== 'BODY' && curr.tagName !== 'HTML') {
    let sibIndex = 0;
    let sibCount = 0;
    const parent = curr.parentNode;
    for (let i = 0; i < parent.children.length; i++) {
      const sib = parent.children[i];
      if (sib.tagName === curr.tagName) {
        if (sib === curr) sibIndex = sibCount;
        sibCount++;
      }
    }
    const name = curr.tagName.toLowerCase();
    stack.unshift(sibCount > 1 ? `${name}:nth-of-type(${sibIndex + 1})` : name);
    curr = parent;
  }
  return stack.join(' > ');
}

function isEligibleForEditing(el) {
  if (!el || el.nodeType !== 1) return false;
  // Ignore admin modals, form inputs, scripts, and editor toolbar
  if (el.closest('#liveEditorToolbar') || el.closest('.modal-backdrop') || el.closest('.toast-container')) {
    return false;
  }
  const tag = el.tagName.toUpperCase();
  if (['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'SVG', 'PATH', 'IMG', 'VIDEO', 'AUDIO'].includes(tag)) {
    return false;
  }

  // Check direct non-whitespace text
  const text = (el.textContent || '').trim();
  if (!text) return false;

  // Leaf elements or text containers
  if (el.children.length === 0) return true;
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'LI', 'SPAN', 'STRONG', 'B', 'EM', 'SMALL', 'A', 'BUTTON', 'LABEL', 'BLOCKQUOTE'].includes(tag)) {
    return true;
  }
  return false;
}

function setupEditableDOM() {
  const savedTexts = JSON.parse(localStorage.getItem('aura_site_texts') || '{}');

  // Query all candidates in body
  const allElements = document.querySelectorAll(
    '#appMain *, #siteHeader *, #announcementBar *, #siteFooter *, .discovery-section *, .catalog-section *, .concept-bridge-section *, .testimonials-section *, .laser-studio-section *'
  );

  allElements.forEach(el => {
    if (!isEligibleForEditing(el)) return;

    // Generate or read persistent path key
    let key = el.dataset.editable;
    if (!key) {
      key = getDomPath(el);
      el.dataset.editable = key;
    }

    // Apply saved text if available
    if (savedTexts[key] !== undefined) {
      el.innerHTML = savedTexts[key];
    }
  });
}

function toggleVisualEditor(active) {
  isVisualEditorActive = active;
  document.body.classList.toggle('visual-editor-active', active);

  // Refresh editable elements so dynamic cards and all blocks are captured
  setupEditableDOM();

  const editableElements = document.querySelectorAll('[data-editable]');
  editableElements.forEach(el => {
    if (active) {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'false');
    } else {
      el.removeAttribute('contenteditable');
      el.removeAttribute('spellcheck');
    }
  });

  if (active) {
    if (els.adminModal) els.adminModal.classList.remove('open');
    showToast(`✏️ Editor Visual Activado: ${editableElements.length} elementos listos para editar.`, 'gold');
    sounds.playClick();
  } else {
    showToast('Modo de edición finalizado.', 'info');
  }
}

function saveVisualEdits() {
  const texts = {};
  document.querySelectorAll('[data-editable]').forEach(el => {
    const key = el.dataset.editable;
    if (key) {
      texts[key] = el.innerHTML;
    }
  });

  localStorage.setItem('aura_site_texts', JSON.stringify(texts));
  sounds.playLaser();
  showToast(`💾 ¡Guardado! Se actualizaron ${Object.keys(texts).length} elementos de la tienda.`, 'success');
}

function resetVisualEdits() {
  if (confirm('¿Deseas restablecer todos los textos originales de la página a sus valores iniciales?')) {
    localStorage.removeItem('aura_site_texts');
    showToast('Textos restablecidos a los originales de fábrica.', 'info');
    setTimeout(() => window.location.reload(), 400);
  }
}

// Global click interceptor in editor mode:
// Prevents links/buttons from triggering or jumping when user wants to edit their text
document.addEventListener('click', (e) => {
  if (!isVisualEditorActive) return;
  if (e.target.closest('#liveEditorToolbar') || e.target.closest('.modal-card')) return;

  const editable = e.target.closest('[data-editable]');
  if (editable) {
    // If inside a button or anchor link, prevent action so user can type!
    if (editable.tagName === 'A' || editable.tagName === 'BUTTON' || editable.closest('a') || editable.closest('button')) {
      e.preventDefault();
      editable.focus();
    }
  }
}, true);

/* ===================================================================
   BACK OFFICE & ADMIN CONTROL PANEL ENGINE
   =================================================================== */
function initBackOffice() {
  // Tab Switching
  els.adminTabs.forEach(tab => {
    tab.onclick = () => {
      sounds.playClick();
      els.adminTabs.forEach(t => t.classList.remove('active'));
      els.adminTabPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      document.getElementById(targetId).classList.add('active');
      state.admin.activeTab = targetId;
    };
  });

  // Open & Close Admin Modal
  const openAdmin = () => {
    sounds.playClick();
    renderAdminTables();
    els.adminModal.classList.add('open');
  };

  const closeAdmin = () => {
    els.adminModal.classList.remove('open');
    if (window.location.hash === '#admin' || window.location.hash === '#backoffice') {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  };

  // Request Admin Access (Protected by PIN)
  window.appRequestAdminAccess = () => {
    if (sessionStorage.getItem('aura_admin_auth') === 'true') {
      openAdmin();
    } else {
      if (els.adminAuthModal) {
        els.adminAuthModal.classList.add('open');
        if (els.inputAdminPin) {
          els.inputAdminPin.value = '';
          setTimeout(() => els.inputAdminPin.focus(), 150);
        }
        if (els.adminAuthError) els.adminAuthError.style.display = 'none';
      }
    }
  };

  // PIN Authentication Form Handlers
  if (els.formAdminAuth) {
    els.formAdminAuth.onsubmit = (e) => {
      e.preventDefault();
      const enteredPin = (els.inputAdminPin.value || '').trim();
      const currentPin = localStorage.getItem('aura_admin_pin') || '2026';
      if (enteredPin === currentPin) {
        sessionStorage.setItem('aura_admin_auth', 'true');
        els.adminAuthModal.classList.remove('open');
        openAdmin();
        showToast('🔓 Acceso concedido al Back Office', 'success');
      } else {
        if (els.adminAuthError) {
          els.adminAuthError.style.display = 'block';
          els.inputAdminPin.focus();
          els.inputAdminPin.select();
        }
        sounds.playClick();
      }
    };
  }

  if (els.btnCancelAdminAuth) {
    els.btnCancelAdminAuth.onclick = () => {
      els.adminAuthModal.classList.remove('open');
      if (window.location.hash === '#admin' || window.location.hash === '#backoffice') {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    };
  }

  // URL Hash Watcher: #admin or #backoffice or ?admin
  const checkAdminAccessUrl = () => {
    const hash = (window.location.hash || '').toLowerCase();
    const search = new URLSearchParams(window.location.search);
    if (hash === '#admin' || hash === '#backoffice' || search.has('admin')) {
      window.appRequestAdminAccess();
    }
  };

  window.addEventListener('hashchange', checkAdminAccessUrl);
  checkAdminAccessUrl();

  // Stealth Triple Click on © Copyright Symbol in Footer
  let secretAdminClicks = 0;
  let secretAdminTimer = null;
  document.querySelectorAll('.secret-admin-trigger').forEach(trigger => {
    trigger.style.cursor = 'default';
    trigger.onclick = () => {
      secretAdminClicks++;
      clearTimeout(secretAdminTimer);
      if (secretAdminClicks >= 3) {
        secretAdminClicks = 0;
        window.appRequestAdminAccess();
      } else {
        secretAdminTimer = setTimeout(() => { secretAdminClicks = 0; }, 1200);
      }
    };
  });

  if (els.btnCloseAdmin) els.btnCloseAdmin.onclick = closeAdmin;

  // Live Visual Editor Launch & Controls
  if (els.btnLaunchVisualEditor) {
    els.btnLaunchVisualEditor.onclick = () => {
      toggleVisualEditor(true);
    };
  }
  if (els.btnSaveVisualEdits) els.btnSaveVisualEdits.onclick = saveVisualEdits;
  if (els.btnResetVisualEdits) els.btnResetVisualEdits.onclick = resetVisualEdits;
  if (els.btnExitVisualEditor) els.btnExitVisualEditor.onclick = () => toggleVisualEditor(false);

  // Change Admin PIN Handler
  if (els.btnChangeAdminPin && els.inputNewAdminPin) {
    els.btnChangeAdminPin.onclick = () => {
      const newPin = els.inputNewAdminPin.value.trim();
      if (!newPin || newPin.length < 4) {
        showToast('El PIN debe tener al menos 4 caracteres', 'warning');
        return;
      }
      localStorage.setItem('aura_admin_pin', newPin);
      els.inputNewAdminPin.value = '';
      showToast(`PIN Maestro actualizado correctamente a: ${newPin}`, 'success');
    };
  }

  // Launch Mode Toggle (Vértice Feature Flag)
  if (els.adminToggleVertice) {
    els.adminToggleVertice.checked = isVerticeEnabled();
    els.adminToggleVertice.onchange = (e) => {
      setVerticeEnabledState(e.target.checked);
    };
  }

  if (els.btnToggleVerticeAction) {
    els.btnToggleVerticeAction.onclick = (e) => {
      e.preventDefault();
      const current = isVerticeEnabled();
      setVerticeEnabledState(!current);
    };
  }

  // Add Item Triggers
  els.btnAdminAddPerfume.onclick = () => openItemForm('perfume', null);
  els.btnAdminAddApparel.onclick = () => openItemForm('apparel', null);
  els.btnAdminAddCoupon.onclick = () => openItemForm('coupon', null);

  // Save Promo Settings
  els.btnSavePromoSettings.onclick = () => {
    sounds.playClick();
    state.promotions.comboDiscount = parseInt(els.inputSettingComboDiscount.value, 10) || 200;
    state.promotions.freeShippingMin = parseInt(els.inputSettingFreeShipping.value, 10) || 600;
    state.promotions.tepicShippingCost = parseInt(els.inputSettingTepicShipping.value, 10) || 50;
    state.promotions.nationalShippingCost = parseInt(els.inputSettingNationalShipping.value, 10) || 149;

    savePromotions();
    renderCart();
    showToast('Reglas de promociones y envíos actualizadas', 'success');
  };

  // Export data.js
  els.btnExportDataJs.onclick = exportDataJsFile;

  // Reset to Factory Defaults
  els.btnResetToDefaults.onclick = () => {
    if (confirm('¿Estás seguro de que deseas restablecer todos los productos y promociones a sus valores iniciales de fábrica?')) {
      sounds.playClick();
      localStorage.removeItem('aura_perfumes_data');
      localStorage.removeItem('aura_apparel_data');
      localStorage.removeItem('aura_promotions_data');

      state.perfumes = [...PERFUMES_DATA];
      state.apparel = [...VERTICE_DATA];
      state.promotions = { ...DEFAULT_PROMOTIONS };

      renderAdminTables();
      renderPerfumesCatalog();
      renderApparelBrandFilterBar();
      renderVerticeCatalog();
      populateStudioPerfumeSelect();
      updateStudioPerfumeDetails();
      renderCart();

      showToast('Se han restaurado los datos de fábrica correctamente', 'success');
    }
  };

  // Sub-modal Close Listeners
  els.btnCloseItemForm.onclick = closeItemForm;
  els.btnCancelItemForm.onclick = closeItemForm;
  els.adminItemForm.onsubmit = handleItemFormSubmit;
}

function renderAdminTables() {
  // 1. Perfumes Table
  els.adminPerfumesCountTag.textContent = `Catálogo de Decants (${state.perfumes.length})`;
  els.adminPerfumesTableBody.innerHTML = state.perfumes.map((p, idx) => `
    <tr>
      <td>${renderMediaTag(p.image, 'admin-thumb-cell', p.name)}</td>
      <td><strong>${p.name}</strong><br><small style="color:#888;">${p.categoryLabel || p.category}</small></td>
      <td>${p.brand}</td>
      <td style="color:var(--gold-bright); font-weight:700;">$${p.price5ml} MXN</td>
      <td>$${(p.fullBottlePrice || 0).toLocaleString()} MXN</td>
      <td><span class="product-badge" style="position:static;">${p.badge || 'Decant'}</span></td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-admin-btn" onclick="window.appEditPerfume('${p.id}')">Editar</button>
          <button class="btn-admin-btn btn-admin-del" onclick="window.appDeletePerfume('${p.id}')">&times;</button>
        </div>
      </td>
    </tr>
  `).join('');

  // 2. Apparel Table
  const brands = [...new Set(state.apparel.map(i => i.brand || 'VÉRTICE'))];
  els.adminApparelCountTag.textContent = `Prendas (${state.apparel.length}) • Marcas: ${brands.join(', ')}`;
  els.adminApparelTableBody.innerHTML = state.apparel.map((item, idx) => `
    <tr>
      <td>${renderMediaTag(item.image, 'admin-thumb-cell', item.name)}</td>
      <td><strong>${item.name}</strong></td>
      <td><span class="vertice-brand-tag" style="margin:0;">${item.brand || 'VÉRTICE'}</span></td>
      <td style="color:#fff; font-weight:700;">$${item.price.toLocaleString()} MXN</td>
      <td>${item.stockRemaining} pzs</td>
      <td>${item.sizes.join(', ')}</td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-admin-btn" onclick="window.appEditApparel('${item.id}')">Editar</button>
          <button class="btn-admin-btn btn-admin-del" onclick="window.appDeleteApparel('${item.id}')">&times;</button>
        </div>
      </td>
    </tr>
  `).join('');

  // 3. Promotions & Settings
  els.inputSettingComboDiscount.value = state.promotions.comboDiscount || 200;
  els.inputSettingFreeShipping.value = state.promotions.freeShippingMin || 600;
  els.inputSettingTepicShipping.value = state.promotions.tepicShippingCost || 50;
  els.inputSettingNationalShipping.value = state.promotions.nationalShippingCost || 149;

  els.adminCouponsTableBody.innerHTML = state.promotions.coupons.map((c, idx) => `
    <tr>
      <td><strong style="color:var(--gold-bright);">${c.code}</strong></td>
      <td style="color:#10b981; font-weight:700;">-$${c.discount} MXN</td>
      <td>${c.description || 'Descuento oficial'}</td>
      <td>
        <button class="btn-admin-btn btn-admin-del" onclick="window.appDeleteCoupon('${c.code}')">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

/* Edit / Delete Globals */
window.appEditPerfume = (id) => openItemForm('perfume', id);
window.appDeletePerfume = (id) => {
  if (confirm('¿Eliminar este perfume del catálogo?')) {
    sounds.playClick();
    state.perfumes = state.perfumes.filter(p => p.id !== id);
    savePerfumes();
    renderAdminTables();
    renderPerfumesCatalog();
    populateStudioPerfumeSelect();
    showToast('Perfume eliminado', 'gold');
  }
};

window.appEditApparel = (id) => openItemForm('apparel', id);
window.appDeleteApparel = (id) => {
  if (confirm('¿Eliminar esta prenda del catálogo?')) {
    sounds.playClick();
    state.apparel = state.apparel.filter(a => a.id !== id);
    saveApparel();
    renderAdminTables();
    renderApparelBrandFilterBar();
    renderVerticeCatalog();
    showToast('Prenda eliminada', 'silver');
  }
};

window.appDeleteCoupon = (code) => {
  sounds.playClick();
  state.promotions.coupons = state.promotions.coupons.filter(c => c.code !== code);
  savePromotions();
  renderAdminTables();
  showToast(`Cupón ${code} eliminado`, 'gold');
};

/* ===================================================================
   MEDIA UPLOADER FIELD (DEVICE FILE UPLOAD & URL WITH LIVE PREVIEW)
   =================================================================== */
function renderMediaUploaderField(currentValue = '', label = 'Foto o Video del Producto') {
  const isVideo = currentValue && (
    currentValue.startsWith('data:video/') ||
    currentValue.endsWith('.mp4') ||
    currentValue.endsWith('.webm') ||
    currentValue.endsWith('.mov') ||
    currentValue.includes('/video')
  );

  return `
    <div class="form-field-row">
      <label>${label}</label>
      
      <div class="media-uploader-box">
        <div class="media-mode-switcher">
          <button type="button" class="btn-media-mode active" id="btnModeUpload">📁 Subir desde mi dispositivo</button>
          <button type="button" class="btn-media-mode" id="btnModeUrl">🔗 Pegar enlace URL</button>
        </div>

        <!-- Mode 1: Device File Upload (Drag & Drop or Click) -->
        <div id="mediaUploadModeDevice">
          <input type="file" id="mediaDeviceFileInput" accept="image/*,video/mp4,video/webm,video/quicktime" style="display:none;">
          <div class="media-dropzone" id="mediaDropzoneArea">
            <span class="dropzone-icon">📷 🎬</span>
            <div class="dropzone-label">
              <strong>Haz clic o arrastra una imagen o video aquí</strong>
              <small>Formatos: JPG, PNG, WEBP, MP4, WEBM (Previsualización inmediata)</small>
            </div>
          </div>
        </div>

        <!-- Mode 2: Direct URL -->
        <div id="mediaUploadModeUrl" style="display:none;">
          <input type="text" id="mediaUrlTextInput" placeholder="https://ejemplo.com/foto.jpg o video.mp4" value="${currentValue && !currentValue.startsWith('data:') ? currentValue : ''}">
        </div>

        <!-- Live Media Preview -->
        <div class="media-preview-container" id="mediaLivePreviewContainer" style="${currentValue ? '' : 'display:none;'}">
          <div id="mediaLivePreviewHolder">
            ${currentValue ? renderMediaTag(currentValue, 'media-live-preview', 'Previsualización') : ''}
          </div>
          <div class="media-preview-info">
            <strong id="mediaPreviewStatus">${isVideo ? '🎬 Video cargado' : '🖼️ Imagen cargada'}</strong>
            <span id="mediaPreviewType">${currentValue.startsWith('data:') ? 'Archivo local listo para guardar' : 'Enlace web'}</span>
          </div>
          <button type="button" class="btn-admin-btn btn-admin-del" id="btnClearMediaPreview" title="Quitar">&times;</button>
        </div>

        <!-- Hidden Input holding the real media value to submit -->
        <input type="hidden" name="image" id="inputItemMediaValue" value="${currentValue || ''}">
      </div>
    </div>
  `;
}

function bindMediaUploaderEvents() {
  const btnModeUpload = document.getElementById('btnModeUpload');
  const btnModeUrl = document.getElementById('btnModeUrl');
  const uploadModeDevice = document.getElementById('mediaUploadModeDevice');
  const uploadModeUrl = document.getElementById('mediaUploadModeUrl');
  const dropzoneArea = document.getElementById('mediaDropzoneArea');
  const fileInput = document.getElementById('mediaDeviceFileInput');
  const urlInput = document.getElementById('mediaUrlTextInput');
  const hiddenValue = document.getElementById('inputItemMediaValue');
  const previewContainer = document.getElementById('mediaLivePreviewContainer');
  const previewHolder = document.getElementById('mediaLivePreviewHolder');
  const previewStatus = document.getElementById('mediaPreviewStatus');
  const previewType = document.getElementById('mediaPreviewType');
  const btnClear = document.getElementById('btnClearMediaPreview');

  if (!btnModeUpload) return;

  btnModeUpload.onclick = () => {
    btnModeUpload.classList.add('active');
    btnModeUrl.classList.remove('active');
    uploadModeDevice.style.display = 'block';
    uploadModeUrl.style.display = 'none';
  };

  btnModeUrl.onclick = () => {
    btnModeUrl.classList.add('active');
    btnModeUpload.classList.remove('active');
    uploadModeDevice.style.display = 'none';
    uploadModeUrl.style.display = 'block';
  };

  dropzoneArea.onclick = () => {
    fileInput.click();
  };

  const handleFile = (file) => {
    if (!file) return;
    const isVid = file.type.startsWith('video/');
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      hiddenValue.value = dataUrl;
      previewHolder.innerHTML = renderMediaTag(dataUrl, 'media-live-preview', 'Previsualización');
      previewStatus.textContent = isVid ? `🎬 Video: ${file.name}` : `🖼️ Imagen: ${file.name}`;
      previewType.textContent = `${(file.size / 1024).toFixed(0)} KB • Archivo Local`;
      previewContainer.style.display = 'flex';
      sounds.playClick();
    };
    reader.readAsDataURL(file);
  };

  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  dropzoneArea.ondragover = (e) => {
    e.preventDefault();
    dropzoneArea.style.borderColor = 'var(--gold-primary)';
  };

  dropzoneArea.ondragleave = () => {
    dropzoneArea.style.borderColor = '';
  };

  dropzoneArea.ondrop = (e) => {
    e.preventDefault();
    dropzoneArea.style.borderColor = '';
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  if (urlInput) {
    urlInput.oninput = (e) => {
      const val = e.target.value.trim();
      hiddenValue.value = val;
      if (val) {
        previewHolder.innerHTML = renderMediaTag(val, 'media-live-preview', 'Previsualización');
        previewStatus.textContent = 'Enlace externo ingresado';
        previewType.textContent = val;
        previewContainer.style.display = 'flex';
      } else {
        previewContainer.style.display = 'none';
      }
    };
  }

  if (btnClear) {
    btnClear.onclick = () => {
      hiddenValue.value = '';
      if (urlInput) urlInput.value = '';
      previewContainer.style.display = 'none';
      previewHolder.innerHTML = '';
      fileInput.value = '';
    };
  }
}

/* Form Modal (Add / Edit) */
function openItemForm(type, id) {
  sounds.playClick();
  state.admin.editingType = type;
  state.admin.editingId = id;

  if (type === 'perfume') {
    const item = id ? state.perfumes.find(p => p.id === id) : null;
    els.adminFormTitle.textContent = item ? `Editar: ${item.name}` : 'Agregar Nuevo Decant';
    els.adminFormFields.innerHTML = `
      <div class="form-field-row">
        <label>Nombre de la Fragancia</label>
        <input type="text" name="name" value="${item ? item.name : ''}" required placeholder="ej. Baccarat Rouge 540">
      </div>
      <div class="form-field-row">
        <label>Casa Perfumista / Marca</label>
        <input type="text" name="brand" value="${item ? item.brand : ''}" required placeholder="ej. Maison Francis Kurkdjian">
      </div>
      <div class="form-field-row">
        <label>Precio Decant 5ml (MXN)</label>
        <input type="number" name="price5ml" value="${item ? item.price5ml : 380}" required>
      </div>
      <div class="form-field-row">
        <label>Precio Referencia Botella Completa Oficial (MXN)</label>
        <input type="number" name="fullBottlePrice" value="${item ? (item.fullBottlePrice || 5000) : 5000}" required>
      </div>
      <div class="form-field-row">
        <label>Categoría / Ocasión</label>
        <select name="category">
          <option value="citas" ${item?.category === 'citas' ? 'selected' : ''}>🌙 Citas & Seducción</option>
          <option value="proyeccion" ${item?.category === 'proyeccion' ? 'selected' : ''}>⚡ Modo Bestia / Estatus</option>
          <option value="clean" ${item?.category === 'clean' ? 'selected' : ''}>🫧 Clean Boy & Día</option>
          <option value="gourmand" ${item?.category === 'gourmand' ? 'selected' : ''}>🍯 Nicho Gourmand</option>
        </select>
      </div>
      <div class="form-field-row">
        <label>Etiqueta / Badge</label>
        <input type="text" name="badge" value="${item ? (item.badge || '') : 'Bestseller'}">
      </div>
      ${renderMediaUploaderField(item ? item.image : '', 'Foto o Video del Perfume')}
      <div class="form-field-row">
        <label>Descripción Olfativa Breve</label>
        <textarea name="description" rows="2">${item ? item.description : ''}</textarea>
      </div>
    `;
  } else if (type === 'apparel') {
    const item = id ? state.apparel.find(a => a.id === id) : null;
    els.adminFormTitle.textContent = item ? `Editar: ${item.name}` : 'Agregar Nueva Prenda';
    els.adminFormFields.innerHTML = `
      <div class="form-field-row">
        <label>Nombre de la Prenda</label>
        <input type="text" name="name" value="${item ? item.name : ''}" required placeholder="ej. Structural Heavyweight Hoodie">
      </div>
      <div class="form-field-row">
        <label>Marca / Diseñador (ej. VÉRTICE, OBSIDIAN ARCHIVE, ATELIER NAYARIT, etc.)</label>
        <input type="text" name="brand" value="${item ? (item.brand || 'VÉRTICE') : 'VÉRTICE'}" required placeholder="Escribe o asigna la marca">
      </div>
      <div class="form-field-row">
        <label>Precio (MXN)</label>
        <input type="number" name="price" value="${item ? item.price : 950}" required>
      </div>
      <div class="form-field-row">
        <label>Inventario Disponible (Piezas)</label>
        <input type="number" name="stockRemaining" value="${item ? item.stockRemaining : 15}" required>
      </div>
      <div class="form-field-row">
        <label>Tallas (Separadas por comas)</label>
        <input type="text" name="sizes" value="${item ? item.sizes.join(', ') : 'S, M, L, XL'}" required>
      </div>
      <div class="form-field-row">
        <label>Etiqueta / Badge</label>
        <input type="text" name="badge" value="${item ? item.badge : 'Drop 01'}">
      </div>
      ${renderMediaUploaderField(item ? item.image : '', 'Foto o Video de la Prenda')}
      <div class="form-field-row">
        <label>Descripción / Especificaciones</label>
        <textarea name="description" rows="2">${item ? item.description : ''}</textarea>
      </div>
    `;
  } else if (type === 'coupon') {
    els.adminFormTitle.textContent = 'Crear Nuevo Cupón de Descuento';
    els.adminFormFields.innerHTML = `
      <div class="form-field-row">
        <label>Código del Cupón (ej. BIENVENIDO100)</label>
        <input type="text" name="code" required placeholder="CÓDIGO EN MAYÚSCULAS" style="text-transform:uppercase;">
      </div>
      <div class="form-field-row">
        <label>Monto de Descuento (MXN)</label>
        <input type="number" name="discount" value="100" required>
      </div>
      <div class="form-field-row">
        <label>Descripción</label>
        <input type="text" name="description" value="Descuento promocional">
      </div>
    `;
  }

  els.adminItemFormModal.classList.add('open');
  bindMediaUploaderEvents();
}

function closeItemForm() {
  els.adminItemFormModal.classList.remove('open');
}

function handleItemFormSubmit(e) {
  e.preventDefault();
  sounds.playSuccess();
  const formData = new FormData(els.adminItemForm);

  if (state.admin.editingType === 'perfume') {
    const data = {
      name: formData.get('name').trim(),
      brand: formData.get('brand').trim(),
      price5ml: parseInt(formData.get('price5ml'), 10),
      fullBottlePrice: parseInt(formData.get('fullBottlePrice'), 10),
      category: formData.get('category'),
      badge: formData.get('badge').trim(),
      image: formData.get('image').trim(),
      description: formData.get('description').trim()
    };

    if (state.admin.editingId) {
      const idx = state.perfumes.findIndex(p => p.id === state.admin.editingId);
      if (idx > -1) {
        state.perfumes[idx] = { ...state.perfumes[idx], ...data };
      }
    } else {
      const newId = `p-${Date.now()}`;
      state.perfumes.push({
        id: newId,
        ...data,
        rating: 5.0,
        reviewsCount: 1,
        notes: { salida: ['Esencia Pura'], corazon: ['Notas de Autor'], fondo: ['Fijador de Lujo'] },
        metrics: { longevidad: '9/10 (8-10 hrs)', estela: 'Magnética' },
        verticePairing: { title: 'Signature Fit', description: 'Combina perfectamente con prendas pesadas VÉRTICE.', discount: 200 }
      });
    }

    savePerfumes();
    renderPerfumesCatalog();
    populateStudioPerfumeSelect();
    updateStudioPerfumeDetails();
    showToast('Perfume guardado con éxito', 'gold');

  } else if (state.admin.editingType === 'apparel') {
    const sizes = formData.get('sizes').split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
    const data = {
      name: formData.get('name').trim(),
      brand: formData.get('brand').trim().toUpperCase(),
      price: parseInt(formData.get('price'), 10),
      stockRemaining: parseInt(formData.get('stockRemaining'), 10),
      sizes: sizes.length > 0 ? sizes : ['S', 'M', 'L', 'XL'],
      badge: formData.get('badge').trim(),
      image: formData.get('image').trim(),
      description: formData.get('description').trim()
    };

    if (state.admin.editingId) {
      const idx = state.apparel.findIndex(a => a.id === state.admin.editingId);
      if (idx > -1) {
        state.apparel[idx] = { ...state.apparel[idx], ...data };
      }
    } else {
      const newId = `apparel-${Date.now()}`;
      state.apparel.push({
        id: newId,
        ...data,
        category: 'clothing',
        details: ['Algodón peinado de alto gramaje', 'Confección contemporánea']
      });
    }

    saveApparel();
    renderApparelBrandFilterBar();
    renderVerticeCatalog();
    showToast('Prenda y marca guardadas con éxito', 'silver');

  } else if (state.admin.editingType === 'coupon') {
    const code = formData.get('code').trim().toUpperCase();
    const discount = parseInt(formData.get('discount'), 10);
    const description = formData.get('description').trim();

    state.promotions.coupons.push({ code, discount, description });
    savePromotions();
    showToast(`Cupón ${code} creado con éxito`, 'gold');
  }

  renderAdminTables();
  closeItemForm();
}

/* LocalStorage Savers */
function savePerfumes() {
  localStorage.setItem('aura_perfumes_data', JSON.stringify(state.perfumes));
}

function saveApparel() {
  localStorage.setItem('aura_apparel_data', JSON.stringify(state.apparel));
}

function savePromotions() {
  localStorage.setItem('aura_promotions_data', JSON.stringify(state.promotions));
}

/* Export data.js Download */
function exportDataJsFile() {
  sounds.playSuccess();
  const fileContent = `export const PERFUMES_DATA = ${JSON.stringify(state.perfumes, null, 2)};\n\n` +
    `export const DISCOVERY_SETS = ${JSON.stringify(DISCOVERY_SETS, null, 2)};\n\n` +
    `export const VERTICE_DATA = ${JSON.stringify(state.apparel, null, 2)};\n\n` +
    `export const DEFAULT_PROMOTIONS = ${JSON.stringify(state.promotions, null, 2)};\n\n` +
    `export const ATOMIZER_COLORS = ${JSON.stringify(ATOMIZER_COLORS, null, 2)};\n\n` +
    `export const QUIZ_QUESTIONS = ${JSON.stringify(QUIZ_QUESTIONS, null, 2)};\n`;

  const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'data.js');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast('Archivo data.js generado y descargado con éxito', 'success');
}

/* ===================================================================
   EVENT LISTENERS & BOOTSTRAP
   =================================================================== */
function setupGlobalEvents() {
  // Store Switchers
  els.btnSwitchAura.onclick = () => switchStore('aura');
  els.btnSwitchVertice.onclick = () => switchStore('vertice');
  els.brandIdentityLink.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav Cross Links
  els.btnGoToVerticeFromBridge.onclick = () => switchStore('vertice');
  els.btnBackToAuraFromHero.onclick = () => switchStore('aura');
  els.btnSwitchToAuraFromVerticeBanner.onclick = () => switchStore('aura');
  if (els.footerLinkVertice) els.footerLinkVertice.onclick = (e) => { e.preventDefault(); switchStore('vertice'); };

  // Quick Add Tee Combo (Only when Vértice is active)
  if (els.btnQuickAddTeeCombo) {
    els.btnQuickAddTeeCombo.onclick = () => {
      sounds.playSpray();
      const topTee = state.apparel.find(a => a.category === 'in-house') || state.apparel[0];
      const topPerfume = state.perfumes[0];
      const comboDiscount = state.promotions.comboDiscount || 200;

      addToCart({
        id: `vertice-${topTee.id}-${Date.now()}`,
        refId: topTee.id,
        type: 'vertice',
        name: `${topTee.name} (${topTee.brand || 'VÉRTICE'})`,
        size: topTee.sizes[1] || topTee.sizes[0],
        price: topTee.price,
        image: topTee.image
      });

      addToCart({
        id: `decant-${topPerfume.id}-${Date.now()}`,
        refId: topPerfume.id,
        type: 'decant',
        name: `${topPerfume.name} (5ml)`,
        brand: topPerfume.brand,
        price: topPerfume.price5ml,
        image: topPerfume.image,
        engraving: { text: 'AURA NOIR', color: 'noir', font: 'font-serif' }
      });

      showToast(`¡Combo Playera + Decant agregado con -$${comboDiscount} MXN de descuento!`, 'success');
      openCart();
    };
  }

  // Discovery Set Button
  els.btnAddDiscoverySet.onclick = () => {
    sounds.playSpray();
    const set = DISCOVERY_SETS[0];
    const verticeActive = isVerticeEnabled();
    addToCart({
      id: `set-${set.id}-${Date.now()}`,
      refId: set.id,
      type: 'discovery',
      name: verticeActive 
        ? 'Aura Noir Monolith Set (3x5ml) + Tarjeta Regalo VÉRTICE' 
        : 'Aura Noir Monolith Set (3x5ml) Cofre de Lujo',
      price: set.price,
      image: verticeActive ? '/aura-discovery-box.jpg' : '/aura-discovery-box-pure.jpg',
      engraving: {
        text: 'MONOLITH VIP',
        color: 'noir',
        font: 'font-serif'
      }
    });
    showToast(verticeActive 
      ? 'Cofre Monolith + Tarjeta VIP Vértice agregados a tu bolsa' 
      : 'Cofre Monolith (3x5ml) de Lujo agregado a tu bolsa', 'gold');
    openCart();
  };

  // Cart Drawer
  els.btnOpenCart.onclick = openCart;
  els.btnCloseCart.onclick = closeCart;
  els.cartDrawerBackdrop.onclick = closeCart;
  els.btnGoToCheckout.onclick = openCheckout;

  // Quiz
  els.btnOpenQuiz.onclick = openQuiz;
  els.btnCloseQuiz.onclick = closeQuiz;
  if (els.footerLinkQuiz) els.footerLinkQuiz.onclick = (e) => { e.preventDefault(); openQuiz(); };

  // Modals close on backdrop click or close button
  els.btnCloseProductModal.onclick = closeProductModal;
  els.productModal.onclick = (e) => {
    if (e.target === els.productModal) closeProductModal();
  };

  els.quizModal.onclick = (e) => {
    if (e.target === els.quizModal) closeQuiz();
  };

  els.btnCloseCheckout.onclick = closeCheckout;
  els.checkoutModal.onclick = (e) => {
    if (e.target === els.checkoutModal) closeCheckout();
  };

  els.btnCloseSuccessModal.onclick = () => {
    els.orderSuccessModal.classList.remove('open');
  };

  // Secret Developer / Owner Shortcut: Press Ctrl + Shift + V to toggle VÉRTICE preview mode anytime
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyV') {
      e.preventDefault();
      const current = isVerticeEnabled();
      setVerticeEnabledState(!current);
    }
    // Secret Owner Shortcut: Press Ctrl + Shift + A (or Alt + A) to open Back Office directly
    if ((e.ctrlKey && e.shiftKey && e.code === 'KeyA') || (e.altKey && e.code === 'KeyA')) {
      e.preventDefault();
      if (typeof window.appRequestAdminAccess === 'function') {
        window.appRequestAdminAccess();
      }
    }
    // Secret Visual Editor Shortcut: Press Alt + E (or Ctrl + Shift + E)
    if ((e.ctrlKey && e.shiftKey && e.code === 'KeyE') || (e.altKey && e.code === 'KeyE')) {
      e.preventDefault();
      toggleVisualEditor(!isVisualEditorActive);
    }
  });
}

/* Initialization */
document.addEventListener('DOMContentLoaded', () => {
  applyVerticeVisibility();
  renderDynamicNav();
  initLaserStudio();
  initCatalogFilters();
  renderPerfumesCatalog();
  renderApparelBrandFilterBar();
  renderVerticeCatalog();
  initPromoCodeEngine();
  initCheckoutListeners();
  initBackOffice();
  setupGlobalEvents();
  renderCart();
  setupEditableDOM();
});
