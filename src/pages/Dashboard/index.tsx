import { FC } from 'react';
import Details from 'src/components/Details';
import Searchbar from 'src/components/Searchbar';

const Dashboard: FC = () => {
  return (
    <div>
      <Searchbar />
      <Details />
    </div>
  );
};

export default Dashboard;
