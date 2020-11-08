import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  width: 100%;

  ${({ order }) => order && `
    order: ${order};
  `}
`;

const Content = styled.div`
  margin: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export default { Section, Content };
