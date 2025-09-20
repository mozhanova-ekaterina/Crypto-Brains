import { SwiperSlide, Swiper } from "swiper/react";
import avatar from "./images/avatar.png";
import "swiper/swiper-bundle.css";
import styles from "./Testimonials.module.scss";
import { Quote } from "@/shared/images/icons/Quote";
import { Autoplay, Pagination } from "swiper/modules";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bullet_active,
        }}
        spaceBetween={30}
        slidesPerView={2.3}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const SliderItem = () => {
  return (
    <article className={styles.item}>
      <div className={styles.header}>
        <div className={styles.user}>
          <img src={avatar} alt="avatar" className={styles.avatar}></img>
          <div className={styles.info}>
            <div className={styles.name}>John Doe</div>
            <div className={styles.location}>USA, America</div>
          </div>
        </div>
        <Quote />
      </div>
      <p className={styles.text}>
        “ Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. ”
      </p>
    </article>
  );
};
