import { FC, useCallback, useState } from 'react';
import Input from 'src/components/Input';
import ButtonInput from '../Button';
import {
  SearchbarContainer,
  SearchBarItem,
  SearchBarItems,
} from './SearchbarStyled';

const Searchbar: FC = () => {
  const [bookingInfo, setBookingInfo] = useState({
    from: new Date(),
    to: new Date(),
    duration: 2,
    guests: 2,
    pricePerNight: 345,
    total: 345 * 2,
  });

  const updateBookingInfo = useCallback(
    (key: string, value: string | number) => {
      setBookingInfo({ ...bookingInfo, [key]: value });
    },
    [bookingInfo]
  );

  return (
    <SearchbarContainer data-testid="searchbar-container">
      <SearchBarItems>
        <SearchBarItem>
          <Input
            id="from-to"
            label="From / To"
            defaultValue={`${bookingInfo.from.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })} - ${bookingInfo.to.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}`}
          />
        </SearchBarItem>
        <SearchBarItem>
          <Input
            label="For"
            id="guests"
            placeholder="Number of Guests"
            defaultValue={`${bookingInfo.guests} Guests`}
          />
        </SearchBarItem>
        <SearchBarItem>
          <Input
            label="$ Per night"
            id="price"
            placeholder="Price"
            type="number"
            value={bookingInfo.pricePerNight}
            onChange={event => {
              updateBookingInfo('pricePerNight', +event.target.value);
              updateBookingInfo(
                'total',
                +event.target.value * bookingInfo.duration
              );
            }}
          />
        </SearchBarItem>
        <SearchBarItem>
          <Input
            label="$ total per 54 nights"
            id="total"
            placeholder="Total"
            value={bookingInfo.total}
            readOnly
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
