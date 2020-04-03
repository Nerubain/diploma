import React, { useRef, useEffect, useContext } from 'react';
import { Input } from 'semantic-ui-react';

import { ContainerSegment, ContextSegment, ContextContainer } from '../style';
import BoardsList from './BoardsList';
import { SegmentContext } from '../../../context/segment.context';

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

export default function BoardsSegment() {
  const input = useRef();

  const { segment, stopPropagation } = useContext(SegmentContext);

  useEffect(() => {
    if (input.current) input.current.focus();
  }, [segment]);

  return (
    <ContextSegment onClick={stopPropagation} show={segment === 'boards'}>
      <ContainerSegment>
        <ContextContainer>
          <Input icon="search" placeholder="Поиск по названию.." ref={input} />
          {data.map((list, index) => (
            <BoardsList data={list} key={index + 1} />
          ))}
          {/* <BoardsList data={data.favourite} favourite />
          <BoardsList data={data.recently} /> */}
        </ContextContainer>
      </ContainerSegment>
    </ContextSegment>
  );
}
