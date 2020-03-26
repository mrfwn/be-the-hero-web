import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  height: 100vh;
`;
export const SectionForm = styled.div`
  margin-right: 30px;
  width: 100%;
  max-width: 350px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
    button {
      width: 100%;
      height: 60px;
      border: 0;
      border-radius: 8px;
      color: #fff;
      background: #e02041;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(90%);
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
    }

    a svg {
      margin-right: 8px;
    }
    a:hover {
      opacity: 0.8;
    }
  }
`;
export const SectionImg = styled.div``;
