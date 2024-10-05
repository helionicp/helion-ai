import { Box, BoxProps } from '@mantine/core';
import classes from './animated-logo.module.css';

export function AnimatedLogo(props: BoxProps) {
  return (
    <Box className={classes.logoWrapper} {...props}>
      <div className={classes.infiniteLoop} />
    </Box>
  );
}
