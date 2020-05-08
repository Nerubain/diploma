import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router-dom';

import Layout from '@components/Layout';
import LeftBarMenu from '@components/Boards/LeftBarMenu';
import BoardsPreviewList from '@components/Boards/BoardsPreviewList';

export default function Boards() {
  const { user } = useStoreon('user');
  const [selectedTeam, setTeam] = useState(user.teams);
  const [loading, setLoading] = useState(true);
  const [initialTeams] = useState(user.teams);
  const [show, setShow] = useState(null);
  const match = useRouteMatch();

  const checkImage = async (team) => {
    const result = await Promise.all(
      team.boards.map((board) => {
        return new Promise((res) => {
          const image = new Image();
          image.src = board?.background?.image;
          image.onload = () => res({ status: 'loading' });
          return image;
        });
      })
    );
    return result;
  };

  const resolveImages = useCallback(async () => {
    // setLoading(true);
    // await Promise.all(initialTeams.map(checkImage));
    // setLoading(false);
  }, [initialTeams]);

  useEffect(() => {
    resolveImages();
  }, [resolveImages]);

  useEffect(() => {
    const urlParams = Object.keys(match.params);
    if (urlParams[0] === 'team') {
      const newState = user.teams.filter(({ _id }) => _id === match.params.team);
      setTeam(newState);
      setShow(false);
    } else {
      setTeam(user.teams);
      setShow(true);
    }
  }, [match, user.teams]);
  return (
    <Layout>
      <Container>
        {/* {!loading && ( */}
        <>
          <LeftBarMenu />
          <RightContainer>
            {selectedTeam.map((team) => (
              <BoardsPreviewList
                key={team._id}
                team={team}
                showNavigation={!team.type && show}
                favouriteTeam={user.teams[0]}
              />
            ))}
          </RightContainer>
        </>
        {/* )} */}
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 16px 0;
  max-width: 825px;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
