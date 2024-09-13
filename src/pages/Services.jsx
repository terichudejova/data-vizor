import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import BarChartIcon from '@mui/icons-material/BarChart';
import DvrIcon from '@mui/icons-material/Dvr';
import SavingsIcon from '@mui/icons-material/Savings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmergencyIcon from '@mui/icons-material/Emergency';

export default function Services() {
    return (
        <div className="outerBox">
            <div className="innerBox">
                <div className="firstSectionServices">
                    <div className="popisekSluzby">
                        <h2>What We<br/>Offer</h2>
                        <p><span>DataVizor</span> empowers businesses with powerful, <span>cloud-based tools</span> designed to make data analysis, visualization, and reporting more accessible and effective. Our solutions help you <span>uncover hidden patterns</span>, <span>predict future trends</span>, and make <span>data-driven decisions</span> with confidence. Explore our key services to see how we turn complex data into <span>clear insights</span>.</p>
                    </div>
                    <img id="sluzbyImg" src="images/mockup.png"/>
                </div>

                <div className="secondSectionServices">
                    <div className="cardService">
                        <ScatterPlotIcon className='serviceCardIcon'/>
                        <h3>Data Analysis</h3>
                        <h4>Advanced Data Analysis Made Simple</h4>
                        <p>Predictive modeling to forecast outcomes. Trend analysis for quick insights. Automated data cleaning and preparation.</p>
                    </div>
                    <div className="cardService">
                        <BarChartIcon className='serviceCardIcon'/>
                        <h3>Visualization</h3>
                        <h4>Turn Data into Engaging Visuals</h4>
                        <p>Interactive dashboards and charts. Customizable visuals to match your brand style. Real-time updates for accurate decision-making.</p>
                    </div>
                    <div className="cardService">
                        <DvrIcon className='serviceCardIcon'/>
                        <h3>Reporting</h3>
                        <h4>Professional Reports in Seconds</h4>
                        <p>Automated report generation with custom layouts. Integration of visuals directly into reports. Export options for PDF, Excel, and online sharing.</p>
                    </div>
                </div>

                <div className="thirdSectionServices">
                    <div className="popisekSluzby">
                        <img src='images/industry.png'/>
                        <div className="rightColumn">
                            <h2>Solving<br/>Challenges</h2>
                            <p>Discover how DataVizor empowers businesses across <span>various industries</span> to harness their data, overcome <span>unique challenges</span>, and achieve greater operational efficiency. With <span>real-time insights</span> and advanced analytics, DataVizor helps organizations make smarter, <span>data-driven decisions</span> that drive success.</p>
                        </div> 
                    </div>
                    <div className="industries">
                        <div className="industry">
                            <SavingsIcon className='industryCardIcon'/>
                            <h3>Finance</h3>
                            <h4>Forecast and Manage Financial Risks with Precision</h4>
                            <p>Improved risk assessment with predictive analysis. Enhanced investment decision-making. Streamlined compliance reporting.</p>
                        </div>
                        <div className="industry">
                            <StorefrontIcon className='industryCardIcon'/>
                            <h3>Retail</h3>
                            <h4>Optimize Inventory and Boost Sales with Data-Driven Insights</h4>
                            <p>Accurate demand forecasting. Enhanced inventory management. Data-driven marketing strategies.</p>
                        </div>
                        <div className="industry">
                            <EmergencyIcon className='industryCardIcon'/>
                            <h3>Healthcare</h3>
                            <h4>Enhance Patient Care with Real-Time Data Insights</h4>
                            <p>Real-time monitoring of patient data. Predictive analytics for patient outcomes. Streamlined reporting for clinical trials and operations.</p>
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