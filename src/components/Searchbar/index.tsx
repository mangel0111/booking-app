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
            id="from-to"
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
          <Input label="For" id="for" placeholder="2 Guests" />
        </SearchBarItem>
        <SearchBarItem>
          <Input label="$ Per night" id="price" placeholder="345" />
        </SearchBarItem>
        <SearchBarItem>
          <Input
            label="$ total per 54 nights"
            id="nights"
            placeholder="18.360"
          />
        </SearchBarItem>
        <SearchBarItem shouldFillLine>
          <ButtonInput data-testid="searchbar-instant-booking-button">
            INSTANT BOOKING
          </ButtonInput>
        </SearchBarItem>
      </SearchBarItems>
    </SearchbarContainer>
  );
};

export default Searchbar;
