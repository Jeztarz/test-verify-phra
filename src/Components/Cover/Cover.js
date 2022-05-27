import './Cover.css'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Cover() {
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
        <SwiperSlide><img src="Images/cover.jpg" alt="First slide" className='img'/></SwiperSlide>
      </Swiper>
    </>


  );
}

export default Cover;
