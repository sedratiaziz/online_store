import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import plant from '../assets/img/plant.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Tajawal', sans-serif;
  height: 100vh;
  width: 100%;
`;

const ContactBox = styled.div`
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
  border-radius: 35px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
    margin: 25px;
    padding: 15px;
  }
`;

const Left = styled.div`
  background: url(${plant}) no-repeat center;
  background-size: cover;
  height: 100%;
  border-radius: 35px;

  @media screen and (max-width: 880px) {
    height: 200px;
    border-radius: 35px;
  }
`;

const Right = styled.div`
  padding: 25px 40px;
  border-radius: 0 35px 35px 0;

  @media screen and (max-width: 880px) {
    border-radius: 0 0 35px 35px;
  }
`;

const Title = styled.h2`
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
  font-family: 'ibmBold', sans-serif;
  font-size: 25px;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #2ecc71;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  text-align: end;
  margin-bottom: 22px;
  transition: 0.3s;
  border-radius: 0.8rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 2px solid #27ae60;
    background-color: #fff;
  }
`;

const MessageField = styled(Field)`
  min-height: 150px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 35px;
  background-color: ${props => (props.primary ? '#19bb5c' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#249e57')};
  font-weight: ${props => (props.primary ? 'normal' : '500')};
  margin-top: ${props => (props.primary ? '0' : '10px')};

  &:hover {
    background-color: ${props => (props.primary ? '#249e57' : '#000000')};
    color: ${props => (props.primary ? '#fff' : '#fff')};
  }
`;

const Button2 = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 35px;
  background-color: ${props => (props.primary ? '#19bb5c' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#249e57')};
  font-weight: ${props => (props.primary ? 'normal' : '500')};
  margin-top: ${props => (props.primary ? '0' : '10px')};

  &:hover {
    background-color: ${props => (props.primary ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)')};    
  }
`;

const Feedback = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('Form submission successful!');
        form.reset(); // Clear form
      } else {
        setStatus('Form submission failed.');
      }
    } catch (error) {
      setStatus(`Form submission error: ${error.message}`);
    }
  };

  return (
    <Container>
      <ContactBox>
        <Left />
        <Right>
          <Title>! رأيكم يهمنا</Title>
          <form
            name="feedback"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="feedback" />
            <Field type="text" name="name" placeholder="الإسم" required />
            <Field type="email" name="email" placeholder="بريدك الإلكتروني" required />
            <MessageField as="textarea" name="message" placeholder="رسالتك" required />
            <Button primary type="submit">إرسال</Button>
            <p>{status}</p>
            <Link to="/">
              <Button2 type="button">الصفحة الرئيسية</Button2>
            </Link>
          </form>
        </Right>
      </ContactBox>
    </Container>
  );
};

export default Feedback;
