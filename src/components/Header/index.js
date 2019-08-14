import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, Content } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return profile.user ? (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard" className="active">
            <strong>MeetApp</strong>
            <hr />
            <span>Dashboard</span>
          </Link>
        </nav>

        <aside>
          <div>
            <Link to="/profile">
              <img
                src={
                  (profile.user.avatar && profile.user.avatar.url) ||
                  `https://api.adorable.io/avatars/50/${profile.user.id}`
                }
                alt=""
              />
            </Link>
          </div>
          <MdArrowDropDown size={24} />
          <div className="dropdown-content">
            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </aside>
      </Content>
    </Container>
  ) : null;
}
