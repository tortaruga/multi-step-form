export default function FirstStepForm(props) {
    return (
        <div className="first-step-form form-step">

            <div className="form-section-main">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                
                <fieldset>
                    <div className="label-group">
                        <label htmlFor="name">name</label>
                          {props.errors.name && (
                            <p className="error-msg">{props.errors.name}</p>
                           )}
                    </div>
                    
                    <input className={props.errors.name ? "error" : ""} 
                               id="name"
                               name="name"
                               value={props.formData.name}
                               placeholder="e.g. Stephen King"
                               onChange={props.handleChange}
                               type="text"
                               autoComplete="name" />
                        

                    <div className="label-group">
                        <label htmlFor="email">e-mail address</label>
                          {props.errors.email && (
                            <p className="error-msg">{props.errors.email}</p>
                          )}
                    </div>
                        
                    <input className={props.errors.email ? "error" : ""}
                            type="email"
                            id="email"
                            placeholder="e.g. stephenking@lorem.com"
                            name="email"
                            value={props.formData.email}
                            onChange={props.handleChange} 
                            autoComplete="email"/>

                    <div className="label-group">
                        <label htmlFor="phone-number">phone number</label>
                          {props.errors.phoneNumber && (
                            <p className="error-msg">{props.errors.phoneNumber}</p>
                          )}
                    </div>
                        
                    <input className={props.errors.phoneNumber ? "error" : ""}
                            type="tel" 
                            id="phone-number"
                            name="phoneNumber" 
                            placeholder="e.g. +1 234 567 890"
                            value={props.formData.phoneNumber}
                            onChange={props.handleChange} 
                            autoComplete="tel"/>
                </fieldset>
            </div>
                    
            <div className="form-section-footer">
                <div className="filler-element" aria-hidden></div>
                <button className="next-btn" 
                    type="button" 
                    onClick={props.handleNextBtn}>
                        next step
                </button>
            </div>
        </div>
    )
}