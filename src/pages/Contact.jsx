import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormularComponent from "../FormularComponent";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {

    const location = useLocation();
    const formRef = useRef(null); // Ref pro formulář

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const plan = queryParams.get('plan');
        
        // Pokud je v URL parametr plan, posuň se na formulář
        if (plan && formRef.current) {
            const offsetY = -100; // Posun o 100px výš
            const formPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset + offsetY;
            window.scrollTo({ top: formPosition, behavior: 'smooth' });
        }
    }, [location]);

    

    return (
        <div className="outerBox">
            <div className="innerBox">
                <div className={`contactPopisek outerBox`}>
                    <h2>Reach Out<br/> and <span>Start Today</span></h2>
                    <p>Whether you're ready to begin your <span>free trial</span>, explore our plans, or have questions about how <span>DataVizor can support your business</span>, we're here to help. Select the plan that fits your needs and reach out to our team for more information. We're excited to <span>connect</span> and help you harness the <span>full power of your data</span>.</p>
                </div>
                <div className="formular" ref={formRef}>
                    <FormularComponent />
                </div>
            </div>
            <div className={`contactInfo`}>
                <a href="https://www.google.com/maps/dir//North+Hills+Office+Park,+3630+N+Hills+Dr,+Austin,+TX+78731,+Spojen%C3%A9+st%C3%A1ty/@30.3533916,-97.7568409,17.23z/data=!4m17!1m7!3m6!1s0x8644cb1a36c8bfc3:0xd42fccd86ca6f930!2sNorth+Hills+Office+Park!8m2!3d30.3532238!4d-97.7566986!16s%2Fg%2F11fp9mgx9l!4m8!1m0!1m5!1m1!1s0x8644cb1a36c8bfc3:0xd42fccd86ca6f930!2m2!1d-97.7567132!2d30.3531153!3e3?hl=cs&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_isBlank"><img src="images/map3.png"/></a>
                <div className="popisek">
                    <div className="adresa">
                    <h2>Contact Info</h2>
                        <h3>Address:</h3>
                        <a href="https://www.google.com/maps/dir//North+Hills+Office+Park,+3630+N+Hills+Dr,+Austin,+TX+78731,+Spojen%C3%A9+st%C3%A1ty/@30.3533916,-97.7568409,17.23z/data=!4m17!1m7!3m6!1s0x8644cb1a36c8bfc3:0xd42fccd86ca6f930!2sNorth+Hills+Office+Park!8m2!3d30.3532238!4d-97.7566986!16s%2Fg%2F11fp9mgx9l!4m8!1m0!1m5!1m1!1s0x8644cb1a36c8bfc3:0xd42fccd86ca6f930!2m2!1d-97.7567132!2d30.3531153!3e3?hl=cs&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_isBlank"><LocationOnIcon className="contactIcon"/> North Hills Office Park, 3630 N Hills Dr, Austin, TX 78731, USA</a>
                    </div>
                    <div className="support">
                        <h3>Contact:</h3>
                            <a href="mailto:info@datavizor.com" target="_isBlank"><EmailIcon className="contactIcon"/> info@datavizor.com</a>
                            <a href="tel:+15125551234" target="_isBlank"><LocalPhoneIcon className="contactIcon"/> +1 (512) 555-1234</a>
                        </div>
                </div>
            </div>
            <footer className="contactFooter">
                <a href='https://www.terezachudejova.cz/' target='_isBlank'>© Tereza Chudějová, 2024</a>
            </footer>
        </div>
    )
}