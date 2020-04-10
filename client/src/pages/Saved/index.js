import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import RemoveBookBtn from '../../components/RemoveBookBtn';
import { toast } from 'react-toastify';

class Saved extends Component {
    state = {
      savedBooks: [],
      initialized: true
    }
  
    componentDidMount() {
      this.getBooks();
    }
    getBooks = () => {
        axios.get("/api/books")
          .then(res => {
            this.setState({ savedBooks: res.data })
          })
          .catch((err => console.log(err)))
      }
    
      deleteFromDB = id => {
        console.log(id);
    
        axios.delete(`/api/books/${id}`)
          .then( () => {
            toast.error('Book Deleted');
            this.getBooks();
            
          })
          .catch(err => console.log(err))
      }