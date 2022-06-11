import { FC } from 'react';
import styled from 'styled-components';
import Input from 'src/components/Input';
import ButtonInput from '../Button';

export const SearchbarContainer = styled.div`
  display: flex;
`;

export const SearchBarItems = styled.div`
  display: flex;
  margin: 20px auto;

  > div:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.borderLineColor};
  }
`;

export const SearchBarItem = styled.div`
  max-width: 300px;
  padding: 10px 20px;
`;

const Searchbar: FC = () => {
  return (
    <SearchbarContainer>
      <SearchBarItems>
        <SearchBarItem>
          <Input label="From / To" type="date" />
        </SearchBarItem>
        <SearchBarItem>
          <Input label="For" placeholder="2 Guests" />
        </SearchBarItem>
        <SearchBarItem>
          <Input label="$ Per night" placeholder="345" />
        </SearchBarItem>
        <SearchBarItem>
          <Input label="$ total per 54 nights" placeholder="18.360" />
        </SearchBarItem>
        <SearchBarItem>
          <ButtonInput>INSTANT BOOKING</ButtonInput>
        </SearchBarItem>
      </SearchBarItems>
    </SearchbarContainer>
  );
};

export default Searchbar;
