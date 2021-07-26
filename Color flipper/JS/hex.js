let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let colorname = document.getElementById("color-name");
btn.addEventListener('click', function() {
    let colorindex = 0;
    console.log("eventfire");
    let hascolor = '#';
    for (let i = 0; i < 6; i++) {
        hascolor += hex[getremdomnumber()];
    }
    console.log(hascolor);
    document.body.style.backgroundColor = hascolor;
    colorname.textContent = hascolor;

})

function getremdomnumber() {
    return Math.floor(Math.random() *
        hex.length);
}