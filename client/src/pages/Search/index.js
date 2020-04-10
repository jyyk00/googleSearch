  
import React, { Component } from "react";
import axios from "axios";
import AddBookBtn from "../../components/AddBookBtn";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import EmptyList from "../../components/EmptyList";

class Search extends Component {
    state = {
      searchRes: [],
      query: "",
      books: []
    };
  
    displayRes = data => {
      this.setState({ books: data.items });
    };
  