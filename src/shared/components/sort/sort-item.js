import React from "react";
import { SORT_ORDER } from "../../enums/sort-enum";
function SortItem(props) {
  let Icon;

  switch (props.sortModel.order) {
    case SORT_ORDER.None:
      Icon = <i className="fa fa-sort"></i>;
      break;
    case SORT_ORDER.ASC:
      Icon = <i className="fa fa-sort-up"></i>;
      break;
    case SORT_ORDER.DESC:
      Icon = <i className="fa fa-sort-down"></i>;
      break;
    default:
      Icon = null;
  }

  return (
    <span onClick={() => props.onClick(props.sortModel)}>
      {props.sortModel.name} &nbsp;
      {Icon} &nbsp; &nbsp; &nbsp;
    </span>
  );
}

export const SortItemMz = React.memo(SortItem);
