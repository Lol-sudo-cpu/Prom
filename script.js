const btn_decline = document.getElementById('btn_decline');
const btn_accept = document.getElementById('btn_accept');
const trade_ui_container = document.getElementById('trade_ui_container');
const success_screen = document.getElementById('success_screen');

let decline_count = 0;
const decline_messages = [
    "Are you sure?", 
    "You can't decline this trade!", 
    "Try the green button instead.", 
    "System Error: Must accept."
];

btn_decline.addEventListener('click', () => {
    // Shows a pop-up alert
    alert(decline_messages[decline_count % decline_messages.length]);
    decline_count++;
    
    // Makes the button jump away from the mouse after the first click
    btn_decline.style.position = 'absolute';
    btn_decline.style.top = Math.random() * 80 + 'vh';
    btn_decline.style.left = Math.random() * 80 + 'vw';
});

btn_accept.addEventListener('click', () => {
    // Hides the trade window and shows the success screen
    trade_ui_container.classList.add('hidden');
    success_screen.classList.remove('hidden');
    
    // Changes the background to a celebratory pink
    document.body.style.backgroundColor = "#ff99cc"; 
});
