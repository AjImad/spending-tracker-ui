"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import DroppableContainer from "../components/dragdrop/DroppableContainer";
import ElementDraggable from "../components/dragdrop/ElementDraggable";
import BalanceOverview from "./BalanceOverview";
import BalanceStatistics from "./BalanceStatistics";
import BudgetOverview from "./BudgetOverview";
import ExpensesCategories from "./ExpensesCategories";
import TransactionsOverview from "./TransactionsOverview";
import WalletOverview from "./WalletOverview";
import "./chartStyle.css";

const DashboardPage = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 927px)");
  const { t } = useTranslation("dashboard");

  const [columns, setColumns] = useState([
    { id: "col-visible-left" },
    { id: "col-visible-right" },
    { id: "col-hidden" },
  ]);

  const [elements, setElements] = useState<
    { id: string; columnId: string | number; text: string }[]
  >([
    {
      id: "current_balance",
      columnId: "col-visible-left",
      text: "Current Balance",
    },
    {
      id: "expenses_categories",
      columnId: "col-visible-left",
      text: "Expenses Categories",
    },
    {
      id: "budget_overview",
      columnId: "col-visible-left",
      text: "Budget Overview",
    },
    {
      id: "balance_overview",
      columnId: "col-visible-right",
      text: "Balance Overview",
    },
    {
      id: "transactions_overview",
      columnId: "col-visible-right",
      text: "Transactions Overview",
    },
    {
      id: "balance_statistics",
      columnId: "col-visible-right",
      text: "Balance Statistics",
    },
  ]);

  const elementsId = useMemo(() => elements.map((el) => el.id), [elements]);

  const [activeElement, setActiveElement] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const getElementPos = (id: any) => {
    const index = elements.findIndex((el) => el.id === id);
    return index;
  };

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Element") {
      setActiveElement(event.active.data.current.text);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    console.log("Drag end");
    setElements((elements) => {
      const originalPos = getElementPos(active.id);
      const newPos = getElementPos(over.id);

      return arrayMove(elements, originalPos, newPos);
    });
  };

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAElement = active.data.current?.type === "Element";
    const isOverAElement = over.data.current?.type === "Element";

    if (!isActiveAElement) return;

    // Dropping a Element over another Element
    if (isActiveAElement && isOverAElement) {
      setElements((elements) => {
        const activeIndex = getElementPos(activeId);
        const overIndex = getElementPos(overId);

        if (elements[activeIndex].columnId != elements[overIndex].columnId) {
          console.log("Drop element over element");
          elements[activeIndex].columnId = elements[overIndex].columnId;
          return arrayMove(elements, activeIndex, overIndex - 1);
        }
        console.log("Drop element over element outside condition");
        return arrayMove(elements, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    // Dropping a Element over a Column
    if (isActiveAElement && isOverAColumn) {
      console.log("Drop element over column");
      setElements((elements) => {
        const activeIndex = elements.findIndex((t) => t.id === activeId);

        elements[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(elements, activeIndex, activeIndex);
      });
    }
  }

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className=" md:ml-0 text:lg md:text-xl font-bold text-slate-800 leading-normal">
            {t("w_back")}
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size={isMobile ? "sm" : "default"}
                className="flex justify-between items-center bg-[#00a76f]/[0.08] text-[#00a76f] hover:bg-[#00a76f29] hover:text-[#00a76f]"
              >
                <Expand className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[900px] absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/5">
              <DialogHeader>
                <DialogTitle className="tracking-wide">
                  Overview Preferences
                </DialogTitle>
                <DialogDescription>
                  Customize your dashboard to suit your needs and preferences,
                  by dragging and dropping the elements below.
                </DialogDescription>
              </DialogHeader>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={onDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={onDragOver}
              >
                <div className="flex gap-4 w-full">
                  <div className="w-full">
                    <p>Visible elements</p>
                    <div className="flex flex-1 justify-between items-start space-x-4 rounded-sm min-h-10 w-full p-2 ">
                      <SortableContext
                        items={columns}
                        strategy={horizontalListSortingStrategy}
                      >
                        {columns.slice(0, 2).map((col) => (
                          <DroppableContainer
                            column={col}
                            key={col.id}
                            elements={elements.filter(
                              (el) => el.columnId === col.id
                            )}
                          />
                        ))}
                      </SortableContext>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <p>Hidden elements</p>
                    <div className="rounded-sm min-h-10 p-2 space-y-1">
                      <SortableContext
                        items={columns}
                        strategy={horizontalListSortingStrategy}
                      >
                        {columns.slice(-1).map((col) => (
                          <DroppableContainer
                            column={col}
                            key={col.id}
                            elements={elements.filter(
                              (el) => el.columnId === col.id
                            )}
                          />
                        ))}
                      </SortableContext>
                    </div>
                  </div>
                </div>
                {createPortal(
                  <DragOverlay>
                    {activeElement && (
                      <ElementDraggable id="element" text={activeElement} />
                    )}
                  </DragOverlay>,
                  document.body
                )}
              </DndContext>
              <DialogFooter>
                <DialogClose className="space-x-2">
                  <Button variant={"ghost"}>Cancel</Button>
                  <Button
                    className="bg-[#00a76f]/[0.08] text-[#00a76f] hover:bg-[#00a76f29] hover:text-[#00a76f]"
                    type="submit"
                  >
                    Save
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div
          className={cn(
            "grid grid-cols-2 gap-[18px]",
            isMobile && "grid grid-cols-1 gap-6 place-items-center"
          )}
        >
          <div className="w-full flex flex-col space-y-6">
            <WalletOverview />
            <ExpensesCategories />
            <BudgetOverview />
          </div>
          <div className="w-full flex flex-col space-y-6">
            <BalanceOverview />
            <TransactionsOverview />
            <BalanceStatistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
