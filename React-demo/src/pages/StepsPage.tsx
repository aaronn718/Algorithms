import { FormEvent, SyntheticEvent, useState } from "react";
import { Steps } from "../components/Steps";
import { UserForm, StepsData } from "../components/stepForms";



export const StepsPage = () =>
{
    
    const [stepData, updateStepData] = useState<StepsData>({userName: 'tas', email: '', company: '', carMake: '', carYear: ''});
    //spread it out
    const {currentIndex, maxIndex, currentStep, onNextStep, onPrevStep} = Steps([
    <UserForm {...stepData} />]
    ); //my own hook
    function onSubmit(e:SyntheticEvent){
        e.preventDefault();
if(e.currentTarget.getAttribute("name") === "Next")
    {        
        onNextStep();
    }
    else {
        if(e.currentTarget.getAttribute("name") === "Prev")
        {
            onPrevStep();
        }
    }
    }
    
    return (<>
    <h2>Steps Page</h2>
    <div>
        <label>Step {currentIndex + 1} / {maxIndex}</label>
        <form onSubmit={onSubmit}>
            {currentStep}
            <div>
            <button onClick={onSubmit} name="Prev">Previous</button>
            <button onClick={onSubmit} name="Next">Next</button>
            </div>
        </form>
    </div>
    </>);
}