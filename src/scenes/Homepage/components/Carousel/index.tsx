import Slider from "react-slick";
import { Trend } from "../../../../types";

import CarouselItem from "../CarouselItem";
import Wrapper from "../Wrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

interface CarouselProps {
  data: Trend[];
}

const Carousel = ({ data }: CarouselProps) => (
  <Wrapper>
    <Slider {...settings}>
      {data.map((item) => (
        <CarouselItem key={item.id} data={item} />
      ))}
    </Slider>
  </Wrapper>
);

export default Carousel;
