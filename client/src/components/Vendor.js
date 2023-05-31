import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const responsive = {
  0:{
      items:2
  },
  576:{
      items:3
  },
  768:{
      items:4
  },
  992:{
      items:5
  },
  1200:{
      items:6
  }
}

const Vendor = () => {

  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col">
          <OwlCarousel className="vendor-carousel" responsive={responsive} loop autoplay margin={29} >
            <div className="bg-light p-4">
              <img src="/img/vendor-1.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-2.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-3.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-4.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-5.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-6.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-7.jpg" alt="" />
            </div>
            <div className="bg-light p-4">
              <img src="/img/vendor-8.jpg" alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
