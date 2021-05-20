import axiosInstance from './axios';
import {
  validateName,
  validateEmail,
  validateSubject,
  validateMessage
} from './validators';
import { store } from '../redux/index';
import { showBanner } from '../redux/actions/banner';
import { sleep } from './helpers';

const sendMessage = async (name, email, subject, message) => {
  const { dispatch } = store;

  for (const validate of [
    () => validateName(name),
    () => validateEmail(email),
    () => validateSubject(subject),
    () => validateMessage(message)
  ]) {
    const err = validate();
    if (err) return dispatch(showBanner(err));
  }

  try {
    await sleep(1000);
    await axiosInstance.post('/message/send', {
      name,
      email,
      subject,
      message
    });

    dispatch(showBanner('Thank you for your message!!', '#08e4c1'));
  } catch (e) {
    if (e.response) {
      dispatch(showBanner('Something went wrong'));
    } else if (e.request) {
      dispatch(showBanner('Could not reach the server'));
    } else {
      dispatch(showBanner('Something went wrong'));
    }
  }
};

export { sendMessage };
