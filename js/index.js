const clock = document.querySelector('.clock');
setInterval(() => {
    clock.innerHTML = new Date().toLocaleString();
}, 1000);