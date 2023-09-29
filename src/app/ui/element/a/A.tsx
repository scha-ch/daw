import classNames from "classnames";

import type { IA } from "@/ui";

function A({
  children,
  order,
  className: _className,
  classNameActive = "",
  href = "#",
  isActive = false,
  onClick = (event) => event.preventDefault(),
  ...rest
}: IA) {
  const className = classNames("relative p-4", _className, `order-${order}`, {
    [classNameActive]: isActive,
  });
  const tabIndex = order;
  const props = { ...rest, href, className, tabIndex, onClick };

  return <a {...props}>{children}</a>;
}

export { A };