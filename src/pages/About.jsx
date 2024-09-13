import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function About() {
    return (
        <div className="outerBox">
            <div className="innerBox">

                <div className="firstSection">
                    <h2>Our<br/>History</h2>
                    <div className="rightColumn">
                        <p className="firstP">Founded in <span>2007</span>, DataVizor began with a simple yet powerful vision: to <span>make data accessible, understandable, and actionable</span> for businesses of all sizes. What started as a small team of data enthusiasts in <span>Austin, Texas</span> has grown into a leading provider of <span>cloud-based</span> data analysis and visualization solutions, empowering organizations around the world to make data-driven decisions with confidence.</p>
                        <p>In our early days, DataVizor was built to solve a problem we faced ourselves—navigating the overwhelming complexity of traditional data tools. We saw an opportunity to create a platform that wasn't just about crunching numbers, but about <span>turning data into meaningful insights</span> that could <span>drive real-world results</span>. Our journey began with a focus on developing intuitive, user-friendly tools that combined <span>advanced analytics with easy-to-use interfaces</span>, setting us apart from the competition.</p>
                    </div>
                </div>

                <div className="secondSection">
                    <img id="austinImg" src="images/austin.jpg"/>
                    <div className="quoteSection">
                        <FormatQuoteIcon className='quoteIcon' />
                        <p>Transforming data complexity into clarity since day one.</p>
                        <FormatQuoteIcon className='quoteIcon' />
                    </div>
                </div>

                <div className="thirdSection">
                    <div className="leftColumn">
                        <h2>As Time<br/>Went By</h2>
                        <p>Today, DataVizor is trusted by <span>62 of companies worldwide</span>, from innovative startups to established enterprises. Our commitment to continuous improvement and customer success has been the driving force behind every update, every new feature, and every partnership we've formed. We believe that the power of data should be <span>available to everyone</span>, and our mission remains as clear as ever: to provide the tools that <span>turn data into decisions, insights into impact, and complexity into clarity</span>.</p>
                    </div>
                    <div className="timeline">
                        <div className="timelineSection">
                            <div className="circle"></div>
                            <div className="popisek">
                                <h4>2011</h4>
                                <p>Launch of our first cloud-based dashboard, enabling users to visualize data in real-time without the need for complex installations.</p>
                                <div className="timelineLine"></div>
                            </div>  
                        </div>
                        <div className="timelineSection">
                            <div className="circle"></div>
                            <div className="popisek">
                                <h4>2012</h4>
                                <p>Introduction of predictive analytics features, allowing businesses to forecast trends and make proactive decisions.</p>
                                <div className="timelineLine"></div>
                            </div>  
                        </div>
                        <div className="timelineSection">
                            <div className="circle"></div>
                            <div className="popisek">
                                <h4>2013</h4>
                                <p>Expansion into global markets, with clients across Europe and Asia.</p>
                                <div className="timelineLine"></div>
                            </div>  
                        </div>
                        <div className="timelineSection">
                            <div className="circle"></div>
                            <div className="popisek">
                                <h4>2015</h4>
                                <p>Recognition as a leader in data visualization solutions by Gartner in their annual Magic Quadrant report</p>
                                <div className="timelineLine"></div>
                            </div>  
                        </div>
                        <div className="timelineSection">
                            <div className="circle"></div>
                            <div className="popisek">
                                <h4>2019</h4>
                                <p>Rollout of advanced AI-powered tools, further enhancing our platform’s ability to automate insights and streamline reporting.</p>
                                <div className="timelineLine"></div>
                            </div>  
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