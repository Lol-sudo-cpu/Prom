const declineBtn = document.getElementById('decline-btn');
const acceptBtn = document.getElementById('accept-btn');
const tradeWindow = document.getElementById('trade-window');
const successScreen = document.getElementById('success-screen');

let declineCount = 0;
const messages = ["Are you sure?", "Really?", "Think again!", "Don't do this!"];

declineBtn.addEventListener('mouseover', () => {
    // Make the button jump around the screen
    declineBtn.style.position = 'absolute';
    declineBtn.style.top = Math.random() * 80 + 'vh';
    declineBtn.style.left = Math.random() * 80 + 'vw';
});

declineBtn.addEventListener('click', () => {
    alert(messages[declineCount % messages.length]);
    declineCount++;
});

acceptBtn.addEventListener('click', () => {
    tradeWindow.classList.add('hidden');
    successScreen.classList.remove('hidden');
    document.body.style.backgroundColor = "#ffc0cb"; // Pink background on accept
});
