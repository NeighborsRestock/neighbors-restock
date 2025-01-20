import React from "react";
import { Icon } from "../../config/types";
import { ICONS } from "../../config/constants";
import { IconsProps } from "./Icons.types";

const Icons = ({ twClassNames = "size-[25px]", iconName }: IconsProps) => {
  return <div className={twClassNames}>{ICONS[iconName]}</div>;
};

export default Icons;
