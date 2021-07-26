const GET_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_URL = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((properties) => {
      onSuccess(properties);
    })
    .catch(() => {
      onFail();
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_URL, {
    method: 'POST',
    body,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
}

export { getData, sendData };
