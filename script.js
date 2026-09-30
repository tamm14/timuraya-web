// Tab produk
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.product-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});