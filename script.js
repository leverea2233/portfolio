// ==========================================
// 1. VARIABLES GLOBALES (DB_KEY ACTUALIZADA)
// ==========================================
const DB_KEY = 'leonardo_portfolio_v_FINAL_MINUSCULAS'; 
let activeType = null;
let currentCat = '';
let isViewMode = false;

const defaultData = {
    about: { 
        text: `<div class="content-padding">
            <div class="column-grid">
                <div class="left-col">
                    <p>Carrer del cavallers 14,<br>alfara del patriarca, Valencia,<br>España</p>
                    <p>le.verea2233@gmail.com<br>@le.verea</p>
                </div>
                <div class="right-col">
                    <p>Hay algo en la oscuridad que dice más que cualquier explicación.</p>
                    <p>Trabajo con imágenes donde lo oscuro y lo humano se cruzan sin aviso. No busco claridad, busco fricción.</p>
                    <p>Cada foto está construida. Nada es casual. Nada está ahí por estar.</p>
                    <p>No estoy terminado.<br>Pero lo que ya existe, habla solo.</p>
                </div>
            </div>
            <div class="column-grid">
                <div class="left-col"><span class="section-label">¿Quién soy?</span></div>
                <div class="right-col">
                    <p>Soy originario de Ciudad de México, una ciudad que no se explica, se vive. Crecer ahí significa aprender a leer el caos, el contraste, la intensidad.</p>
                    <p>Ese entorno me formó: me enseñó a encontrar orden dentro del ruido, y significado dentro de lo que parece saturado.</p>
                    <p>Hoy soy estudiante internacional en Valencia. Llegar aquí no fue casualidad; fue el resultado de insistir, de sostener una idea incluso cuando no era fácil.</p>
                    <p>Sigo en proceso. Pero todo lo que hago viene de ese cruce: de dónde vengo y hacia dónde estoy construyendo.</p>
                </div>
            </div>
            <div class="column-grid">
                <div class="left-col"><span class="section-label">Educación</span></div>
                <div class="right-col">
                    <p><strong>2025 – Presente</strong><br>Grado en Comunicación Audiovisual<br>Universidad CEU Cardenal Herrera, Valencia, España</p>
                    <p><strong>Diploma Universitario de Experto en Desarrollo Personal y Profesional para la Empleabilidad</strong><br>Universidad CEU Cardenal Herrera</p>
                    <p><strong>2022 – 2025</strong><br>Bachillerato<br>Prepa Ibero, Ciudad de México, México</p>
                </div>
            </div>
        </div>`
    },
    experience: {
        text_yogurt: `<div class="content-padding cargo-line-block">
            <div class="cargo-header-grid">
                <div><strong>01 YOGÜRT</strong><br>Cofundador</div>
                <div>Ciudad de México, 2022</div>
                <div>YOGÜRT una productora audiovisual independiente enfocada en la creación de cortometrajes y piezas experimentales con una identidad visual propia...</div>
            </div>
        </div>`,
        text_prod2: `<div class="content-padding cargo-line-block" style="margin-top: 20px;">
            <div class="cargo-header-grid">
                <div><strong>02 Rovers-At-Large</strong><br>Fundador</div>
                <div>Ciudad de México, 2024</div>
                <div>Rovers-At-Large es un colectivo y plataforma editorial fundada como un espacio de visibilización de la otredad...</div>
            </div>
        </div>`
    },
    // TODO EN MINÚSCULAS (.jpg)
    architecture: { images: Array.from({length: 20}, (_, i) => `img/architecture/${i+1}.jpg`) },
    artistic: { images: Array.from({length: 20}, (_, i) => `img/artistic/${i+1}.jpg`) },
    modeling: { 
        images: [
            "img/modeling/dsc_6197.jpg", "img/modeling/dsc_6199.jpg", "img/modeling/dsc_6243.jpg", "img/modeling/dsc_7557.jpg", "img/modeling/dsc_7560.jpg",
            "img/modeling/dsc_7652-3.jpg", "img/modeling/dsc_7685.jpg", "img/modeling/dsc_7697.jpg", "img/modeling/dsc_7699.jpg", "img/modeling/dsc_7747.jpg",
            "img/modeling/dsc_7750.jpg", "img/modeling/dsc_7773.jpg", "img/modeling/dsc_7822.jpg", "img/modeling/dsc_7920.jpg", "img/modeling/dsc_8032.jpg",
            "img/modeling/dsc_8060.jpg", "img/modeling/dsc_8114.jpg", "img/modeling/dsc_8201.jpg", "img/modeling/dsc_8308.jpg", "img/modeling/dsc_8358.jpg",
            "img/modeling/img_3799.jpg", "img/modeling/img_3812.jpg", "img/modeling/img_3855.jpg", "img/modeling/img_3883.jpg"
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

// ==========================================
// 2. INICIALIZACIÓN Y FUNCIONES
// ==========================================
let currentData = defaultData;

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
       const img = document.getElementById(`img-${type}`) || document.getElementById(type);
       if (img) img.src = currentData.iconImages[type];
   });
}

function checkClickOutside(e) { if (e.target.id === 'desktop') { document.querySelectorAll('.window').forEach(w => w.classList.add('hidden')); activeType = null; } }
function closeWindow(id) { document.getElementById(id).classList.add('hidden'); activeType = null; }

function displayContent(type) {
    const view = document.getElementById('retro-window');
    const body = document.getElementById('window-body');
    activeType = type;
    
    view.classList.remove('hidden');
    document.getElementById('window-title').textContent = type === 'about' ? 'ACERCA DE MÍ' : type === 'experience' ? 'EXPERIENCIA PROPIA' : type.toUpperCase();
    
    if(type === 'experience') view.style.width = '1150px';
    else if(type === 'about') view.style.width = '700px'; 
    else view.style.width = '800px';

    if(type === 'about') {
        body.innerHTML = currentData.about.text;
    } else if(type === 'experience') {
        body.innerHTML = `${currentData.experience.text_yogurt}<div class="gallery-section">${renderMediaGrid('exp_yogurt', 'experience-grid')}</div>${currentData.experience.text_prod2}<div class="gallery-section">${renderMediaGrid('exp_prod2', 'experience-grid')}</div>`;
    } else if(type === 'insta') {
        window.open("https://instagram.com/le.verea", '_blank'); view.classList.add('hidden');
    } else if(type === 'contact') {
        document.getElementById('window-contact').classList.remove('hidden'); view.classList.add('hidden');
    } else {
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

function initDesktopIcons() {
    const icons = document.querySelectorAll('.draggable-icon');
    icons.forEach(icon => {
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
                if (!moved) displayContent(icon.getAttribute('data-type'));
                icon.classList.remove('dragging-desktop'); document.onmouseup = null;
            };
        };
    });
}

function initGalleryReorder() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('dragstart', () => item.classList.add('dragging'));
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
    });
}

function toggleViewMode() {
    isViewMode = !isViewMode;
    const sidebar = document.getElementById('sidebar-editor');
    const btn = document.getElementById('publish-btn');
    if (sidebar) sidebar.style.display = isViewMode ? 'none' : 'block';
    btn.innerText = isViewMode ? "🛠️ VOLVER A EDITOR" : "🚀 PUBLICAR (MODO VISTA)";
    btn.style.background = isViewMode ? "#28c840" : "#c0c0c0";
    btn.style.color = isViewMode ? "white" : "black";
}

window.onload = () => { applyWallpaper(); applyIconImages(); initDesktopIcons(); };