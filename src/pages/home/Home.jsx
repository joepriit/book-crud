import React, { Component } from "react";
import BookItem from "../../components/book-item/BookItem";
import { fetchBooks, searchBooks, deleteBooks } from "../../actions/books";
import { connect } from "react-redux";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.onSearchBooks = this.onSearchBooks.bind(this);
    this.deleteBooks = this.deleteBooks.bind(this);

    this.state = {
      searchValue: "",
    };
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  onSearchBooks(e) {
    const searchValue = e.target.value;

    this.setState({
      searchValue: searchValue,
    });

    this.props.searchBooks(searchValue);
  }

  deleteBooks() {
    this.props
      .deleteBooks()
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { searchValue } = this.state;
    const { books } = this.props;

    return (
      <main className="container">
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control"
              placeholder="Search books by name..."
              value={searchValue}
              onChange={this.onSearchBooks}
            />
          </div>
          <div className="col col-auto">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deleteBooks}
            >
              Delete all books
            </button>
          </div>
        </div>
        {books.length ? (
          <section className="books">
            {books.map((book, i) => {
              return <BookItem book={book} key={i} />;
            })}
          </section>
        ) : (
          <p>No books found, try adding some...</p>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, {
  fetchBooks,
  searchBooks,
  deleteBooks,
})(Home);
