import styled, { css } from 'styled-components';
import { weight, size } from '@theme/typography';

const Dashboard = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`;

const DashboardSection = styled.div`
  width: 100%;
`;

const DashboardContainer = styled.div`
  margin: 0.5rem 1.25rem;
`;

export default { Dashboard, DashboardSection, DashboardContainer };
