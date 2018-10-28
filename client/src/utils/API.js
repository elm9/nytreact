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
    // save article to database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};