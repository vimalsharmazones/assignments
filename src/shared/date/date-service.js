class DateUtil {
  timestampToDate(timestamp: Date) {
    let todate = new Date(timestamp).getDate();
    let tomonth = new Date(timestamp).getMonth() + 1;
    let toyear = new Date(timestamp).getFullYear();
    let original_date = tomonth + "/" + todate + "/" + toyear;
    return original_date;
  }
}

export const dateService = Object.freeze(new DateUtil());
