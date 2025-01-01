import Sidebar from "./Sidebar.jsx";
import FormSection from "./FormSection.jsx";
import { useState } from "react";
import { validateStep } from "../validateStep.js";

export default function FormContainer() {

   const [currentStep, setCurrentStep] = useState(1);

   const [formData, setFormData] = useState({
        name: '', 
        email: '',
        phoneNumber: '',
        planOption: '',
        addOnService: false,
        addOnStorage: false,
        addOnCustomization: false,
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData(prevData => {
            return  {
                ...prevData,
                [name]: (type === 'checkbox' ? checked : value) 
            }
        })
    }
    
    const [errors, setErrors] = useState({});
    const [isSuccessful, setIsSuccessful] = useState(false);

    function handleBackBtn() {
        setCurrentStep(prevStep => --prevStep)
    }

    function handleNextBtn() {
        const validationErrors = validateStep(formData, currentStep);

        if (Object.keys(validationErrors).length === 0) {
            setCurrentStep(prevStep => ++prevStep);
        } else {
            setErrors(validationErrors);
        }
    } 

    function handleSubmit(e) {
        e.preventDefault();

        setCurrentStep(0);
        setIsSuccessful(true);
    }

   return (
    <div className="container">
        <Sidebar setCurrentStep={setCurrentStep} 
                currentStep={currentStep} 
                formData={formData}
                handleNextBtn={handleNextBtn}
                setErrors={setErrors}/>

        <FormSection isSuccessful={isSuccessful} 
                    formData={formData} 
                    handleBackBtn={handleBackBtn} 
                    errors={errors} 
                    handleChange={handleChange} 
                    handleNextBtn={handleNextBtn} 
                    handleSubmit={handleSubmit} 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}/>
    </div>
   )
}