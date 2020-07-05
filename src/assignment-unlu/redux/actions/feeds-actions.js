import { axiosService } from "../../../core/http/axios-service";
import { END_POINTS } from "../../../shared/end-point/end-points";
import { FETCH_FEEDS } from "../unlu-action-types";

export const fetchFeed = (pageNo) => (dispatch) => {
  axiosService.get(getUrlAccordingToPage(pageNo)).then((response) => {
    dispatch({
      type: FETCH_FEEDS,
      payload: response,
    });
  });
};

function getUrlAccordingToPage(pageNo) {
  switch (pageNo) {
    case 1:
      return END_POINTS.UNLU.SET_1;
    case 2:
      return END_POINTS.UNLU.SET_2;
    case 3:
      return END_POINTS.UNLU.SET_3;
    default:
      return END_POINTS.UNLU.SET_1;
  }
}
