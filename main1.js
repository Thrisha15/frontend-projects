document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorHex = document.getElementById('colorHex');

    colorInput.addEventListener('input', () => {
        const color = colorInput.value;
        colorDisplay.style.backgroundColor = color;
        colorHex.textContent = color;
    });
});
