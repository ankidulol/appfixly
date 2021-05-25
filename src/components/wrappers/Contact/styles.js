import styled from 'styled-components';

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Header = styled.h1`
  font-size: 4em;
  margin-bottom: 0.5em;
  font-family: Roboto;

  > span {
    color: #0cecc8;
  }
`;

const SubHeader = styled.h1`
  font-family: Roboto;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30em;
`;

const Input = styled.input`
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 0.5em;
  border: none;
  margin-bottom: 0.5em;
  font-family: KanitMedium;
  font-size: 1.5em;
  color: #323232;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #d6d6d6;
  }
`;

const Textarea = styled.textarea`
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 0.5em;
  border: none;
  margin-bottom: 0.5em;
  font-family: KanitMedium;
  font-size: 1.5em;
  color: #323232;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #d6d6d6;
  }
`;

const SendButton = styled.div`
  display: flex;
  cursor: pointer;
  background-color: #0cecc8;
  border-radius: 5px;
  box-shadow: 1px 1px 8px #0eab91;
  justify-content: center;
  align-items: center;
  height: 4em;

  > h3 {
    text-align: center;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  padding-left: 0.2em;
  margin-bottom: 1em;
`;

const EmailLink = styled.a`
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  color: #323232;
  font-size: 1.4em;
  text-decoration: underline;
`;

export {
  Wrapper,
  Container,
  HeaderContainer,
  Header,
  SubHeader,
  MessageContainer,
  Input,
  Textarea,
  SendButton,
  EmailLink
};
