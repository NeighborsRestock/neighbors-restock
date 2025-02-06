import React from "react";
import { Icon } from "../../config/types";
import { ICONS } from "../../config/constants";
import { IconsProps } from "./Icons.types";

const Icons = ({ className = "size-[25px]", iconName }: IconsProps) => {
  return <div className={className}>{ICONS[iconName]}</div>;
};

export default Icons;
