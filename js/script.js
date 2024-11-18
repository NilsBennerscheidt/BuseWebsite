/**
 * Open the menu
 */
function menuOpen() {
    const menuContainer = document.getElementById('menu-container');

    menuContainer.style.maxHeight = '100vh';
    menuContainer.style.height = '100vh';
}

/**
 * delay before closing the menu
 */
function menuDelayClose() {
    setTimeout(() => {
        closeMenu();
    }, 250);
}

/**
 * close the menu
 */
function closeMenu() {
    const menuContainer = document.getElementById('menu-container');

    menuContainer.style.maxHeight = null;
    menuContainer.style.height = null;
}



function onClickContact() {
    const contactElementsToGlow = Array.from(document.getElementsByClassName("addGlow"))
    contactElementsToGlow.forEach(element => {
        element.style.textShadow = '0 0 5px #d90516, 0 0 10px #d90516, 0 0 20px #d90516';
        element.classList.add('text-text')
    });
    

    setTimeout(() => {
        contactElementsToGlow.forEach(element => {
            element.style.textShadow = ''
            element.classList.remove('text-text')
        });
    }, 1500);
    closeMenu();
}

const images = document.querySelectorAll('#gallaryImages img');
let currentIndex = 0;

function openModal(index) {
    const modalImage = document.getElementById('modalImage');
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    document.getElementById('imageModal').classList.remove('md:hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('md:hidden');
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

/**
 * Storm API
 */
const latitude = 51.6595;
const longitude = 7.3465;

function getStormInfo() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=rain_sum,wind_speed_10m_max,wind_gusts_10m_max&timezone=Europe%2FBerlin&past_days=14&forecast_days=3`
    fetch(url).then((response) => {
        response.json().then((p_JSONResponse) => {
            const stormWindSpeed = 75
            const windFasterThen = (p_Data, p_Speed) => {
                return p_Data.some(element => element > p_Speed)
            }
            
            if (windFasterThen(p_JSONResponse.daily.wind_speed_10m_max, stormWindSpeed) || windFasterThen(p_JSONResponse.daily.wind_gusts_10m_max, stormWindSpeed)) {
                const stormResult = document.getElementById("stormBanner");
                
                stormResult.nextElementSibling.classList.toggle('hidden')
                stormResult.classList.toggle('hidden');
            }
        })
    })
}

document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('rotate-180'); // Rotate chevron back
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('rotate-180'); // Rotate chevron 180 degrees
        }
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeModal();
    }
});

nextImage();
getStormInfo();
window.addEventListener('load', function() {
if (window.location.hash) {
    window.location.href = window.location.href.split('#')[0];
}
});