'use client';

import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// project imports
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| DATETIME ||============================== //

const DateTime = () => {
  const [valueBasic, setValueBasic] = React.useState<Date | null>(new Date());

  return (
    <MainCard title="Date & Time" secondary={<SecondaryAction link="https://next.material-ui.com/components/date-time-picker/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Basic Datetime Picker">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                slotProps={{ textField: { fullWidth: true } }}
                label="Date & Time"
                value={valueBasic}
                onChange={(newValue: Date | null) => {
                  setValueBasic(newValue);
                }}
              />
            </LocalizationProvider>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Disabled">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                slotProps={{ textField: { fullWidth: true } }}
                label="Date & Time"
                value={valueBasic}
                onChange={(newValue) => {
                  setValueBasic(newValue);
                }}
                disabled
              />
            </LocalizationProvider>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Mobile Mode">
            <CustomDateTime />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DateTime;
