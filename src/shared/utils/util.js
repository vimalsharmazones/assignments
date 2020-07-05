import { SORT_ORDER } from "../enums/sort-enum";

class Util {
  range(no: nummber) {
    const arr = [];
    for (let i = 1; i <= no; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Sorting using Selection Sort
  sort(arr: any[], key: string, order: string) {
    switch (order) {
      case SORT_ORDER.ASC:
        return this.sortAsc(arr, key);
      case SORT_ORDER.DESC:
        return this.sortDesc(arr, key);
      default:
        return arr;
    }
  }

  // Sorting using Selection Sort
  sortAsc(arr: any[], key: string) {
    const len = arr.length;
    const firstList = len - 1;
    let min;
    for (let i = 0; i < firstList; i++) {
      min = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j][key] < arr[min][key]) {
          min = j;
        }
      }
      if (i !== min) {
        arr[i] = this.swap(arr[min], (arr[min] = arr[i]));
      }
    }
    return arr;
  }

  // Sorting using Selection Sort
  sortDesc(arr: any[], key: string) {
    let max;
    let len = arr.length;
    const firstList = len - 1;
    for (let i = 0; i < firstList; i++) {
      max = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j][key] > arr[max][key]) {
          max = j;
        }
      }
      if (i !== max) {
        arr[i] = this.swap(arr[max], (arr[max] = arr[i]));
      }
    }
    return arr;
  }

  swap(x) {
    return x;
  }
}

export const util = new Util();
