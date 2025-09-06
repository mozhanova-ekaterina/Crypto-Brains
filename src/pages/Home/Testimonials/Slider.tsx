import { SwiperSlide, Swiper } from "swiper/react";
import avatar from "./avatar.png";
import "swiper/swiper-bundle.css";
import styles from "./Testimonials.module.scss";
import { Quote } from "@/shared/images/icons/Quote";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper spaceBetween={30} slidesPerView={2.3}>
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
        <img src={avatar} alt="avatar"></img>
        <div className={styles.name}></div>
        <Quote />
      </div>
      <p>
        “ Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. ”
      </p>
    </article>
  );
};
