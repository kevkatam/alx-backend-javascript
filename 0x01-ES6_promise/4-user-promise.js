export default function signUpUser(firstName, lastName) {
  const value1 = firstName;
  const value2 = lastName;
  return Promise.resolve({
    firstName: value1,
    lastName: value2,
  });
}
