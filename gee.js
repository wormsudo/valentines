const cdPicture = document.getElementById("cd");

function unlock() {
    cdPicture.classList.add('fade-out');
    setTimeout(() => {
        cdPicture.style.display = 'none';
    }, 500);
}