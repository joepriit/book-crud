import React, { Component } from "react";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBook } from "../../actions/books";
import { connect } from "react-redux";
import "./Create.scss";

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePublished = this.onChangePublished.bind(this);
    this.createBook = this.createBook.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      published: true,
    };
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
      published: e.target.checked ? 1 : 0,
    });
  }

  createBook() {
    const { name, description, published } = this.state;
    const _published = published ? 1 : 0;

    this.props
      .createBook(name, description, _published)
      .then((data) => {
        this.setState({
          id: data.id,
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

  render() {
    return (
      <main className="container">
        <form className="add-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Book name
            </label>
            <input
              id="name"
              className="form-control mb-3"
              value={this.state.name}
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
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="published"
              checked={this.state.published}
              onChange={this.onChangePublished}
            />
            <label className="form-check-label" htmlFor="published">
              Book is published
            </label>
          </div>

          <button type="button" className="btn px-4" onClick={this.createBook}>
            <FontAwesomeIcon icon={faSave} className="me-1" /> Create book
          </button>
        </form>
      </main>
    );
  }
}

export default connect(null, { createBook })(Create);
