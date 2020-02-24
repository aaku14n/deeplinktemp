import React from "react";
import { Helmet } from "react-helmet";
import { getHomeData } from "../Action/Action";
import { parse } from "query-string";
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
  }
  renderSeoTags = () => {
    if (!this.props.homeData) {
      return null;
    }
    console.log(this.state);
    let image = "/public/logo.png";
    if (this.props.homeData.restaurantImage) {
      image = this.props.homeData.restaurantImage;
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
