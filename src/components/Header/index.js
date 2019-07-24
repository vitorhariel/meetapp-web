import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/M.svg';

export default function Header() {
  const dispatch = useDispatch();

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
            <strong>Vitor Hariel B. Tubino</strong>
            <p>My profile</p>
          </div>
          <button type="button" onClick={handleSignOut}>
            Log out
          </button>
        </aside>
      </Content>
    </Container>
  );
}
