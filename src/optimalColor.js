import { contrastRatio } from './colorChecker.js';

function generateOptimalcombination(){
    let optimalUmbral = 30;
    for(let i = 0 ; i < 1000; i++){
        let firstColor = generateRandomColor();
        let secondColor = generateRandomColor();
        let contrast = contrastRatio(firstColor, secondColor);
        if(contrast >= optimalUmbral){
            console.log(firstColor, secondColor, contrast);
            return [firstColor, secondColor];
        }
    }
    
}

function generateRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

export { generateOptimalcombination };