import CloudIcon from '@mui/icons-material/Cloud';
import CachedIcon from '@mui/icons-material/Cached';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function Home() {
    return (
        <div className="outerBox">
            <div className="innerBox">
               <div className="clouds">
                    <h1>Your <span>Cloud</span> Data,<br/>Real-Time<br/>Decisions.</h1>
                    <button className="trialButton">Try Free</button>
                    <img id="mockup" src="images/mockup.png"/>
               </div>
               <div className="benefits">
                    <h2>Key Benefits</h2>
                    <div className="cards">
                        <div className="card">
                            <CloudIcon id="cloudPosition" className='cardIcon'/>
                            <h3>Cloud Access</h3>
                            <p>Access your data anytime, anywhere.</p>
                        </div>
                        <div className="line"></div>
                        <div className="card">
                            <h3>Automatic Updates</h3>
                            <p>Always the latest version of the software.</p>
                            <CachedIcon className='cardIcon'/>
                        </div>
                        <div className="line"></div>
                        <div className="card">
                            <h3>Advanced Analytics</h3>
                            <p>Transform data into actionable insights.</p>
                            <AssessmentIcon className='cardIcon'/>
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