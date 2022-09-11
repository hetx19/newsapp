import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {

  const pageSize = 6
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News key="general" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key="general" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
