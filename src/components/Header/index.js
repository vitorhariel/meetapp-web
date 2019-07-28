import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, Content } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>

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
  );
}
