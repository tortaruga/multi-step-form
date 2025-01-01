import AddOnCard from "../AddOnCard"

export default function ThirdStepForm(props) {
    return (
        <div className="third-step-form form-step">
            <div className="form-section-main">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <fieldset>
                    <div className="add-ons-options">
                        
                        <AddOnCard id='online-service'
                                name="addOnService"
                                formData={props.formData}
                                handleChange={props.handleChange}
                                yearlyBilling={props.yearlyBilling}
                                addOns={props.addOns} />

                        <AddOnCard id='storage'
                                name="addOnStorage"
                                formData={props.formData}
                                handleChange={props.handleChange}
                                yearlyBilling={props.yearlyBilling}
                                addOns={props.addOns} />

                        <AddOnCard id='customization'
                                name="addOnCustomization"
                                formData={props.formData}
                                handleChange={props.handleChange}
                                yearlyBilling={props.yearlyBilling}
                                addOns={props.addOns} />
                        
                    </div>
                </fieldset>
            </div>

            <div className="form-section-footer">
                <button onClick={props.handleBackBtn} 
                    type="button" className="back-btn">go back</button>
                <button onClick={props.handleNextBtn} 
                    type="button" className="next-btn">next step</button>
            </div>
        </div>
    )
}