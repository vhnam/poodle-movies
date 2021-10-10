import SlickSlider from "react-slick";
import { map } from "ramda";

import { Media } from "../../../../types";

import SliderItem from "../SliderItem";
import Wrapper from "./Wrapper";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

interface CarouselProps {
  data: Media[];
}

const Slider = ({ data }: CarouselProps) => (
  <Wrapper>
    <SlickSlider {...settings}>
      {map(
        (item) => (
          <SliderItem key={item.id} data={item} />
        ),
        data
      )}
    </SlickSlider>
  </Wrapper>
);

export default Slider;
