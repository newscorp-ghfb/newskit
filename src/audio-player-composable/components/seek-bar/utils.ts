export const formatTrackData = (
  trackColor: string,
  indicatorColor: string,
  bufferColor: string,
  timeArr: number[],
  buffered: TimeRanges | undefined,
) => {
  if (!buffered) {
    return {colors: [], values: []};
  }

  const time = timeArr[0];
  const bufferPositions = [];

  const {length} = buffered;
  for (let i = 0; i < length; i += 1) {
    const startPosition = buffered.start(i);
    if (startPosition > time) {
      bufferPositions.push(startPosition);
    }

    const endPosition = buffered.end(i);
    if (endPosition > time) {
      bufferPositions.push(endPosition);
    }
  }

  const colors = [
    indicatorColor,
    ...bufferPositions.map((x, i) => (i % 2 ? trackColor : bufferColor)),
    trackColor,
  ];
  const values = [time, ...bufferPositions];
  return {colors, values};
};

export const seekBarAriaValueText = (seekTime: number[]) => {
  const time = new Date(seekTime[0] * 1000)
    .toISOString()
    .substr(11, 8)
    .split(':')
    .map(x => (+x < 10 ? (+x).toString() : x));

  const hour =
    time[0] !== '0' ? `${time[0]} ${time[0] === '1' ? 'hour' : 'hours'}` : '';
  const min =
    hour || time[1] !== '0'
      ? `${time[1]} ${time[1] === '1' ? 'minute' : 'minutes'}`
      : '';
  const sec = `${time[2]} ${time[2] === '1' ? 'second' : 'seconds'}`;

  return [hour, min, sec].filter(Boolean).join(' ');
};