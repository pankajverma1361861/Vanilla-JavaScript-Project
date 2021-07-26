let colors = ["Tomato", "Orange", "DodgerBlue", "MediumSeaGreen", "Gray", "SlateBlue", "Violet", "LightGray", "rgb(255, 0, 0)", "rgb(60, 179, 113)", "rgb(106, 90, 205)", "rgb(255, 165, 0)", "rgb(60, 60, 60)", "hsl(199, 56%, 23%)", "hsl(86, 100%, 60%)", "hsl(303, 100%, 60%)", "hsl(358, 100%, 60%)"]
let btn = document.getElementById("btn");
let colorname = document.getElementById("color-name");
btn.addEventListener('click', function() {
    let colorindex = getremdomnumber();
    document.body.style.backgroundColor = colors[colorindex];
    colorname.textContent = colors[colorindex];
})

function getremdomnumber() {
    return Math.floor(Math.random() *
        colors.length);
}