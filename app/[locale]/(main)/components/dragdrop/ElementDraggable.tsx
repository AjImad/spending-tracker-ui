import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

interface IElementDraggable {
  id: string;
  text: string;
  className?: string;
}

const ElementDraggable = ({ id, text, className }: IElementDraggable) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      type: "Element",
      text,
    },
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="rounded-lg border-dashed border-2 border-neutral-300 bg-white h-10 p-2 flex items-center relative z-20"
      />
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "rounded-lg flex justify-start items-center cursor-grab relative h-fit min-h-10",
        className
      )}
    >
      <div className="rounded-s-lg border border-neutral-300 bg-neutral-300 p-1 py-1.5 h-full">
        <GripVertical size={24} className="text-[#626b85]" />
      </div>
      <div className="bg-white border border-neutral-300 rounded-e-lg p-1 py-1.5 h-full w-full">
        <p className="ml-2 text-muted-foreground">{text}</p>
      </div>
    </div>
  );
};

export default ElementDraggable;
