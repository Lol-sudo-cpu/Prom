const declineBtn = document.getElementById('decline-btn');
const acceptBtn = document.getElementById('accept-btn');
const tradeContainer = document.getElementById('trade-container');
const successOverlay = document.getElementById('success-overlay');

let declineCount = 0;
const messages = [
    "Are you sure?",
    "Wait... really?",
    "Think of the magical night!",
    "One more chance...?",
    "System Error: Cannot Decline." // Final, prankish message.
];

// 1. Logic for the Decline Button
declineBtn.addEventListener('click', () => {
    // Show an alert/modal with the custom message
    alert(messages[declineCount]);
    
    // Increment count to show next message on next click
    if (declineCount < messages.length - 1) {
        declineCount++;
    } else {
        // Option: Change text of the accept button as the 'final solution'
        declineBtn.innerText = "Error (Press Accept)";
    }
});

// 2. Logic for the Accept Button
acceptBtn.addEventListener('click', () => {
    // Hide the trade screen completely
    tradeContainer.classList.add('hidden');
    // Show the fullscreen confirmation overlay
    successOverlay.classList.remove('hidden');
});
