import PlanOptionCard from "../PlanOptionCard"

export default function SecondStepForm(props) {
    return (
        <div className="second-step-form form-step">

            <div className="form-section-main">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
        
                <fieldset>
                    <div className="plan-cards-container">
                  
                       <PlanOptionCard formData={props.formData}
                                    id='arcade'
                                    value='arcade'
                                    handleChange={props.handleChange}
                                    yearlyBilling={props.yearlyBilling}
                                    handleYearlyBilling={props.handleYearlyBilling}
                                    prices={props.prices} />                   

                        <PlanOptionCard formData={props.formData}
                                    id='advanced'
                                    value='advanced'
                                    handleChange={props.handleChange}
                                    yearlyBilling={props.yearlyBilling}
                                    handleYearlyBilling={props.handleYearlyBilling}
                                    prices={props.prices} />

                        <PlanOptionCard formData={props.formData}
                                    id='pro'
                                    value='pro'
                                    handleChange={props.handleChange}
                                    yearlyBilling={props.yearlyBilling}
                                    handleYearlyBilling={props.handleYearlyBilling}
                                    prices={props.prices} />
                    </div>
                    
                    {/* billing option toggle switch */}
                    <div className="billing-options">
                        <span className="billing-monthly">monthly</span>  
                        
                        <label htmlFor="toggle-switch">
                            <input name="billing-option" 
                                type="checkbox" 
                                id="toggle-switch" 
                                checked={props.yearlyBilling}
                                onChange={props.handleYearlyBilling}/>
        
                            <span className="slider"></span>
                        </label>
                        <span>yearly</span>
                    </div>
        
                    {props.errors.planOption && (
                        <p className="error-msg">{props.errors.planOption}</p>
                    )}
        
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