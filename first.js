// Countdown timer script
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = christmasDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Merry Christmas!";
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);
