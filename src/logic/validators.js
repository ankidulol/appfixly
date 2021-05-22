const validateName = name => {
  if (name.length > 50) {
    return 'name should be less than 50 characters';
  } else if (!/^[a-zA-Z0-9.',\säÄöÖåÅ]+$/.test(name ? name : '')) {
    return 'name should include only letters';
  } else {
    return false;
  }
};

const validateEmail = email => {
  if (!email) {
    return 'invalid email';
  } else if (email.length > 50) {
    return 'email should be less than 50 characters';
  } else if (!/^[a-zA-Z]+(\.?|-?)\w+@\w+(\.?|-?)\w+\.\w+$/.test(email)) {
    return 'invalid email';
  } else {
    return false;
  }
};

const validateSubject = subject => {
  if (subject.length > 50) {
    return 'subject should be less than 50 characters';
  } else if (
    !/^[a-zA-Z0-9.',\s!?+-äÄöÖåÅ:"$£€&]+$/.test(subject ? subject : '')
  ) {
    return 'subject should include only letters';
  } else {
    return false;
  }
};

const validateMessage = message => {
  if (message.length > 1000) {
    return 'message should be less than 1000 characters';
  } else if (!/^[a-zA-Z0-9".,'\s!?=+-äÄöÖåÅ:"$£€&]+$/m.test(message)) {
    return 'message should include only letters';
  } else {
    return false;
  }
};

export { validateName, validateEmail, validateSubject, validateMessage };
