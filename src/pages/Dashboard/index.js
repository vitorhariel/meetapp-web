import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';

import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, MeetupList } from './styles';

import api from '../../services/api';
import history from '../../services/history';

import blank from '../../assets/blank.svg';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MMMM d', at' H'h'"),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <div>
        <h1>My meetups</h1>
        <button type="button" onClick={() => history.push('/manage/new')}>
          <MdAddCircleOutline size={24} /> New meetup
        </button>
      </div>
      {loading ? (
        <Loader type="TailSpin" color="#f94d6a" height={90} width={90} />
      ) : (
        <MeetupList>
          {meetups.length > 0 ? (
            meetups.map(meetup => (
              <button
                type="button"
                key={meetup.id}
                onClick={() =>
                  history.push(`/meetup/${meetup.id}`, { state: 'a' })
                }
              >
                <strong>{meetup.title}</strong>
                <time>
                  July 24, at 20h <MdKeyboardArrowRight size={24} />
                </time>
              </button>
            ))
          ) : (
            <div>
              <img src={blank} alt="Blank" draggable="false" />
              <strong>You don't have any meetup</strong>
              <p>Why don't you create one?</p>
            </div>
          )}
        </MeetupList>
      )}
    </Container>
  );
}
