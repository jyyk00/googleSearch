import React from "react";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//toast for notifications //make sure you run the install if not in package already
import { toast } from 'react-toastify';

class AddBookBtn extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    