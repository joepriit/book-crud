import { faEllipsisV, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./BookItem.scss";

class BookItem extends Component {
  render() {
    const book = this.props.book;

    return (
      <div className="book-item">
        <div className="header">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="name">
                {book.name + " " || "Unknown "}
                <span className="status">
                  ({book.published ? "Published" : "Unpublished"})
                </span>
              </h5>
            </div>
            <div className="col col-auto">
              <Dropdown align="end">
                <Dropdown.Toggle>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={"/book/" + book.id}>
                    <FontAwesomeIcon icon={faPencilAlt} className="me-1" /> Edit
                    book
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="body">
          <p>{book.description || "N/A"}</p>
        </div>
      </div>
    );
  }
}

export default BookItem;
