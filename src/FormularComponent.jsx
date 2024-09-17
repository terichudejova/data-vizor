import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./FormularComponent.css";

const FormularComponent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedPlan = queryParams.get('plan');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('');
    const [message, setMessage] = useState('');
    const [subscription, setSubscription] = useState(true);
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        if (selectedPlan) {
            setPlan(selectedPlan);
        }
    }, [selectedPlan]);

    // Popup cards
    const [news, setNews] = useState(false);
    const toggleNews = () => {
        setNews(!news);
        setSubscription(!subscription);
    }
    const toggleNews2 = () => {
        setNews(!news);
        setSubscription(subscription);
    }

    const [gdpr, setGdpr] = useState(false);
    const toggleGdpr = () => {
        setGdpr(!gdpr);
        setConsent(!consent);
    }
    const toggleGdpr2 = () => {
        setGdpr(!gdpr);
        setConsent(consent);
    }

    const [policy, setPolicy] = useState(false);
    const togglePolicy = () => {
        setPolicy(!policy);
        setConsent(!consent);
    }
    const togglePolicy2 = () => {
        setPolicy(!policy);
        setConsent(consent);
    }


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
                alert('Thank you for choosing us.');
                setName('');
                setEmail('');
                setPlan('');
                setMessage('');
                setSubscription(true);
                setConsent(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    

    return (
        <form onSubmit={handleSubmit} className={`formularObject`}>
            <div className="popupCards">
                <div className={`popupNewsletter popup ${news ? 'yes' : 'no'}`}>
                        <h4>Unlock the Power of Your Data with DataVizor</h4>
                        <p>Join our newsletter to stay informed about the latest advancements in data analysis, visualization, and reporting. Be the first to receive product updates, expert insights, and tips to help you leverage your data for smarter decision-making.</p>
                        <button type='button' onClick={toggleNews2}>Close</button>
                </div>
                <div className={`popupGdpr popup ${gdpr ? 'yes' : 'no'}`}>
                        <h4>Your Data is Safe with Us</h4>
                        <p>By submitting this form, you consent to the processing of your personal data. We will only use your information to respond to your inquiry and provide relevant services. Your data will be handled in accordance with applicable data protection regulations.</p>
                        <button type='button' onClick={toggleGdpr2}>Close</button>
                </div>
                <div className={`popupPolicy popup ${policy ? 'yes' : 'no'}`}>
                        <h4>Our Commitment to Your Privacy</h4>
                        <p>At DataVizor, we are committed to protecting your personal data. Our Privacy Policy explains how we collect, use, and safeguard the information you provide. It also details your rights regarding your data and how you can exercise them.</p>
                        <button type='button' onClick={togglePolicy2}>Close</button>
                </div>
            </div>
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
                Subscribe to our <span onClick={toggleNews}>newsletter</span>.
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
                I agree to the processing of my personal data in accordance with <span onClick={toggleGdpr}>GDPR</span> and the <span onClick={togglePolicy}>Privacy Policy</span>.
            </label>

            <button type="submit" className="formularButton">Let Us Know</button>
        </form>
    );
};

export default FormularComponent;
