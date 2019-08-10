import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 30px rgba(166, 173, 201, 0.2);
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  nav {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;

      hr {
        margin: 0 10px;
        height: 20px;
        color: rgba(51, 53, 53);
        opacity: 0.5;
      }
    }

    a.active {
      font-weight: bold;
    }
  }

  img {
    margin-top: 5px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      line-height: 20px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.08);
        display: inline-block;
        background: #fff;
      }
    }

    .dropdown-content {
      position: absolute;
      display: block;
      width: 80px;
      top: 60px;
      left: calc(100% - 80px);
      border-radius: 10px;
      background: #fb617f;
      opacity: 0;
      transition: all 0.2s ease-in-out;

      padding: 5px 10px;

      &::before {
        content: '';
        position: absolute;
        left: 60%;
        top: -15px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #fb617f;
      }

      &:hover {
        opacity: 1;
        transition: all 0.2s ease-in-out;
      }

      button {
        border: 0;
        color: #fff;
        font-weight: bold;
        background: transparent;
      }
    }

    svg:hover ~ .dropdown-content {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
`;
