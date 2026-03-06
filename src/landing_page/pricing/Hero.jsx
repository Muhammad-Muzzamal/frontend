import React from "react";

const pricingData = [
  {
    image: "/media/images/pricing0.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
  },
  {
    image: "/media/images/intradayTrades.svg", // This usually maps to the "20" graphic
    title: "Intraday and F&O trades",
    description:
      "Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
  },
  {
    image: "/media/images/pricing0.svg", // Often the MF icon is also the "0" graphic
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹ 0 commissions & brokerage.",
  },
];

const Hero = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mt-5 mb-5 pb-5 border-bottom">
        <h1 className="display-5 fw-bold mb-3">Pricing</h1>
        <p className="fs-5 text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="row text-center mt-5">
        {pricingData.map((item, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0">
            <div className="px-3">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-4"
                style={{ width: "100%", maxWidth: "220px" }} // Slightly wider for the large digits
              />
              <h3 className="fs-4 fw-medium mb-3 text-dark">{item.title}</h3>
              <p className="text-muted small lh-lg px-xl-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;