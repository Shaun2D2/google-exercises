import React from 'react';
import styled from 'styled-components';
import Page from '../Components/Page';
import Card from '../Components/Card';

import useChallengeTracks from '../hooks/useChallengeTracks';
import { PALLET } from '../GlobalStyles';

const FAKE_EXERCISES = [
  {
    name: 'something',
    id: '111',
  },
  {
    name: 'something',
    id: '111',
  },
  {
    name: 'something',
    id: '111',
  },
];

const Playgrounds = () => {
  const tracks = useChallengeTracks();

  return (
    <Page>
      <Card>
        <h1>Playground Selection</h1>
        { tracks.map((item) => (
          <Track>
            <TrackStatus />
            <TrackDescription>
              <TrackTitle>{item.name}</TrackTitle>
              <TrackInfo>{item.description}</TrackInfo>
              <TrackExerciseList>
                { FAKE_EXERCISES.map((exercise) => (
                  <TrackExerciseItem>
                    <TrackExerciseItemStatus />
                    {' '}
                    {exercise.name}
                  </TrackExerciseItem>
                ))}
              </TrackExerciseList>

            </TrackDescription>
          </Track>
        )) }
      </Card>
    </Page>
  );
};

const Track = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-left: 5rem;
`;

const TrackStatus = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 5px solid ${PALLET.imperialRed};
`;

const TrackDescription = styled.div`
  margin-left: 3rem;
`;

const TrackTitle = styled.h1`
`;

const TrackInfo = styled.p``;

const TrackExerciseList = styled.ul`
  margin-top: 2.5rem;
  list-style: none;
`;

const TrackExerciseItem = styled.li`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const TrackExerciseItemStatus = styled.span`
  display: inline-block;
  border-radius: 100%;
  margin-right: 1.5rem;
  height: 25px;
  width: 25px;
  border: 2.5px solid ${PALLET.imperialRed};
`;

export default Playgrounds;
