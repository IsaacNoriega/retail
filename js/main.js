// Scroll smooth
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Perfume data resumida
const perfumeData = {
    khamra: {
        color:'var(--khamra)',
        image:'assets/Lattafa-Khamrah.webp',
        title:'Khamra',
        family:'Oriental especiado / Gourmand dulce',
        summary:'Perfume unisex que combina especias, dulces florales y base resinosamente seductora.',
        price:'$49.99 USD',
        buyLink:'https://www.lattafa-usa.com/products/khamrah'
    },
    cobalt: {
        color:'var(--cobalt)',
        image:'assets/BADBOYCOBALT.webp',
        title:'Bad Boy Cobalt',
        family:'Aromático Amaderado / Amaderado Frutal',
        summary:'Fragancia masculina con frescura picante, corazón frutal y base terrosa, audaz y elegante.',
        price:'$193.00 USD',
        buyLink:'https://www.macys.com/shop/product/bad-boy-cobalt-eau-de-parfum-fragrance-collection?ID=13725752'
    },
    jpg: {
        color:'var(--jpg)',
        image:'assets/JPG.avif',
        title:'Le Beau',
        family:'Amaderado Aromático / Fougere Elegante',
        summary:'Fragancia masculina seductora que mezcla bergamota fresca, coco suave y base envolvente.',
        price:'$79.50 USD',
        buyLink:'https://www.amazon.com/Jean-Paul-Gaultier-125ml-Toilette/dp/B07TK2966Q'
    }
};

// Modal
const modal = document.getElementById('notesModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalFamily = document.getElementById('modalFamily');
const modalSummary = document.getElementById('modalSummary');

function showModal(perfume){
    const data = perfumeData[perfume];
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalTitle.style.color = data.color;
    modalFamily.textContent = data.family;
    modalSummary.textContent = data.summary;
    modal.classList.add('show');
}

function closeModal(){
    modal.classList.remove('show');
}

// Close modal clicking outside
window.addEventListener('click', e=>{
    if(e.target === modal) closeModal();
});

// Smooth scroll nav
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Toggle menú mobile
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
