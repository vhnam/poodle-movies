import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .slick-prev,
  .slick-next {
    top: 0;
    bottom: 0;
    height: 100%;
    text-shadow: -1px 1px 8px var(--chakra-colors-gray-700),
      1px 1px 8px var(--chakra-colors-gray-700),
      1px -1px 8px var(--chakra-colors-gray-700),
      -1px -1px 8px var(--chakra-colors-gray-700);
    transform: translate(0);
    z-index: 1;
  }

  .slick-prev {
    left: 0.25rem;
  }

  .slick-next {
    right: 0.25rem;
  }
`;

export default Wrapper;
