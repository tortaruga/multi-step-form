export const validateStep = (data, step) => {
    const newErrors = {};
    const errorEmpty = 'This field is required';
    const emailRegex = /^[A-Za-z0-9._-]+@[a-z-]+\.[a-z]{2,}$/
    const phoneRegex = /^\d+$/; 

    if (step === 1) {
        if (!data.name.trim()) {
            newErrors.name = errorEmpty;
        }

        if (!data.email.trim()) {
            newErrors.email = errorEmpty;
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = 'Please enter a valid e-mail'
        }

        if (!data.phoneNumber) {
            newErrors.phoneNumber = errorEmpty;
        } else if (!phoneRegex.test(data.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number'
        }
    }

    if (step === 2) {
        if (!data.planOption) {
            newErrors.planOption = 'Please select an option'
        }
    }
    return newErrors;
}
