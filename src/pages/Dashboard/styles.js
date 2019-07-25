import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 40px auto;

  padding: 20px;

  color: #fb617f;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props =>
      props.loading &&
      css`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 200px;
        margin: auto;
      `}
  }
  .main {
    display: flex;
    align-items: center;
    margin: 5px 0;
    padding: 10px;
    width: 160px;
    justify-content: center;
    border: 0;
    border-radius: 4px;
    background: #fb617f;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#fb617f')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const MeetupList = styled.ul`
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;

    img {
      margin: 20px;
      width: 50%;
      height: 50%;
    }

    strong {
      margin: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    p {
      opacity: 0.6;
    }
  }
`;

export const Meetup = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  width: 100%;
  padding: 28px;
  color: #333;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.2s, opacity 0.2s;

  ${props =>
    !props.past &&
    `
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 2px 6px rgba(93, 97, 164, 0.15);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(93, 97, 164, 0.25);
    }
  `}

  & + button {
    margin-top: 10px;
  }

  ${props =>
    props.past &&
    css`
      opacity: 0.6;
    `}

  strong {
    font-size: 18px;
  }

  .info {
    opacity: 0.7;
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      width: 100%;
      font-size: 14px;
      text-align: left;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
