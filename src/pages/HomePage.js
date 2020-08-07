import React from 'react';
import SearchBar from '../components/SearchBar';
import { Grid, Typography, Box } from '@material-ui/core';

export default function HomePage({ updateBooksInState }) {

  return (
      <Grid
        container
        direction="column"
        alignItems="center"  
        style={{ height: '100vh' }}
      >
        <Box mt={20}>
          <Typography variant="h4" color="primary" align="left">
            {'IT Bookstore Search'}
          </Typography>
        </Box>
        <SearchBar updateBooksInState={updateBooksInState} />
      </Grid>
  )
}
