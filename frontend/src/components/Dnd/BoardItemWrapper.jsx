import { useState, useRef, cloneElement } from 'react';
import { useStoreon } from 'storeon/react';
import { useDrag, useDrop } from 'react-dnd';

export default function BoardItemWrapper({ children, id, index, type }) {
  const [position, setPosition] = useState(index);
  const { dispatch } = useStoreon();
  const ref = useRef();

  const onDragEnd = (nextPosition) => {
    if (position === nextPosition) {
      return console.log('nothing');
    }
    console.log('yes');
    setPosition(nextPosition);
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

      dispatch('boards/dragEnd', { dragIndex, hoverIndex });
      newItem.index = hoverIndex;
    },
  });

  const opacity = isDragging ? '0' : '1';
  connectDrag(ref);
  connectDrop(ref);

  return cloneElement(children, { forwardRef: ref, opacity, onDragEnd }, null);
}
