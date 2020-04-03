import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

import { ContainerSegment, SegmnetWrapper, ContextSegment, ContextContainer } from '../style';
import BoardsList from './BoardsList';

const img =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x294/64da2a2ec6a7dd4080b7c800b2593b87/photo-1577800929753-bb4723761a0d.jpg';

const data = [
  {
    label: 'Недавно просмотренные',
    icon: 'clock outline',
    favourite: true,
    list: [
      {
        id: 1,
        title:
          'Доска #1Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 2,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 3,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 4,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 5,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
    ],
  },
  {
    label: 'Отмеченные',
    icon: 'star',
    list: [
      {
        id: 1,
        title:
          'Доска #1Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #Доска #',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 2,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 3,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 4,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
      {
        id: 5,
        title: 'Доска #2',
        link: '/board/ID/BOARDNAME',
        img,
      },
    ],
  },
];

export default function BoardsSegment({ segment, segmentHandler }) {
  const input = useRef();
  const block = useRef();
  // const test =
  const boardsHandler = () => segmentHandler('boards');
  const stopHanlder = (e) => e.stopPropagation();

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [segment]);

  return (
    <SegmnetWrapper ref={block} onClick={boardsHandler} show={segment}>
      <ContextSegment onClick={stopHanlder}>
        <ContainerSegment>
          <ContextContainer>
            <Input icon="search" placeholder="Поиск по названию.." ref={input} />
            {data.map((list) => (
              <BoardsList data={list} />
            ))}
            {/* <BoardsList data={data.favourite} favourite />
          <BoardsList data={data.recently} /> */}
          </ContextContainer>
        </ContainerSegment>
      </ContextSegment>
    </SegmnetWrapper>
  );
}
