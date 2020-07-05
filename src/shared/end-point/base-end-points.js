class BaseEndPoint {
  UNLU_BASE = "http://www.mocky.io/v2/";
  getUrl(url: string) {
    return this.UNLU_BASE + url;
  }
}

// Creating SingleTon by only exporting the freezed object
export const baseEndPoint = Object.freeze(new BaseEndPoint());
