import { ReactElement, useState } from "react";



export function Steps (steps: ReactElement[]) {
    const [currentIndex, updateIndex] = useState(0);
    
    function nextStep()
    {
        updateIndex(i => {
            if(i < steps.length) {
                return i+1;
            } 
            return i;});
    }

    function prevStep(){
        updateIndex(i => {
            if(i >0) {
                return i-1;
            } 
            return i;});
    }

    return ({
        currentIndex: currentIndex,
        maxIndex: steps.length,
        currentStep: steps[currentIndex],
        onNextStep: nextStep,
        onPrevStep: prevStep,
    });
}