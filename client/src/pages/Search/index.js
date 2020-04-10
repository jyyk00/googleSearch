  
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
    searchGBooks = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.query
        }`;
        axios
          .get(url)
          .then(res => {
            //console.log(res);
            this.displayRes(res.data);
          })
          .catch(err => console.log(err));
      };
    
      handleInput = event => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
        //console.log("Query", this.state.query);
      };
    
    