import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function BookList({children}) {
    return (
      <ul className="list-group">{children}</ul>
      );
  }