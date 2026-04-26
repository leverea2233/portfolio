// ==========================================
// 1. VARIABLES GLOBALES (ESTO ARREGLA LOS ERRORES)
// ==========================================
const DB_KEY = 'leonardo_portfolio_v125';
let activeType = null;
let currentCat = '';
let isViewMode = false;

const defaultData = {
    about: { 
        text: `<div class="content-padding">
            <div class="column-grid">
                <div class="left-col" contenteditable="true">
                    <p>Valencia, España</p>
                    <p>le.verea2233@gmail.com<br>@le.verea</p>
                </div>
                <div class="right-col" contenteditable="true">
                    <p>Hay algo en la oscuridad que dice más que cualquier explicación.</p>
                    <p>Trabajo con imágenes donde lo oscuro y lo humano se cruzan sin aviso. No busco claridad, busco fricción.</p>
                </div>
            </div>
            <div class="column-grid">
                <div class="left-col"><span class="section-label">¿Quién soy?</span></div>
                <div class="right-col" contenteditable="true">
                    <p>Soy originario de Ciudad de México... Mi trabajo busca encontrar orden dentro del ruido.</p>
                </div>
            </div>
            <div class="column-grid">
                <div class="left-col"><span class="section-label">Educación</span></div>
                <div class="right-col" contenteditable="true">
                    <p><strong>2025 – Presente</strong><br>Grado en Comunicación Audiovisual<br>Valencia, España</p>
                    <p><strong>2022 – 2025</strong><br>Bachillerato Prepa Ibero, CDMX</p>
                </div>
            </div>
        </div>`
    },
    experience: {
        text_yogurt: `<div class="content-padding cargo-line-block"><div class="cargo-header-grid" contenteditable="true"><div><strong>01 YOGÜRT</strong><br>Cofundador</div><div>CDMX, 2022</div><div>Productora independiente enfocada en la creación de cortometrajes...</div></div></div>`,
        text_prod2: `<div class="content-padding cargo-line-block" style="margin-top: 20px;"><div class="cargo-header-grid" contenteditable="true"><div><strong>02 ROVERS AT LARGE</strong><br>Dirección</div><div>Valencia, 2026</div><div>Descripción Cargo.</div></div></div>`
    },
    architecture: { images: Array.from({length: 20}, (_, i) => `img/architecture/${i+1}.jpg`) },
    artistic: { images: Array.from({length: 20}, (_, i) => `img/artistic/${i+1}.jpg`) },
    modeling: { 
        images: [
            "img/modeling/DSC_6197.jpg", "img/modeling/DSC_6199.jpg", "img/modeling/DSC_6243.jpg", "img/modeling/DSC_7557.jpg", "img/modeling/DSC_7560.jpg",
            "img/modeling/DSC_7652-3.jpg", "img/modeling/DSC_7685.jpg", "img/modeling/DSC_7697.jpg", "img/modeling/DSC_7699.jpg", "img/modeling/DSC_7747.jpg",
            "img/modeling/DSC_7750.jpg", "img/modeling/DSC_7773.jpg", "img/modeling/DSC_7822.jpg", "img/modeling/DSC_7920.jpg", "img/modeling/DSC_8032.jpg",
            "img/modeling/DSC_8060.jpg", "img/modeling/DSC_8114.jpg", "img/modeling/DSC_8201.jpg", "img/modeling/DSC_8308.jpg", "img/modeling/DSC_8358.jpg",
            "img/modeling/IMG_3799.jpg", "img/modeling/IMG_3812.jpg", "img/modeling/IMG_3855.jpg", "img/modeling/IMG_3883.jpg"
        ] 
    },
    exp_yogurt: { 
        images: [
            "img/experience/yogurt/1.png", "img/experience/yogurt/2 \"Cultura le llaman\".mp4", 
            "img/experience/yogurt/3\"Ciudades Desiertas \".mp4", "img/experience/yogurt/4 \"Hambre\".mp4", 
            "img/experience/yogurt/5.jpg", "img/experience/yogurt/6 \"personal docente\".mp4", 
            "img/experience/yogurt/7 \"Muriendo de Envidia\".mp4", "img/experience/yogurt/8.jpg"
        ] 
    },
    exp_prod2: { images: Array.from({length: 8}, (_, i) => `img/experience/rovers/${i+1}.jpg`) },
    iconPositions: {},
    iconImages: {
        about: "img/icons/about me.png",
        architecture: "img/icons/arquitectura/modelaje/arte.png",
        artistic: "img/icons/arquitectura/modelaje/arte.png",
        modeling: "img/icons/arquitectura/modelaje/arte.png",
        experience: "img/icons/experiencia previa.png",
        insta: "img/icons/instagram.png",
        contact: "img/icons/contact.png"
    },
    wallpaper: ''
};

let currentData = defaultData;

// ==========================================
// 2. FUNCIONES DE SISTEMA
// ==========================================

function saveData() { localStorage.setItem(DB_KEY, JSON.stringify(currentData)); }

setInterval(() => {
    const el = document.getElementById('live-clock');
    if(el) el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}, 1000);

function applyWallpaper() { 
    const d = document.getElementById('desktop');
    if(d && currentData.wallpaper) d.style.backgroundImage = `url(${currentData.wallpaper})`; 
}

