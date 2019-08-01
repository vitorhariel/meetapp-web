import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';

import { MdAddCircleOutline, MdDateRange, MdLocationOn } from 'react-icons/md';
import { Container, MeetupList, Meetup } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import blank from '~/assets/blank.svg';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MM/dd/yyyy' -' HH'h'MM"),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <Loader type="TailSpin" color="#f94d6a" height={90} width={90} />
      ) : (
        <>
          <div>
            <h1>My meetups</h1>
            <button
              className="main"
              type="button"
              onClick={() => history.push('/manage/new')}
            >
              <MdAddCircleOutline size={24} /> New meetup
            </button>
          </div>
          <MeetupList>
            {meetups.length > 0 ? (
              meetups.map(meetup => (
                <Meetup
                  past={meetup.past ? 1 : 0}
                  type="button"
                  key={meetup.id}
                  onClick={() =>
                    history.push(`/meetup/${meetup.id}`, { state: 'a' })
                  }
                >
                  <strong>{meetup.title}</strong>
                  <div className="info">
                    <span>
                      <MdDateRange />
                      {meetup.formattedDate}
                    </span>
                    <span>
                      <MdLocationOn />
                      {meetup.location}
                    </span>
                  </div>
                </Meetup>
              ))
            ) : (
              <div>
                <img src={blank} alt="Blank" draggable="false" />
                <strong>You don&apos;t have any meetup</strong>
                <p>Why don&apos;t you create one?</p>
              </div>
            )}
          </MeetupList>
        </>
      )}
    </Container>
  );
}
