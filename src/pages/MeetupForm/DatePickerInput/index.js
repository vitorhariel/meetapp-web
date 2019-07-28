import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { parseISO, addDays } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerInput({ name, placeholder }) {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        placeholderText={placeholder}
        showTimeSelect
        dateFormat="dd/MM/yyyy - HH:mm"
        timeFormat="HH:mm"
        timeIntervals={15}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        minDate={new Date()}
        maxDate={addDays(new Date(), 365)}
        autoComplete="off"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
