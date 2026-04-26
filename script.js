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
    architecture: { 
        images: [
            "img/architecture/1.jpg", "img/architecture/2.jpg", "img/architecture/3.jpg", "img/architecture/4.jpg", "img/architecture/5.jpg",
            "img/architecture/6.jpg", "img/architecture/7.jpg", "img/architecture/8.jpg", "img/architecture/9.jpg", "img/architecture/10.jpg",
            "img/architecture/11.jpg", "img/architecture/12.jpg", "img/architecture/13.jpg", "img/architecture/14.jpg", "img/architecture/15.jpg",
            "img/architecture/16.jpg", "img/architecture/17.jpg", "img/architecture/18.jpg", "img/architecture/19.jpg", "img/architecture/20.jpg"
        ] 
    }, 
    artistic: { 
        images: [
            "img/artistic/1.jpg", "img/artistic/2.jpg", "img/artistic/3.jpg", "img/artistic/4.jpg", "img/artistic/5.jpg",
            "img/artistic/6.jpg", "img/artistic/7.jpg", "img/artistic/8.jpg", "img/artistic/9.jpg", "img/artistic/10.jpg",
            "img/artistic/11.jpg", "img/artistic/12.jpg", "img/artistic/13.jpg", "img/artistic/14.jpg", "img/artistic/15.jpg",
            "img/artistic/16.jpg", "img/artistic/17.jpg", "img/artistic/18.jpg", "img/artistic/19.jpg", "img/artistic/20.jpg"
        ] 
    }, 
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
            "img/experience/yogurt/1.png", 
            "img/experience/yogurt/2 \"Cultura le llaman\".mp4", 
            "img/experience/yogurt/3\"Ciudades Desiertas \".mp4", 
            "img/experience/yogurt/4 \"Hambre\".mp4", 
            "img/experience/yogurt/5.jpg", 
            "img/experience/yogurt/6 \"personal docente\".mp4", 
            "img/experience/yogurt/7 \"Muriendo de Envidia\".mp4", 
            "img/experience/yogurt/8.jpg"
        ] 
    }, 
    exp_prod2: { 
        images: [
            "img/experience/rovers/1.jpg", "img/experience/rovers/2.jpg", "img/experience/rovers/3.jpg", "img/experience/rovers/4.jpg",
            "img/experience/rovers/5.jpg", "img/experience/rovers/6.JPG", "img/experience/rovers/7.JPG", "img/experience/rovers/8.jpg"
        ] 
    },
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

let currentData = JSON.parse(localStorage.getItem(DB_KEY)) || defaultData;
let activeType = null;
let currentCat = '';

function saveData() { localStorage.setItem(DB_KEY, JSON.stringify(currentData)); }

// Reloj
setInterval(() => {
    const el = document.getElementById('live-clock');
    if(el) el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}, 1000);

// PERSONALIZACIÓN
function applyWallpaper() { if(currentData.wallpaper) document.getElementById('desktop').style.backgroundImage = `url(${currentData.wallpaper})`; }
applyWallpaper();

function triggerWallpaperUpload() { document.getElementById('wallpaper-uploader').click(); }
function handleWallpaperChange(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => { currentData.wallpaper = e.target.result; saveData(); applyWallpaper(); };
        reader.readAsDataURL(input.files[0]);
    }
}

function applyIconImages() {
   if (!currentData || !currentData.iconImages) return;
   
   Object.keys(currentData.iconImages).forEach(type => {
       // Intentamos encontrar el ID de dos formas para no fallar
       const img = document.getElementById(`img-${type}`) || document.getElementById(type);
       
       if (img) {
           img.src = currentData.iconImages[type];
       }
   });
}
applyIconImages();

function handleIconFile(event) {
    const type = document.getElementById('icon-select-menu').value;
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentData.iconImages[type] = e.target.result;
            saveData(); 
            applyIconImages();
        };
        reader.readAsDataURL(file);
    }
}

// LÓGICA DE CIERRE Y VISUALIZACIÓN
function checkClickOutside(e) { if (e.target.id === 'desktop') { document.querySelectorAll('.window').forEach(w => w.classList.add('hidden')); activeType = null; } }
function closeWindow(id) { document.getElementById(id).classList.add('hidden'); activeType = null; }

