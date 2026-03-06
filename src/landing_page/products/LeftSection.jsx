import React from "react";

const LeftSection = ({
  imageURL,
  imageAlt,
  title,
  description,
  tryDemo = "#",
  learnMore = "#",
  googlePlay = "",
  appStore = "",
}) => {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">
          <div className="image-wrapper text-center">
            <img
              src={imageURL}
              alt={imageAlt}
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 ps-lg-5 text-center text-lg-start">
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
            style={{ fontSize: "1rem", maxWidth: "450px" }}
          >
            {description}
          </p>

          <div className="mb-4 d-flex justify-content-center justify-content-lg-start gap-4">
            <a
              href={tryDemo}
              className="text-decoration-none text-primary fw-medium small"
            >
              Try demo <i className="fa fa-long-arrow-right ms-2"></i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none text-primary fw-medium small"
            >
              Learn More <i className="fa fa-long-arrow-right ms-2"></i>
            </a>
          </div>


          <div className="d-flex justify-content-center justify-content-lg-start gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
