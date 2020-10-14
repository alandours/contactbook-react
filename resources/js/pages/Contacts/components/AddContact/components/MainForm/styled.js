import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight } from '@theme/typography';
import zindex from '@theme/zindex';

const MainForm = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
  width: 100%;
  z-index: 1000;
`;

const PhotoLabel = styled.label`
  position: relative;
  cursor: pointer;

  &:before {
    content: 'Change photo';
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    color: ${getColor('common', 'white')};
    display: flex;
    font-weight: ${weight.semiBold};
    justify-content: center;
    opacity: 0;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 188px;
    height: 188px;
    transition: 250ms;
    z-index: ${zindex.tooltip};
  }

  &:hover {
    &:before{
      opacity: 1;
    }
  }
`;

export default { MainForm, PhotoLabel };
