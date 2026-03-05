import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-light border-top mt-5 py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Social Section */}
          <div className="col-3">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              className="w-50 mb-3"
            />
            <p className="text-muted small">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="fs-5 text-muted">
              <span className="me-3">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="me-3">
                <i className="fa-brands fa-square-facebook"></i>
              </span>
              <span className="me-3">
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span className="me-3">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
              <span className="me-3">
                <i className="fa-brands fa-telegram"></i>
              </span>
            </div>
          </div>

          {/* Company Column */}
          <div className="col-3">
            <ul style={{ listStyle: "none" }} className="p-0">
              <li className="mb-3 text-dark">
                <b>Company</b>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Referral programme
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha.tech
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Press & media
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-3">
            <ul style={{ listStyle: "none" }} className="p-0">
              <li className="mb-3 text-dark">
                <b>Support</b>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Support portal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Z-Connect blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  List of charges
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="col-3">
            <ul style={{ listStyle: "none" }} className="p-0">
              <li className="mb-3 text-dark">
                <b>Account</b>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Open an account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Fund transfer
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets — once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write your bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            account. As a business we don't give stock tips, and have not
            authorized anyone else to do so for others. If you find anyone
            claiming to be part of Zerodha and offering such tips, please create
            a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
