const envelope = document.getElementById('envelope');
const paperPopup = document.getElementById('paperPopup');

envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;

    envelope.classList.add('open');

    setTimeout(() => {
        paperPopup.classList.add('show');
    }, 2100);
});