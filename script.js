console.log(window, {document});
let title = document.getElementById('title');
console.log({title});

setTimeout(() => {
    title.innerText = 'goodbye js';
}, 5000);
let r, g, b;
setInterval(() => {
    r = math.round(math.random() * 255);
    g = math.round(math.random() * 255);
    b = math.round(math.random() * 255);
    document.body.style.background = 'rgb(${r}, ${g}, $(b))';   
}, 1000);

let textinput = document.querySelection('textinut');
textinput.addeventlistener ('chang' evt => {
    console.log(evt);
    title.innertext = textinput.valve.split('').reverse().join('');
});