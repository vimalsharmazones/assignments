import React from "react";
import { dateService } from "../../../shared/date/date-service";

export function FeedSingle(props) {
  return (
    <React.Fragment>
      <div className="card">
        <img
          src={props.feed.thumbnail_image}
          className="card-img-top img-thumbnail rounded "
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{props.feed.event_name}</h5>

          <div>
            <span>
              {props.feed.views} <i className="fa fa-eye"></i>
            </span>
            &nbsp; &nbsp;
            <span>
              {props.feed.likes} <i className="fa fa-thumbs-up"></i>
            </span>
            &nbsp; &nbsp;
            <span>
              {props.feed.shares} <i className="fa fa-share-alt"></i>
            </span>
          </div>
          <p className="card-text">
            <small className="text-muted">
              Last updated {dateService.timestampToDate(props.feed.event_date)}
            </small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
// const a = {
//   id: "HktWbZ1ox",
//   thumbnail_image: "http://i.imgur.com/HRLcw1j.jpg",
//   event_name: "Hello1",
//   event_date: 1506988800,
//   views: 7,
//   likes: 3,
//   shares: 5,
// };