function displayContent(type) {
    const view = document.getElementById('retro-window');
    const body = document.getElementById('window-body');
    const saveBtn = document.getElementById('save-on-spot');
    activeType = type;
    
    view.classList.remove('hidden');
    document.getElementById('window-title').textContent = type.toUpperCase();
    
    if(type === 'experience') view.style.width = '1150px';
    else if(type === 'about') view.style.width = '480px';
    else view.style.width = '800px';

    if(type === 'about') {
    saveBtn.style.display = isViewMode ? 'none' : 'block'; 
    body.innerHTML = currentData[type].text;
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

function saveCurrentEdit() {
    if(activeType === 'about' || activeType === 'experience') {
        const body = document.getElementById('window-body');
        const clone = body.cloneNode(true);
        clone.querySelectorAll('.gallery-section').forEach(g => g.remove());
        if(activeType === 'about') currentData.about.text = clone.innerHTML;
        else {
            const blocks = clone.querySelectorAll('.cargo-line-block');
            currentData.experience.text_yogurt = blocks[0].outerHTML;
            currentData.experience.text_prod2 = blocks[1].outerHTML;
        }
        saveData(); alert('DISK UPDATED');
    }
}

function renderMediaGrid(type, gridClass) {
    const items = currentData[type]?.images || [];
    if(items.length === 0) return '<p style="padding:40px 60px; color:#ccc; font-size:11px;">Añade archivos a tu carpeta img/ y nómbralos en el script.js</p>';
    
    return `<div class="gallery-grid ${gridClass}" data-type="${type}">
        ${items.map((src, i) => {
            // Detectamos si es video por la extensión .mp4
            const isVideo = src.toLowerCase().endsWith('.mp4');
            return `
                <div class="gallery-item" draggable="true" data-index="${i}" onclick="if(!this.classList.contains('dragging')) openViewer('${src}')">
                    ${isVideo ? `<video src="${src}" muted></video>` : `<img src="${src}">`}
                    <span>${src.split('/').pop()}</span>
                </div>`;
        }).join('')}
    </div>`;
}

// --- DRAG AND DROP ESCRITORIO (FIXED) ---
function initDesktopIcons() {
    const icons = document.querySelectorAll('.draggable-icon');
    icons.forEach(icon => {
        // Cargar posiciones guardadas
        const pos = currentData.iconPositions[icon.id];
        if (pos) { 
            icon.style.top = pos.top; icon.style.left = pos.left; 
            icon.style.right = 'auto'; icon.style.bottom = 'auto'; 
        }

        icon.onmousedown = function(e) {
            let startX = e.clientX; let startY = e.clientY;
            let shiftX = e.clientX - icon.getBoundingClientRect().left;
            let shiftY = e.clientY - icon.getBoundingClientRect().top;
            let moved = false;

            function onMouseMove(e) {
                // AQUÍ es donde bloqueamos: si es modo vista, no dejamos que se mueva
                if (isViewMode) return; 

                if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
                    moved = true;
                    icon.classList.add('dragging-desktop');
                    icon.style.left = e.pageX - shiftX + 'px';
                    icon.style.top = e.pageY - shiftY + 'px';
                    icon.style.right = 'auto'; icon.style.bottom = 'auto';
                }
            }

            document.addEventListener('mousemove', onMouseMove);

            document.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                
                if (moved && !isViewMode) {
                    currentData.iconPositions[icon.id] = { top: icon.style.top, left: icon.style.left };
                    saveData();
                } else if (!moved) {
                    // Si no se movió (fue solo un click), abrimos el contenido siempre
                    const type = icon.getAttribute('data-type');
                    displayContent(type);
                }
                
                icon.classList.remove('dragging-desktop');
                document.onmouseup = null;
            };
        };
        icon.ondragstart = () => false;
    });
}
// Asegúrate de que esta línea esté después de cerrar la función
initDesktopIcons();

// REORDENAR GALERÍA
function initGalleryReorder() {
    const items = document.querySelectorAll('.gallery-item');
    let draggedItem = null;

    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            if (isViewMode) {
                e.preventDefault();
                return;
            }
            draggedItem = item;
            item.classList.add('dragging');
            // Guardamos el índice original para el intercambio
            e.dataTransfer.setData('text/plain', item.getAttribute('data-index'));
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            draggedItem = null;
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necesario para permitir el drop
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (isViewMode || !draggedItem || draggedItem === item) return;

            const grid = item.closest('.gallery-grid');
            const type = grid.getAttribute('data-type');
            
            // Obtenemos los índices de las dos fotos que van a intercambiar lugar
            const fromIndex = parseInt(draggedItem.getAttribute('data-index'));
            const toIndex = parseInt(item.getAttribute('data-index'));

            // Hacemos el SWAP (Intercambio directo) en el array de datos
            const temp = currentData[type].images[fromIndex];
            currentData[type].images[fromIndex] = currentData[type].images[toIndex];
            currentData[type].images[toIndex] = temp;

            // Guardamos y refrescamos la vista
            saveData();
            displayContent(activeType); 
        });
    });
}

