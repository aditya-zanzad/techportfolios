import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Services.scss";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const Services = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="services">
        <div className="services">
      <h2>Services</h2>
      <Slider {...settings} className="slider">
        <div>
          <img src={slide3} alt="Web Development" />
          <h3>Web Development Services</h3>
          <p>Custom web solutions tailored to your business needs.</p>
        </div>
        <div>
          <img src={slide1} alt="App Development" />
          <h3>App Development Services</h3>
          <p>Building innovative mobile applications for various platforms.</p>
        </div>
        <div>
          <img src={slide2} alt="UI/UX Design" />
          <h3>UI/UX Design Services</h3>
          <p>Creating intuitive and user-friendly interfaces.</p>
        </div>
        <div>
          <img src={slide1} alt="SEO Services" />
          <h3>SEO Services</h3>
          <p>Optimizing your website for better search engine rankings.</p>
        </div>
      </Slider>
       </div>
    </div>
  );
};

export default Services;
