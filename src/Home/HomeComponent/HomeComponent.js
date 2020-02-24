import React from "react";
import { Helmet } from "react-helmet";
import { getHomeData } from "../Action/Action";
import { parse } from "query-string";

function getRestaurantsUrl(url) {
  return url
    ? url
        .replace("UPDATE_IMAGE_WIDTH", 300)
        .replace("UPDATE_IMAGE_HEIGHT", 300)
        .replace(
          "UPDATE_GOOGLE_API_KEY",
          "AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU"
        )
    : "";
}
class HomeComponent extends React.Component {
  static fetching({ dispatch }) {
    const restId = "5e4d85b4455edd4625dfdb17";
    return [dispatch(getHomeData(restId))];
  }
  getInitialData = async () => {
    const restId = "5e4d85b4455edd4625dfdb17";
    console.log(this.props);
    const parsedData = parse(this.props.location.search);
    console.log(parsedData);
    await this.props.getHomeData(restId);
  };
  componentDidMount() {
    this.getInitialData();
    window.location.href = "dishserve://app";
  }
  renderSeoTags = () => {
    if (!this.props.homeData) {
      return null;
    }
    console.log(this.state);
    let image = "https://disherveimages.s3-eu-west-1.amazonaws.com/logo.png";
    if (this.props.homeData.restaurantImage) {
      image = getRestaurantsUrl(this.props.homeData.restaurantImage);
    }
    return (
      <Helmet>
        <title>dishServe</title>
        <meta name="description" content={this.props.homeData.name} />
        <meta property="og:title" content="DishServe Recommendation" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:description" content={this.props.homeData.name} />
        <meta property="og:image" content={image} />
      </Helmet>
    );
  };
  render() {
    return (
      <div className="App">
        {this.renderSeoTags()}
        <header className="App-header">
          <p>{this.props.homeData && this.props.homeData.name}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default HomeComponent;
