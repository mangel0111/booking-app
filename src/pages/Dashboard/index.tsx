import { FC } from 'react';
import Details from 'src/components/Details';
import Searchbar from 'src/components/Searchbar';
import { DashboardContainer } from './DashboardStyled';

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <Searchbar />
      <Details />
    </DashboardContainer>
  );
};

export default Dashboard;
