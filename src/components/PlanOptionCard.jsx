import arcadeIcon from '/images/icon-arcade.svg';
import advancedIcon from '/images/icon-advanced.svg';
import proIcon from '/images/icon-pro.svg';

export default function PlanOptionCard(props) {
    const icons = {
        arcade: arcadeIcon,
        advanced: advancedIcon,
        pro: proIcon
    };
    
    return (
        // highlight selected card with css 
        <div className={props.formData.planOption === props.id ?
            "plan-card selected-option" :
            "plan-card"}>
 
            <input type="radio" 
                name="planOption" 
                id={props.id}
                value={props.value}
                checked={props.formData.planOption === props.id}
                onChange={props.handleChange} />

            <label htmlFor={props.id}> 
                <img src={icons[props.id]} alt={`${props.id} plan icon`} />
                <div className="plan-card-info">
                    <h2 className="plan">{props.id}</h2>
                    {/* display price based on plan selected */}
                    {!props.yearlyBilling ? 
                    <p className="plan-price">${props.prices[props.id]}/mo</p> :
                    <p className="plan-price">${props.prices[props.id]}/yr <span className="plan-price-span">2 months free</span></p>}
                </div>             
            </label> 
        </div>
    )
}