import React from "react";
import { Box } from "@material-ui/core";
import AppHeader from "./AppHeader";

export default function(WrappedComponent: React.FC) {
  const HOC = class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <AppHeader />
          <Box mt="20%"></Box>
          <WrappedComponent />
        </React.Fragment>
      );
    }
  };
  return HOC;
}
