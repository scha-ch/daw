import classNames from "classnames";

import type { IA } from "@/ui";

function A({
  children,
  order,
  className: _className,
  classNameActive,
  href = "#",
  isActive = false,
  ...rest
}: IA) {
  const className = classNames("relative p-4", _className, `order-${order}`, {
    classNameActive: isActive,
  });
  const tabIndex = order;
  const props = { ...rest, href, className, tabIndex };
  return <a {...props}>{children}</a>;
}

export { A };
