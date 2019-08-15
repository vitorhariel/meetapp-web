import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';
import {
  MdAddCircleOutline,
  MdDateRange,
  MdLocationOn,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';

import { Container, MeetupList, Meetup, PageIndicator } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import blank from '~/assets/blank.svg';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing', {
        params: {
          page,
        },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MM/dd/yyyy' -' HH'h'mm"),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, [page]);

  function handlePage(amount) {
    setPage(page + amount);
  }

  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#f94d6a" height={90} width={90} />
        </div>
      ) : (
        <>
          <div className="top-meetups">
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
                  canceled={meetup.canceled ? 1 : 0}
                  type="button"
                  key={meetup.id}
                  onClick={() =>
                    history.push(`/meetup/${meetup.id}`, { state: 'a' })
                  }
                >
                  {meetup.canceled ? (
                    <s>{meetup.title}</s>
                  ) : (
                    <strong>{meetup.title}</strong>
                  )}

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
                <strong>
                  {page === 1
                    ? "You don't have any meetup"
                    : 'End of the line...'}
                </strong>
                {page === 1
                  ? "Why don't you create one?"
                  : "There isn't anything else to see here."}
              </div>
            )}
          </MeetupList>
          <PageIndicator>
            {page > 1 ? (
              <MdChevronLeft size={32} onClick={() => handlePage(-1)} />
            ) : null}
            <span>{page}</span>
            {page > 1 && meetups.length === 0 ? null : (
              <MdChevronRight size={32} onClick={() => handlePage(1)} />
            )}
          </PageIndicator>
        </>
      )}
    </Container>
  );
}
