const reviewRouter = require("express").Router();

const {allReviewsbyProduct} =  require('../controllers/Review/AllReviewsbyProduct')
const {createReview} =  require('../controllers/Review/CreateReview')
const {deleteReview} =  require('../controllers/Review/DeleteReview')
const {editeReview} =  require('../controllers/Review/EditeReview')


reviewRouter.get('/:productId', allReviewsbyProduct);
reviewRouter.post('/', createReview);
reviewRouter.delete('/', deleteReview);
reviewRouter.put('/', editeReview);

module.exports = reviewRouter;