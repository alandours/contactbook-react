import styled from 'styled-components';
import { getColor } from '@theme/mixins';
import { weight } from '@theme/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RemoveButton = styled(FontAwesomeIcon)`
  color: ${getColor('grey', 'darkest')};
  cursor: pointer;
  display: none;
  position: absolute;
  right: 12px;
  top: 8px;
`;

const Datafield = styled.div`
  border-radius: 2px; 
  padding: 0.25rem 1.5rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${getColor('grey', 'lighter')};;
    transition: all ease 100ms;
  }

  &:hover ${RemoveButton} {
    display: block;
  }
`;

const Text = styled.p`
  text-align: left;
`;

const DataContainer = styled.a`
  display: flex;
`;

const Name = styled.div`
  color: ${getColor('primary', 'dark')};
  font-weight: ${weight.semiBold};
  width: 50%;
`;

const Label = styled.div`
  color: ${getColor('grey', 'darker')};
  word-wrap: break-word;
  width: 50%;
`;

export default { Datafield, Text, DataContainer, Name, Label, RemoveButton };
