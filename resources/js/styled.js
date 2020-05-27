import styled from 'styled-components';
import { responsive } from '@theme/mixins';
import { primary, secondary, grey, common } from '@theme/palette';
import { weight, size, fontFamily } from '@theme/typography';

const ContactBook = styled.div`
  ${fontFamily};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContainer = styled.div`
  margin: auto;
`;

export default { ContactBook, MainContainer };
