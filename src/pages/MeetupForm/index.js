import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container } from './styles';

import BannerInput from './BannerInput';
import DatePicker from './DatePickerInput';

export default function MeetupForm({ match }) {
  const { id } = match.params;
  const create = id === 'new';

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${id}`);

        setMeetup(response.data);
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.error);
          history.push('/dashboard');
        } else {
          toast.error('Connection error.');
        }
      }
    }

    if (!create) {
      loadMeetup();
    }
  }, [create, id]);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input type="text" name="title" placeholder="Title of the meetup" />
        <Input
          type="text"
          name="description"
          placeholder="Description of the meetup"
          rows="10"
          value={meetup.description}
          multiline
        />

        <DatePicker />
        <Input
          type="text"
          name="location"
          placeholder="Location of the meetup"
        />

        <button type="submit">
          <MdAddCircleOutline size={24} /> {create ? 'Create' : 'Update'}
        </button>
      </Form>
    </Container>
  );
}

MeetupForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
