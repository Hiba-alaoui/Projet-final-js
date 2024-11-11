let currentIndex = 0;
const images = [
    { src: 'IMG_FDR/plage.jfif', alt: 'Plage au coucher du soleil' },
    { src: 'IMG_FDR/Forest.jfif', alt: 'Forêt dense' },
    { src: 'IMG_FDR/montain.jfif', alt: 'Montagne enneigée' },
    { src: 'IMG_FDR/lac_calme.jfif', alt: 'Lac calme' },
    { src: 'IMG_FDR/fleurs.jfif', alt: 'Fleurs colorées' },
    { src: 'IMG_FDR/night_view.jfif', alt: 'Vue sur la ville la nuit' }
];

function openModal(index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('modalImage').alt = images[currentIndex].alt;
    document.getElementById('photoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('modalImage').alt = images[currentIndex].alt;
}

function initializeGallery() {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure, index) => {
        figure.addEventListener('mouseover', () => showAltText(index));
        figure.addEventListener('mouseleave', resetAltText);
        figure.addEventListener('focus', () => showAltText(index));
        figure.addEventListener('blur', resetAltText);

        figure.addEventListener('click', () => openModal(index));
    });

    // Add tabindex dynamically
    const thumbnails = document.querySelectorAll('img');
    thumbnails.forEach((img, index) => {
        img.setAttribute('tabindex', 0);  // Add tabindex to each image
    });
}

function showAltText(index) {
    const figcaption = document.querySelectorAll('figcaption')[index];
    figcaption.style.color = 'red';  // Highlight the caption on mouseover/focus
}

function resetAltText() {
    const figcaptions = document.querySelectorAll('figcaption');
    figcaptions.forEach(figcaption => figcaption.style.color = '');  // Reset caption style
}
