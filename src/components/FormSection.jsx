import { useState } from "react";

import FirstStepForm from "./form-sections/FirstStepForm";
import SecondStepForm from "./form-sections/SecondStepForm";
import ThirdStepForm from "./form-sections/ThirdStepForm";
import FourthStepForm from "./form-sections/FourthStepForm";
import SuccessSection from "./form-sections/SuccessSection";

export default function FormSection(props) { 
    const [yearlyBilling, setYearlyBilling] = useState(false);

    function handleYearlyBilling() {
        setYearlyBilling(prevBilling => !prevBilling);
    }

    const prices = {
        arcade: !yearlyBilling ? 9 : 90,
        advanced : !yearlyBilling ? 12 : 120,
        pro: !yearlyBilling ? 15 : 150
    }

    const addOns = {
        addOnService: {
            title: 'Online Service',
            subtitle: 'Access to multiplayer games',
            price: !yearlyBilling ? 1 : 20 ,
        },

        addOnStorage: {
            title: 'Larger Storage',
            subtitle: 'Extra 1TB of cloud save',
            price: !yearlyBilling ? 2 : 20 ,
        },

        addOnCustomization: {
            title: 'Customizable Profile',
            subtitle: 'Custom theme on your profile',
            price: !yearlyBilling ? 2 : 20 ,
        },
    }
    
    return (
        <form onSubmit={props.handleSubmit} className="form-section">
            {props.currentStep == 1 && (
                <FirstStepForm errors={props.errors}
                            formData={props.formData}
                            handleChange={props.handleChange}
                            handleNextBtn={props.handleNextBtn} />
            )}

            {props.currentStep == 2 && (
                <SecondStepForm  errors={props.errors}
                            formData={props.formData}
                            handleChange={props.handleChange}
                            handleNextBtn={props.handleNextBtn}
                            handleBackBtn={props.handleBackBtn}
                            yearlyBilling={yearlyBilling}
                            handleYearlyBilling={handleYearlyBilling}
                            prices={prices} />
                
            )}

            {props.currentStep == 3 && (
                <ThirdStepForm formData={props.formData}
                        handleChange={props.handleChange}
                        handleNextBtn={props.handleNextBtn}
                        handleBackBtn={props.handleBackBtn}
                        yearlyBilling={yearlyBilling}
                        addOns={addOns} />
            )}

            {props.currentStep == 4 && (
                <FourthStepForm handleBackBtn={props.handleBackBtn}
                            yearlyBilling={yearlyBilling}
                            addOns={addOns}
                            formData={props.formData}
                            prices={prices}
                            setCurrentStep={props.setCurrentStep} />
            )}

            {props.currentStep === 0 && (
                <SuccessSection isSuccessful={props.isSuccessful} />    
            )}
        </form>
    )
}