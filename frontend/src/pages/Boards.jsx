import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router-dom';

import Layout from '@components/Layout';
import LeftBarMenu from '@components/Boards/LeftBarMenu';
import BoardsPreviewList from '@components/Boards/BoardsPreviewList';
import BoardsListWrapper from '@components/Dnd/BoardsListWrapper';

export default function Boards() {
  const { user } = useStoreon('user');
  const [selectedTeam, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const [initialTeams] = useState(user.teams);
  const [show, setShow] = useState(null);
  const match = useRouteMatch();

  const checkImage = async (team) => {
    await Promise.all(
      team.boards.map(async (board) => {
        const image = new Image();
        image.src = board?.image;
        return image;
      })
    );
  };

  const resolveImages = useCallback(async () => {
    setLoading(true);
    await Promise.all(initialTeams.map(checkImage));
    setLoading(false);
  }, [initialTeams]);

  useEffect(() => {
    resolveImages();
  }, [resolveImages]);

  // useEffect(() => {
  //   const urlParams = Object.keys(match.params);
  //   if (urlParams[0] === 'team') {
  //     const newState = {
  //       ...boards,
  //       categories: boards.categories.filter((ctg) => ctg.id === match.params.team),
  //     };
  //     setTeam(newState);
  //     setShow(false);
  //   } else {
  //     setTeam(boards);
  //     setShow(true);
  //   }
  // }, [match, user]);
  return (
    <Layout>
      <Container>
        {!loading && (
          <>
            <LeftBarMenu />
            <RightContainer>
              {user.teams.map((team) => {
                if (team.type === 'favourite') {
                  return team.boards.length ? (
                    <BoardsListWrapper key={team.id}>
                      <BoardsPreviewList team={team} />
                    </BoardsListWrapper>
                  ) : null;
                }
                return (
                  <BoardsPreviewList
                    key={team.id}
                    team={team}
                    showNavigation={!team.type && show}
                  />
                );
              })}
            </RightContainer>
          </>
        )}
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
