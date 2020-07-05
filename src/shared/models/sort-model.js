const { SORT_ORDER } = require("../enums/sort-enum");

export class SortModel {
  constructor(name, order) {
    this.name = name;
    this.order = order ? order : SORT_ORDER.None;
  }

  changeOrder(order) {
    switch (order) {
      case SORT_ORDER.None:
        this.order = SORT_ORDER.DESC;
        break;
      case SORT_ORDER.DESC:
        this.order = SORT_ORDER.ASC;
        break;
      case SORT_ORDER.ASC:
        this.order = SORT_ORDER.None;
        break;
      default:
        this.order = SORT_ORDER.DESC;
        break;
    }
    return this.order;
  }

  setOrder(order) {
    this.order = order;
  }
}
