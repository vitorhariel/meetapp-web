import React from 'react';
import { useDispatch } from 'react-redux';

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
        <img src={logo} alt="Meetapp" />

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
