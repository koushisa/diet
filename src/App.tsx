import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Restaurant, AccessibilityNew, EventNote } from "@material-ui/icons";
import { Container, Box } from "@material-ui/core/";

const styles = {
  largeIcon: {
    width: 300,
    height: 300
  }
};

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Link to="/resipe">
          <Box display="flex" justifyContent="center">
            <Restaurant
              color="action"
              style={{ width: "50%", height: 300 }}
            ></Restaurant>
          </Box>
        </Link>

        <Link to="/weight">
          <AccessibilityNew
            color="action"
            style={{ width: "50%", height: 300 }}
          ></AccessibilityNew>
        </Link>

        <Link to="/menu">
          <EventNote
            color="action"
            style={{ width: "50%", height: 300 }}
          ></EventNote>
        </Link>
      </BrowserRouter>
    </Container>
  );
};

export default App;
