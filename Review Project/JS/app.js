const reviews = [{
        id: 1,
        name: "Pankaj",
        Job: "FrontEnd developer",
        imga: "./image/pankaj.jfif",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem nihil vitae quia autem, id delectus laudantium animi repellendus quae."
    },

    {
        id: 2,
        name: "Anup",
        Job: "FrontEnd developer",
        imga: "./image/anup.jpeg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem nihil vitae quia  repellendus quae."
    },
    {
        id: 3,
        name: "Abhimanyu",
        Job: "BackEnd developer",
        imga: "./image/abhi.jpeg",
        text: "Lorem, ipsum dolor adipisicing elit sit amet consectetur adipisicing elit. Sequi exercitationem nihil vitae quia autem, id delectus laudantium animi repellendus quae adipisicing elit."
    },
    {
        id: 4,
        name: "Anuj",
        Job: "Photo Shop",
        imga: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing elit. Sequi exercitationem nihil vitae quia autem, id delectusadipisicing elit laudantium animi repellendus quae."
    },
    {
        id: 5,
        name: "Uttra",
        Job: "Web designer",
        imga: "./image/uttra.jpeg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem nihil vitae quia autem,  repellendus quae."
    }
];
let img = document.getElementById('author-image');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let leftbtn = document.querySelector('.left-btn');
let rightbtn = document.querySelector('.right-btn');
let randombtn = document.querySelector('.random-btn');

let currnt_item = 0;
window.addEventListener("DOMContentLoaded", function() {
    showitem(currnt_item);
    console.log("hii");
});

function showitem(person) {
    const item = reviews[person];
    author.textContent = item.name;
    img.src = item.imga;
    job.textContent = item.Job;
    info.textContent = item.text;
}
//nextbtn
rightbtn.addEventListener("click", function() {
        currnt_item++;
        if (currnt_item > reviews.length - 1) {
            currnt_item = 0;
        }
        showitem(currnt_item);
    })
    //prev btn 
leftbtn.addEventListener("click", function() {
    currnt_item--;
    if (currnt_item < 0) {
        currnt_item = reviews.length - 1;
    }
    showitem(currnt_item);
})

//remdom btn
randombtn.addEventListener("click", function() {
    currnt_item = Math.floor(Math.random() * reviews.length);
    showitem(currnt_item);
})