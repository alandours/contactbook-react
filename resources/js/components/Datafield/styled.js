import styled from 'styled-components';
import { weight } from '@theme/typography';
import { responsive } from '@theme/mixins';

const Datafield = styled.div`
  border-radius: 2px; 
  color: ${({ theme }) => theme.selected.contrast[1]};
  padding: 0.25rem 1.75rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${({ theme }) => theme.selected.main[2]};;
    transition: all ease 100ms;
  }
`;

const Text = styled.p`
  text-align: left;
`;

const DataContainer = styled.a`
  display: flex;
  flex-direction: column;

  ${responsive.tablet`
    flex-direction: row;
  `}
`;

const Name = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${weight.normal};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  ${responsive.tablet`
    width: 50%;
  `}
`;

const Label = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};
  word-wrap: break-word;
  width: 100%;

  ${responsive.tablet`
    width: 50%;
  `}
`;

export default { Datafield, Text, DataContainer, Name, Label };
