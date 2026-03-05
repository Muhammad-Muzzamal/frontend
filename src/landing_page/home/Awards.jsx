import React from 'react';

const Awards = () => {
    return (
        <div className='container my-5 py-5'>
            <div className="row align-items-center">
                {/* Left Column: Hero Image */}
                <div className="col-12 col-md-6 p-5 text-center">
                    <img 
                        src="/media/images/largestBroker.svg" 
                        alt="Largest Broker" 
                        className="img-fluid" 
                    />
                </div>

                {/* Right Column: Content */}
                <div className="col-12 col-md-6 p-5">
                    <h1 className="mb-4 fs-2">Largest stock broker in India</h1>
                    <p className="text-muted mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail order 
                        volumes in India daily by trading and investing in:
                    </p>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <ul className="lh-lg">
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className="lh-lg">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos */}
                    <div className="mt-4">
                        <img 
                            src="/media/images/pressLogos.png" 
                            alt="Press Logos" 
                            className="img-fluid w-100" 
                            style={{ opacity: 0.8 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;