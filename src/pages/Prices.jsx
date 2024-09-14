import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NavLink } from 'react-router-dom';

export default function Prices() {
    return (
        <div className="outerBox">
            <div className="innerBox">
                <div className="popisek">
                    <h2>Choose The <span>Right Plan</span><br/>For Your Business</h2>
                    <p>Whether you're just getting started on your data journey or require <span>advanced, enterprise-level features</span>, DataVizor offers a plan tailored to meet your unique needs. From essential tools that help small teams <span>visualize and analyze their data</span>, to sophisticated, <span>AI-powered solutions</span> for larger organizations, our pricing options provide flexibility without sacrificing quality. Get the insights you need to make <span>smarter, faster decisions</span>, all in real time. Plus, with our <span>free month trial</span> of the Premium version, you can experience the full range of DataVizor's capabilities—risk-free and with no upfront commitment. Dive in today and discover how DataVizor can transform the way you work with data.</p>
                </div>

                <div className="offer">

                    <div className="offerCard">
                        <div className="price">
                            <p>FREE</p>
                        </div>
                        <h3>Free Month Trial</h3>
                        <p>Experience all of the features of DataVizor's Premium plan completely free for one month. No commitment, no strings attached—just powerful data visualization, analysis, and reporting tools at your fingertips.</p>
                        <h4>What's Included:</h4>
                        <div className="features">
                            <p><CheckCircleIcon className='checkIcon'/> Full access to Premium features for 30 days.</p>
                            <p><CheckCircleIcon className='checkIcon'/> 24/7 support during the trial period.</p>
                            <p><CheckCircleIcon className='checkIcon'/> No credit card required to start.</p>
                        </div>
                        <div className="buttonDiv">
                            <NavLink to="/data-vizor/contact" className="pricesButton">
                                Start Your Free Trial
                            </NavLink>
                        </div>
                    </div>

                    <div className="offerCard">
                        <div className="price">
                            <p>$39 / m</p>
                        </div>
                        <h3>Standard Plan</h3>
                        <p>Our Standard version is designed for small to medium-sized businesses that need reliable data tools for daily operations. This plan offers essential features to streamline your data processes at an affordable price.</p>
                        <h4>What's Included:</h4>
                        <div className="features">
                            <p><CheckCircleIcon className='checkIcon'/> Core data visualization tools.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Basic analytics and reporting features.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Access for up to 5 team members.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Email support.</p>
                        </div>
                        <div className="buttonDiv">
                            <NavLink to="/data-vizor/contact" className="pricesButton">
                                Choose Standard Now
                            </NavLink>
                        </div>
                    </div>

                    <div className="offerCard">
                        <div className="price">
                            <p>$99 / m</p>
                        </div>
                        <h3>Premium Plan</h3>
                        <p>Unlock the full potential of your data with DataVizor's Premium plan. This option is ideal for businesses with advanced data needs, offering AI-powered analytics, custom reporting, and enhanced collaboration tools.</p>
                        <h4>What's Included:</h4>
                        <div className="features">
                            <p><CheckCircleIcon className='checkIcon'/> Advanced AI-powered analytics.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Custom dashboards and reporting templates.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Collaboration tools for unlimited team members.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Priority 24/7 support and dedicated account manager.</p>
                            <p><CheckCircleIcon className='checkIcon'/> Integration with 3rd-party tools and services (API access).</p>
                        </div>
                        <div className="buttonDiv">
                            <NavLink to="/data-vizor/contact" className="pricesButton">
                                Choose Premium Now
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
            <footer>
                <a href='https://www.terezachudejova.cz/' target='_isBlank'>© Tereza Chudějová, 2024</a>
            </footer>
        </div>
    )
}