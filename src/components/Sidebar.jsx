import SidebarStep from "./SidebarStep.jsx";

export default function Sidebar({setCurrentStep, currentStep, handleNextBtn, formData, setErrors}) {

    return ( 
         <div className="sidebar">
            <ul className="sidebar-btns">
                <SidebarStep number="1"
                           id="one"
                           title="Your Info"
                           handleNextBtn={handleNextBtn}
                           setCurrentStep={setCurrentStep}
                           currentStep={currentStep}
                           formData={formData}
                           setErrors={setErrors}
                />

                <SidebarStep number="2"
                           id="two"
                           title="Select plan"
                           handleNextBtn={handleNextBtn}
                           setCurrentStep={setCurrentStep}
                           currentStep={currentStep}
                           formData={formData}
                           setErrors={setErrors}
                />
                
                <SidebarStep number="3"
                           id="three"
                           title="Add-ons" 
                           handleNextBtn={handleNextBtn}
                           setCurrentStep={setCurrentStep}
                           currentStep={currentStep}
                           formData={formData}
                           setErrors={setErrors}
                />
                
                <SidebarStep number="4"
                           id="four"
                           title="summary"
                           handleNextBtn={handleNextBtn}
                           setCurrentStep={setCurrentStep}
                           currentStep={currentStep}
                           formData={formData}
                           setErrors={setErrors}
                />
            </ul>
         </div>
    )
}