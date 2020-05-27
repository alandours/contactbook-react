import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Section = styled.section`
  padding: 1rem 0;
  margin: 0 1rem;

  ${({ order }) => order && `
    order: ${order};
  `}

  & + & {
    border-top: 1px solid ${getColor('grey', 'light')};
  }
`;

const Title = styled.h3`
  margin: 0.5rem 0.25rem 1rem;
  font-size: ${size.info};
  font-weight: ${weight.bold};
`;

const Datafield = styled.div`
  display: flex;
  padding: 0.125rem 0.5rem;
  transition: all ease 250ms;

  &:hover{
    background: ${getColor('grey', 'lighter')};;
    transition: all ease 250ms;
  }
`;

const Label = styled.div`
  color: ${getColor('grey', 'dark')};
  word-wrap: break-word;
  width: 50%;
`;

const Link = styled.a`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.semiBold};
  width: 50%;
`;

const Text = styled.p`
`;

export default { SecondaryInfo, Section, Title, Datafield, Label, Link, Text };
