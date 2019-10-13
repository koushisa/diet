import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Home } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #f5af19 30%, #f5af19 90%);
  border: 0;
  color: white;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

export function HomeButton() {
  let history = useHistory();

  return (
    <Button
      onClick={() => {
        history.push("/home");
      }}
    >
      <Home fontSize="large" color="action"></Home>
    </Button>
  );
}

export default function() {
  return (
    <StyledAppBar>
      <Toolbar>
        <HomeButton />
      </Toolbar>
    </StyledAppBar>
  );
}
