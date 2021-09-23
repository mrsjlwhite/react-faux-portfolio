import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (!e.target.value.length) {
            return setErrorMessage(`${e.target.name} is required.`);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        let inputErrors = [];
        if (!name) {
            inputErrors.push('Name');
        }
        if (!email) {
            inputErrors.push('Email');
        }
        if (!message) {
            inputErrors.push('Message');            
        }
        
        if (inputErrors.length > 0) {
            let conjunction = inputErrors.length === 1 ? 'is' : 'are';
            return setErrorMessage(`${inputErrors} ${conjunction} required.`)
        }
        
        console.log(formState);
    };

    return (
        <div className="content-container">
            <div className="content">
                <h1>Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <input type="text" name="name" onBlur={handleChange} defaultValue={name} placeholder="Name" />
                    </div>
                    <div className="form-item">
                        <input type="email" name="email" onBlur={handleChange} defaultValue={email} placeholder="Email" />
                    </div>
                    <div className="form-item">
                        <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} placeholder="Message" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;