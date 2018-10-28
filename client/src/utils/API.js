import axios from "axios";

export default {
    // get all articles
    getArticles: function() {
        return axios.get("/api/articles");
    },
    // get article by ID
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    // delete article by ID
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    // search articles in database
    searchArticles: function(articleData) {
        return axios.get("/api/articles", articleData);
    },
    // save articles to saved
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};