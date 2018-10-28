import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { or } from "ip";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        summary: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", summary: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    saveArticle = id => {
        API.saveArticle(id)
            .then(res => this.saveArticle())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title || this.state.date) {
            API.searchArticles({
                title: this.state.title,
                date: this.state.date
            })
            .then(res => this.loadArticles)
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-8">
                <h1>NEW YORK TIMES ARTICLES</h1> <br></br>
                    {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <ListItem key={article._id}>
                                    <Link to={"/articles/" + article._id}>
                                        <h3><strong>{article.title}</strong></h3>
                                    </Link>
                                        <h4>{article.summary}</h4>
                                        <h5>{article.date}</h5>
                                        <button id="save" onClick={() => this.saveArticle(article._id)}
                                        >SAVE ARTICLE</button>
                                        <button id="delete" onClick={() => this.deleteArticle(article._id)}
                                        >DELETE ARTICLE</button>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                </Col>
                <Col size="md-4">
                <div id="search box">
                    <h1>SEARCH ARTICLES</h1> <br></br>
                    <form>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            value={this.state.date}
                            onChange={this.handleInputChange}
                            name="date"
                            placeholder="Date of article"
                        />
                        <FormBtn
                            disabled={!(this.state.title || this.state.date)}
                            onClick={this.handleFormSubmit}
                        >
                        SEARCH
                        </FormBtn>
                    </form>
                </div>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default Articles;