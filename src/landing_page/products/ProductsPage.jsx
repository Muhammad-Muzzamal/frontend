import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <div>
      <Hero />

      {/* 1. Kite (Left Section) */}
      <LeftSection
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        imageURL="/media/images/kite.png"
        imageAlt="Kite Desktop Dashboard"
        tryDemoLink="#"
        learnMoreLink="#"
        googlePlayLink="#"
        appStoreLink="#"
      />

      {/* 2. Console (Right Section) */}
      <RightSection
        title="Console"
        description="The back office platform for your investment portfolio. Get detailed insights into your trades and investments with intuitive visualizations and easy-to-understand reports."
        imageURL="/media/images/console.png"
        imageAlt="Console Reporting Dashboard"
        learnMoreLink="#"
      />

      {/* 3. Coin (Left Section) */}
      <LeftSection
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        imageURL="/media/images/coin.png"
        imageAlt="Coin Mutual Funds"
        tryDemoLink="#"
        learnMoreLink="#"
        googlePlayLink="#"
        appStoreLink="#"
      />

      {/* 4. Varsity mobile (Right Section) */}
      <RightSection
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imageURL="/media/images/varsity.png"
        imageAlt="Varsity Mobile App"
        learnMoreLink="#"
      />

      {/* 5. Kite Connect API (Left Section) */}
      <LeftSection
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and connect it to our client base."
        imageURL="/media/images/kiteconnect.png"
        imageAlt="Kite Connect API"
        tryDemoLink="#"
        learnMoreLink="#"
        googlePlayLink="#"
        appStoreLink="#"
      />
      <p class="text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </div>
  );
};

export default ProductsPage;
