import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, BannerImage } from './styles';

import api from '../../services/api';

import banner from '../../assets/banner.png';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup(meetupId) {
      const response = await api.get(`meetups/${meetupId}`);

      const data = {
        ...response.data,
        formattedDate: format(
          parseISO(response.data.date),
          "MMMM d', at' H'h'"
        ),
      };

      setMeetup(data);
    }

    loadMeetup(id);
  }, [id]);

  return (
    <Container>
      <div>
        <h1>{meetup.title}</h1>

        <aside>
          <button type="button">
            <MdEdit size={24} /> Edit
          </button>
          <button type="button">
            <MdDeleteForever size={24} /> Cancel
          </button>
        </aside>
      </div>
      <BannerImage src={banner} />
      <p>{meetup.description}</p>
      <footer>
        <time>{meetup.formattedDate}</time>
        <address>{meetup.location}</address>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
