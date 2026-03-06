import React from "react";

const RightSection = ({
  title,
  description,
  learnMoreLink = "#",
  imageURL,
  imageAlt,
}) => {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center justify-content-center g-lg-5">
        <div className="col-lg-7 col-md-12 text-center text-lg-start order-2 order-lg-1">
          <h2
            className="fw-medium mb-3"
            style={{
              fontSize: "2.1rem",
              color: "#424242",
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </h2>
          <p
            className="text-muted mb-4 lh-lg"
            style={{ fontSize: "1rem", maxWidth: "500px" }}
          >
            {description}
          </p>

          <div className="mb-4 d-flex justify-content-center justify-content-lg-start gap-4">
            <a
              href={learnMoreLink}
              className="text-decoration-none text-primary fw-medium small"
            >
              Learn More <i className="fa fa-long-arrow-right ms-2"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 order-1 order-lg-2">
          <div className="image-wrapper text-center">
            <img
              src={imageURL}
              alt={imageAlt}
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
