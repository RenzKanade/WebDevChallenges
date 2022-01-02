let colors = [["Stratos","#000133"],["Turquoise","#40E0D0"],["Mantis","#74C365"],["Emerald","#50C878"]]

const ChangeColor = ()=>{
    let selectedCol = colors[Math.floor(Math.random()*colors.length)];
    let background = document.getElementById("color-flipper");
    let colorName = document.getElementById("col-name");
    background.style.backgroundColor = selectedCol[1].toString();
    colorName.innerHTML = selectedCol[0];


    console.log(selectedCol)
}

let counter = 0;

const IncreaseCounter = () =>{
    let countdisplay = document.getElementById("counter-display");
    counter++;
    countdisplay.innerHTML = counter;
    console.log(counter);
}

const ResetCounter = () =>{
    let countdisplay = document.getElementById("counter-display");
    counter = 0;
    countdisplay.innerHTML = counter;
    console.log(counter);
}

const DecreaseCounter = () =>{
    let countdisplay = document.getElementById("counter-display");
    counter--;
    countdisplay.innerHTML = counter;
    console.log(counter);
}





