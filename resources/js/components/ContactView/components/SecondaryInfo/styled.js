import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { size, weight } from '@theme/typography';

const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  position: relative;

  ${({ order }) => order && `
    order: ${order};
  `}

  & + & {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h3`
  background: ${getColor('grey', 'light')};
  border-bottom: 2px solid ${getColor('grey', 'normal')};
  font-size: ${size.info};
  font-weight: ${weight.semiBold};
  margin-bottom: 1rem;
  padding: 0.5rem 1.5rem;
  position: sticky;
  top: 46px;
  width: 100%;
`;

const Datafield = styled.div`
  border-radius: 2px;
  padding: 0.25rem 1.5rem;
  margin: 0 1.5rem;
  transition: all ease 200ms;

  &:hover{
    background: ${getColor('grey', 'lighter')};;
    transition: all ease 100ms;
  }
`;

const Link = styled.a`
  display: flex;
`;

const Name = styled.div`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.semiBold};
  width: 50%;
`;

const Label = styled.div`
  color: ${getColor('grey', 'dark')};
  word-wrap: break-word;
  width: 50%;
`;

const Text = styled.p`
`;

const Notes = styled.p`
  padding: 0.25rem 1.75rem;
  white-space: pre-wrap;
`;

export default { SecondaryInfo, Section, Title, Datafield, Link, Name, Label, Text, Notes };
