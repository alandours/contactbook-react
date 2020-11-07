import styled from 'styled-components';

import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import Icon from '@components/Icon';
import ContactBookLink from '@components/ContactBookLink';

const NotFound = styled.div`
`;

const NotFoundTitle = styled(Title)`
  justify-content: center;
`;

const NotFoundSubtitle = styled(Subtitle)`
  text-align: center;
`;

const NotFoundIcon = styled(Icon)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.mainColor.main};
`;

const NotFoundLink = styled(ContactBookLink)`
  font-size: inherit;
  padding: 0;
`;

export default { NotFound, NotFoundTitle, NotFoundSubtitle, NotFoundIcon, NotFoundLink };
