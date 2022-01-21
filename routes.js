const express = require("express");
const {allFeeds,createFeed, redirectPage,deleteFeed,readFeed,updateFeed,editForm}= require("./controllers/controllers.js")

const router = express.Router();

router.get("/", redirectPage )

router.get("/feed",allFeeds)
router.post("/feed",createFeed)

router.get("/feed/:id",readFeed)

router.get('/edit/feed/:id', editForm)
router.post('/edit/feed/:id', updateFeed)
router.get('/delete/feed/:id', deleteFeed)

module.exports = router;