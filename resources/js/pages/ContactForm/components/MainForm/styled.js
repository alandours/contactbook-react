import styled from 'styled-components';
import { weight } from '@theme/typography';
import zindex from '@theme/zindex';
import { responsive } from '@theme/mixins';

const MainForm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  z-index: 1000;

  ${responsive.laptop`
    flex-direction: row;
  `}
`;

const PhotoLabel = styled.label`
  position: relative;
  cursor: pointer;

  &:before {
    content: 'Change photo';
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    color: #eee;
    display: flex;
    font-weight: ${weight.semiBold};
    justify-content: center;
    opacity: 1;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 208px;
    height: 208px;
    transition: all ease 200ms;
    z-index: ${zindex.tooltip};

    ${responsive.tablet`
      width: 188px;
      height: 188px;
    `}

    ${responsive.laptop`
      opacity: 0;
    `}
  }

  &:hover {
    &:before{
      opacity: 1;
      transition: all ease 400ms;
    }
  }
`;

const ImageInput = styled.input`
  display: none;
`;

export default { MainForm, PhotoLabel, ImageInput };
