import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: { 
    margin: 'auto',
    width: 'fit-content',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: '30vw',
  },
}));

export default function SearchBar({ updateBooksInState }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const inputRef = useRef(null);
  const history = useHistory();
  const classes = useStyles();

  const handleSearchButton = async () => {
    setButtonDisabled(true);
    const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/${inputRef.current.value}`;
    
    try {
      const res = await axios.get(searchUrl);
      const { books = [], error } = res.data
      updateBooksInState(books);
      error !== '0' && console.log(error);
      setButtonDisabled(false);
      history.push("/result");
    } catch (error) {
      console.log(error);
      setButtonDisabled(false);
    }
  };

  return (
    <Box mt={3} mx='auto'>
      <form className={classes.root}>
        <TextField className={classes.input}
                  placeholder='try "mongo", "react"'
                  variant="outlined"
                  inputRef={inputRef}
                  size="small"
        />
        <Button variant="contained"
                color="primary"
                type="submit"
                style={{minWidth: '100px'}}
                disabled={isButtonDisabled}
                onClick={handleSearchButton}
        >
          { isButtonDisabled ? <CircularProgress size={25} /> : 'Search' }
        </Button>
      </form>
    </Box>
  )
}
