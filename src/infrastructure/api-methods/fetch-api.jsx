import moment from 'moment/moment';

const peticiones = {};
export async function getWithCache(url) {
  const now = moment();
  if (peticiones[url] && now.diff(moment(peticiones[url].date), 'hours') > 1) {
    return Promise.resolve(peticiones[url].info);
  }
  return fetch(url)
    .then((response) => response.json())
    .then((info) => {
      peticiones[url] = { time: moment.now(), info };
      return info;
    });
}

export default getWithCache;
