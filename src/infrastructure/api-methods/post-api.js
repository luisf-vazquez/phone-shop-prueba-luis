export async function postCall(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  };
  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => {
      throw Error('Algo ha ido mal, inténtelo de nuevo en unos minutos');
    });
}

export default postCall;
