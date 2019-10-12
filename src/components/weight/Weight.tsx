import React from "react";
import { Line, ChartData } from "react-chartjs-2";
import * as chartjs from "chart.js";
import { Box, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

//TODO anyをなくす
interface props {
  year: number;
  month: number;
  data: ChartData<chartjs.ChartData>;
  decrementYear: any;
  incrementYear: any;
  decrementMonth: any;
  incrementMonth: any;
}

export default function Weight(props: props) {
  const {
    year,
    month,
    data,
    decrementYear,
    incrementYear,
    decrementMonth,
    incrementMonth
  } = props;

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row">
        <Button color="primary" onClick={decrementYear}>
          <KeyboardArrowLeft fontSize="large" />
        </Button>
        <h3>{year}</h3>
        <Button color="primary" onClick={incrementYear}>
          <KeyboardArrowRight fontSize="large" />
        </Button>
        <Button color="primary" onClick={decrementMonth}>
          <KeyboardArrowLeft fontSize="large" />
        </Button>
        <h3>{month}</h3>
        <Button color="primary" onClick={incrementMonth}>
          <KeyboardArrowRight fontSize="large" />
        </Button>
      </Box>

      <Line data={data} width={400} height={600} />
    </React.Fragment>
  );
}
