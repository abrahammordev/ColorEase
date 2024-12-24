function generateOptimalcombination(){
    let optimalUmbral = 5.5;
    for(let i = 0 ; i < 1000; i++){
        let firstColor = generateRandomColor();
        let secondColor = generateRandomColor();
        let contrast = contrastRatio(firstColor, secondColor);
        if(contrast >= optimalUmbral){
            return [firstColor, secondColor];
        }
    }
}

function generateRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

