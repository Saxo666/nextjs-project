import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './DataAverage'

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
  selectedCity,
  setSelectedCity,

}) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          tickPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) => setTickPlacement(event.target.value)}
        >
          <FormControlLabel value="start" control={<Radio />} label="start" />
          <FormControlLabel value="end" control={<Radio />} label="end" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          tickLabelPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}
        >
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
      <FormControl>
      <FormLabel>City</FormLabel>
        <RadioGroup row value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <FormControlLabel value="GPU" control={<Radio />} label="GPU" />
            <FormControlLabel value="CPU" control={<Radio />} label="CPU" />
            <FormControlLabel value="RAM" control={<Radio />} label="RAM / 8GB" />
            <FormControlLabel value="Memory" control={<Radio />} label="Memory / 1TB" />
        </RadioGroup>
       </FormControl>
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: 'average (บาท)',
    },
  ],
  series: [{ dataKey: 'GPU', label: 'GPU average', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
    const [tickPlacement, setTickPlacement] = React.useState('middle');
    const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
    const [selectedCity, setSelectedCity] = React.useState('GPU');

    const chartSetting = {
        yAxis: [{ label: 'average (บาท)' }],
        series: [{
          dataKey: selectedCity,
          label: `${selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)} average`,
          valueFormatter
        }],
        height: 300,
        sx: {
          [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
          },
        },
      };

  return (
    <div style={{ width: '100%' }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'Year', tickPlacement, tickLabelPlacement }]}
        {...chartSetting}
      />
    </div>
  );
}