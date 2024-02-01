import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id || "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="flex grow h-12 bg-amber-100 items-center z-10"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}
