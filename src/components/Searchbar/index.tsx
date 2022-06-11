import { FC } from 'react';
import Input from 'src/components/Input';
import ButtonInput from '../Button';
import {
  SearchbarContainer,
  SearchBarItem,
  SearchBarItems,
} from './SearchbarStyled';

const Searchbar: FC = () => {
  return (
    <SearchbarContainer>
      <SearchBarItems>
        <SearchBarItem>
          <Input
            label="From / To"
            type="date"
            defaultValue={new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          />
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
        <SearchBarItem shouldFillLine>
          <ButtonInput>INSTANT BOOKING</ButtonInput>
        </SearchBarItem>
      </SearchBarItems>
    </SearchbarContainer>
  );
};

export default Searchbar;
