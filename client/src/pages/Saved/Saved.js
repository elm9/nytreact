import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        API.getArticle(this.props.match.params.id)
            .then(res => this.setState({ article: res.data }))
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                    <h1><strong>SAVED ARTICLES</strong></h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <ListItem key={article._id}>
                                    <Link to={"/articles/" + article._id}>
                                        <h3><strong>{article.title}</strong></h3>
                                    </Link>
                                        <h4>{article.summary}</h4>
                                        <h5>{article.date}</h5>
                                        <button id="delete" onClick={() => this.deleteArticle(article._id)}
                                        >DELETE ARTICLE</button>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                    </Col>
                </Row>
            </Container>
        )
    }
}