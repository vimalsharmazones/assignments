import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeed } from "../../redux/actions/feeds-actions";
import { FeedSingle } from "./feed-single";
import { key } from "../../../shared/key";
import { PaginationMz } from "../../../shared/components/pagination/pagination";
import { SortingListMz } from "../../../shared/components/sort/sort-list";
import { SortModel } from "../../../shared/models/sort-model";
import { util } from "../../../shared/utils/util";

// Using Flowbin for type checking
type Props = {
  fetchFeed: Function,
  // using object as adding extra class will be cost
  feedList: Object,
};
type States = {
  posts: any[],
  page: number,
};

// For show case I'm using Class component. It can also be funcitonal component
class FeedPage extends Component<Props, States> {
  sortingList = ["Date", "Likes", "Views", "Share"];
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: null,
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  onPageChange = (pageNo) => {
    this.setState(
      (state, ownProps) => ({
        posts: [],
      }),
      () => this.fetchPost(pageNo)
    );
  };

  fetchPost(pageNo: number) {
    this.props.fetchFeed(pageNo);
    this.sortingList = Array.from(this.sortingList);
  }

  onChangeSort = (sortModel: SortModel) => {
    let key;

    switch (sortModel.name) {
      case "Date":
        key = "event_date";
        break;
      case "Likes":
        key = "likes";
        break;
      case "Views":
        key = "views";
        break;
      case "Share":
        key = "shares";
        break;

      default:
        return;
    }

    const posts = util.sort(this.state.posts, key, sortModel.order);

    this.setState((state, ownProps) => ({
      posts: posts,
    }));
  };

  static getDerivedStateFromProps(nextProp, prevState) {
    return {
      posts: nextProp.feedList.posts,
      page: nextProp.feedList.page,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="offset-4 col-4">
            <PaginationMz noOfPages={3} onPageChange={this.onPageChange} />
          </div>
        </div>

        <div className="row">
          <div className="offset-4 col-4">
            <SortingListMz
              list={this.sortingList}
              onChange={this.onChangeSort}
            />
          </div>
        </div>

        <div className="row">
          <div className="offset-4 col-4">
            {this.state.posts.length ? (
              this.state.posts.map((feed) => (
                <FeedSingle key={key()} feed={feed} />
              ))
            ) : (
              <div>We Don't have any feed</div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    feedList: state.feeds.feedList,
  };
};

export default connect(mapStateToProps, { fetchFeed })(FeedPage);
