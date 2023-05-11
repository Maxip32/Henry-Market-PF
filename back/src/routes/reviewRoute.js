const reviewRouter = require("express").Router();

const {allReviewsByProduct} =  require('../controllers/Review/allReviewsByProduct')
const {createReview} =  require('../controllers/Review/CreateReview')
const {deleteReview} =  require('../controllers/Review/DeleteReview')
const {editeReview} =  require('../controllers/Review/EditeReview')


reviewRouter.get('/:productId', allReviewsByProduct);
reviewRouter.post('/', createReview);
reviewRouter.delete('/', deleteReview);
reviewRouter.put('/', editeReview);

module.exports = reviewRouter;
