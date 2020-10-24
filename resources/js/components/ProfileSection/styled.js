import styled from 'styled-components';

const ProfileSection = styled.section`
  position: relative;

  ${({ order }) => order && `
    order: ${order};
  `}
`;

const Content = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export default { ProfileSection, Content };
