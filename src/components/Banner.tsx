import "./Banner.scss";
export const Banner = () => {
  return (
    <>
      {/* <section className="hero-section set-bg">
		<div className="hero-slider owl-carousel">
			<div className="hs-item">
				<div className="hs-left"><img src="img/slider-img.png" alt="ee"/></div>
				<div className="hs-right">
					<div className="hs-content">
						<div className="price">from $19.90</div>
						<h2><span>2018</span> <br></br>summer collection</h2>
						<a href="" className="site-btn">Shop NOW!</a>
					</div>	
				</div>
			</div>
			<div className="hs-item">
				<div className="hs-left"><img src="img/slider-img.png" alt="f"/></div>
				<div className="hs-right">
					<div className="hs-content">
						<div className="price">from $19.90</div>
						<h2><span>2018</span> <br></br>summer collection</h2>
						<a href="" className="site-btn">Shop NOW!</a>
					</div>	
				</div>
			</div>
		</div>
	</section> */}
      <div className="banner-page">
        <div className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  alt="search"
                  src={require("./image/dd.png")}
                  className="top-image"
                />
              </div>
              <div className="col-md-6">
                <div className="banner-content">
                  <h2 className="banner-price">from RS.800</h2>
                  <h2 className="banner-title banner-date">2023</h2>
                  <h2 className="banner-title">summer collection</h2>

                  
                  <div className="high-light-wrapper">
                    <div className="high-light">Shop Now</div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
