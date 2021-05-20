// Components
import React, { useState } from 'react';
import Title from '../../globals/Title/Title';
import Loader from 'react-loader-spinner';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';
import { sendMessage } from '../../../logic/api';

// Styles
import {
  Wrapper,
  Container,
  Header,
  MessageContainer,
  Input,
  Textarea,
  SendButton
} from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Contact() {
  const width = useWindowSize();

  return (
    <Wrapper>
      <Title>CONTACT</Title>
      <Container>
        <Header style={{ fontSize: width < 1000 && '3em' }}>
          If you need any
          <br /> further information,
          <br />
          <span>feel free to contact me.</span>
        </Header>

        <MessageContainer style={{ width: width < 600 && '90%' }}>
          <Form />
        </MessageContainer>
      </Container>
    </Wrapper>
  );
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1>Send us a Message</h1>
      <Input
        maxLength={50}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        maxLength={50}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        maxLength={50}
        onChange={e => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <Textarea
        maxLength={1000}
        rows={5}
        cols={5}
        onChange={e => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <SendButton
        onClick={async () => {
          if (loading) return;
          setLoading(true);
          await sendMessage(name, email, subject, message);
          setLoading(false);
        }}
      >
        {loading ? (
          <Loader type="Puff" color="#fff" height={35} width={35} />
        ) : (
          <h3>Send Message</h3>
        )}
      </SendButton>
    </>
  );
}

export default Contact;
