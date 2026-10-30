(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={ENABLE_VERTICE:!1},t=[{id:`tf-noir-extreme`,name:`Tom Ford Noir Extreme`,brand:`Tom Ford`,category:`citas`,categoryLabel:`Citas & Seducción`,price5ml:360,fullBottlePrice:4200,rating:4.9,reviewsCount:38,badge:`Bestseller Nocturno`,image:`https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80`,description:`Una fragancia oriental amaderada impregnada de ámbar con un corazón tentador y delicioso de kulfi indio. Seducción refinada en estado puro.`,notes:{salida:[`Cardamomo`,`Nuez Moscada`,`Mandarina`,`Azafrán`],corazon:[`Kulfi Indio`,`Rosa`,`Jazmín`,`Flor de Azahar`],fondo:[`Vainilla de Madagascar`,`Ámbar Cálido`,`Sándalo`,`Maderas`]},metrics:{longevidad:`9/10 (8 - 10 hrs)`,estela:`Pesada / Seductora`,sprays5ml:`75 atomizaciones`,ocasion:`Noche, Citas, Clima Fresco / Frío`},verticePairing:{title:`The Midnight Fit`,description:`Combina este decant con el Hoodie Heavyweight 440 GSM Negro VÉRTICE para máxima presencia nocturna.`,discount:200}},{id:`creed-aventus`,name:`Creed Aventus`,brand:`The House of Creed`,category:`proyeccion`,categoryLabel:`Modo Bestia / Estatus`,price5ml:490,fullBottlePrice:8900,rating:5,reviewsCount:64,badge:`Rey del Estatus`,image:`https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80`,description:`El perfume masculino más influyente de la era moderna. Piña ahumada, abedul y pachulí que proyectan éxito y liderazgo indiscutible.`,notes:{salida:[`Piña Real`,`Bergamota`,`Grosella Negra`,`Manzana`],corazon:[`Abedul Ahumado`,`Pachulí`,`Jazmín de Marruecos`],fondo:[`Almizcle`,`Musgo de Roble`,`Ámbar Gris`,`Vainilla`]},metrics:{longevidad:`10/10 (10 - 12 hrs)`,estela:`Enorme / Firma Inolvidable`,sprays5ml:`75 atomizaciones`,ocasion:`Eventos Clave, Negocios, Citas Importantes`},verticePairing:{title:`The Executive Minimalist`,description:`Usa Aventus con la Heavyweight Boxy Tee Blanca VÉRTICE y pantalón cargo arquitectónico.`,discount:200}},{id:`lv-imagination`,name:`Louis Vuitton Imagination`,brand:`Louis Vuitton`,category:`clean`,categoryLabel:`Clean Boy / Día`,price5ml:480,fullBottlePrice:7800,rating:4.9,reviewsCount:51,badge:`Lujo Contemporáneo`,image:`https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80`,description:`La frescura elevada al pináculo de la alta costura. Té negro chino infundido con cítricos italianos y ambroxan brillante de grado puro.`,notes:{salida:[`Cidra`,`Bergamota de Calabria`,`Naranja Siciliana`],corazon:[`Té Negro de Ceilán`,`Neroli de Túnez`,`Jengibre`],fondo:[`Ambroxan`,`Incienso`,`Canela`]},metrics:{longevidad:`9/10 (8 - 9 hrs)`,estela:`Luminosa & Sofisticada`,sprays5ml:`75 atomizaciones`,ocasion:`Día a día, Calor, Salidas casuales de lujo`},verticePairing:{title:`The Daylight Clean`,description:`La frescura limpia de Imagination eleva la caída estructurada de los sweatpants VÉRTICE.`,discount:200}},{id:`pdm-percival`,name:`Parfums de Marly Percival`,brand:`Parfums de Marly`,category:`clean`,categoryLabel:`Clean Boy / Versátil`,price5ml:420,fullBottlePrice:6500,rating:4.8,reviewsCount:29,badge:`Versatilidad Suprema`,image:`https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80`,description:`Una fragancia fresca pero con un cuerpo aristocrático aromático y amaderado. Para el hombre que busca proyectar pulcritud y confianza absoluta.`,notes:{salida:[`Lavanda`,`Mandarina`,`Bergamota`,`Pimienta Rosa`],corazon:[`Geranio`,`Cardamomo`,`Canela`,`Hedione`],fondo:[`Ambroxan`,`Maderas Claras`,`Abeto Balsámico`,`Almizcle`]},metrics:{longevidad:`8.5/10 (7 - 9 hrs)`,estela:`Moderada / Proyecta magnetismo`,sprays5ml:`75 atomizaciones`,ocasion:`Gym de élite, Universidad, Oficina, Todo el año`},verticePairing:{title:`The High Density Tee Fit`,description:`Viste la Heavyweight Tee Negra VÉRTICE + Percival para un aura de pulcritud insuperable.`,discount:200}},{id:`xerjoff-naxos`,name:`Xerjoff Naxos 1861`,brand:`Xerjoff`,category:`gourmand`,categoryLabel:`Nicho Gourmand / Lujo`,price5ml:460,fullBottlePrice:6200,rating:5,reviewsCount:43,badge:`Joya Italiana Nicho`,image:`https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80`,description:`Homenaje a Sicilia. Dulzura dorada de miel de abeja y hojas de tabaco rubio combinadas con cítricos mediterráneos y un fondo cremoso de vainilla.`,notes:{salida:[`Bergamota`,`Limón`,`Lavanda Fina`],corazon:[`Miel Silvestre`,`Canela`,`Jazmín Sambac`,`Cachemira`],fondo:[`Hojas de Tabaco`,`Haba Tonka`,`Vainilla Bourbon`]},metrics:{longevidad:`10/10 (12+ hrs en piel)`,estela:`Pesada / Opulenta`,sprays5ml:`75 atomizaciones`,ocasion:`Cenas formales, Noches frías, Bodas, Alta ocasión`},verticePairing:{title:`The Aristocratic Layer`,description:`El tabaco y miel de Naxos con el tacto de 440 GSM de VÉRTICE definen una presencia impenetrable.`,discount:200}},{id:`kilian-angels-share`,name:`Kilian Angels' Share`,brand:`Kilian Paris`,category:`citas`,categoryLabel:`Citas & Noche`,price5ml:450,fullBottlePrice:5900,rating:4.9,reviewsCount:37,badge:`Bohemio & Magnético`,image:`https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80`,description:`Inspirado en la herencia de Hennessy. Esencia de coñac destilada que se funde con canela, haba tonka y madera de roble.`,notes:{salida:[`Esencia de Coñac Francés`],corazon:[`Canela de Ceilán`,`Haba Tonka`,`Roble`],fondo:[`Praliné`,`Vainilla`,`Sándalo`]},metrics:{longevidad:`9/10 (9 - 11 hrs)`,estela:`Íntima pero contundente`,sprays5ml:`75 atomizaciones`,ocasion:`Citas a solas, Bares lounge, Conversaciones nocturnas`},verticePairing:{title:`The Noir Encounter`,description:`Añade la Gorra estructurada VÉRTICE con bordado 3D plateado.`,discount:200}},{id:`baccarat-540-extrait`,name:`Baccarat Rouge 540 Extrait`,brand:`Maison Francis Kurkdjian`,category:`proyeccion`,categoryLabel:`Modo Bestia / Estatus`,price5ml:540,fullBottlePrice:11500,rating:5,reviewsCount:58,badge:`El Santo Grial`,image:`https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80`,description:`La concentración Extrait magnifica el resplandor de los tres alientos de la fragancia. Almendra amarga de Marruecos, azafrán y el legendario ámbar gris mineral.`,notes:{salida:[`Almendra Amarga`,`Azafrán Rojo`],corazon:[`Jazmín Grandiflorum de Egipto`,`Cedro`],fondo:[`Ámbar Gris`,`Maderas Ambarinas`,`Almizcle Caliente`]},metrics:{longevidad:`10/10 (14+ hrs)`,estela:`Nuclear / Imborrable`,sprays5ml:`75 atomizaciones`,ocasion:`Cualquier lugar donde quieras ser el centro de atención`},verticePairing:{title:`The Sovereign Standard`,description:`El aroma más imponente del mundo junto a las piezas numeradas VÉRTICE.`,discount:200}},{id:`nishane-hacivat`,name:`Nishane Hacivat`,brand:`Nishane Istanbul`,category:`proyeccion`,categoryLabel:`Modo Bestia / Versátil`,price5ml:440,fullBottlePrice:6300,rating:4.8,reviewsCount:31,badge:`Proyección Nuclear`,image:`https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80`,description:`Una explosión vibrante de piña natural con un fondo imponente de musgo de roble y maderas densas. Duración extrema que se queda en la ropa días enteros.`,notes:{salida:[`Piña`,`Pomelo`,`Bergamota`],corazon:[`Cedro Blanco`,`Pachulí`,`Jazmín`],fondo:[`Musgo de Roble`,`Maderas Densas`]},metrics:{longevidad:`10/10 (12+ hrs)`,estela:`Modo Bestia / Dejar rastro`,sprays5ml:`75 atomizaciones`,ocasion:`Climas cálidos a templados, Fiestas, Aire Libre`},verticePairing:{title:`The Urban Vanguard`,description:`Usa Hacivat con el Set de Hoodie y Jogger VÉRTICE.`,discount:200}}],n=[{id:`box-trio-monarch`,name:`Aura Noir Monolith Set (3 x 5ml)`,price:1190,originalValue:1450,badge:`Edición Coleccionista`,image:`./aura-discovery-box-vip15.jpg?v=auranext`,description:`Caja rígida magnética forrada en negro mate con grabado hot-stamping, cuna de terciopelo y 3 atomizadores metálicos con grabado láser a elegir: Tom Ford Noir Extreme, Creed Aventus y Xerjoff Naxos. Incluye exclusiva Tarjeta VIP Aura Noir con 15% de descuento en tu próxima compra mayor a $500 MXN.`,includes:[`3 Atomizadores metálicos grabados con láser`,`15 ml de extracto original (225+ sprays)`,`Tarjeta física VIP Aura Noir 15% OFF`,`Caja rígida con cierre magnético`]}],r=[{id:`v-tee-black`,brand:`VÉRTICE`,name:`Heavyweight Boxy Tee 260 GSM // Noir`,category:`tees`,price:790,stockRemaining:14,badge:`Drop 01 // Limitado a 50 pzs`,image:`/vertice-streetwear.jpg`,description:`Confeccionada con algodón peinado de fibra larga de 260 gramos por metro cuadrado. Cuello cerrado reforzado en rib de 1 pulgada que no se deforma. Bordado micro-alta definición en pecho y estampa serigráfica táctil en espalda.`,details:[`100% Algodón Peinado Heavyweight 260 GSM`,`Corte Boxy Drop Shoulder contemporáneo`,`Bordado HD en hilo plata mate resistente a lavados`,`Hecho éticamente en México en tirajes cortos`],sizes:[`S`,`M`,`L`,`XL`]},{id:`v-hoodie-structural`,brand:`VÉRTICE`,name:`Structural Hoodie 440 GSM // Carbon`,category:`hoodies`,price:1490,stockRemaining:9,badge:`Pieza Arquitectónica`,image:`/vertice-streetwear.jpg`,description:`Nuestra pieza más emblemática. 440 GSM de tacto ultra pesado con interior de rizo francés. Capucha doble capa estructurada que se sostiene por sí sola sin necesidad de cordones. Caída limpia e imponente.`,details:[`440 GSM French Terry de alta densidad`,`Capucha sobredimensionada auto-estructurada`,`Bordado dorsal 'ELEVATE YOUR STANDARD' en plata mate`,`Prenda pre-encogida con lavado siliconado premium`],sizes:[`S`,`M`,`L`,`XL`]},{id:`v-pants-wide`,brand:`VÉRTICE`,name:`Wide-Leg Architecture Sweatpants 420 GSM`,category:`bottoms`,price:1190,stockRemaining:11,badge:`Corte Escultural`,image:`https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80`,description:`Pantalón de caída ancha y recta con drapeado pesado que descansa sobre tus sneakers. Tiro medio-alto con pretina elástica gruesa y herrajes metálicos plateados grabados con láser.`,details:[`420 GSM algodón pesado`,`Cintura reforzada con ojillos de acero inoxidable`,`Bolsillos profundos con cierre oculto`,`Caída recta fluida sin puño inferior`],sizes:[`S`,`M`,`L`,`XL`]},{id:`obsidian-acid-tee`,brand:`OBSIDIAN ARCHIVE`,name:`Acid-Wash Raw Boxy Tee 280 GSM`,category:`tees`,price:850,stockRemaining:8,badge:`Colaboración Especial`,image:`https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80`,description:`Teñido mineral con efecto lavado al ácido artesanal. Cada prenda presenta variaciones tonales únicas. Gráfica en tipografía gótica plateada en el pecho.`,details:[`280 GSM algodón peinado premium`,`Lavado ácido artesanal de grano fino`,`Estampa serigráfica al agua tacto cero`,`Etiqueta numerada individualmente`],sizes:[`M`,`L`,`XL`]},{id:`atelier-denim-jacket`,brand:`ATELIER NAYARIT`,name:`Heavy Raw Denim Overshirt 14oz // Obsidian`,category:`outerwear`,price:1650,stockRemaining:6,badge:`Hecho a Mano en Nayarit`,image:`https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80`,description:`Mezclilla rígida de 14 onzas sin lavar con orillo japonés. Botones de latón envejecido y costuras reforzadas con remaches de cobre. Silueta boxy moderna.`,details:[`Denim crudo rígido de 14oz 100% algodón`,`Bolsillos dobles con solapa arquitectónica`,`Botones metálicos grabados`,`Confección artesanal en Tepic`],sizes:[`S`,`M`,`L`]},{id:`v-metal-cardholder`,brand:`VÉRTICE`,name:`Tactical Brushed Titanium Cardholder`,category:`accessories`,price:520,stockRemaining:18,badge:`Metal Goods`,image:`https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80`,description:`Tarjetero ultraligero de aleación de titanio cepillado con bloqueo RFID. Grabado láser 'VERTICE // ELEVATE YOUR STANDARD'. Diseñado para llevar lo indispensable sin bultos.`,details:[`Aleación de aluminio y titanio aeroespacial`,`Bloqueo anti-clonación RFID / NFC`,`Capacidad para 1 a 12 tarjetas + clip para billetes`,`Grabado láser inalterable`],sizes:[`Única`]}],i={comboDiscount:200,freeShippingMin:600,tepicShippingCost:50,nationalShippingCost:149,coupons:[{code:`AURANEXT15`,discountPercent:15,minPurchase:500,description:`15% de Descuento en tu próxima compra (Tarjeta VIP Aura Noir)`},{code:`VIP15`,discountPercent:15,minPurchase:500,description:`15% de Descuento en compras mayores a $500 MXN (Tarjeta VIP)`},{code:`AURA150`,discount:150,description:`Descuento VIP General`},{code:`TEPICVIP`,discount:100,description:`Descuento Local Tepic`},{code:`VERTICE200`,discount:200,description:`Promoción Especial Streetwear`}]},a=[{id:`noir`,name:`Matte Black`,hex:`#18191c`,border:`#333`,laserDefaultColor:`#eef2f8`},{id:`gunmetal`,name:`Gunmetal Smoke`,hex:`#32343c`,border:`#585b63`,laserDefaultColor:`#eef2f8`},{id:`gold`,name:`Brushed Champagne Gold`,hex:`#b89547`,border:`#e5c378`,laserDefaultColor:`#eef2f8`}],o=[{id:1,question:`¿En qué momento quieres que tu aroma tenga el mayor impacto?`,options:[{text:`En citas nocturnas y encuentros a solas`,category:`citas`,hint:`Seducción, cercanía, maderas y vainilla`},{text:`De noche en fiestas, antros o eventos de alto nivel`,category:`proyeccion`,hint:`Modo bestia, cumplidos inmediatos, estatus`},{text:`En el día a día, gym de élite, uni o trabajo impecable`,category:`clean`,hint:`Limpio, cítrico brillante, té negro y ambroxan`},{text:`En cenas formales o eventos donde quiero oler a dinero viejo`,category:`gourmand`,hint:`Tabaco dulce, miel siciliana, coñac y maderas`}]},{id:2,question:`¿Cuál es tu estilo preferido al vestir?`,options:[{text:`Minimalista oscuro: Hoodie negro pesado, accesorios metálicos`,verticePair:`v-hoodie-structural`},{text:`Clean contemporáneo: Playera blanca gruesa, sneakers impecables`,verticePair:`v-tee-black`},{text:`Urban vanguard: Pantalón de corte ancho, siluetas holgadas`,verticePair:`v-pants-wide`},{text:`Accesorios de alto impacto: Tarjeteros de titanio, cadenas finas`,verticePair:`v-metal-cardholder`}]},{id:3,question:`¿Qué duración buscas en tu piel?`,options:[{text:`Duración extrema (10 a 14 horas que no se vaya ni con el viento)`,pref:`beast`},{text:`Aura íntima pero magnética (que se acerquen a tu cuello para olerte)`,pref:`intimate`},{text:`Frescura revitalizante y elegante durante todo el día`,pref:`fresh`}]}],s=new class{constructor(){this.ctx=null}init(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}}playClick(){try{if(this.init(),!this.ctx)return;let e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type=`sine`,e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.04),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playLaser(){try{if(this.init(),!this.ctx)return;let e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type=`sawtooth`,e.frequency.setValueAtTime(1400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(3200,this.ctx.currentTime+.12),t.gain.setValueAtTime(.04,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.12)}catch{}}playSpray(){try{if(this.init(),!this.ctx)return;let e=this.ctx.sampleRate*.15,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=Math.random()*2-1;let r=this.ctx.createBufferSource();r.buffer=t;let i=this.ctx.createBiquadFilter();i.type=`bandpass`,i.frequency.value=3500,i.Q.value=1.8;let a=this.ctx.createGain();a.gain.setValueAtTime(.09,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),r.connect(i),i.connect(a),a.connect(this.ctx.destination),r.start()}catch{}}playSuccess(){try{if(this.init(),!this.ctx)return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.value=t,i.gain.setValueAtTime(.06,e+n*.08),i.gain.exponentialRampToValueAtTime(.001,e+n*.08+.35),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.08),r.stop(e+n*.08+.35)})}catch{}}},c={currentStore:`aura`,activeFilter:`all`,apparelActiveBrand:`all`,perfumes:JSON.parse(localStorage.getItem(`aura_perfumes_data`))||t,apparel:JSON.parse(localStorage.getItem(`aura_apparel_data`))||r,promotions:JSON.parse(localStorage.getItem(`aura_promotions_data`))||i,cart:JSON.parse(localStorage.getItem(`aura_noir_cart`)||`[]`),promoCode:null,promoDiscount:0,deliveryMethod:`tepic-express`,deliveryCost:50,studio:{color:`noir`,text:`ALEJANDRO G.`,font:`font-serif`,perfumeId:`tf-noir-extreme`},verticeSelectedSizes:{},quiz:{step:0,answers:{}},admin:{activeTab:`tab-perfumes`,editingType:null,editingId:null}},l={btnSwitchAura:document.getElementById(`btnSwitchAura`),btnSwitchVertice:document.getElementById(`btnSwitchVertice`),viewAura:document.getElementById(`viewAuraNoir`),viewVertice:document.getElementById(`viewVertice`),headerLogoAura:document.getElementById(`headerLogoAura`),headerLogoVertice:document.getElementById(`headerLogoVertice`),brandIdentityLink:document.getElementById(`brandIdentityLink`),dynamicNavList:document.getElementById(`dynamicNavList`),btnGoToVerticeFromBridge:document.getElementById(`btnGoToVerticeFromBridge`),btnQuickAddTeeCombo:document.getElementById(`btnQuickAddTeeCombo`),btnBackToAuraFromHero:document.getElementById(`btnBackToAuraFromHero`),btnSwitchToAuraFromVerticeBanner:document.getElementById(`btnSwitchToAuraFromVerticeBanner`),btnAddDiscoverySet:document.getElementById(`btnAddDiscoverySet`),atomizerCylinder:document.getElementById(`atomizerCylinder`),atomizerNozzle:document.getElementById(`atomizerNozzle`),atomizerMist:document.getElementById(`atomizerMist`),btnSprayTest:document.getElementById(`btnSprayTest`),laserBeam:document.getElementById(`laserBeam`),sparkEmitter:document.getElementById(`sparkEmitter`),engravedLiveText:document.getElementById(`engravedLiveText`),engravedPerfumeTag:document.getElementById(`engravedPerfumeTag`),atomizerColorPicker:document.getElementById(`atomizerColorPicker`),inputLaserText:document.getElementById(`inputLaserText`),charCount:document.getElementById(`charCount`),fontButtons:document.querySelectorAll(`.font-btn`),selectStudioPerfume:document.getElementById(`selectStudioPerfume`),studioPriceDisplay:document.getElementById(`studioPriceDisplay`),btnAddToCartCustom:document.getElementById(`btnAddToCartCustom`),perfumesGrid:document.getElementById(`perfumesGrid`),verticeInHouseGrid:document.getElementById(`verticeInHouseGrid`),verticeGuestGrid:document.getElementById(`verticeGuestGrid`),guestBrandsBlock:document.getElementById(`guestBrandsBlock`),apparelBrandFilterBar:document.getElementById(`apparelBrandFilterBar`),filterPills:document.querySelectorAll(`.filter-pill`),btnOpenCart:document.getElementById(`btnOpenCart`),btnCloseCart:document.getElementById(`btnCloseCart`),cartDrawer:document.getElementById(`cartDrawer`),cartDrawerBackdrop:document.getElementById(`cartDrawerBackdrop`),cartItemsList:document.getElementById(`cartItemsList`),cartCountBadge:document.getElementById(`cartCountBadge`),cartSubtitleSummary:document.getElementById(`cartSubtitleSummary`),cartPerkText:document.getElementById(`cartPerkText`),cartPerkFill:document.getElementById(`cartPerkFill`),bundleBanner:document.getElementById(`bundleBanner`),rowBundleDiscount:document.getElementById(`rowBundleDiscount`),cartSubtotal:document.getElementById(`cartSubtotal`),cartTotal:document.getElementById(`cartTotal`),inputPromoCode:document.getElementById(`inputPromoCode`),btnApplyPromo:document.getElementById(`btnApplyPromo`),discountTag:document.getElementById(`discountTag`),discountAmount:document.getElementById(`discountAmount`),btnGoToCheckout:document.getElementById(`btnGoToCheckout`),quizModal:document.getElementById(`quizModal`),btnOpenQuiz:document.getElementById(`btnOpenQuiz`),btnCloseQuiz:document.getElementById(`btnCloseQuiz`),quizContainer:document.getElementById(`quizContainer`),footerLinkQuiz:document.getElementById(`footerLinkQuiz`),productModal:document.getElementById(`productModal`),btnCloseProductModal:document.getElementById(`btnCloseProductModal`),modalProductContent:document.getElementById(`modalProductContent`),checkoutModal:document.getElementById(`checkoutModal`),btnCloseCheckout:document.getElementById(`btnCloseCheckout`),checkoutForm:document.getElementById(`checkoutForm`),checkoutFinalTotal:document.getElementById(`checkoutFinalTotal`),orderSuccessModal:document.getElementById(`orderSuccessModal`),btnCloseSuccessModal:document.getElementById(`btnCloseSuccessModal`),successTicketBox:document.getElementById(`successTicketBox`),btnWhatsappShare:document.getElementById(`btnWhatsappShare`),toastContainer:document.getElementById(`toastContainer`),footerLinkVertice:document.getElementById(`footerLinkVertice`),liveEditorToolbar:document.getElementById(`liveEditorToolbar`),btnLaunchVisualEditor:document.getElementById(`btnLaunchVisualEditor`),btnSaveVisualEdits:document.getElementById(`btnSaveVisualEdits`),btnResetVisualEdits:document.getElementById(`btnResetVisualEdits`),btnExitVisualEditor:document.getElementById(`btnExitVisualEditor`),adminAuthModal:document.getElementById(`adminAuthModal`),formAdminAuth:document.getElementById(`formAdminAuth`),inputAdminPin:document.getElementById(`inputAdminPin`),btnCancelAdminAuth:document.getElementById(`btnCancelAdminAuth`),adminAuthError:document.getElementById(`adminAuthError`),adminModal:document.getElementById(`adminModal`),btnCloseAdmin:document.getElementById(`btnCloseAdmin`),adminToggleVertice:document.getElementById(`adminToggleVertice`),adminVerticeStatusText:document.getElementById(`adminVerticeStatusText`),btnToggleVerticeAction:document.getElementById(`btnToggleVerticeAction`),adminTabs:document.querySelectorAll(`.admin-tab`),adminTabPanes:document.querySelectorAll(`.admin-tab-pane`),adminPerfumesTableBody:document.getElementById(`adminPerfumesTableBody`),adminApparelTableBody:document.getElementById(`adminApparelTableBody`),adminCouponsTableBody:document.getElementById(`adminCouponsTableBody`),adminPerfumesCountTag:document.getElementById(`adminPerfumesCountTag`),adminApparelCountTag:document.getElementById(`adminApparelCountTag`),btnAdminAddPerfume:document.getElementById(`btnAdminAddPerfume`),btnAdminAddApparel:document.getElementById(`btnAdminAddApparel`),btnAdminAddCoupon:document.getElementById(`btnAdminAddCoupon`),inputSettingComboDiscount:document.getElementById(`inputSettingComboDiscount`),inputSettingFreeShipping:document.getElementById(`inputSettingFreeShipping`),inputSettingTepicShipping:document.getElementById(`inputSettingTepicShipping`),inputSettingNationalShipping:document.getElementById(`inputSettingNationalShipping`),btnSavePromoSettings:document.getElementById(`btnSavePromoSettings`),btnExportDataJs:document.getElementById(`btnExportDataJs`),btnResetToDefaults:document.getElementById(`btnResetToDefaults`),inputNewAdminPin:document.getElementById(`inputNewAdminPin`),btnChangeAdminPin:document.getElementById(`btnChangeAdminPin`),adminItemFormModal:document.getElementById(`adminItemFormModal`),btnCloseItemForm:document.getElementById(`btnCloseItemForm`),btnCancelItemForm:document.getElementById(`btnCancelItemForm`),adminItemForm:document.getElementById(`adminItemForm`),adminFormTitle:document.getElementById(`adminFormTitle`),adminFormFields:document.getElementById(`adminFormFields`)};function u(e,t=`gold`){let n=document.createElement(`div`);n.className=`toast toast-${t}`,n.innerHTML=`
    <span>${t===`success`?`✓`:`✦`}</span>
    <div>${e}</div>
  `,l.toastContainer.appendChild(n),requestAnimationFrame(()=>n.classList.add(`show`)),setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>n.remove(),400)},3200)}function d(){let t=localStorage.getItem(`aura_enable_vertice`);if(t!==null)return t===`true`;let n=new URLSearchParams(window.location.search);if(n.has(`vertice`)){let e=n.get(`vertice`);return e!==`0`&&e!==`false`&&e!==`no`&&e!==`off`}return e!==void 0&&!!e.ENABLE_VERTICE}function f(e){localStorage.setItem(`aura_enable_vertice`,e?`true`:`false`);try{let e=new URL(window.location.href);if(e.searchParams.has(`vertice`)){e.searchParams.delete(`vertice`);let t=e.pathname+(e.search?e.search:``)+e.hash;window.history.replaceState({},``,t)}}catch{}p(),s.playClick(),e?u(`🚀 VÉRTICE ACTIVADO: Ahora la tienda dual está visible.`,`success`):u(`🔒 VÉRTICE DESACTIVADO: La tienda ahora es 100% Aura Noir Decants.`,`info`)}function p(){let e=d();document.body.classList.toggle(`vertice-disabled`,!e),!e&&c.currentStore===`vertice`&&m(`aura`),l.adminToggleVertice&&(l.adminToggleVertice.checked=e),l.btnToggleVerticeAction&&(l.btnToggleVerticeAction.textContent=e?`Desactivar VÉRTICE`:`Activar VÉRTICE`,l.btnToggleVerticeAction.className=e?`btn btn-sm btn-outline-silver`:`btn btn-sm btn-gold`),l.adminVerticeStatusText&&(e?(l.adminVerticeStatusText.textContent=`TIENDA DUAL ACTIVA (Aura Noir + VÉRTICE)`,l.adminVerticeStatusText.style.color=`#38bdf8`):(l.adminVerticeStatusText.textContent=`SOLO AURA NOIR (Perfumería)`,l.adminVerticeStatusText.style.color=`#10b981`)),h()}function m(e){e===`vertice`&&!d()?u(`VÉRTICE Concept Store estará disponible próximamente en el Drop Oficial.`,`info`):(s.playClick(),c.currentStore=e,e===`aura`?(document.body.classList.remove(`theme-vertice`),document.body.classList.add(`theme-aura`),l.btnSwitchAura.classList.add(`active`),l.btnSwitchAura.setAttribute(`aria-selected`,`true`),l.btnSwitchVertice.classList.remove(`active`),l.btnSwitchVertice.setAttribute(`aria-selected`,`false`),l.viewAura.classList.add(`active`),l.viewVertice.classList.remove(`active`),l.headerLogoAura.classList.remove(`hidden`),l.headerLogoVertice.classList.add(`hidden`)):(document.body.classList.remove(`theme-aura`),document.body.classList.add(`theme-vertice`),l.btnSwitchVertice.classList.add(`active`),l.btnSwitchVertice.setAttribute(`aria-selected`,`true`),l.btnSwitchAura.classList.remove(`active`),l.btnSwitchAura.setAttribute(`aria-selected`,`false`),l.viewVertice.classList.add(`active`),l.viewAura.classList.remove(`active`),l.headerLogoVertice.classList.remove(`hidden`),l.headerLogoAura.classList.add(`hidden`)),h(),window.scrollTo({top:0,behavior:`smooth`}))}function h(){c.currentStore===`aura`?d()?l.dynamicNavList.innerHTML=`
        <li class="nav-item"><a href="#catalogoDecants">Decants 5ml</a></li>
        <li class="nav-item"><a href="#laserCustomizer">Estudio Láser</a></li>
        <li class="nav-item"><a href="#conceptStoreSec">Concept Store</a></li>
      `:l.dynamicNavList.innerHTML=`
        <li class="nav-item"><a href="#catalogoDecants">Decants 5ml</a></li>
        <li class="nav-item"><a href="#laserCustomizer">Estudio Láser</a></li>
        <li class="nav-item"><a href="#discoverySetsSection">Discovery Sets</a></li>
      `:l.dynamicNavList.innerHTML=`
      <li class="nav-item"><a href="#verticeInHouseBlock">Drop 01</a></li>
      <li class="nav-item"><a href="#guestBrandsBlock">Marcas Invitadas</a></li>
      <li class="nav-item"><a href="#appMain">The Standard</a></li>
    `}function g(){l.atomizerColorPicker.innerHTML=a.map(e=>`
    <button class="color-swatch-btn ${e.id===c.studio.color?`active`:``}" data-color="${e.id}">
      <span class="swatch-circle" style="background-color: ${e.hex}; border-color: ${e.border}"></span>
      <span>${e.name}</span>
    </button>
  `).join(``),l.atomizerColorPicker.querySelectorAll(`.color-swatch-btn`).forEach(e=>{e.onclick=()=>{s.playClick();let t=e.dataset.color;c.studio.color=t,l.atomizerColorPicker.querySelectorAll(`.color-swatch-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),l.atomizerCylinder.dataset.color=t,S()}}),y(),l.selectStudioPerfume.onchange=e=>{s.playClick(),c.studio.perfumeId=e.target.value,b(),S()},l.fontButtons.forEach(e=>{e.onclick=()=>{s.playClick(),l.fontButtons.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.font;c.studio.font=t,l.engravedLiveText.className=`engraved-text ${t}`,S()}}),l.inputLaserText.oninput=e=>{let t=e.target.value.toUpperCase();e.target.value=t,c.studio.text=t||`AURA NOIR`,l.engravedLiveText.textContent=c.studio.text,l.charCount.textContent=`${t.length}/18`,S()},l.btnAddToCartCustom.onclick=()=>{let e=c.perfumes.find(e=>e.id===c.studio.perfumeId)||c.perfumes[0];e&&(v(),P({id:`custom-${e.id}-${Date.now()}`,refId:e.id,type:`decant`,name:`${e.name} (5ml)`,brand:e.brand,price:e.price5ml,image:e.image,engraving:{text:c.studio.text,color:c.studio.color,font:c.studio.font}}),u(`Decant grabado "${c.studio.text}" agregado a tu bolsa`,`gold`),z())},l.atomizerNozzle&&(l.atomizerNozzle.onclick=()=>v()),l.btnSprayTest&&(l.btnSprayTest.onclick=()=>v()),b()}var _;function v(){s.playSpray(),l.atomizerNozzle&&l.atomizerNozzle.classList.add(`spraying`),l.atomizerMist&&(l.atomizerMist.classList.remove(`active`),l.atomizerMist.offsetWidth,l.atomizerMist.classList.add(`active`)),clearTimeout(_),_=setTimeout(()=>{l.atomizerNozzle&&l.atomizerNozzle.classList.remove(`spraying`),l.atomizerMist&&l.atomizerMist.classList.remove(`active`)},950)}function y(){l.selectStudioPerfume.innerHTML=c.perfumes.map(e=>`
    <option value="${e.id}" ${e.id===c.studio.perfumeId?`selected`:``}>
      ${e.brand} - ${e.name} ($${e.price5ml} MXN)
    </option>
  `).join(``)}function b(){let e=c.perfumes.find(e=>e.id===c.studio.perfumeId)||c.perfumes[0];e&&(l.engravedPerfumeTag.textContent=e.name,l.studioPriceDisplay.textContent=`$${e.price5ml} MXN`)}var x;function S(){s.playLaser(),l.laserBeam.classList.add(`active`),l.sparkEmitter.classList.add(`active`),clearTimeout(x),x=setTimeout(()=>{l.laserBeam.classList.remove(`active`),l.sparkEmitter.classList.remove(`active`)},900)}function C(e,t=``,n=``){return e?e.startsWith(`data:video/`)||e.endsWith(`.mp4`)||e.endsWith(`.webm`)||e.endsWith(`.mov`)||e.includes(`/video`)?`<video src="${e}" class="${t}" autoplay loop muted playsinline></video>`:`<img src="${e}" alt="${n}" class="${t}" loading="lazy">`:``}function w(){let e=c.activeFilter===`all`?c.perfumes:c.perfumes.filter(e=>e.category===c.activeFilter);l.perfumesGrid.innerHTML=e.map(e=>{let t=Math.max(0,(e.fullBottlePrice||e.price5ml*10)-e.price5ml);return`
      <article class="product-card" data-id="${e.id}">
        <div class="product-image-wrap">
          ${C(e.image,`product-thumb`,`${e.name} decant de lujo`)}
          <span class="product-badge">${e.badge||`Decant 5ml`}</span>
          <div class="product-rating-pill">
            <span>★</span>
            <span>${e.rating||5}</span>
            <small>(${e.reviewsCount||24})</small>
          </div>
        </div>

        <div class="product-body">
          <span class="product-brand">${e.brand}</span>
          <h3 class="product-name">${e.name}</h3>

          <div class="product-notes-snippet">
            ${e.notes?.corazon?e.notes.corazon.slice(0,3).map(e=>`<span class="note-tag">${e}</span>`).join(``):`<span class="note-tag">Extracto Puro</span>`}
          </div>

          <div class="saving-pill">Ahorras $${t.toLocaleString()} MXN probando 5ml</div>

          <div class="product-price-box">
            <div>
              <span class="price-main">$${e.price5ml} MXN</span>
              <small style="display:block; font-size:0.65rem; color:var(--gold-bright);">+ Grabado Láser Gratis</small>
            </div>
            <div style="text-align:right;">
              <span class="price-bottle-ref">$${(e.fullBottlePrice||e.price5ml*10).toLocaleString()} MXN</span>
              <small style="display:block; font-size:0.65rem; color:#888;">Botella oficial</small>
            </div>
          </div>

          <div class="product-actions">
            <button class="btn-card-details btn-view-perfume" data-id="${e.id}">Notas & Fit</button>
            <button class="btn-card-add btn-quick-add" data-id="${e.id}">Pedir 5ml</button>
          </div>
        </div>
      </article>
    `}).join(``),l.perfumesGrid.querySelectorAll(`.btn-view-perfume`).forEach(e=>{e.onclick=()=>k(e.dataset.id)}),l.perfumesGrid.querySelectorAll(`.btn-quick-add`).forEach(e=>{e.onclick=()=>{let t=c.perfumes.find(t=>t.id===e.dataset.id);t&&(s.playSpray(),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),u(`Decant 5ml de ${t.name} agregado a tu bolsa`,`gold`),z())}})}function T(){l.filterPills.forEach(e=>{e.onclick=()=>{s.playClick(),l.filterPills.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),c.activeFilter=e.dataset.filter,w()}})}function E(){if(!l.apparelBrandFilterBar)return;let e=c.apparel.filter(e=>(e.brand||`VÉRTICE`).toUpperCase()!==`VÉRTICE`),t=[`all`,...new Set(e.map(e=>e.brand||`GUEST BRAND`))];l.apparelBrandFilterBar.innerHTML=t.map(e=>{let t=e===`all`?`Todas las Marcas Invitadas`:e;return`
      <button class="brand-pill ${c.apparelActiveBrand===e?`active`:``}" data-brand="${e}">
        ${t}
      </button>
    `}).join(``),l.apparelBrandFilterBar.querySelectorAll(`.brand-pill`).forEach(e=>{e.onclick=()=>{s.playClick(),c.apparelActiveBrand=e.dataset.brand,E(),O()}})}function D(e,t){let n=c.verticeSelectedSizes[e.id]||e.sizes[0],r=e.brand||`VÉRTICE`,i=e.badge||(t?`Drop 01 // In-House`:`Edición Curada`),a=t?`inhouse-badge`:`guest-badge`,o=t?`VÉRTICE // LÍNEA PROPIA`:`${r} // GUEST BRAND`;return`
    <article class="vertice-card" data-id="${e.id}">
      <div class="vertice-img-wrap">
        ${C(e.image,`vertice-thumb`,e.name)}
        <span class="product-badge ${a}">
          ${i}
        </span>
      </div>

      <div class="vertice-body">
        <span class="vertice-brand-tag">${o}</span>
        <span class="vertice-stock-badge">⚡ Quedan ${e.stockRemaining} piezas</span>
        <h3 class="vertice-card-title">${e.name}</h3>

        <div class="size-selector-row">
          ${e.sizes.map(t=>`
            <button class="btn-size-chip ${t===n?`selected`:``}" data-product="${e.id}" data-size="${t}">
              ${t}
            </button>
          `).join(``)}
        </div>

        <div class="vertice-bottom-row">
          <span class="vertice-price">$${e.price.toLocaleString()} MXN</span>
          <button class="btn btn-silver btn-add-vertice" data-id="${e.id}" style="padding:0.5rem 0.9rem; font-size:0.72rem;">
            <span>AGREGAR</span>
          </button>
        </div>
      </div>
    </article>
  `}function O(){let e=c.apparel.filter(e=>(e.brand||`VÉRTICE`).toUpperCase()===`VÉRTICE`),t=c.apparel.filter(e=>(e.brand||`VÉRTICE`).toUpperCase()!==`VÉRTICE`);c.apparelActiveBrand!==`all`&&(t=t.filter(e=>e.brand===c.apparelActiveBrand)),l.verticeInHouseGrid&&(l.verticeInHouseGrid.innerHTML=e.map(e=>D(e,!0)).join(``)),l.verticeGuestGrid&&(t.length===0?l.verticeGuestGrid.innerHTML=`
        <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: var(--radius-md); border: 1px dashed rgba(255,255,255,0.1);">
          <p style="font-size: 0.95rem; color: #fff; margin-bottom: 0.3rem;">No hay prendas en este filtro de marca invitada.</p>
          <span style="font-size: 0.78rem;">Selecciona "Todas las Marcas Invitadas" para explorar el catálogo completo.</span>
        </div>
      `:l.verticeGuestGrid.innerHTML=t.map(e=>D(e,!1)).join(``)),document.querySelectorAll(`.btn-size-chip`).forEach(e=>{e.onclick=()=>{s.playClick();let t=e.dataset.product,n=e.dataset.size;c.verticeSelectedSizes[t]=n,O()}}),document.querySelectorAll(`.btn-add-vertice`).forEach(e=>{e.onclick=()=>{s.playClick();let t=c.apparel.find(t=>t.id===e.dataset.id);if(!t)return;let n=c.verticeSelectedSizes[t.id]||t.sizes[0];P({id:`vertice-${t.id}-${n}-${Date.now()}`,refId:t.id,type:`vertice`,name:`${t.name} (${t.brand||`VÉRTICE`})`,size:n,price:t.price,image:t.image}),u(`${t.name} (${t.brand||`VÉRTICE`}) [Talla ${n}] agregado`,`silver`),z()}})}function k(e){s.playClick();let t=c.perfumes.find(t=>t.id===e)||c.perfumes[0];if(!t)return;let n=t.notes?.salida?t.notes.salida.join(` • `):`Notas cítricas y aromáticas puras`,r=t.notes?.corazon?t.notes.corazon.join(` • `):`Acordes de alta perfumería`,i=t.notes?.fondo?t.notes.fondo.join(` • `):`Maderas nobles y ámbar`;l.modalProductContent.innerHTML=`
    <div>
      ${C(t.image,`modal-p-img`,t.name)}
    </div>
    <div>
      <span class="product-brand">${t.brand}</span>
      <h2 style="font-size:1.8rem; margin-bottom:0.4rem;">${t.name}</h2>
      <p style="font-size:0.88rem; margin-bottom:1rem;">${t.description||`Fragancia de alta gama decantada en atomizador metálico con grabado láser gratuito.`}</p>

      <div class="modal-notes-grid">
        <div class="note-tier">
          <strong>Notas de Salida:</strong>
          <span>${n}</span>
        </div>
        <div class="note-tier">
          <strong>Corazón del Perfume:</strong>
          <span>${r}</span>
        </div>
        <div class="note-tier">
          <strong>Fondo & Longevidad:</strong>
          <span>${i}</span>
        </div>
      </div>

      <div class="metrics-row">
        <div class="metric-pill">
          <small style="color:var(--text-subtle); display:block;">Longevidad</small>
          <strong>${t.metrics?.longevidad||`9/10 (8-10 hrs)`}</strong>
        </div>
        <div class="metric-pill">
          <small style="color:var(--text-subtle); display:block;">Estela</small>
          <strong>${t.metrics?.estela||`Magnética`}</strong>
        </div>
      </div>

      <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:8px; padding:0.9rem; margin:1rem 0;">
        <strong style="color:var(--gold-bright); font-size:0.82rem; display:block;">👕 Concept Fit Pairing:</strong>
        <p style="font-size:0.8rem; margin:0.2rem 0 0.5rem;">${t.verticePairing?.description||`Combínalo con prendas de algodón pesado para máxima presencia.`}</p>
        <span style="font-size:0.75rem; color:#55f3a0; font-weight:700;">¡Recibe -$${c.promotions.comboDiscount} MXN en tu bolsa al agregar una prenda!</span>
      </div>

      <div style="margin-top:1.5rem; display:flex; align-items:center; justify-content:space-between; gap:1rem;">
        <div>
          <span style="font-size:0.75rem; color:#888; text-transform:uppercase;">Decant 5ml (+70 sprays):</span>
          <h3 style="font-size:1.6rem; color:var(--gold-bright);">$${t.price5ml} MXN</h3>
        </div>
        <button class="btn btn-gold btn-large" id="btnModalAddToCart">
          <span>ORDENAR DECANT 5ML</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,document.getElementById(`btnModalAddToCart`).onclick=()=>{s.playSpray(),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),A(),u(`Decant ${t.name} agregado a tu bolsa`,`gold`),z()},l.productModal.classList.add(`open`)}function A(){l.productModal.classList.remove(`open`)}function j(){s.playClick(),c.quiz.step=0,c.quiz.answers={},N(),l.quizModal.classList.add(`open`)}function M(){l.quizModal.classList.remove(`open`)}function N(){let e=o[c.quiz.step];if(!e){ee();return}let t=(c.quiz.step+1)/o.length*100;l.quizContainer.innerHTML=`
    <div class="quiz-step-progress">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${t}%;"></div>
      </div>
    </div>
    <span class="section-tag">PREGUNTA ${c.quiz.step+1} DE ${o.length}</span>
    <h3 class="quiz-question-title">${e.question}</h3>

    <div class="quiz-options-list">
      ${e.options.map((e,t)=>`
        <button class="quiz-opt-btn" data-idx="${t}">
          <span class="quiz-opt-text">${e.text}</span>
          ${e.hint?`<span class="quiz-opt-hint">${e.hint}</span>`:``}
        </button>
      `).join(``)}
    </div>
  `,l.quizContainer.querySelectorAll(`.quiz-opt-btn`).forEach(t=>{t.onclick=()=>{s.playClick();let n=parseInt(t.dataset.idx,10),r=e.options[n];c.quiz.answers[e.id]=r,c.quiz.step++,N()}})}function ee(){s.playSuccess();let e=c.quiz.answers[1],t=c.perfumes.find(t=>t.category===(e?.category||`citas`))||c.perfumes[0];if(!d()){l.quizContainer.innerHTML=`
      <div class="quiz-result-card">
        <span class="section-tag">TU MATCH OLFATIVO IDEAL</span>
        <h2 style="font-size:1.8rem; margin:0.25rem 0 0.5rem;" class="text-gold-gradient">${t.name}</h2>
        <p style="font-size:0.88rem; max-width:440px; margin:0 auto;">${t.description}</p>
        
        ${C(t.image,`quiz-result-img`,t.name)}

        <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:10px; padding:1.2rem; margin:1.5rem 0; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <strong style="color:#fff; font-size:0.9rem;">Presentación Monolith (5ml Decant):</strong>
            <span style="font-size:1.2rem; font-weight:700; color:var(--gold-bright);">
              $${t.price5ml} MXN
            </span>
          </div>
          <p style="font-size:0.82rem; margin:0; color:#aaa;">
            Incluye atomizador de aluminio hermético con grabado láser personalizado gratuito.
          </p>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          <button class="btn btn-gold btn-large" id="btnAddOnlyPerfumeQuiz">
            <span>AGREGAR DECANT A LA BOLSA ($${t.price5ml} MXN)</span>
            <span>🛍️</span>
          </button>
          <button class="btn btn-outline-gold" id="btnGoToStudioFromQuiz">
            <span>PERSONALIZAR MI GRABADO LÁSER</span>
            <span>✨</span>
          </button>
        </div>
      </div>
    `,document.getElementById(`btnAddOnlyPerfumeQuiz`).onclick=()=>{s.playSpray(),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),M(),u(`Decant 5ml de ${t.name} agregado a tu bolsa`,`gold`),z()},document.getElementById(`btnGoToStudioFromQuiz`).onclick=()=>{M(),c.studio.perfume=t.id,l.selectStudioPerfume&&(l.selectStudioPerfume.value=t.id),b();let e=document.getElementById(`laserCustomizer`);e&&e.scrollIntoView({behavior:`smooth`})};return}let n=c.apparel.find(e=>e.id===(c.quiz.answers[2]?.verticePair||`v-hoodie-structural`))||c.apparel[0],r=c.promotions.comboDiscount||200;l.quizContainer.innerHTML=`
    <div class="quiz-result-card">
      <span class="section-tag">TU MATCH OLFATIVO IDEAL</span>
      <h2 style="font-size:1.8rem; margin:0.25rem 0 0.5rem;" class="text-gold-gradient">${t.name}</h2>
      <p style="font-size:0.88rem; max-width:440px; margin:0 auto;">${t.description}</p>
      
      ${C(t.image,`quiz-result-img`,t.name)}

      <div style="background:rgba(212,175,55,0.08); border:1px solid var(--gold-border); border-radius:10px; padding:1.2rem; margin:1.5rem 0; text-align:left;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <strong style="color:#fff; font-size:0.9rem;">Combo Fit Recomendado:</strong>
          <span style="background:#10b981; color:#000; font-size:0.65rem; font-weight:800; padding:0.2rem 0.5rem; border-radius:3px;">
            AHORRO -$${r} MXN
          </span>
        </div>
        <p style="font-size:0.82rem; margin-bottom:0.5rem;">
          Decant 5ml de <strong>${t.name}</strong> + <strong>${n.name}</strong> (${n.brand||`VÉRTICE`})
        </p>
        <span style="font-size:1.15rem; font-weight:700; color:var(--gold-bright);">
          $${(t.price5ml+n.price-r).toLocaleString()} MXN
        </span>
        <span style="font-size:0.8rem; color:#888; text-decoration:line-through; margin-left:0.5rem;">
          $${(t.price5ml+n.price).toLocaleString()} MXN
        </span>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        <button class="btn btn-gold btn-large" id="btnAddQuizCombo">
          <span>AGREGAR EL COMBO RECOMENDADO (-$${r} MXN)</span>
          <span>🛍️</span>
        </button>
        <button class="btn btn-outline-gold" id="btnOnlyPerfumeQuiz">
          <span>Solo llevar el Decant 5ml ($${t.price5ml} MXN)</span>
        </button>
      </div>
    </div>
  `,document.getElementById(`btnAddQuizCombo`).onclick=()=>{s.playSpray(),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),P({id:`vertice-${n.id}-${Date.now()}`,refId:n.id,type:`vertice`,name:`${n.name} (${n.brand||`VÉRTICE`})`,size:n.sizes[0],price:n.price,image:n.image}),M(),u(`¡Combo agregado con -$${r} MXN de descuento!`,`success`),z()},document.getElementById(`btnOnlyPerfumeQuiz`).onclick=()=>{s.playSpray(),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),M(),u(`Decant 5ml de ${t.name} agregado a tu bolsa`,`gold`),z()}}function P(e){let t=c.cart.findIndex(t=>t.refId===e.refId&&t.type===e.type&&t.size===e.size&&(!t.engraving||t.engraving.text===e.engraving?.text));t>-1?c.cart[t].qty+=e.qty||1:c.cart.push({...e,qty:e.qty||1}),L(),R()}function F(e,t){s.playClick(),c.cart[e]&&(c.cart[e].qty+=t,c.cart[e].qty<=0&&c.cart.splice(e,1)),L(),R()}function I(e){s.playClick(),c.cart.splice(e,1),L(),R()}function L(){localStorage.setItem(`aura_noir_cart`,JSON.stringify(c.cart))}function R(){let e=c.cart.reduce((e,t)=>e+t.qty,0);l.cartCountBadge.textContent=e,l.cartSubtitleSummary.textContent=`${e} ${e===1?`artículo`:`artículos`}`;let t=c.promotions.freeShippingMin||600,n=c.promotions.comboDiscount||200;if(c.cart.length===0){l.cartItemsList.innerHTML=`
      <div class="cart-empty-state">
        <div class="empty-icon">🛍️</div>
        <h4 style="margin-bottom:0.5rem; color:#fff;">Tu bolsa está vacía</h4>
        <p style="font-size:0.85rem; margin-bottom:1.5rem;">Descubre decants de lujo con grabado láser gratis o piezas del Concept Store.</p>
        <button class="btn btn-outline-gold" id="btnExploreFromCart">EXPLORAR CATÁLOGO</button>
      </div>
    `;let e=document.getElementById(`btnExploreFromCart`);e&&(e.onclick=()=>{B(),window.location.href=`#catalogoDecants`}),l.bundleBanner.classList.add(`hidden`),l.rowBundleDiscount.classList.add(`hidden`),l.cartSubtotal.textContent=`$0 MXN`,l.cartTotal.textContent=`$0 MXN`,l.cartPerkFill.style.width=`0%`,l.cartPerkText.textContent=`Agrega $${t} MXN para ENVÍO EXPRESS GRATIS en Tepic`;return}l.cartItemsList.innerHTML=c.cart.map((e,t)=>`
    <div class="cart-item">
      ${C(e.image,`cart-item-img`,e.name)}
      <div class="cart-item-info">
        <div class="cart-item-name">${e.name}</div>
        ${e.size?`<small style="color:#aaa; font-size:0.75rem;">Talla: <strong>${e.size}</strong></small>`:``}
        ${e.engraving?`
          <div class="cart-item-custom-laser">
            ✒️ Grabado: <strong>${e.engraving.text}</strong> (${e.engraving.color})
          </div>
        `:``}
        <div class="cart-item-price">$${(e.price*e.qty).toLocaleString()} MXN</div>

        <div class="cart-item-ctrls">
          <button class="qty-btn" onclick="window.appUpdateCartQty(${t}, -1)">-</button>
          <span class="qty-display">${e.qty}</span>
          <button class="qty-btn" onclick="window.appUpdateCartQty(${t}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="window.appRemoveCartItem(${t})">&times;</button>
    </div>
  `).join(``);let r=c.cart.reduce((e,t)=>e+t.price*t.qty,0),i=c.cart.some(e=>e.type===`decant`||e.type===`discovery`),a=c.cart.some(e=>e.type===`vertice`),o=i&&a?n:0;o>0?(l.bundleBanner.classList.remove(`hidden`),l.bundleBanner.innerHTML=`<span>🎉 <strong>¡Combo Élite Activado!</strong> Descuento cruzado de -$${n} MXN aplicado por combinar Decant + Prenda.</span>`,l.rowBundleDiscount.classList.remove(`hidden`),document.getElementById(`cartBundleDiscount`).textContent=`-$${n} MXN`):(l.bundleBanner.classList.add(`hidden`),l.rowBundleDiscount.classList.add(`hidden`));let s=Math.min(100,Math.round(r/t*100));if(l.cartPerkFill.style.width=`${s}%`,r>=t)l.cartPerkText.innerHTML=`✨ ¡Felicidades! Tienes <strong>ENVÍO EXPRESS GRATIS</strong> en Tepic`;else{let e=t-r;l.cartPerkText.innerHTML=`Agrega <strong>$${e.toLocaleString()} MXN</strong> para <strong>ENVÍO GRATIS</strong> en Tepic`}let u=o+c.promoDiscount,d=Math.max(0,r-u);l.cartSubtotal.textContent=`$${r.toLocaleString()} MXN`,l.cartTotal.textContent=`$${d.toLocaleString()} MXN`}window.appUpdateCartQty=F,window.appRemoveCartItem=I;function z(){s.playClick(),l.cartDrawer.classList.add(`open`),l.cartDrawerBackdrop.classList.add(`open`)}function B(){l.cartDrawer.classList.remove(`open`),l.cartDrawerBackdrop.classList.remove(`open`)}function V(){l.btnApplyPromo.onclick=()=>{s.playClick();let e=l.inputPromoCode.value.trim().toUpperCase();if(!e)return;let t=c.promotions.coupons.find(t=>t.code.toUpperCase()===e);if(t){let e=c.cart.reduce((e,t)=>e+t.price*t.qty,0);if(t.minPurchase&&e<t.minPurchase){u(`Este cupón es válido en compras mayores a $${t.minPurchase} MXN`,`warning`);return}let n=0;n=t.discountPercent?Math.round(e*t.discountPercent/100):t.discount||0,c.promoDiscount=n,c.promoCode=t.code,u(`¡Cupón ${t.code} aplicado! -$${n} MXN de descuento`,`success`),l.discountTag.classList.remove(`hidden`),l.discountAmount.textContent=`-$${n} MXN`}else{u(`Código no válido o expirado`,`gold`);return}R()}}function te(){c.cart.length===0?u(`Tu bolsa está vacía`,`gold`):(s.playClick(),B(),U(),l.checkoutModal.classList.add(`open`))}function H(){l.checkoutModal.classList.remove(`open`)}function U(){let e=c.cart.reduce((e,t)=>e+t.price*t.qty,0),t=c.cart.some(e=>e.type===`decant`||e.type===`discovery`),n=c.cart.some(e=>e.type===`vertice`),r=(t&&n?c.promotions.comboDiscount||200:0)+c.promoDiscount,i=0,a=c.promotions.freeShippingMin||600;i=c.deliveryMethod===`tepic-express`?e>=a?0:c.promotions.tepicShippingCost||50:c.deliveryMethod===`national`?c.promotions.nationalShippingCost||149:0,c.deliveryCost=i;let o=Math.max(0,e-r)+i;l.checkoutFinalTotal.textContent=`$${o.toLocaleString()} MXN`}function ne(){l.checkoutForm.querySelectorAll(`input[name="deliveryMethod"]`).forEach(e=>{e.onchange=e=>{s.playClick(),c.deliveryMethod=e.target.value,U()}}),l.checkoutForm.onsubmit=e=>{e.preventDefault(),s.playSuccess();let t=document.getElementById(`custName`).value.trim(),n=document.getElementById(`custPhone`).value.trim();document.getElementById(`custEmail`).value.trim();let r=document.getElementById(`custCity`).value.trim(),i=document.getElementById(`custAddress`).value.trim(),a=l.checkoutForm.querySelector(`input[name="paymentOption"]:checked`).value,o=`AN-${Math.floor(1e4+Math.random()*9e4)}`,u=c.cart.reduce((e,t)=>e+t.price*t.qty,0),d=c.cart.some(e=>e.type===`decant`||e.type===`discovery`),f=c.cart.some(e=>e.type===`vertice`),p=d&&f?c.promotions.comboDiscount||200:0,m=Math.max(0,u-p-c.promoDiscount)+c.deliveryCost,h=`Entrega Express Tepic`;c.deliveryMethod===`tepic-pickup`&&(h=`Pick-up Ciudad del Valle / Plaza Fórum`),c.deliveryMethod===`national`&&(h=`Envío Nacional México`);let g=`Mercado Pago / Tarjeta`;a===`spei`&&(g=`Transferencia SPEI`),a===`cash`&&(g=`Efectivo contra-entrega (Tepic)`),l.successTicketBox.innerHTML=`
      <div class="ticket-header">
        <strong>Orden: ${o}</strong>
        <span style="color:var(--gold-bright);">RECIBIDO</span>
      </div>

      <div class="ticket-items-list">
        ${c.cart.map(e=>`
          <div class="ticket-item-row">
            <div>
              <span>${e.qty}x ${e.name}</span>
              ${e.engraving?`<small>✒️ Láser: "${e.engraving.text}"</small>`:``}
              ${e.size?`<small>Talla: ${e.size}</small>`:``}
            </div>
            <span>$${(e.price*e.qty).toLocaleString()} MXN</span>
          </div>
        `).join(``)}
      </div>

      <div style="font-size:0.75rem; color:#888; margin-bottom:0.75rem;">
        <div>📍 <strong>Entrega:</strong> ${h} ($${c.deliveryCost} MXN)</div>
        <div>👤 <strong>Cliente:</strong> ${t} (${n})</div>
        <div>🏠 <strong>Dirección:</strong> ${i}, ${r}</div>
        <div>💳 <strong>Método de Pago:</strong> ${g}</div>
      </div>

      <div class="ticket-total-row">
        <span>TOTAL OFICIAL:</span>
        <span style="color:var(--gold-bright); font-size:1.15rem;">$${m.toLocaleString()} MXN</span>
      </div>
    `;let _=c.cart.map(e=>{let t=`- ${e.qty}x ${e.name} ($${e.price*e.qty} MXN)`;return e.engraving&&(t+=` [Láser: "${e.engraving.text}"]`),e.size&&(t+=` [Talla: ${e.size}]`),t}).join(`
`),v=encodeURIComponent(`⚜️ *NUEVO PEDIDO AURA NOIR & CONCEPT STORE*\n\n*Orden:* #${o}\n*Cliente:* ${t}\n*Teléfono:* ${n}\n*Ciudad / Dirección:* ${i}, ${r}\n*Método de Entrega:* ${h}\n*Método de Pago:* ${g}\n\n*Artículos:*\n${_}\n\n`+(p>0?`🎉 *Descuento Combo Fit:* -$${p} MXN\n`:``)+(c.promoDiscount>0?`🏷️ *Cupón (${c.promoCode}):* -$${c.promoDiscount} MXN\n`:``)+`📦 *Costo de Envío:* $${c.deliveryCost} MXN\n💰 *TOTAL A PAGAR:* $${m.toLocaleString()} MXN\n\nFavor de confirmar recepción y detalles de preparación. ¡Gracias!`);l.btnWhatsappShare.href=`https://wa.me/523110000000?text=${v}`,c.cart=[],c.promoDiscount=0,c.promoCode=null,L(),R(),H(),l.orderSuccessModal.classList.add(`open`)}}var W=!1;function re(e){if(e.id)return`#${e.id}`;let t=[],n=e;for(;n&&n.parentNode&&n.tagName!==`BODY`&&n.tagName!==`HTML`;){let e=0,r=0,i=n.parentNode;for(let t=0;t<i.children.length;t++){let a=i.children[t];a.tagName===n.tagName&&(a===n&&(e=r),r++)}let a=n.tagName.toLowerCase();t.unshift(r>1?`${a}:nth-of-type(${e+1})`:a),n=i}return t.join(` > `)}function ie(e){if(!e||e.nodeType!==1||e.closest(`#liveEditorToolbar`)||e.closest(`.modal-backdrop`)||e.closest(`.toast-container`))return!1;let t=e.tagName.toUpperCase();return[`SCRIPT`,`STYLE`,`INPUT`,`TEXTAREA`,`SELECT`,`OPTION`,`SVG`,`PATH`,`IMG`,`VIDEO`,`AUDIO`].includes(t)||!(e.textContent||``).trim()?!1:!!(e.children.length===0||[`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`P`,`LI`,`SPAN`,`STRONG`,`B`,`EM`,`SMALL`,`A`,`BUTTON`,`LABEL`,`BLOCKQUOTE`].includes(t))}function G(){let e=JSON.parse(localStorage.getItem(`aura_site_texts`)||`{}`);document.querySelectorAll(`#appMain *, #siteHeader *, #announcementBar *, #siteFooter *, .discovery-section *, .catalog-section *, .concept-bridge-section *, .testimonials-section *, .laser-studio-section *`).forEach(t=>{if(!ie(t))return;let n=t.dataset.editable;n||(n=re(t),t.dataset.editable=n),e[n]!==void 0&&(t.innerHTML=e[n])})}function K(e){W=e,document.body.classList.toggle(`visual-editor-active`,e),G();let t=document.querySelectorAll(`[data-editable]`);t.forEach(t=>{e?(t.setAttribute(`contenteditable`,`true`),t.setAttribute(`spellcheck`,`false`)):(t.removeAttribute(`contenteditable`),t.removeAttribute(`spellcheck`))}),e?(l.adminModal&&l.adminModal.classList.remove(`open`),u(`✏️ Editor Visual Activado: ${t.length} elementos listos para editar.`,`gold`),s.playClick()):u(`Modo de edición finalizado.`,`info`)}function ae(){let e={};document.querySelectorAll(`[data-editable]`).forEach(t=>{let n=t.dataset.editable;n&&(e[n]=t.innerHTML)}),localStorage.setItem(`aura_site_texts`,JSON.stringify(e)),s.playLaser(),u(`💾 ¡Guardado! Se actualizaron ${Object.keys(e).length} elementos de la tienda.`,`success`)}function oe(){confirm(`¿Deseas restablecer todos los textos originales de la página a sus valores iniciales?`)&&(localStorage.removeItem(`aura_site_texts`),u(`Textos restablecidos a los originales de fábrica.`,`info`),setTimeout(()=>window.location.reload(),400))}document.addEventListener(`click`,e=>{if(!W||e.target.closest(`#liveEditorToolbar`)||e.target.closest(`.modal-card`))return;let t=e.target.closest(`[data-editable]`);t&&(t.tagName===`A`||t.tagName===`BUTTON`||t.closest(`a`)||t.closest(`button`))&&(e.preventDefault(),t.focus())},!0);function se(){l.adminTabs.forEach(e=>{e.onclick=()=>{s.playClick(),l.adminTabs.forEach(e=>e.classList.remove(`active`)),l.adminTabPanes.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.tab;document.getElementById(t).classList.add(`active`),c.admin.activeTab=t}});let e=()=>{s.playClick(),q(),l.adminModal.classList.add(`open`)},n=()=>{l.adminModal.classList.remove(`open`),(window.location.hash===`#admin`||window.location.hash===`#backoffice`)&&history.replaceState(null,null,window.location.pathname+window.location.search)};window.appRequestAdminAccess=()=>{sessionStorage.getItem(`aura_admin_auth`)===`true`?e():l.adminAuthModal&&(l.adminAuthModal.classList.add(`open`),l.inputAdminPin&&(l.inputAdminPin.value=``,setTimeout(()=>l.inputAdminPin.focus(),150)),l.adminAuthError&&(l.adminAuthError.style.display=`none`))},l.formAdminAuth&&(l.formAdminAuth.onsubmit=t=>{t.preventDefault(),(l.inputAdminPin.value||``).trim()===(localStorage.getItem(`aura_admin_pin`)||`2026`)?(sessionStorage.setItem(`aura_admin_auth`,`true`),l.adminAuthModal.classList.remove(`open`),e(),u(`🔓 Acceso concedido al Back Office`,`success`)):(l.adminAuthError&&(l.adminAuthError.style.display=`block`,l.inputAdminPin.focus(),l.inputAdminPin.select()),s.playClick())}),l.btnCancelAdminAuth&&(l.btnCancelAdminAuth.onclick=()=>{l.adminAuthModal.classList.remove(`open`),(window.location.hash===`#admin`||window.location.hash===`#backoffice`)&&history.replaceState(null,null,window.location.pathname+window.location.search)});let a=()=>{let e=(window.location.hash||``).toLowerCase(),t=new URLSearchParams(window.location.search);(e===`#admin`||e===`#backoffice`||t.has(`admin`))&&window.appRequestAdminAccess()};window.addEventListener(`hashchange`,a),a();let o=0,p=null;document.querySelectorAll(`.secret-admin-trigger`).forEach(e=>{e.style.cursor=`default`,e.onclick=()=>{o++,clearTimeout(p),o>=3?(o=0,window.appRequestAdminAccess()):p=setTimeout(()=>{o=0},1200)}}),l.btnCloseAdmin&&(l.btnCloseAdmin.onclick=n),l.btnLaunchVisualEditor&&(l.btnLaunchVisualEditor.onclick=()=>{K(!0)}),l.btnSaveVisualEdits&&(l.btnSaveVisualEdits.onclick=ae),l.btnResetVisualEdits&&(l.btnResetVisualEdits.onclick=oe),l.btnExitVisualEditor&&(l.btnExitVisualEditor.onclick=()=>K(!1)),l.btnChangeAdminPin&&l.inputNewAdminPin&&(l.btnChangeAdminPin.onclick=()=>{let e=l.inputNewAdminPin.value.trim();!e||e.length<4?u(`El PIN debe tener al menos 4 caracteres`,`warning`):(localStorage.setItem(`aura_admin_pin`,e),l.inputNewAdminPin.value=``,u(`PIN Maestro actualizado correctamente a: ${e}`,`success`))}),l.adminToggleVertice&&(l.adminToggleVertice.checked=d(),l.adminToggleVertice.onchange=e=>{f(e.target.checked)}),l.btnToggleVerticeAction&&(l.btnToggleVerticeAction.onclick=e=>{e.preventDefault(),f(!d())}),l.btnAdminAddPerfume.onclick=()=>Y(`perfume`,null),l.btnAdminAddApparel.onclick=()=>Y(`apparel`,null),l.btnAdminAddCoupon.onclick=()=>Y(`coupon`,null),l.btnSavePromoSettings.onclick=()=>{s.playClick(),c.promotions.comboDiscount=parseInt(l.inputSettingComboDiscount.value,10)||200,c.promotions.freeShippingMin=parseInt(l.inputSettingFreeShipping.value,10)||600,c.promotions.tepicShippingCost=parseInt(l.inputSettingTepicShipping.value,10)||50,c.promotions.nationalShippingCost=parseInt(l.inputSettingNationalShipping.value,10)||149,$(),R(),u(`Reglas de promociones y envíos actualizadas`,`success`)},l.btnExportDataJs.onclick=ue,l.btnResetToDefaults.onclick=()=>{confirm(`¿Estás seguro de que deseas restablecer todos los productos y promociones a sus valores iniciales de fábrica?`)&&(s.playClick(),localStorage.removeItem(`aura_perfumes_data`),localStorage.removeItem(`aura_apparel_data`),localStorage.removeItem(`aura_promotions_data`),c.perfumes=[...t],c.apparel=[...r],c.promotions={...i},q(),w(),E(),O(),y(),b(),R(),u(`Se han restaurado los datos de fábrica correctamente`,`success`))},l.btnCloseItemForm.onclick=X,l.btnCancelItemForm.onclick=X,l.adminItemForm.onsubmit=le}function q(){l.adminPerfumesCountTag.textContent=`Catálogo de Decants (${c.perfumes.length})`,l.adminPerfumesTableBody.innerHTML=c.perfumes.map((e,t)=>`
    <tr>
      <td>${C(e.image,`admin-thumb-cell`,e.name)}</td>
      <td><strong>${e.name}</strong><br><small style="color:#888;">${e.categoryLabel||e.category}</small></td>
      <td>${e.brand}</td>
      <td style="color:var(--gold-bright); font-weight:700;">$${e.price5ml} MXN</td>
      <td>$${(e.fullBottlePrice||0).toLocaleString()} MXN</td>
      <td><span class="product-badge" style="position:static;">${e.badge||`Decant`}</span></td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-admin-btn" onclick="window.appEditPerfume('${e.id}')">Editar</button>
          <button class="btn-admin-btn btn-admin-del" onclick="window.appDeletePerfume('${e.id}')">&times;</button>
        </div>
      </td>
    </tr>
  `).join(``);let e=[...new Set(c.apparel.map(e=>e.brand||`VÉRTICE`))];l.adminApparelCountTag.textContent=`Prendas (${c.apparel.length}) • Marcas: ${e.join(`, `)}`,l.adminApparelTableBody.innerHTML=c.apparel.map((e,t)=>`
    <tr>
      <td>${C(e.image,`admin-thumb-cell`,e.name)}</td>
      <td><strong>${e.name}</strong></td>
      <td><span class="vertice-brand-tag" style="margin:0;">${e.brand||`VÉRTICE`}</span></td>
      <td style="color:#fff; font-weight:700;">$${e.price.toLocaleString()} MXN</td>
      <td>${e.stockRemaining} pzs</td>
      <td>${e.sizes.join(`, `)}</td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-admin-btn" onclick="window.appEditApparel('${e.id}')">Editar</button>
          <button class="btn-admin-btn btn-admin-del" onclick="window.appDeleteApparel('${e.id}')">&times;</button>
        </div>
      </td>
    </tr>
  `).join(``),l.inputSettingComboDiscount.value=c.promotions.comboDiscount||200,l.inputSettingFreeShipping.value=c.promotions.freeShippingMin||600,l.inputSettingTepicShipping.value=c.promotions.tepicShippingCost||50,l.inputSettingNationalShipping.value=c.promotions.nationalShippingCost||149,l.adminCouponsTableBody.innerHTML=c.promotions.coupons.map((e,t)=>`
    <tr>
      <td><strong style="color:var(--gold-bright);">${e.code}</strong></td>
      <td style="color:#10b981; font-weight:700;">-$${e.discount} MXN</td>
      <td>${e.description||`Descuento oficial`}</td>
      <td>
        <button class="btn-admin-btn btn-admin-del" onclick="window.appDeleteCoupon('${e.code}')">Eliminar</button>
      </td>
    </tr>
  `).join(``)}window.appEditPerfume=e=>Y(`perfume`,e),window.appDeletePerfume=e=>{confirm(`¿Eliminar este perfume del catálogo?`)&&(s.playClick(),c.perfumes=c.perfumes.filter(t=>t.id!==e),Z(),q(),w(),y(),u(`Perfume eliminado`,`gold`))},window.appEditApparel=e=>Y(`apparel`,e),window.appDeleteApparel=e=>{confirm(`¿Eliminar esta prenda del catálogo?`)&&(s.playClick(),c.apparel=c.apparel.filter(t=>t.id!==e),Q(),q(),E(),O(),u(`Prenda eliminada`,`silver`))},window.appDeleteCoupon=e=>{s.playClick(),c.promotions.coupons=c.promotions.coupons.filter(t=>t.code!==e),$(),q(),u(`Cupón ${e} eliminado`,`gold`)};function J(e=``,t=`Foto o Video del Producto`){let n=e&&(e.startsWith(`data:video/`)||e.endsWith(`.mp4`)||e.endsWith(`.webm`)||e.endsWith(`.mov`)||e.includes(`/video`));return`
    <div class="form-field-row">
      <label>${t}</label>
      
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
          <input type="text" id="mediaUrlTextInput" placeholder="https://ejemplo.com/foto.jpg o video.mp4" value="${e&&!e.startsWith(`data:`)?e:``}">
        </div>

        <!-- Live Media Preview -->
        <div class="media-preview-container" id="mediaLivePreviewContainer" style="${e?``:`display:none;`}">
          <div id="mediaLivePreviewHolder">
            ${e?C(e,`media-live-preview`,`Previsualización`):``}
          </div>
          <div class="media-preview-info">
            <strong id="mediaPreviewStatus">${n?`🎬 Video cargado`:`🖼️ Imagen cargada`}</strong>
            <span id="mediaPreviewType">${e.startsWith(`data:`)?`Archivo local listo para guardar`:`Enlace web`}</span>
          </div>
          <button type="button" class="btn-admin-btn btn-admin-del" id="btnClearMediaPreview" title="Quitar">&times;</button>
        </div>

        <!-- Hidden Input holding the real media value to submit -->
        <input type="hidden" name="image" id="inputItemMediaValue" value="${e||``}">
      </div>
    </div>
  `}function ce(){let e=document.getElementById(`btnModeUpload`),t=document.getElementById(`btnModeUrl`),n=document.getElementById(`mediaUploadModeDevice`),r=document.getElementById(`mediaUploadModeUrl`),i=document.getElementById(`mediaDropzoneArea`),a=document.getElementById(`mediaDeviceFileInput`),o=document.getElementById(`mediaUrlTextInput`),c=document.getElementById(`inputItemMediaValue`),l=document.getElementById(`mediaLivePreviewContainer`),u=document.getElementById(`mediaLivePreviewHolder`),d=document.getElementById(`mediaPreviewStatus`),f=document.getElementById(`mediaPreviewType`),p=document.getElementById(`btnClearMediaPreview`);if(!e)return;e.onclick=()=>{e.classList.add(`active`),t.classList.remove(`active`),n.style.display=`block`,r.style.display=`none`},t.onclick=()=>{t.classList.add(`active`),e.classList.remove(`active`),n.style.display=`none`,r.style.display=`block`},i.onclick=()=>{a.click()};let m=e=>{if(!e)return;let t=e.type.startsWith(`video/`),n=new FileReader;n.onload=n=>{let r=n.target.result;c.value=r,u.innerHTML=C(r,`media-live-preview`,`Previsualización`),d.textContent=t?`🎬 Video: ${e.name}`:`🖼️ Imagen: ${e.name}`,f.textContent=`${(e.size/1024).toFixed(0)} KB • Archivo Local`,l.style.display=`flex`,s.playClick()},n.readAsDataURL(e)};a.onchange=e=>{let t=e.target.files[0];m(t)},i.ondragover=e=>{e.preventDefault(),i.style.borderColor=`var(--gold-primary)`},i.ondragleave=()=>{i.style.borderColor=``},i.ondrop=e=>{e.preventDefault(),i.style.borderColor=``,e.dataTransfer.files&&e.dataTransfer.files[0]&&m(e.dataTransfer.files[0])},o&&(o.oninput=e=>{let t=e.target.value.trim();c.value=t,t?(u.innerHTML=C(t,`media-live-preview`,`Previsualización`),d.textContent=`Enlace externo ingresado`,f.textContent=t,l.style.display=`flex`):l.style.display=`none`}),p&&(p.onclick=()=>{c.value=``,o&&(o.value=``),l.style.display=`none`,u.innerHTML=``,a.value=``})}function Y(e,t){if(s.playClick(),c.admin.editingType=e,c.admin.editingId=t,e===`perfume`){let e=t?c.perfumes.find(e=>e.id===t):null;l.adminFormTitle.textContent=e?`Editar: ${e.name}`:`Agregar Nuevo Decant`,l.adminFormFields.innerHTML=`
      <div class="form-field-row">
        <label>Nombre de la Fragancia</label>
        <input type="text" name="name" value="${e?e.name:``}" required placeholder="ej. Baccarat Rouge 540">
      </div>
      <div class="form-field-row">
        <label>Casa Perfumista / Marca</label>
        <input type="text" name="brand" value="${e?e.brand:``}" required placeholder="ej. Maison Francis Kurkdjian">
      </div>
      <div class="form-field-row">
        <label>Precio Decant 5ml (MXN)</label>
        <input type="number" name="price5ml" value="${e?e.price5ml:380}" required>
      </div>
      <div class="form-field-row">
        <label>Precio Referencia Botella Completa Oficial (MXN)</label>
        <input type="number" name="fullBottlePrice" value="${e&&e.fullBottlePrice||5e3}" required>
      </div>
      <div class="form-field-row">
        <label>Categoría / Ocasión</label>
        <select name="category">
          <option value="citas" ${e?.category===`citas`?`selected`:``}>🌙 Citas & Seducción</option>
          <option value="proyeccion" ${e?.category===`proyeccion`?`selected`:``}>⚡ Modo Bestia / Estatus</option>
          <option value="clean" ${e?.category===`clean`?`selected`:``}>🫧 Clean Boy & Día</option>
          <option value="gourmand" ${e?.category===`gourmand`?`selected`:``}>🍯 Nicho Gourmand</option>
        </select>
      </div>
      <div class="form-field-row">
        <label>Etiqueta / Badge</label>
        <input type="text" name="badge" value="${e?e.badge||``:`Bestseller`}">
      </div>
      ${J(e?e.image:``,`Foto o Video del Perfume`)}
      <div class="form-field-row">
        <label>Descripción Olfativa Breve</label>
        <textarea name="description" rows="2">${e?e.description:``}</textarea>
      </div>
    `}else if(e===`apparel`){let e=t?c.apparel.find(e=>e.id===t):null;l.adminFormTitle.textContent=e?`Editar: ${e.name}`:`Agregar Nueva Prenda`,l.adminFormFields.innerHTML=`
      <div class="form-field-row">
        <label>Nombre de la Prenda</label>
        <input type="text" name="name" value="${e?e.name:``}" required placeholder="ej. Structural Heavyweight Hoodie">
      </div>
      <div class="form-field-row">
        <label>Marca / Diseñador (ej. VÉRTICE, OBSIDIAN ARCHIVE, ATELIER NAYARIT, etc.)</label>
        <input type="text" name="brand" value="${e&&e.brand||`VÉRTICE`}" required placeholder="Escribe o asigna la marca">
      </div>
      <div class="form-field-row">
        <label>Precio (MXN)</label>
        <input type="number" name="price" value="${e?e.price:950}" required>
      </div>
      <div class="form-field-row">
        <label>Inventario Disponible (Piezas)</label>
        <input type="number" name="stockRemaining" value="${e?e.stockRemaining:15}" required>
      </div>
      <div class="form-field-row">
        <label>Tallas (Separadas por comas)</label>
        <input type="text" name="sizes" value="${e?e.sizes.join(`, `):`S, M, L, XL`}" required>
      </div>
      <div class="form-field-row">
        <label>Etiqueta / Badge</label>
        <input type="text" name="badge" value="${e?e.badge:`Drop 01`}">
      </div>
      ${J(e?e.image:``,`Foto o Video de la Prenda`)}
      <div class="form-field-row">
        <label>Descripción / Especificaciones</label>
        <textarea name="description" rows="2">${e?e.description:``}</textarea>
      </div>
    `}else e===`coupon`&&(l.adminFormTitle.textContent=`Crear Nuevo Cupón de Descuento`,l.adminFormFields.innerHTML=`
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
    `);l.adminItemFormModal.classList.add(`open`),ce()}function X(){l.adminItemFormModal.classList.remove(`open`)}function le(e){e.preventDefault(),s.playSuccess();let t=new FormData(l.adminItemForm);if(c.admin.editingType===`perfume`){let e={name:t.get(`name`).trim(),brand:t.get(`brand`).trim(),price5ml:parseInt(t.get(`price5ml`),10),fullBottlePrice:parseInt(t.get(`fullBottlePrice`),10),category:t.get(`category`),badge:t.get(`badge`).trim(),image:t.get(`image`).trim(),description:t.get(`description`).trim()};if(c.admin.editingId){let t=c.perfumes.findIndex(e=>e.id===c.admin.editingId);t>-1&&(c.perfumes[t]={...c.perfumes[t],...e})}else{let t=`p-${Date.now()}`;c.perfumes.push({id:t,...e,rating:5,reviewsCount:1,notes:{salida:[`Esencia Pura`],corazon:[`Notas de Autor`],fondo:[`Fijador de Lujo`]},metrics:{longevidad:`9/10 (8-10 hrs)`,estela:`Magnética`},verticePairing:{title:`Signature Fit`,description:`Combina perfectamente con prendas pesadas VÉRTICE.`,discount:200}})}Z(),w(),y(),b(),u(`Perfume guardado con éxito`,`gold`)}else if(c.admin.editingType===`apparel`){let e=t.get(`sizes`).split(`,`).map(e=>e.trim().toUpperCase()).filter(Boolean),n={name:t.get(`name`).trim(),brand:t.get(`brand`).trim().toUpperCase(),price:parseInt(t.get(`price`),10),stockRemaining:parseInt(t.get(`stockRemaining`),10),sizes:e.length>0?e:[`S`,`M`,`L`,`XL`],badge:t.get(`badge`).trim(),image:t.get(`image`).trim(),description:t.get(`description`).trim()};if(c.admin.editingId){let e=c.apparel.findIndex(e=>e.id===c.admin.editingId);e>-1&&(c.apparel[e]={...c.apparel[e],...n})}else{let e=`apparel-${Date.now()}`;c.apparel.push({id:e,...n,category:`clothing`,details:[`Algodón peinado de alto gramaje`,`Confección contemporánea`]})}Q(),E(),O(),u(`Prenda y marca guardadas con éxito`,`silver`)}else if(c.admin.editingType===`coupon`){let e=t.get(`code`).trim().toUpperCase(),n=parseInt(t.get(`discount`),10),r=t.get(`description`).trim();c.promotions.coupons.push({code:e,discount:n,description:r}),$(),u(`Cupón ${e} creado con éxito`,`gold`)}q(),X()}function Z(){localStorage.setItem(`aura_perfumes_data`,JSON.stringify(c.perfumes))}function Q(){localStorage.setItem(`aura_apparel_data`,JSON.stringify(c.apparel))}function $(){localStorage.setItem(`aura_promotions_data`,JSON.stringify(c.promotions))}function ue(){s.playSuccess();let e=`export const PERFUMES_DATA = ${JSON.stringify(c.perfumes,null,2)};\n\nexport const DISCOVERY_SETS = ${JSON.stringify(n,null,2)};\n\nexport const VERTICE_DATA = ${JSON.stringify(c.apparel,null,2)};\n\nexport const DEFAULT_PROMOTIONS = ${JSON.stringify(c.promotions,null,2)};\n\nexport const ATOMIZER_COLORS = ${JSON.stringify(a,null,2)};\n\nexport const QUIZ_QUESTIONS = ${JSON.stringify(o,null,2)};\n`,t=new Blob([e],{type:`application/javascript;charset=utf-8;`}),r=URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.setAttribute(`download`,`data.js`),document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),u(`Archivo data.js generado y descargado con éxito`,`success`)}function de(){l.btnSwitchAura.onclick=()=>m(`aura`),l.btnSwitchVertice.onclick=()=>m(`vertice`),l.brandIdentityLink.onclick=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})},l.btnGoToVerticeFromBridge.onclick=()=>m(`vertice`),l.btnBackToAuraFromHero.onclick=()=>m(`aura`),l.btnSwitchToAuraFromVerticeBanner.onclick=()=>m(`aura`),l.footerLinkVertice&&(l.footerLinkVertice.onclick=e=>{e.preventDefault(),m(`vertice`)}),l.btnQuickAddTeeCombo&&(l.btnQuickAddTeeCombo.onclick=()=>{s.playSpray();let e=c.apparel.find(e=>e.category===`in-house`)||c.apparel[0],t=c.perfumes[0],n=c.promotions.comboDiscount||200;P({id:`vertice-${e.id}-${Date.now()}`,refId:e.id,type:`vertice`,name:`${e.name} (${e.brand||`VÉRTICE`})`,size:e.sizes[1]||e.sizes[0],price:e.price,image:e.image}),P({id:`decant-${t.id}-${Date.now()}`,refId:t.id,type:`decant`,name:`${t.name} (5ml)`,brand:t.brand,price:t.price5ml,image:t.image,engraving:{text:`AURA NOIR`,color:`noir`,font:`font-serif`}}),u(`¡Combo Playera + Decant agregado con -$${n} MXN de descuento!`,`success`),z()}),l.btnAddDiscoverySet.onclick=()=>{s.playSpray();let e=n[0];P({id:`set-${e.id}-${Date.now()}`,refId:e.id,type:`discovery`,name:`Aura Noir Monolith Set (3x5ml) + Tarjeta VIP 15% OFF`,price:e.price,image:`./aura-discovery-box-vip15.jpg?v=auranext`,engraving:{text:`MONOLITH VIP`,color:`noir`,font:`font-serif`}}),u(`Cofre Monolith + Tarjeta VIP 15% OFF agregados a tu bolsa`,`gold`),z()},l.btnOpenCart.onclick=z,l.btnCloseCart.onclick=B,l.cartDrawerBackdrop.onclick=B,l.btnGoToCheckout.onclick=te,l.btnOpenQuiz.onclick=j,l.btnCloseQuiz.onclick=M,l.footerLinkQuiz&&(l.footerLinkQuiz.onclick=e=>{e.preventDefault(),j()}),l.btnCloseProductModal.onclick=A,l.productModal.onclick=e=>{e.target===l.productModal&&A()},l.quizModal.onclick=e=>{e.target===l.quizModal&&M()},l.btnCloseCheckout.onclick=H,l.checkoutModal.onclick=e=>{e.target===l.checkoutModal&&H()},l.btnCloseSuccessModal.onclick=()=>{l.orderSuccessModal.classList.remove(`open`)},window.addEventListener(`keydown`,e=>{e.ctrlKey&&e.shiftKey&&e.code===`KeyV`&&(e.preventDefault(),f(!d())),(e.ctrlKey&&e.shiftKey&&e.code===`KeyA`||e.altKey&&e.code===`KeyA`)&&(e.preventDefault(),typeof window.appRequestAdminAccess==`function`&&window.appRequestAdminAccess()),(e.ctrlKey&&e.shiftKey&&e.code===`KeyE`||e.altKey&&e.code===`KeyE`)&&(e.preventDefault(),K(!W))})}document.addEventListener(`DOMContentLoaded`,()=>{p(),h(),g(),T(),w(),E(),O(),V(),ne(),se(),de(),R(),G()});