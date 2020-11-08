import styled from 'styled-components';
import { responsive } from '@theme/mixins';

const ContactBook = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  margin: 0;
  height: calc(100vh - 114px);
  max-width: 100%;

  ${responsive.tablet`
    margin: auto 1rem;
    height: auto;
  `}

  ${responsive.laptop`
    margin: auto;
    width: 1000px;
  `}
`;

export default { ContactBook, Main };
