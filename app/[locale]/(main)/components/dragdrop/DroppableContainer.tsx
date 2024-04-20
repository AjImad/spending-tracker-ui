import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ElementDraggable from "./ElementDraggable";
import { useMemo } from "react";

interface IDroppableContainer {
  column: {
    id: string;
  };
  elements: { id: string; text: string }[];
}

const DroppableContainer = ({ elements, column }: IDroppableContainer) => {
  const elementIds = useMemo(() => elements.map((el) => el.id), [elements]);
  const { setNodeRef, transform, transition, attributes, listeners } =
    useSortable({
      id: column.id,
      data: {
        type: "Column",
      },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      className="rounded-lg bg-[#eef0f2] shadow min-h-10 w-full p-3 space-y-1"
    >
      <SortableContext items={elementIds}>
        {elements.map((el) => (
          <ElementDraggable key={el.id} id={el.id} text={el.text} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DroppableContainer;
