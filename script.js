const btn_decline = document.getElementById('btn_decline');
const btn_accept = document.getElementById('btn_accept');
const trade_ui_container = document.getElementById('trade_ui_container');
const success_screen = document.getElementById('success_screen');

let decline_count = 0;
const decline_messages = [
    "Are you sure?", 
    "Think again!", 
    "System Error: Decline Rejected.", 
    "You must accept the magical night!"
];

btn_decline.addEventListener('click', () => {
    // Shows a pop-up alert with a custom message
    alert(decline_messages[decline_count % decline_messages.length]);
    decline_count++;
    
    // Makes the button jump away from the mouse cursor after the first click
    btn_decline.style.position = 'absolute';
    btn_decline.style.top = Math.random() * 80 + 'vh';
    btn_decline.style.left = Math.random() * 80 + 'vw';
});

btn_accept.addEventListener('click', () => {
    // Hides the trading UI window
    trade_ui_container.classList.add('hidden');
    
    // Changes the background to a celebratory pink, keeping this from before
    document.body.style.backgroundColor = "#ff99cc"; 
    
    // Shows the success confirmation screen
    success_screen.classList.remove('hidden');
});
