import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import userActivityPersonalDetails from "../data/personalActivityData";
import UserSentInterests from "../match-card/UserActivitySentCardInterests";

function UserSentInterestsSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <UserSentInterests {...userActivityPersonalDetails} />
      </SwiperSlide>
      <SwiperSlide>
        <UserSentInterests {...userActivityPersonalDetails} />
      </SwiperSlide>
      <SwiperSlide>
        <UserSentInterests {...userActivityPersonalDetails} />
      </SwiperSlide>
    </Swiper>
  );
}

export default UserSentInterestsSwiper;
