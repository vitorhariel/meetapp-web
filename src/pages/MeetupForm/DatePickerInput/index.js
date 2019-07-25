import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { parseISO, addDays } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerInput() {
  const { defaultValue, registerField } = useField('date');

  const [selected, setSelected] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: 'date',
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current]);

  return (
    <ReactDatePicker
      name="date"
      placeholderText="Date of the meetup"
      showTimeSelect
      dateFormat="Pp"
      timeFormat="HH:mm"
      timeIntervals={15}
      selected={selected}
      onChange={date => setSelected(date)}
      ref={ref}
      minDate={new Date()}
      maxDate={addDays(new Date(), 365)}
    />
  );
}
