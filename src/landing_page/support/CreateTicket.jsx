import React from "react";

const CreateTicket = () => {
  return (
    <div className="container mt-5">
      <h1 className="h5 mb-5">To create a ticket, select a relevant topic</h1>
      
      {/* First Row: Account and Trading */}
      <div className="row mb-5">
        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-plus-circle me-2"></i>Account Opening
          </h2>
          <ul className="list-unstyled w-75 small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Online Account Opening</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Offline Account Opening</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">NRI Account Opening</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Charges at Zerodha</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
            <li><a href="#" className="text-decoration-none">Getting Started</a></li>
          </ul>
        </div>

        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-user me-2"></i>Your Zerodha Account
          </h2>
          <ul className="list-unstyled w-75 small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Login Credentials</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Account Modification and Segment Addition</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">DP ID and bank details</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Your Profile</a></li>
            <li><a href="#" className="text-decoration-none">Transfer and conversion of shares</a></li>
          </ul>
        </div>

        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-chart-column me-2"></i>Trading and Platforms
          </h2>
          <ul className="list-unstyled small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Margin/leverage, Product and Order types</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Kite Web and Mobile</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Trading FAQs</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Corporate Actions</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Sentinel</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Kite API</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Pi and other platform</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Stockreports+</a></li>
            <li><a href="#" className="text-decoration-none">GTT</a></li>
          </ul>
        </div>
      </div>

      {/* Second Row: Funds, Console, and Coin */}
      <div className="row mt-5">
        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-credit-card me-2"></i>Funds
          </h2>
          <ul className="list-unstyled w-75 small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Adding Funds</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Fund Withdrawal</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">eMandates</a></li>
            <li><a href="#" className="text-decoration-none">Adding Bank Accounts</a></li>
          </ul>
        </div>

        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-circle-notch me-2"></i>Console
          </h2>
          <ul className="list-unstyled w-75 small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Reports</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Ledger</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Portfolio</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">60 Day Challenge</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">IPO</a></li>
            <li><a href="#" className="text-decoration-none">Referral Program</a></li>
          </ul>
        </div>

        <div className="col-4">
          <h2 className="h6 fw-bold mb-4">
            <i className="fa-solid fa-coins me-2"></i>Coin
          </h2>
          <ul className="list-unstyled small">
            <li className="mb-2"><a href="#" className="text-decoration-none">Understanding Mutual Funds</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">About Coin</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Buying and Selling</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Starting an SIP</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none">Managing your Portfolio</a></li>
            <li><a href="#" className="text-decoration-none">Coin App</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;