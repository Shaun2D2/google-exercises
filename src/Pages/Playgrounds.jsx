import React from 'react';

import useChallengeTracks from '../hooks/useChallengeTracks';

const Playgrounds = () => {
  const tracks = useChallengeTracks();

  return (
    <div>
      <h1>{JSON.stringify(tracks)}</h1>
    </div>
  );
};

export default Playgrounds;
