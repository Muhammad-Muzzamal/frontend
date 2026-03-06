import React from "react";

const charges = [
  "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
  "Digital contract notes will be sent via e-mail.",
  "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
  "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
  "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
  "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.",
];

const Brokerage = () => {
  return (
    <div className="container border-top py-5">
      <div className="row g-5">
        {/* Left Column: Brokerage Calculator & Details */}
        <div className="col-md-6">
          <div className="mb-4">
            <a
              href="#"
              className="text-decoration-none fs-5 d-inline-block mb-3"
            >
              Brokerage calculator
            </a>
            <ul className="list-unstyled">
              {charges.map((item, index) => (
                <li
                  key={index}
                  className="d-flex mb-3 text-muted"
                  style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
                >
                  <span className="me-2 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: List of Charges Link */}
        <div className="col-md-6 text-md-center">
          <a
            href="#"
            className="text-decoration-none fs-5"
          >
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;