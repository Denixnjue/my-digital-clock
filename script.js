let is24Hour = localStorage.getItem('format') !== '12';
let isDark = localStorage.getItem('theme') === 'dark';

function update() {
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    // Greeting
    const g = document.getElementById('greeting');
    if(h < 12) g.textContent = "Good Morning! 🌅";
    else if(h < 18) g.textContent = "Good Afternoon! ☀️";
    else g.textContent = "Good Evening! 🌙";

    // Format
    let ampm = "";
    if(!is24Hour) {
        ampm = h >= 12 ? " PM" : " AM";
        h = h % 12 || 12;
    }
    document.getElementById('clock').textContent = `${String(h).padStart(2, '0')}:${m}:${s}${ampm}`;
}

document.getElementById('theme-toggle').onclick = () => {
    isDark = !isDark;
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

document.getElementById('format-toggle').onclick = () => {
    is24Hour = !is24Hour;
    localStorage.setItem('format', is24Hour ? '24' : '12');
};

document.body.className = isDark ? 'dark-mode' : 'light-mode';
setInterval(update, 1000);
update();
