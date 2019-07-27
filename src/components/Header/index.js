import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

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
            <strong>{user.name}</strong>
            <Link to="/profile">My profile</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            Log out
          </button>
        </aside>
      </Content>
    </Container>
  );
}
