// ==========================================
// 1. VARIABLES GLOBALES Y TEXTOS ÍNTEGROS
// ==========================================
const DB_KEY = 'leonardo_portfolio_V_FINAL_REAL_FIXED_V4'; 
let activeType = null;

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
        text_yogurt: `<div class="content-padding">
            <div class="column-grid">
                <div class="left-col"><span class="section-label">01 YOGÜRT</span><br>Cofundador<br>Ciudad de México, 2022</div>
                <div class="right-col">
                    <p>YOGÜRT una productora audiovisual independiente enfocada en la creación de cortometrajes y piezas experimentales con una identidad visual propia. Dentro del proyecto me encargué de la dirección creativa, el desarrollo de ideas y guiones, así como de la producción y edición de los trabajos. También coordiné procesos de rodaje y colaboraciones con otros creadores, impulsando un enfoque autoral en cada pieza. El proyecto funciona como un espacio de exploración narrativa y estética, donde he podido consolidar habilidades de dirección, storytelling y construcción de proyectos audiovisuales desde cero.</p>
                </div>
            </div>
        </div>`,
        text_prod2: `<div class="content-padding">
            <div class="column-grid">
                <div class="left-col"><span class="section-label">02 Rovers-At-Large</span><br>Fundador<br>Ciudad de México, 2024</div>
                <div class="right-col">
                    <p>Rovers-At-Large es un colectivo y plataforma editorial fundada como un espacio de visibilización de la otredad dentro de escenas creativas contemporáneas. Funciona como una revista multidisciplinaria que reúne fotografía, textos, divulgación cultural, guiones para cortometrajes en búsqueda de financiamiento, así como propuestas de moda y diseño gráfico de artistas emergentes. El proyecto se sitúa principalmente en ciudades con escenas artísticas vibrantes y alternativas, como la CDMX, conectando con una comunidad joven de 18 a 30 años vinculada a disciplinas creativas y culturales. Su enfoque se centra en la exploración de identidades no normativas, lo estético de la contradicción y la construcción de una comunidad alrededor de lo "otro", entendido como aquello fuera del estándar visual, social y cultural. Dentro del proyecto me encargué de la dirección general, la curaduría de contenidos y la coordinación de colaboradores, desarrollando una plataforma con una fuerte carga estética, conceptual y cultural.</p>
                </div>
            </div>
        </div>`
    },
    // Lógica de imágenes (20 por carpeta)
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
    exp_yogurt: { images: Array.from({length: 8}, (_, i) => `img/experience/yogurt/${i+1}.jpg`) },
    exp_prod2: { images: Array.from({length: 8}, (_, i) => `img/experience/rovers/${i+1}.jpg`) }
};

// ==========================================
// 2. LÓGICA DE VENTANAS
// ==========================================
function closeWindow(id) { document.getElementById(id).classList.add('hidden'); activeType = null; }

function displayContent(type) {
    const view = document.getElementById('retro-window');
    const body = document.getElementById('window-body');
    activeType = type;
    
    if (type === 'insta') { window.open("https://instagram.com/le.verea", '_blank'); return; }
    
    view.classList.remove('hidden');
    document.getElementById('window-title').textContent = type.toUpperCase();
    
    if(type === 'experience') view.style.width = '1150px';
    else if(type === 'about') view.style.width = '800px'; 
    else view.style.width = '900px';

    if(type === 'about') {
        body.innerHTML = defaultData.about.text;
    } else if(type === 'experience') {
        body.innerHTML = defaultData.experience.text_yogurt + `<div class="gallery-grid">${renderGrid('exp_yogurt')}</div>` + defaultData.experience.text_prod2 + `<div class="gallery-grid">${renderGrid('exp_prod2')}</div>`;
    } else if(type === 'contact') {
        body.innerHTML = `<div class="contact-form" style="padding:40px;">
            <h3 style="margin-bottom:20px;">MAILBOX</h3>
            <p style="margin-bottom:20px;">Si tienes alguna propuesta o simplemente quieres saludar:</p>
            <button style="padding:15px; cursor:pointer; background:#c0c0c0; border:2px solid; border-color: #fff #808080 #808080 #fff; font-weight:bold;" onclick="window.location.href='mailto:le.verea2233@gmail.com'">REDACTAR MENSAJE PARA LE.VEREA</button>
        </div>`;
        view.style.width = '500px';
    } else {
        body.innerHTML = `<div class="gallery-grid">${renderGrid(type)}</div>`;
    }
}

function renderGrid(type) {
    const items = defaultData[type]?.images || [];
    return items.map(src => `
        <div class="gallery-item" onclick="openViewer('${src}')">
            <img src="${src}">
            <span>${src.split('/').pop()}</span>
        </div>`).join('');
}

function openViewer(src) {
    const v = document.getElementById('media-viewer'); v.classList.remove('hidden');
    document.getElementById('viewer-img').src = src; document.getElementById('viewer-img').classList.remove('hidden');
}

window.onload = () => {
    document.querySelectorAll('.draggable-icon').forEach(icon => {
        icon.onclick = () => displayContent(icon.getAttribute('data-type'));
    });
    setInterval(() => {
        document.getElementById('live-clock').textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
    }, 1000);
};