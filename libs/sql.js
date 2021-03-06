/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/13
    Time: 18:15
*/
let BlogSQL = {
    modifyOwner: "update owner set nickname=?, name=?, title=?, birth=?, sex=?, email=?, job=?, address=?, motto=? where id=123",
    delLogin: "delete from user where userId =?",
    delArticle: "delete from article where articleId=?",
    updateArticle: "select articleContent, articleTitle, articleType from article where articleId=?",
    addVisit: "update article set articleVisit = articleVisit + 1 where articleId = ?",
    updateArticleInfo: "update article set articleContent = ? , articleTitle = ?, articleType = ? where articleId = ?",
    replyBlogWords: "update blogWords set wordsReply = ? where wordsBlogId = ?",
    // getBlogWords: "select * from blogWords",
    deleteBlogWords: "delete from blogwords where wordsBlogId = ?",
    delBlogReply: "update blogwords set wordsReply = '' where wordsBlogId = ?",
    getOneArticle: "select * from articleId = ?",
    addArticle: "insert into article (articleId, articleTitle, articleType, articleContent) values(NULL, ?, ?, ?)",
    oneArticleText: "select * from article where articleId = ?",
    getAllBlogWords: "select wordsBlogId, wordsPersonName, wordsPersonEmail, wordsTime, wordsContent, wordsReply from wordsPerson, blogWords where wordsPerson.wordsPersonId = blogWords.wordsPersonId;",
    getArticleWords: "select  wordsPersonName, wordsPersonEmail, articleId, wordsArticleId, wordsContent, wordsTime, wordsReply from wordsperson, articlewords where  wordsperson.wordsPersonId = articlewords.wordsPersonId and articlewords.articleId = ?;",
    articleDelWords: "delete from articlewords where wordsArticleId = ?",
    articleReplyWords: "update articlewords set wordsReply = ? where wordsArticleId = ?;",
    articleDelReply: "update articlewords set wordsReply = '' where wordsArticleId = ?;",
    addPerson: "insert into wordsPerson values(NULL, ?, ?)",
    selectPerson: "select wordsPersonId from wordsPerson where wordsPersonName = ?;",
    addArticleWords: "insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values(NULL, ?, ?, ?);",
    getBlogWords: "select wordsBlogId, wordsPersonName, wordsTime, wordsContent, wordsReply from wordsPerson, blogWords where wordsPerson.wordsPersonId = blogWords.wordsPersonId;",
    allLifeArticle: "select * from article where articleType < 10",
    allTechoArticle: "select * from article where articleType >= 10 and articleType<30",
    addBlogWords: "insert into blogWords (wordsBlogId, wordsPersonId, wordsContent) values(NULL, ?, ?);",
    getGoodArticle: "select * from article where articleType = 100",
    allArticle: "select * from article",
    addWords: "update article set articleWordsAmount = articleWordsAmount+1 where articleId = ?",
    articleWordsUpdate: "update article set articleWordsAmount = (select count(*) from articlewords where  articleId = ?) where articleid = ?",
    recentArticle: "select articleId, articleTitle from article where  TO_DAYS(NOW()) - TO_DAYS(articleTime)<7;",
};

module.exports = BlogSQL;