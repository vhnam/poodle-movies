import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  overflow: hidden;

  .slick-dots {
    bottom: 0.75rem;

    li button::before {
      color: var(--chakra-colors-orange-500);
    }

    li.slick-active button::before {
      color: var(--chakra-colors-orange-500);
    }
  }
`;

export default Wrapper;