function handleDragOver(e) { e.preventDefault(); if (activeType && activeType !== 'about') document.getElementById('retro-window').classList.add('drag-over'); }
function handleDrop(e) {
    e.preventDefault(); document.getElementById('retro-window').classList.remove('drag-over');
    if (activeType === 'about' || !activeType) return;
    const files = Array.from(e.dataTransfer.files);
    let target = activeType === 'experience' ? (confirm('YOGÜRT?') ? 'exp_yogurt' : 'exp_prod2') : activeType;
    files.forEach(file => {
        if (file.size > 25 * 1024 * 1024) return;
        const r = new FileReader();
        r.onload = (ev) => { if(!currentData[target]) currentData[target] = {images:[]}; currentData[target].images.push(ev.target.result); saveData(); displayContent(activeType); };
        r.readAsDataURL(file);
    });
}

function openViewer(src) {
    const o = document.getElementById('media-viewer'); o.classList.remove('hidden');
    const v = document.getElementById('viewer-video'); const i = document.getElementById('viewer-img');
    const isVideo = src.toLowerCase().endsWith('.mp4');
    
    if(isVideo) { 
        v.src = src; v.classList.remove('hidden'); i.classList.add('hidden'); v.play(); 
    } else { 
        i.src = src; i.classList.remove('hidden'); v.classList.add('hidden'); 
    }
}
function closeViewer() { document.getElementById('media-viewer').classList.add('hidden'); document.getElementById('viewer-video').pause(); }
function toggleEditorWindow(type) {
    document.querySelectorAll('.window').forEach(w => w.classList.add('hidden'));
    currentCat = type;
    if(type === 'customize_icons') document.getElementById('editor-icons').classList.remove('hidden');
    else { updateEditorPreview(); document.getElementById('editor-gallery').classList.remove('hidden'); }
}
function updateEditorPreview() {
    const p = document.getElementById('gallery-preview'); if(!p) return;
    p.innerHTML = (currentData[currentCat]?.images || []).map((src, i) => `<div class="preview-box"><img src="${src.startsWith('data:video') ? 'https://win98icons.alexmeub.com/icons/png/video_file-0.png' : src}"><button onclick="delMedia(${i})" class="del-btn">X</button></div>`).join('');
}
function delMedia(i) { currentData[currentCat].images.splice(i, 1); saveData(); updateEditorPreview(); }
function goToLink() { window.open("https://instagram.com/le.verea", '_blank'); }
function resetDatabase() { if(confirm('RESET DISK?')) { localStorage.removeItem(DB_KEY); location.reload(); } }

function handleIconDrop(e) {
    e.preventDefault();
    // Quitamos el borde verde de "drop"
    e.currentTarget.style.border = '2px solid #fff';
    
    const type = document.getElementById('icon-select-menu').value;
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
        // Validación de peso (por lo del localStorage que hablamos)
        if (file.size > 1024 * 1024) { 
            alert("Archivo muy pesado para ser un icono. Intenta con uno de menos de 1MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            currentData.iconImages[type] = event.target.result;
            saveData();
            applyIconImages();
        };
        reader.readAsDataURL(file);
    } else {
        alert("Por favor, suelta un archivo de imagen válido.");
    }
}

// === MODO PUBLICACIÓN ===
let isViewMode = false;

function toggleViewMode() {
    isViewMode = !isViewMode;
    const sidebar = document.getElementById('sidebar-editor');
    const btn = document.getElementById('publish-btn');
    
    // Seleccionamos todos los botones de "Save Changes" y el área de carga de iconos
    const saveButtons = document.querySelectorAll('button[onclick*="saveData"], .icon-customizer-ui');
    const iconEditor = document.getElementById('editor-icons');

    if (isViewMode) {
        if (sidebar) sidebar.style.display = 'none';
        if (iconEditor) iconEditor.classList.add('hidden');
        
        // Escondemos todos los botones de guardar
        saveButtons.forEach(b => b.style.display = 'none');
        
        btn.innerText = "🛠️ VOLVER A EDITOR";
        btn.style.background = "#28c840"; 
        btn.style.color = "white";
    } else {
        if (sidebar) sidebar.style.display = 'block';
        
        // Mostramos los botones de guardar
        saveButtons.forEach(b => b.style.display = 'block');
        
        btn.innerText = "🚀 PUBLICAR (MODO VISTA)";
        btn.style.background = "#c0c0c0";
        btn.style.color = "black";
    }

    // El cursor para los iconos del escritorio
    const icons = document.querySelectorAll('.draggable-icon');
    icons.forEach(icon => {
        icon.style.cursor = isViewMode ? 'pointer' : 'move';
    });
    // Añade esto al final de la función toggleViewMode
const saveBtnSpot = document.getElementById('save-on-spot');
if (saveBtnSpot && isViewMode) saveBtnSpot.style.display = 'none';
}