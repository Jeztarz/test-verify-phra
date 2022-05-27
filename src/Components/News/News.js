import "./News.css";

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
        breakpoints={{
          700: {
            width: 700,
            slidesPerView: 2,
          },
          800: {
            width: 800,
            slidesPerView: 4,
          },
        }}

          spaceBetween={5}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">

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
