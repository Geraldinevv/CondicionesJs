document.getElementById('verifyButton').addEventListener('click', () => {
    let total = 0;
    const inputStickers = document.querySelectorAll('.input-sticker');
    inputStickers.forEach(input => {
        total += parseInt(input.value);
    });

    if (total > 10) {
        document.querySelector('.result').textContent = 'La cantidad total de stickers supera el límite de 10.';
    } else {
        document.querySelector('.result').textContent = `La cantidad total de stickers es de ${total}.`;
    }
});