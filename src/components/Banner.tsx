import "./Banner.scss";
export const Banner = () => {
  return (
    <>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
