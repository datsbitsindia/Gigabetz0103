export function asyncWrap(promise: any) {
  return promise
    .then((result: any) => [null, result])
    .catch((err: any) => [err]);
}

export function getUrl() {
  if (process.env.NODE_ENV === "production") {
    return window.location.origin + "/api/";
  } else {
    return process.env.REACT_APP_API_URL;
  }
}
