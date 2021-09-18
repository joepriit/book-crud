import React, { Component } from "react";
import { faSave, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateBook, deleteBook } from "../../actions/books";
import { connect } from "react-redux";
import BookDataService from "../../services/book.service";
import "./Book.scss";

class Book extends Component {
  constructor(props) {
    super(props);
    this.getBook = this.getBook.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePublished = this.onChangePublished.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      published: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.getBook(id);
  }

  getBook(id) {
    BookDataService.get(id).then((response) => {
      if (response.data.success) {
        const data = response.data.data;
        this.setState({
          id: data.id,
          name: data.name,
          description: data.description,
          published: data.published === 1,
        });
      }
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangePublished(e) {
    this.setState({
      published: e.target.checked,
    });
  }

  saveBook() {
    const { id, name, description, published } = this.state;
    const data = { name, description, published };

    this.props
      .updateBook(id, data)
      .then((data) => {
        this.setState({
          id: id,
          name: data.name,
          description: data.description,
          published: data.published === 1,
        });

        this.props.history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteBook() {
    this.props
      .deleteBook(this.state.id)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { name, description, published } = this.state;
    return (
      <main className="container">
        <form className="edit-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book name
            </label>
            <input
              id="name"
              className="form-control mb-3"
              value={name}
              onChange={this.onChangeName}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Book description
            </label>
            <textarea
              className="form-control mb-3"
              rows={5}
              value={description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="published"
              checked={published}
              onChange={this.onChangePublished}
            />
            <label className="form-check-label" htmlFor="published">
              List this book
            </label>
          </div>

          <button
            type="button"
            className="btn px-4 me-2"
            onClick={this.saveBook}
          >
            <FontAwesomeIcon icon={faSave} className="me-1" /> Save book
          </button>

          <button type="button" className="btn px-4" onClick={this.deleteBook}>
            <FontAwesomeIcon icon={faTrashAlt} className="me-1" /> Delete book
          </button>
        </form>
      </main>
    );
  }
}

export default connect(null, { updateBook, deleteBook })(Book);
