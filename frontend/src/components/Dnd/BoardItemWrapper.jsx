import { useState, useRef, cloneElement, memo, useContext } from 'react';
import { useStoreon } from 'storeon/react';
import { useDrag, useDrop } from 'react-dnd';
import { SocketContext } from '@context/socket.context';

const BoardItemWrapper = ({ children, id, index, type, team }) => {
  const { dispatch } = useStoreon();
  const { moveBoard } = useContext(SocketContext);
  const [position, setPosition] = useState(index);
  const ref = useRef(null);

  const onDragEnd = (nextPosition) => {
    if (position === nextPosition) return null;
    moveBoard(team);
    return setPosition(nextPosition);
  };

  const [{ isDragging }, connectDrag] = useDrag({
    item: { type, id, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, connectDrop] = useDrop({
    accept: type,
    hover(item) {
      const newItem = item;
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      dispatch('user/boardsDragEnd', { dragIndex, hoverIndex });
      newItem.index = hoverIndex;
    },
  });

  const opacity = isDragging ? '0' : '1';
  connectDrag(ref);
  connectDrop(ref);

  return cloneElement(children, { forwardRef: ref, opacity, onDragEnd, wrapped: true }, null);
};

export default BoardItemWrapper;
