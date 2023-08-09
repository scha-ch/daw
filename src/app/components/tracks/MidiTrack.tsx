import cn from "classnames";
import { ListMusic } from "lucide-react";

import useReactDraggable from "../ui/useReactDraggable";

import Accordion from "../ui/accordion/Accordion";
import AccordionDetails from "../ui/accordion/AccordionDetails";
import AccordionSummary from "../ui/accordion/AccordionSummary";
import { MouseEvent } from "react";

export default function MidiTrack() {
  const { Draggable, props } = useReactDraggable();

  function onClick(event: any) {
    console.log(event.target);
    event.target.classList.toggle("bg-[#ffffff50]");
    event.target.classList.toggle("bg-orange-400");
  }

  return (
    <Draggable {...props}>
      <Accordion>
        <AccordionDetails>
          <AccordionSummary>
            <div
              className={cn(
                "handle flex w-full bg-orange-100 mb-2 items-center"
              )}
            >
              <div className="px-4 py-1 border-r border-r-orange-200">
                <ListMusic className="fill-orange-400" />
              </div>
              <div
                onClick={(event: MouseEvent<HTMLDivElement>) => {
                  // TODO this event handler should be in the accordion
                  event.stopPropagation();
                  event.preventDefault();
                }}
                className="w-full flex"
              >
                {new Array(8).fill("").map((_, j) => (
                  <div
                    key={j}
                    className="p-1 flex flex-1 w-full border-r border-orange-200"
                  >
                    {new Array(8).fill("").map((_, k) => (
                      <div
                        className="flex-1 bg-[#ffffff50] mr-1"
                        onClick={onClick}
                        key={`sub-${k}}`}
                      >
                        &nbsp;
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AccordionSummary>
          <p>Hier ist der unsichtbare Teil, den man beim aufklappen sieht.</p>
        </AccordionDetails>
      </Accordion>
    </Draggable>
  );
}
