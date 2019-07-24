import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, MeetupList } from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MMMM d', at' H'h'"),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>My meetups</h1>
        <button type="button">
          <MdAddCircleOutline size={24} /> New meetup
        </button>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <button
            type="button"
            key={meetup.id}
            onClick={() =>
              history.push(`/details/${meetup.id}`, { state: 'a' })
            }
          >
            <strong>{meetup.title}</strong>
            <time>
              July 24, at 20h <MdKeyboardArrowRight size={24} />
            </time>
          </button>
        ))}
      </MeetupList>
    </Container>
  );
}
