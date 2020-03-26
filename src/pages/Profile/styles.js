import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  img {
    height: 64px;
  }
  span {
    font-size: 20px;
    margin-left: 24px;
  }
  a {
    height: 60px;
    border: 0;
    border-radius: 8px;
    color: #fff;
    background: #e02041;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
  a:hover {
    filter: brightness(90%);
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
  }
  button:hover {
    border-color: #999;
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      background: #fff;
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
    }

    button:hover {
      opacity: 0.8;
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
