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
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 2;
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

function nextImage() {
    if (currentIndex < images.length - 2) {
        console.log(currentIndex);
        currentIndex++;
    } else {
        currentIndex = 0
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}