import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onchange, value }) => {
  return (
    <Fragment>
      <Stack gap={1}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5">$3000</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={step}
        marks
        onChange={onchange}
        value={value}
      />
      <Typography color="text.secondary">1000</Typography>
      <Typography color="text.secondary">10000</Typography>
    </Fragment>
  );
};

export default SliderComponent;
