import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import {
  MdEdit,
  MdDeleteForever,
  MdDateRange,
  MdLocationOn,
} from 'react-icons/md';
import nl2br from 'react-nl2br';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';

import banner from '../../assets/banner.jpeg';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup(meetupId) {
      const response = await api.get(`meetups/${meetupId}`);

      const data = {
        ...response.data,
        url: response.data.banner ? response.data.banner.url : banner,
        formattedDate: format(
          parseISO(response.data.date),
          "MM/dd/yyyy' -' HH'h'MM"
        ),
      };

      setMeetup(data);
      setLoading(false);
    }

    loadMeetup(id);
  }, [id]);

  async function handleCancel() {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: ' Are you sure you want to delete this meetup?',
      icon: 'warning',
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    });

    if (willDelete) {
      try {
        await api.delete(`meetups/${id}`);

        toast.success('Meetup cancelled.');
        history.push('/dashboard');
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.error);
        } else {
          toast.error('Connection error.');
        }
      }
    }
  }

  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <Loader type="TailSpin" color="#f94d6a" height={90} width={90} />
      ) : (
        <>
          <div>
            <h1>{meetup.title}</h1>

            {meetup.past ? null : (
              <aside>
                <button
                  type="button"
                  onClick={() => history.push(`/manage/${id}`)}
                >
                  <MdEdit size={24} /> Edit
                </button>
                <button type="button" onClick={handleCancel}>
                  <MdDeleteForever size={24} /> Cancel
                </button>
              </aside>
            )}
          </div>
          <div className="image-wrapper">
            <img src={meetup.url} alt="Banner" />
          </div>
          <div className="meetup-body">
            <p>{nl2br(meetup.description)}</p>
            <hr />
            <footer>
              <time>
                <MdDateRange size={24} color="#fb617f" />
                {meetup.formattedDate}
              </time>
              <address>
                <MdLocationOn size={24} color="#fb617f" />
                {meetup.location}
              </address>
            </footer>
          </div>
        </>
      )}
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
