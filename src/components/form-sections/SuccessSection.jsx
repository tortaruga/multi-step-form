import successIcon from '/images/icon-thank-you.svg';

export default function SuccessSection({isSuccessful}) {
    return (
        <div className="success-container">
                        {isSuccessful && (
                            <div className="success-section">
                              <img src={successIcon} alt="success icon" />
                              <h1>Thank you!</h1>
                              <p>Thanks for confirming your subscription! We hope you have fun 
                              using our platform. If you ever need support, please feel free 
                              to email us at support@loremgaming.com.</p>
                            </div>
                        )}
                    </div>
    )
}