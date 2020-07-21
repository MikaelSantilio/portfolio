function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hideElement(id_element) {
    element = document.getElementById(id_element);
    element.classList.add('hide');
    element.classList.remove('show');
    sleep(500).then(() => {
        element.style.display = 'none';
    });
}

function showElement(id_element) {
    element = document.getElementById(id_element);
    sleep(500).then(() => {
        element.style.display = 'block';
    });
    element.classList.remove('hide');
    element.classList.add('show');
}