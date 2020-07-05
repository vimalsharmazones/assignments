import React, { useMemo, useState } from "react";
import { SortItemMz } from "./sort-item";
import { SORT_ORDER } from "../../enums/sort-enum";
import { key } from "../../key";
import { SortModel } from "../../models/sort-model";

type Props = {
  list: string[],
};

export function SortingList(props: Props) {
  let [update, forceUpdate] = useState(1);

  const list = useMemo(() => {
    const newList = [];
    props.list.forEach((item, index) => {
      newList.push(new SortModel(item));
    });
    return newList;
  }, [props.list]);

  const onClickSort = (sortModel) => {
    const order = sortModel.order;
    list.forEach((item) => item.setOrder(SORT_ORDER.None));
    sortModel.changeOrder(order);
    props.onChange(sortModel);
    forceUpdate(++update);
  };

  return (
    <React.Fragment>
      <div>
        {list.map((item) => (
          <SortItemMz key={key()} onClick={onClickSort} sortModel={item} />
        ))}
      </div>
    </React.Fragment>
  );
}

export const SortingListMz = React.memo(SortingList);
