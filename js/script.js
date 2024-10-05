function rmHandle() {
    console.log("hi")
    return 1

}

function menuToggle() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

const images = document.querySelectorAll('#gallery img');
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
    document.getElementById('imageModal').classList.remove('hidden');
    updateButtons();
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentIndex].src;
        updateButtons();
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentIndex].src;
        updateButtons();
    }
}

function updateButtons() {
    // Disable "Previous" button when at the first image
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    // Disable "Next" button when at the last image
    document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
}