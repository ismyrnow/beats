export const getBpm = (beats = []) => {
  if (beats.length < 2) {
    return 0;
  }

  const time = beats[beats.length - 1] - beats[0];
  const bpm = ((beats.length - 1) * 60000) / time;

  return Math.floor(bpm);
};

export const getBpmSets = (beats, set) => {
  const sets = [];

  beats.forEach((beat, i) => {
    if (i > 0 && (i + 1) % set === 0) {
      sets.push(getBpm(beats.slice(i + 1 - set, i + 1)));
    }
  });

  return sets;
};
