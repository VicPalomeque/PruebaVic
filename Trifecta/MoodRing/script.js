function generarNumero(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let stone = document.getElementById("stone")
let randomNumber = generarNumero(1, 9)

function cambiarColor(num){
    if(num==1){
        return "red"
    }else if(num==2){
        return "orange"
    }else if(num==3){
        return "yellow"
    }else if(num==4){
        return "green"
    }else if(num==5){
        return "blue"
    }else if(num==6){
        return "#4169e1"
    }else if(num==7){
        return "#00008b"
    }else if(num==8){
        return "purple"
    }else {
        return "black"
    }
}

stone.style.backgroundColor = cambiarColor(randomNumber)