export function postCall(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  };
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => data);
}

export default postCall;
