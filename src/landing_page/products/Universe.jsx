import React from "react";

const Universe = () => {
  // Real Partner Data from Zerodha's Ecosystem
  const partners = [
    {
      img: "/media/images/zerodhaFundhouse.png",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "/media/images/sensibullLogo.svg",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine real-time Greeks.",
    },
    {
      img: "/media/images/goldenpiLogo.png",
      desc: "Investment platform that allows you to buy and sell bonds and debentures online.",
    },
    {
      img: "/media/images/streakLogo.png",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "/media/images/smallcaseLogo.png",
      desc: "Thematic investment platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      img: "/media/images/dittoLogo.png",
      desc: "Personalized advice on life and health insurance, helping you choose the best plans for your needs.",
    },
  ];

  return (
    <section
      className="zerodha-universe py-5"
      style={{ backgroundColor: "#fff", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container text-center">
        {/* Header */}
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-8">
            <h2
              className="fw-normal mb-3"
              style={{ fontSize: "2.2rem", color: "#424242" }}
            >
              The Zerodha Universe
            </h2>
            <p className="text-muted fs-5" style={{ lineHeight: "1.6" }}>
              Extend your trading and investment experience even further with
              our partner platforms
            </p>
          </div>
        </div>

        {/* Partner Grid */}
        <div className="row g-5 align-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="partner-item px-3">
                <img
                  src={partner.img}
                  alt="partner logo"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#9b9b9b",
                    lineHeight: "1.5",
                  }}
                >
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="row mt-5">
          <div className="col">
            <button
              className="btn btn-primary px-5 py-2 fw-bold"
              style={{
                backgroundColor: "#387ed1",
                border: "none",
                borderRadius: "3px",
              }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
