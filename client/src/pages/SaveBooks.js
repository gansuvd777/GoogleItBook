import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import SavedBook from "../components/SavedBook"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
            <hr/>
            <hr/>
                <Container>
                    <SavedBook savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
                <footer>@copy 2019 created by Pearl Oyunbaatar || 
                    <a href="https://github.com/gansuvd777" target="_blank" rel="noopener noreferrer"><i className="fas fa-chess-queen"></i></a>
                </footer>
            </Container>
        )
    }
}



export default SaveBook 