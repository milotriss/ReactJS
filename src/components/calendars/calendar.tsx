import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { Alert, Calendar } from 'antd';

// interface Props {
//   dateValue: string;
// }
interface Props {
  getDateValue: Function;
}
const CalendarsComponent = (props:Props):JSX.Element => {
  const [value, setValue] = useState(() => dayjs('2023-12-15'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2023-12-15'));

    // console.log(selectedValue.format('YYYY-MM-DD'));
  props.getDateValue(selectedValue.format('YYYY-MM-DD'));
  
  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  );
};

export default CalendarsComponent;