import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 400px;
    background: #e8e8e8;
    top: -90px;
    left: 0;

    transform: skewY(-10deg);
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 60px;
  max-width: 380px;
  text-align: center;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 185px;
    background: #e8e8e8;
    top: -90px;
    left: 0;
    z-index: -5;

    transform: skewY(-10deg);
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;

    div.group {
      margin-bottom: 10px;
      position: relative;

      input {
        margin: 5px 0;
        padding: 10px 10px 10px 5px;
        border: 0;
        height: 44px;
        width: 100%;
        border-bottom: 2px solid #eee;
        transition: border 0.2s;

        color: #666;

        &:focus ~ .input-border {
          width: 100%;
        }

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }

      .input-border {
        position: absolute;
        top: 46px;
        left: 0;
        width: 0;
        height: 2px;
        background: #8e92de;
        transition: all 0.2s ease;
      }
    }

    > button {
      margin-top: 20px;
      padding: 15px;
      border: 0;
      border-radius: 4px;
      background: #4680ff;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#4680ff')};
      }
    }
  }

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }

  span {
    color: #fb617f;
    text-align: left;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 100%;
    margin-top: 32px;
    align-self: center;

    > button {
      padding: 15px;
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
    }

    span {
      color: rgba(102, 102, 102, 0.6);
    }
  }
`;
