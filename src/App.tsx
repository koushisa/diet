import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container } from "@material-ui/core/";
import Home from "./components/home/Home";
import Resipe from "./components/resipe/Resipe";
import WeightContainer from "./components/weight/WeightContainer";

import FoodMenu from "./components/food-menu/FoodMenu";
import ContentWrapper from "./components/ContentWrapper";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/resipe" component={ContentWrapper(Resipe)} />
          <Route
            exact
            path="/weight"
            component={ContentWrapper(WeightContainer)}
          />
          <Route exact path="/food-menu" component={ContentWrapper(FoodMenu)} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
};

/**
 * URLが存在しない場合のフォールバック処理です
 * 現時点では、ホーム画面へリダイレクトします
 */
function NoMatch() {
  return <Redirect to="/home"></Redirect>;
}

export default App;
