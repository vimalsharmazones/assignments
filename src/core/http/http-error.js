import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function CheckRequests(props) {
  useEffect(() => {
    const httpInterceptor = axios.interceptors.response.use(
      function (response) {
        // Do something with response data
        return response;
      },
      function (error) {
        switch (error.response.status) {
          case 503:
            props.history.push("/503"); //we will redirect user into 503 page
            break;
          default:
            break;
        }
        // Do something with response error
        return Promise.reject(error);
      }
    );
    return function () {
      axios.interceptors.response.eject(httpInterceptor);
    };
  });

  return <React.Fragment>{props.children}</React.Fragment>;
}

export const CheckRequestsWR = withRouter(CheckRequests);
