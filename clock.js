function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Format with leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById('hour').textContent = h;
    document.getElementById('minute').textContent = m;
    document.getElementById('second').textContent = s;
}

setInterval(updateClock, 1000);
updateClock();