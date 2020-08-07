import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [books, setBooks] = useState([]);
  const updateBooksInState = books => setBooks(books);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage
            updateBooksInState={updateBooksInState}
          />
        </Route>
        <Route path="/result">
          <ResultPage 
            updateBooksInState={updateBooksInState}
            books={books}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
