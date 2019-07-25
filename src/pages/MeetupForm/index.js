import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import Loader from 'react-loader-spinner';

import api from '../../services/api';
import history from '../../services/history';

import { Container } from './styles';

import BannerInput from './BannerInput';
import DatePicker from './DatePickerInput';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('You must set a banner for the meetup.'),
  title: Yup.string().required('Title is a required field.'),
  description: Yup.string().required('Description is a required field.'),
  date: Yup.date().required('Date is a required field.'),
  location: Yup.string().required('Location is a required field.'),
});

export default function MeetupForm({ match }) {
  const { id } = match.params;
  const create = id === 'new';

  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }

    if (!create) {
      loadMeetup();
    } else {
      setLoading(false);
    }
  }, [create, id]);

  async function handleSubmit(data) {
    try {
      if (create) {
        await api.post('meetups', data);

        history.push('/dashboard');
        toast.success('Meetup created!');
      } else {
        await api.put(`meetups/${id}`, data);

        history.push('/dashboard');
        toast.success('Meetup updated!');
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error);
        history.push('/dashboard');
      } else {
        toast.error('Connection error.');
      }
    }
  }

  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <Loader type="TailSpin" color="#f94d6a" height={90} width={90} />
      ) : (
        <>
          <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
            <BannerInput />

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
        </>
      )}
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
