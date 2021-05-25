import {
  validateName,
  validateEmail,
  validateSubject,
  validateMessage
} from '../logic/validators';

describe('validateName()', () => {
  it('"regular name" should return error false', () => {
    expect(validateName('regular name')).toBe(false);
  });

  it('name with empty string should return error message', () => {
    expect(validateName('')).toBe('name should include only letters');
  });

  it('"name with . dot and this \'l" should return error false', () => {
    expect(validateName("name with . dot and this 'l")).toBe(false);
  });

  it('"name with more than fifty characters should return error message"', () => {
    expect(
      validateName('name with more than fifty characters should return false')
    ).toBe('name should be less than 50 characters');
  });

  it('"name with number 1337" should return error false', () => {
    expect(validateName('name with number 1337')).toBe(false);
  });

  it('"mail@email.com" should return error message', () => {
    expect(validateName('mail@email.com')).toBe(
      'name should include only letters'
    );
  });
});

describe('validateSubject()', () => {
  it('"subject with more than fifty characters should return error msg"', () => {
    expect(
      validateSubject(
        'subject with more than fifty characters should return error msg'
      )
    ).toBe('subject should be less than 50 characters');
  });

  it('passing empty string should return error message', () => {
    expect(validateSubject('')).toBe('subject should include only letters');
  });

  it('"Subject, with . and \' and !! exlamation marks" should return error false', () => {
    expect(
      validateSubject("Subject, with . and ' and !! exlamation marks")
    ).toBe(false);
  });
  it('"Offer: $123,123 or £312.312 & 1231le€" should return error false"', () => {
    expect(validateSubject('"Offer: $123,123 or £312.312 & 1231le€"')).toBe(
      false
    );
  });
});

describe('validateEmail()', () => {
  it('"mail@email.com" should return error false', () => {
    expect(validateEmail('mail@email.com')).toBe(false);
  });

  it('"@mail.com" should return error message', () => {
    expect(validateEmail('@email.com')).toBe('invalid email');
  });

  it('"mail.com" should return error message', () => {
    expect(validateEmail('mail.com')).toBe('invalid email');
  });

  it('"mail@.com" should return error message', () => {
    expect(validateEmail('mail@.com')).toBe('invalid email');
  });

  it('"mail@." should return error message', () => {
    expect(validateEmail('mail@.')).toBe('invalid email');
  });

  it('undefined should return error message', () => {
    expect(validateEmail(undefined)).toBe('invalid email');
  });

  it('null should return error message', () => {
    expect(validateEmail(null)).toBe('invalid email');
  });

  it('empty string should return error message', () => {
    expect(validateEmail('')).toBe('invalid email');
  });

  it('passing "jarvinen.123@gmail.com" should return error false"', () => {
    expect(validateEmail('jarvinen.joonass@gmail.com')).toBe(false);
  });

  it('passing "123email@gmail.com" should return error message"', () => {
    expect(validateEmail('123email@gmail.com')).toBe('invalid email');
  });

  it('passing "123-email@gmail.com" should return error message"', () => {
    expect(validateEmail('123-email@gmail.com')).toBe('invalid email');
  });

  it('passing "123--email@gmail.com" should return error message"', () => {
    expect(validateEmail('123--email@gmail.com')).toBe('invalid email');
  });

  it('passing "jarvinen..123@gmail.com" should return error message"', () => {
    expect(validateEmail('jarvinen..joonass@gmail.com')).toBe('invalid email');
  });

  it('passing "mail@domain-withdash.com" should return error false"', () => {
    expect(validateEmail('mail@domain.withdot.com')).toBe(false);
  });

  it('passing "mail@domain-withdash.com" should return error false"', () => {
    expect(validateEmail('mail@domain-withdash.com')).toBe(false);
  });

  it('passing "emailthatislongerthanfiftycharacterslong@hotmail.com" should return error message"', () => {
    expect(
      validateEmail('emailthatislongerthanfiftycharacterslong@hotmail.com')
    ).toBe('email should be less than 50 characters');
  });
});

describe('validateMessage()', () => {
  let longMessage1 = `message with different chars .,'
and multiple lines
1234678090?=)(&)%`;

  it(longMessage1 + 'should return error false', () => {
    expect(validateMessage(longMessage1)).toBe(false);
  });

  let longMessage2 = 'messagewith.,.,.andmore';
  it(longMessage2 + ' should return error false', () => {
    expect(validateMessage(longMessage2)).toBe(false);
  });

  let longMessage3 = 'messagewith.,.,. and spaces';
  it(longMessage3 + ' should return error false', () => {
    expect(validateMessage(longMessage3)).toBe(false);
  });

  let longMessage4 = "messagewith.,.,. and spaces and this char ''' lul";
  it(longMessage4 + ' should return error false', () => {
    expect(validateMessage(longMessage4)).toBe(false);
  });

  let longMessage5 = `lets write some longer post okey!!!???
YEAH!,.!!!=")!=("

nm("?=))"):,.

=/&`;
  it(longMessage5 + ' should return error false', () => {
    expect(validateMessage(longMessage5)).toBe(false);
  });

  it('"Offer: $123,123 or £312.312 & 1231le€" should return error false"', () => {
    expect(validateMessage('"Offer: $123,123 or £312.312 & 1231le€"')).toBe(
      false
    );
  });
});
