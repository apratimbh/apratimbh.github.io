const video = document.getElementById('teaser');
const chapters = document.querySelector('.chapters');

if (video && chapters) {
    chapters.classList.add('is-ready');
    chapters.querySelectorAll('button[data-time]').forEach(button => {
        button.addEventListener('click', async () => {
            const time = Number(button.dataset.time);
            if (video.readyState === 0) {
                video.addEventListener('loadedmetadata', () => {
                    video.currentTime = time;
                }, { once: true });
            } else {
                video.currentTime = time;
            }
            try {
                await video.play();
            } catch {
                video.focus();
            }
        });
    });
}
