import React from "react";
import { Icon } from "../config/types";
import { ICONS } from "../config/constants";

type Props = {
  classNames: string;
  iconName: Icon;
};

const Icons = ({ classNames, iconName }: Props) => {
  return <div className={classNames}>{ICONS[iconName]}</div>;
};

export default Icons;
