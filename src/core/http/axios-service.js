import { baseEndPoint } from "../../shared/end-point/base-end-points";
const axios = require("axios");

class AxiosService {
  history = null;

  // SingleTon
  constructor() {
    if (!AxiosService.instance) {
      AxiosService.instance = this;
    }
    return AxiosService.instance;
  }

  get(url) {
    return new Promise((resolve, reject) => {
      const completeUrl = baseEndPoint.getUrl(url);

      axios
        .get(completeUrl)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(this.handdleError)
        .then(function () {
          //  console.log('Alway executed');
        });
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      const completeUrl = baseEndPoint.getUrl(url);
      axios
        .post(completeUrl, body)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(this.handdleError)
        .then(function () {
          //   console.log('Alway executed');
        });
    });
  }

  put(url, body) {
    return new Promise((resolve, reject) => {
      const completeUrl = baseEndPoint.getUrl(url);
      axios
        .put(completeUrl, body)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(this.handdleError)
        .then(function () {
          //  console.log('Alway executed');
        });
    });
  }

  delete(url, body) {
    return new Promise((resolve, reject) => {
      const completeUrl = baseEndPoint.getUrl(url);
      axios
        .delete(completeUrl, body)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(this.handdleError)
        .then(function () {
          //  console.log('Alway executed');
        });
    });
  }

  registorHistory(history) {
    this.history = history;
  }

  handdleError(error) {
    switch (error.response.status) {
      case 503:
        this.history.push("/503"); //we will redirect user into 503 page
        break;
      default:
        break;
    }
    // Do something with response error
    return Promise.reject(error);
  }
}

export const axiosService = new AxiosService();
