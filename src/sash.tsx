import { useRef, useState } from "react";
import { classNames, sashClassName } from "./base";
import { ISashContentProps, ISashProps } from "./types";

export default function Sash({
  className,
  render,
  onDragStart,
  onDragging,
  onDragEnd,
  ...others
}: ISashProps) {
  const timeout = useRef<number | null>(null);
  const [active, setActive] = useState(false);
  const [dragging, setDrag] = useState(false);

  const handleMouseMove = function (e: MouseEvent) {
    onDragging(e);
  };

  const handleMouseUp = function (e: MouseEvent) {
    setDrag(false);
    onDragEnd(e);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      role="separator"
      tabIndex={0}
      className={classNames(sashClassName, className!)}
      onMouseEnter={() => {
        timeout.current = window.setTimeout(() => {
          setActive(true);
        }, 150);
      }}
      onMouseLeave={() => {
        if (timeout.current) {
          setActive(false);
          clearTimeout(timeout.current);
        }
      }}
      onMouseDown={(e) => {
        setDrag(true);
        onDragStart(e.nativeEvent);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
      }}
      {...others}
    >
      {render(dragging || active)!}
    </div>
  );
}

export function SashContent({
  className,
  children,
  active,
  type,
  ...others
}: ISashContentProps) {
  return (
    <div
      className={classNames(
        "split-sash-content",
        (active && "split-sash-content-active") as string,
        (type && `split-sash-content-${type}`) as string,
        className!
      )}
      {...others}
    >
      {children}
    </div>
  );
}
