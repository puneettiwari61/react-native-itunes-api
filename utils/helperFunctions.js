export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  if (!minutes) {
    minutes = '00';
  }
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
