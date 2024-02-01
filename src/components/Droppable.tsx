import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id || "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      className="flex w-auto h-12 bg-slate-200 border border-gray-200 items-center absolute"
      ref={setNodeRef}
      style={{ ...style, ...props.style }}
    >
      {props.children}
    </div>
  );
}
