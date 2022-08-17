class Sidebar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <ul class="sidelist">
          <li>
            <h3>Dashboard</h3>
          </li>
          <li>
            <h3>Widget</h3>
          </li>
          <li>
            <h3>Reviews</h3>
          </li>
          <li>
            <h3>Customers</h3>
          </li>
          <li>
            <h3>Online Analysis</h3>
          </li>
          <li>
            <h3>Settings</h3>
          </li>
        </ul>
      </div>
    );
  }
}

class Reviews extends React.Component {
  render() {
    return (
      <div class="reviews">
        <h2>Reviews</h2>
        <h1>1281</h1>
      </div>
    );
  }
}

class AverageRating extends React.Component {
  render() {
    return (
      <div class="rating">
        <h2>Average Rating</h2>
        <h1>4.6</h1>
      </div>
    );
  }
}

class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div class="analysis">
        <h2>Sentiment Analysis</h2>
        <ul>
          <li>
            <h2>960</h2>
          </li>
          <li>
            <h2>122</h2>
          </li>
          <li>
            <h2>321</h2>
          </li>
        </ul>
      </div>
    );
  }
}

class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div class="visitors">
        <h2>Website Visitors</h2>
        <h1>821</h1>
        <div class="box"></div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Sidebar />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("main"));
