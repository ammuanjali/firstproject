import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider() {
  return (
    <section className="slider-section">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
      >
        <div>
          <img src="https://html.dynamiclayers.net/dl/unimax/img/slider-1.jpg" alt="" />
          {/* <div className="nivo-html-caption slider-caption">
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                    <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Better Education for World.</h1>
                    <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Our Classes</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <img src="https://html.dynamiclayers.net/dl/unimax/img/slider-2.jpg" alt="" />
          {/* <div className="nivo-html-caption slider-caption">
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                    <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Better Education for World.</h1>
                    <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Our Classes</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <img src="https://html.dynamiclayers.net/dl/unimax/img/slider-3.jpg" alt="" />
          {/* <div className="nivo-html-caption slider-caption">
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                    <h1 className="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Better Education for World.</h1>
                    <p className="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
                    <a href="#" className="default-btn wow cssanimation fadeInBottom" data-wow-delay="0.8s">Our Classes</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;