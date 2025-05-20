const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "Me, pretending to understand what's going on since 2003.",
    "Plot twist: I still don't care.",
    "Running on caffeine, chaos, and poor life choices.",
    "My brain has too many tabs open and one of them is playing music.",
    "The limit does not exist... for how awkward I can be."
]

let imagen = document.getElementById("random-meme")
let titulo = document.getElementById("random-caption")
let boton = document.getElementById("generator-button")

boton.addEventListener("click", function(){
    let randomIndex1 = Math.floor(Math.random() * ((memeArray.length -1) +1  ));
    let randomIndex2 = Math.floor(Math.random() * ((captionsArray.length -1)+1));
    imagen.src = memeArray[randomIndex1]
    titulo.innerHTML = captionsArray[randomIndex2]
})