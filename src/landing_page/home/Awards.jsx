import React from 'react'

const Awards = () => {
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/media/images/largestBroker.svg" alt="Largest Broker Image" />
                </div>
                <div className="col-6 p-5 mt-4">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src="/media/images/pressLogos.png" alt="Press Logoes" className='w-100 col-12 mt-3 w-75' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards