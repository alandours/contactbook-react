import styled, { css } from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';
import zindex from '@theme/zindex';

const Gradient = styled.div`
  background: ${getColor('primary', 'main')};
  height: 5px;
  min-height: 5px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: ${zindex.normal};

  ${({ palette }) => palette.length && css`
    background: linear-gradient(90deg,
      ${palette[0]} 0%, ${palette[0]} 20%,
      ${palette[1]} 20%, ${palette[1]} 40%,
      ${palette[2]} 40%, ${palette[2]} 60%,
      ${palette[3]} 60%, ${palette[3]} 80%,
      ${palette[4]} 80%, ${palette[4]} 100%
    );
  `}
`;

const MainInfo = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
  width: 100%;
  z-index: 1000;
`;

const ProfilePicture = styled.img`
  border: 6px solid ${getColor('common', 'white')};
  border-radius: 100%;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  object-fit: cover;
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

const MainData = styled.div`
  margin-left: 1.5rem;
  width: 100%;
`;

const MainDatafield = styled.div`
  margin: 0.25rem 0;
`;

const Name = styled.h2`
  font-size: ${size.max};
  margin-bottom: 0.5rem;
`;

const Age = styled.span`
  font-size: ${size.large};
  font-weight: ${weight.regular};
  color: ${getColor('grey', 'dark')};
  margin: 0 1rem;
`;

const Link = styled.a`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.semiBold};
`;

const Text = styled.p`
  display: inline-block;
`;

export default { Gradient, MainInfo, ProfilePicture, MainData, MainDatafield, Name, Age, Link, Text };
