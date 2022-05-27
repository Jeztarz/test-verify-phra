import "./News.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
function News() {
  return (
    <div className="news">
      <h4>ข่าวสารและกิจกรรม</h4>

      <div className="swiperT">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

         
         
         
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="Images/news.jpg" alt="news" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default News;
