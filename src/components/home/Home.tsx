import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Restaurant, AccessibilityNew, EventNote } from "@material-ui/icons";
import { Box } from "@material-ui/core/";

export default function Home() {
  return (
    //a
    <React.Fragment>
      <Link to="/resipe" role="button">
        <Box display="flex" justifyContent="center">
          <Restaurant
            color="action"
            style={{ width: "50%", height: 300 }}
          ></Restaurant>
        </Box>
      </Link>
      <Link to="/weight" role="button">
        <AccessibilityNew
          color="action"
          style={{ width: "50%", height: 300 }}
        ></AccessibilityNew>
      </Link>
      <Link to="/food-menu" role="button">
        <EventNote
          color="action"
          style={{ width: "50%", height: 300 }}
        ></EventNote>
      </Link>
    </React.Fragment>
  );
}
