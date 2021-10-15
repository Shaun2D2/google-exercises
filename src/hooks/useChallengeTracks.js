import { useMemo } from 'react';

import data from '../data/exercises';

const useChallengeTracks = () => {
  const tracks = useMemo(() => data.map(({ name, description }) => ({ name, description })), []);

  return tracks;
};

export default useChallengeTracks;
