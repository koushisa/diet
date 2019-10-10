import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import { Container, Box } from "@material-ui/core/";
import Home from "./home/Home";
import Resipe from "./resipe/Resipe";
import Weight from "./weight/Weight";
import FoodMenu from "./food-menu/FoodMenu";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/resipe" component={Resipe} />
          <Route exact path="/weight" component={Weight} />
          <Route exact path="/food-menu" component={FoodMenu} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
};

/**
 * URLが存在しない場合のフォールバック処理。
 * ホーム画面へリダイレクトします。
 *
 * @returns
 */
function NoMatch() {
  return <Redirect to="/home"></Redirect>;
}

export default App;
