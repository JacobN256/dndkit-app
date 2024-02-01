import { DndContext } from "@dnd-kit/core";
import Droppable from "../components/Droppable";

import { useEffect, useState } from "react";
import Draggable from "../components/Draggable";

interface RowData {
  time: number;
  name: string;
}

// in theory this will need to be an array of size 96 to account for every 15min increment in a 24 hour period
let sampleDropZones = [
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
  { time: 0, name: "" },
];

export default function Row(props: { data: RowData[]; stackNumber: number }) {
  const [dropZones, setDropZones] = useState<RowData[]>(sampleDropZones);
  const widthOfDropZone = 100 / dropZones.length;

  useEffect(() => {
    let tempDropZones = [...sampleDropZones];
    if (props.data) {
      props.data.forEach((value) => {
        tempDropZones[value.time] = value;
      });
    }

    setDropZones([...tempDropZones]);
  }, []);

  console.log(widthOfDropZone);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row w-full overflow-hidden">
        {dropZones.map((value, index) => {
          return (
            <Droppable
              id={index}
              style={{
                left: `calc(${widthOfDropZone}%*${index})`,
                top: `calc(48px * ${props.stackNumber}) `,
                width: `${widthOfDropZone}%`,
              }}
            >
              {value.name !== "" ? (
                <Draggable id={value?.time}>{value?.name}</Draggable>
              ) : (
                index
              )}
            </Droppable>
          );
        })}
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id) {
      // id of the droppable container - event.over.id
      // id of the dragging element    - event.active.id

      let tempDropZones = [...dropZones];

      // get card
      const dragCard = props.data.find(
        (value) => value.time === event.active.id
      ) as RowData;

      // get current index of card
      const indexOfDragCard = dropZones.indexOf(dragCard);

      // clear out current index
      tempDropZones[indexOfDragCard] = { time: 0, name: "" };

      // set to new index
      tempDropZones[event.over.id] = dragCard;

      // set overall
      setDropZones(tempDropZones);
    }
  }
}
