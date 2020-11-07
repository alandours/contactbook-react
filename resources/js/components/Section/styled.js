import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100%;

  ${({ order }) => order && `
    order: ${order};
  `}
`;

const Content = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export default { Section, Content };
