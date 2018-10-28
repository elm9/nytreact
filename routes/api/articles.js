const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");


router.route("/")
    // /api/articles (get) - your components will use this to query MongoDB for all saved articles
    .get(articlesController.findAll)
    // /api/articles (post) - your components will use this to save an article to the database
    .post(articlesController.update)
    // /api/articles (delete) - your components will use this to delete a saved article in the database
    .delete(articlesController.remove);

// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html.
router.route("/:id")
    .get(articlesController.findById);

module.exports = router;