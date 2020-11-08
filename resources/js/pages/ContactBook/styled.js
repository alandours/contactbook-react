import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const ContactBook = styled.div`
  background: ${({ theme }) => theme.selected.main[2]};
  display: flex;
  flex-direction: column;
  height: 100%;

  ${responsive.tablet`
    background: none;
  `}
`;

const Main = styled.main`
  display: flex;
  margin-top: 61px;
  height: auto;
  max-width: 100%;

  ${responsive.tablet`
    margin: auto 1rem;
  `}

  ${responsive.laptop`
    margin: auto;
    width: 1000px;
  `}
`;

export default { ContactBook, Main };
