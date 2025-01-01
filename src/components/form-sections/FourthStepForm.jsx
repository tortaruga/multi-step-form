export default function FourthStepForm(props) {
    // calculate total price adding add on prices (if selected)
    const total = (props.prices[props.formData.planOption] ? 
                   props.prices[props.formData.planOption] : 
                   0) +
                   (props.formData.addOnService ? 
                   props.addOns.addOnService.price : 
                   0) +
                   (props.formData.addOnStorage ? 
                   props.addOns.addOnStorage.price : 
                   0) +
                   (props.formData.addOnCustomization ? 
                   props.addOns.addOnCustomization.price : 
                   0);
     
    return (
        <div className="fourth-step-form form-step">
            <div className="form-section-main">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                    
                <div className="summary">
                    <div className="plan-selected">
                        <div className="plan-info">
                            <p>{`${props.formData.planOption} (${props.yearlyBilling ? 'yearly' : 'monthly'})`}</p>
                            
                            <button onClick={() => props.setCurrentStep(2)}>change</button>
                        </div>
                        
                        <p className="plan-price">+${props.prices[props.formData.planOption]}/{props.yearlyBilling ? 'yr' : 'mo'}</p>
                        </div>
                         
                        <div className="add-on-summary">
                           {props.formData.addOnService && (
                            <p>{props.addOns.addOnService.title} <span>+${props.addOns.addOnService.price}/{props.yearlyBilling ? 'yr' : 'mo'}</span></p>
                           )}

                           {props.formData.addOnStorage && (
                            <p>{props.addOns.addOnStorage.title} <span>+${props.addOns.addOnStorage.price}/{props.yearlyBilling ? 'yr' : 'mo'}</span></p>
                           )}

                           {props.formData.addOnCustomization && ( 
                            <p>{props.addOns.addOnCustomization.title} <span>+${props.addOns.addOnCustomization.price}/{props.yearlyBilling ? 'yr' : 'mo'}</span></p>
                           )}
                        </div>
                    </div>
                        
                    <div className="total">
                        <p>Total ({props.yearlyBilling ? 'per year' : 'per month'})</p>
                        <span>+${total}/{props.yearlyBilling ? 'yr' : 'mo'}</span>
                    </div>
                </div>
                    
                <div className="form-section-footer">
                    <button className="back-btn" onClick={props.handleBackBtn} type="button">go back</button>
                    <button className="submit-btn" type="submit">confirm</button>
                </div>
            </div>
    )
}