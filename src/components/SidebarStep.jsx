import { validateStep } from "../validateStep.js";

export default function SidebarStep(props) {

    function handleStepBtn(e) {
        const stepNumber = Number(e.target.textContent);

        if (props.currentStep >= stepNumber) {
            props.setCurrentStep(stepNumber);
            // make sure previous errors are canceled
            const validationErrors = validateStep(props.formData, props.stepNumber);
            props.setErrors(validationErrors);
        } else {
            // check if current step is valid before skipping ahead
            const validationErrors = validateStep(props.formData, props.currentStep);
            if (Object.keys(validationErrors).length === 0) {
                props.setCurrentStep(stepNumber);
            } else {
                props.setErrors(validationErrors);
            }
        }
    }

    return (
        <li className="sidebar-li"> 
        {/* highlight current step button with css */}
            <button className={props.currentStep == props.number ? 
                               "step-btn current-step" : 
                               "step-btn"} 
                onClick={handleStepBtn} 
                id={`step-${props.id}`}>
                    {props.number}
                </button>
                
            <label className="step-info" 
                htmlFor={`step-${props.id}`}>
                    step {props.number} <span className="step-span">{props.title}</span>
            </label>
        </li>
    )
}