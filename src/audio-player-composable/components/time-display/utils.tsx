export const calculateTime = (secs: number) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const returnedHours = hours < 10 ? `0${hours}` : `${hours}`;
  if (hours > 0) {
    return `${returnedHours}:${returnedMinutes}:${returnedSeconds}`;
  }
  return `${returnedMinutes}:${returnedSeconds}`;
};

export const formatFunction = (duration: number, length: number) => {
  const currentTime = calculateTime((duration as unknown) as number);
  const totalLength = calculateTime((length as unknown) as number);

  return `${currentTime}/${totalLength} `;
};
