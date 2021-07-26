let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        let styles = e.currentTarget.classList;
        if (styles.contains("btndecrease")) {
            count--;
        } else if (styles.contains("btnreset")) {
            count = 0;
        } else if (styles.contains("btnincrease")) {
            count++;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";

        }

    })
})