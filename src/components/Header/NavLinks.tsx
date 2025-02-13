import { APP_ROUTES, LINKS } from "@/config/routes";
import React from "react";
import { Link } from "react-router-dom";

export type NavLinksProps = {
  className: string;
  onClickToClose: () => void
};

export const NavLinks = ({ className, onClickToClose }: NavLinksProps) => {
  return (
    <ul
      className={`*:list-none text-[16px] hover:*:text-blue-500 tracking-[3px] text-nowrap uppercase ${className}`}
    >
      {LINKS.map(([route, title], idx) => {
        return (
          <Link onClick={onClickToClose} key={`${route}--${idx}`} to={APP_ROUTES[route]}>
            {title}
          </Link>
        );
      })}
    </ul>
  );
};
