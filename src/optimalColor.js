import { contrastRatio } from './colorChecker.js';

function generateOptimalcombination(){
    let optimalUmbral = 50;
    for(let i = 0 ; i < 10000; i++){
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

export { generateOptimalcombination };