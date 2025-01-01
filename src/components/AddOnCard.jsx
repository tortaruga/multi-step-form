export default function AddOnCard(props) {
    return (
        <label htmlFor={props.id}
        // hightlight selected option with css
            className={props.formData[props.name] ?
                        "option-card selected-option" : 
                        "option-card"}>

            <input type="checkbox"
                name={props.name}
                id={props.id}
                checked={props.formData[props.name]}
                onChange={props.handleChange} />
                    
            <div className="add-on-info">
                <h2 className="add-on-title">{props.addOns[props.name].title}</h2>
                <p className="add-on-subtitle">{props.addOns[props.name].subtitle}</p>
            </div>
            
            {/* display correct price based on plan selected */}
            {!props.yearlyBilling ? 
                <p className="add-on-price">+${props.addOns[props.name].price}/mo</p> :
                <p className="add-on-price">+${props.addOns[props.name].price}/yr</p>}
        </label>

    )
}
