import { Stack, Typography } from "@mui/material";
import React from "react";
import { SummaryContent, HobbyContent } from "./consts";

export const SummaryComponent = () => {
  return (
    <Stack spacing={2}>
      <Typography variant='body1'>{SummaryContent}</Typography>
      <Typography variant='body1'>{HobbyContent}</Typography>
    </Stack>
  );
};
