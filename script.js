const btn_decline = document.getElementById('btn_decline');
const btn_accept = document.getElementById('btn_accept');
const trade_ui_container = document.getElementById('trade_ui_container');
const success_screen = document.getElementById('success_screen');

let decline_count = 0;
const decline_messages = [
    "Are you sure you want to decline?", 
    "Think carefully!", 
    "Error: Cannot decline this trade.", 
    "Just click accept!"
];

btn_decline.addEventListener('click', () => {
    alert(decline_messages[decline_count % decline_messages.length]);
    decline_count++;
    
    // Jump effect after first click
    btn_decline.style.position = 'absolute';
    btn_decline.style.top = Math.random() * 80 + 'vh';
    btn_decline.style.left = Math.random() * 80 + 'vw';
});

btn_accept.addEventListener('click', () => {
    trade_ui_container.classList.add('hidden');
    success_screen.classList.remove('hidden');
    document.body.style.background = "#fff0f5"; // Changes screen to soft pink
});
