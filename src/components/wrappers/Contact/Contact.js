// Components
import React, { useState } from 'react';
import Title from '../../globals/Title/Title';
import Loader from 'react-loader-spinner';
import ReCAPTCHA from 'react-google-recaptcha';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';
import { sendMessage } from '../../../logic/api';
import { sleep } from '../../../logic/helpers';

// Styles
import {
  Wrapper,
  Container,
  HeaderContainer,
  Header,
  MessageContainer,
  Input,
  Textarea,
  SendButton,
  EmailLink
} from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Contact() {
  const width = useWindowSize();

  return (
    <Wrapper>
      <Title>CONTACT</Title>
      <Container>
        <HeaderContainer>
          <Header style={{ fontSize: width < 1000 && '3em' }}>
            If you need any
            <br /> further information,
            <br />
            <span>feel free to contact us.</span>
          </Header>
          <EmailLink href={'mailto:joonas@appfixly.com'}>
            Or send us email
          </EmailLink>
        </HeaderContainer>
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
  const [showCAPTCHA, setCAPTCHA] = useState(false);

  return (
    <>
      <h1>Send us a Message</h1>
      <Input
        maxLength={50}
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <Input
        maxLength={50}
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <Input
        maxLength={50}
        value={subject}
        onChange={e => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <Textarea
        maxLength={1000}
        rows={5}
        cols={5}
        onChange={e => setMessage(e.target.value)}
        value={message}
        placeholder="Your message"
      />
      {showCAPTCHA && (
        <ReCAPTCHA
          sitekey="6LfvxuIaAAAAAClpGvj2QzPyYT52b7XEGvT6PRTS"
          onChange={async value => {
            setCAPTCHA(false);
            if (value) {
              setLoading(true);
              const success = await sendMessage(name, email, subject, message);
              if (success) {
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                await sleep(1000);
              }
              setLoading(false);
            }
          }}
        />
      )}
      <SendButton
        onClick={async () => {
          if (loading) return;
          setCAPTCHA(true);
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
