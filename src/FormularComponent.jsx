import React, { useState } from 'react';
import "./FormularComponent.css";

const FormularComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('');
    const [message, setMessage] = useState('');
    const [subscription, setSubscription] = useState(false);
    const [consent, setConsent] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Zakódování hodnot
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedPlan = encodeURIComponent(plan);
        const encodedMessage = encodeURIComponent(message);
        const encodedSubscription = encodeURIComponent(subscription ? 'Subscribe to newsletter' : ''); // Přesně podle odkazu
        const encodedConsent = encodeURIComponent(consent ? 'I agree to the processing of my personal data in accordance with GDPR and the Privacy Policy.' : ''); // Přesně podle odkazu

        // URL Google Formuláře s ID pro každé pole
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdD69ssmhnd3HEeL0OehoTQOzo2Vl_cuVjvW3metCKf33rTOQ/formResponse";
        const queryString = `?entry.1895822834=${encodedName}&entry.2111336314=${encodedEmail}&entry.1430816917=${encodedPlan}&entry.2005371817=${encodedMessage}&entry.2008197820=${encodedSubscription}&entry.1358105704=${encodedConsent}`;
        const finalUrl = googleFormUrl + queryString;

        // Odeslání GET požadavku
        fetch(finalUrl, {
            method: 'GET',
            mode: 'no-cors',
        })
            .then(() => {
                alert('Děkujeme za vyplnění formuláře.');
                setName('');
                setEmail('');
                setPlan('');
                setMessage('');
                setSubscription(false);
                setConsent(false);
            })
            .catch((error) => {
                console.error('Chyba při odesílání formuláře:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="formularObject">
            <label htmlFor="name" className="label">Company Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="inputStyle"
            />

            <label htmlFor="email" className="label">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputStyle"
            />

            <label htmlFor="plan" className="label">Subscription Plan:</label>
            <select
                id="plan"
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                required
                className="inputStyle"
            >
                <option value="" disabled>Choose option</option>
                <option value="Free">Month Free Trial</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
            </select>

            <label htmlFor="message" className="label">Additional Message:</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textArea"
            />

            <label htmlFor="subscription" className="label">
                <input
                    type="checkbox"
                    id="subscription"
                    name="subscription"
                    checked={subscription}
                    onChange={(e) => setSubscription(e.target.checked)}
                    className="checkboxStyle"
                />
                Subscribe to our newsletter.
            </label>

            <label htmlFor="consent" className="label">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="checkboxStyle"
                />
                I agree to the processing of my personal data in accordance with GDPR and the Privacy Policy.
            </label>

            <button type="submit" className="formularButton">Odeslat</button>
        </form>
    );
};

export default FormularComponent;