function applyIconImages() {
   Object.keys(currentData.iconImages).forEach(type => {
       const img = document.getElementById(`img-${type}`);
       if (img) img.src = currentData.iconImages[type];
   });
}

function checkClickOutside(e) { if (e.target.id === 'desktop') { document.querySelectorAll('.window').forEach(w => w.classList.add('hidden')); activeType = null; } }
function closeWindow(id) { document.getElementById(id).classList.add('hidden'); activeType = null; }

function displayContent(type) {
    const view = document.getElementById('retro-window');
    const body = document.getElementById('window-body');
    const saveBtn = document.getElementById('save-on-spot');
    activeType = type;
    
    view.classList.remove('hidden');
    document.getElementById('window-title').textContent = type.toUpperCase();
    
    if(type === 'about') {
        saveBtn.style.display = isViewMode ? 'none' : 'block'; 
        body.innerHTML = currentData.about.text;
    } else if(type === 'experience') {
        saveBtn.style.display = isViewMode ? 'none' : 'block';
        body.innerHTML = `${currentData.experience.text_yogurt}<div class="gallery-section">${renderMediaGrid('exp_yogurt', 'experience-grid')}</div>${currentData.experience.text_prod2}<div class="gallery-section">${renderMediaGrid('exp_prod2', 'experience-grid')}</div>`;
    } else if(type === 'insta') {
        window.open("https://instagram.com/le.verea", '_blank'); view.classList.add('hidden');
    } else if(type === 'contact') {
        document.getElementById('window-contact').classList.remove('hidden'); view.classList.add('hidden');
    } else {
        saveBtn.style.display = 'none';
        body.innerHTML = `<div class="gallery-section">${renderMediaGrid(type, 'standard-grid')}</div>`;
    }
    initGalleryReorder();
}

function renderMediaGrid(type, gridClass) {
    const items = currentData[type]?.images || [];
    return `<div class="gallery-grid ${gridClass}" data-type="${type}">
        ${items.map((src, i) => {
            const isVideo = src.toLowerCase().endsWith('.mp4');
            return `
                <div class="gallery-item" draggable="true" data-index="${i}" onclick="if(!this.classList.contains('dragging')) openViewer('${src}')">
                    ${isVideo ? `<video src="${src}" muted></video>` : `<img src="${src}">`}
                    <span>${src.split('/').pop()}</span>
                </div>`;
        }).join('')}
    </div>`;
}

function openViewer(src) {
    const o = document.getElementById('media-viewer'); o.classList.remove('hidden');
    const v = document.getElementById('viewer-video'); const i = document.getElementById('viewer-img');
    if(src.toLowerCase().endsWith('.mp4')) { v.src = src; v.classList.remove('hidden'); i.classList.add('hidden'); v.play(); } 
    else { i.src = src; i.classList.remove('hidden'); v.classList.add('hidden'); }
}
function closeViewer() { document.getElementById('media-viewer').classList.add('hidden'); document.getElementById('viewer-video').pause(); }

function initDesktopIcons() {
    const icons = document.querySelectorAll('.draggable-icon');
    icons.forEach(icon => {
        const pos = currentData.iconPositions[icon.id];
        if (pos) { icon.style.top = pos.top; icon.style.left = pos.left; icon.style.right = 'auto'; icon.style.bottom = 'auto'; }
        icon.onmousedown = function(e) {
            let moved = false; let startX = e.clientX; let startY = e.clientY;
            let shiftX = e.clientX - icon.getBoundingClientRect().left;
            let shiftY = e.clientY - icon.getBoundingClientRect().top;
            function onMouseMove(e) {
                if (isViewMode) return;
                if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
                    moved = true; icon.classList.add('dragging-desktop');
                    icon.style.left = e.pageX - shiftX + 'px'; icon.style.top = e.pageY - shiftY + 'px';
                }
            }
            document.addEventListener('mousemove', onMouseMove);
            document.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                if (moved && !isViewMode) { currentData.iconPositions[icon.id] = { top: icon.style.top, left: icon.style.left }; saveData(); }
                else if (!moved) { displayContent(icon.getAttribute('data-type')); }
                icon.classList.remove('dragging-desktop'); document.onmouseup = null;
            };
        };
    });
}

function toggleViewMode() {
    isViewMode = !isViewMode;
    const sidebar = document.getElementById('sidebar-editor');
    const btn = document.getElementById('publish-btn');
    const saveButtons = document.querySelectorAll('button[onclick*="saveData"], .icon-customizer-ui, #save-on-spot');
    
    if (isViewMode) {
        if (sidebar) sidebar.style.display = 'none';
        saveButtons.forEach(b => b.style.display = 'none');
        btn.innerText = "🛠️ VOLVER A EDITOR";
        btn.style.background = "#28c840"; btn.style.color = "white";
    } else {
        if (sidebar) sidebar.style.display = 'block';
        saveButtons.forEach(b => b.style.display = 'block');
        btn.innerText = "🚀 PUBLICAR (MODO VISTA)";
        btn.style.background = "#c0c0c0"; btn.style.color = "black";
    }
    document.querySelectorAll('.draggable-icon').forEach(icon => { icon.style.cursor = isViewMode ? 'pointer' : 'move'; });
}

// Iniciar sistema
window.onload = () => { applyWallpaper(); applyIconImages(); initDesktopIcons(); };