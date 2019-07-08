import styled from "styled-components";

const H1 = styled.h1`
  color: #343434;
  font-weight: 500;
  font-size: 4rem;
`;

const P = styled.p`
  line-height: 1.4;
  color: #8c8c8c;
`;

const A = styled.a`
  line-height: 1.4;
  color: #007eff;
  transition: .3s all;
  cursor: pointer;
  transform: scale(1);
  &:hover {
    color: #00448F;
    transform: scale(2);
    transition: .3s all;
  }
`;

export { P, A, H1 };

// #007eff