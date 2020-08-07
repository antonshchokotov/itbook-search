import React from 'react';
import { Typography, Paper, Grid, Box } from '@material-ui/core';

export default function Book({ book }) {
  const { title, subtitle, image } = book;

  return (
    <Box m={1} mx='auto' maxWidth={800}>
      <Paper elevation={2}>
        <Grid container direction="row">
          <Grid item xs={3}>
            <img src={image} alt={title} style={{ maxWidth:'100%' }}/>
          </Grid>
          <Grid item container
                direction='column'
                xs={9}
                justify="center"
                alignItems="center"
          >
            <Grid item>
              <Typography gutterBottom variant="h6">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
