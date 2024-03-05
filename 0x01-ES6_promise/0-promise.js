export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { data: 'response from API' };
      resolve(data);
    }, 1000);
  });
}
