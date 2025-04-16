import React from 'react';
import { styled } from '@mui/material/styles';

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardPage() {
  return <Skeleton height={300}>Dashboard Content Test Test</Skeleton>;
}
