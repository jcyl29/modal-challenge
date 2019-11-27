const portNumber = process.env.REACT_APP_JSON_SERVER_PORT_NUMBER;
const baseUrl = `http://localhost:${portNumber}`;

const addEmailAddress = async email => {
  const url = `${baseUrl}/emails`;
  const fetchOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  };

  // check if email exists before doing the POST
  let existingEmail = await fetch(`${url}?q=${email}`, { mode: 'cors' });
  existingEmail = await existingEmail.json()
  if (existingEmail.length > 0) {
    return Promise.reject(new Error('email already exists'));
  }

  return await fetch(url, fetchOptions);
};

export { addEmailAddress };
