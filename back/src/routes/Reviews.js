const { Router } = require('express');
const reviewRouter = Router();

const {
  getAllReviews,
  getReviewUser,
  getReviewProd,
  validateReview,
  createReview,
  modifyReview,
  deleteReview,
} = require('../controllers/Reviews/ReviewsControllers');

reviewRouter.get('/', getAllReviews);
reviewRouter.get('/products/:id', getReviewProd);
reviewRouter.get('/users/:id', getReviewUser);
//reviewRouter.post('/', validateReview(createReview)); //??????
reviewRouter.put('/:id', modifyReview);
reviewRouter.delete('/:id', deleteReview);

reviewRouter.get('/', async (req, res) => {
  try {
    let reviews = await getAllReviews();
    if (reviews) {
      return reviews[0] === undefined
        ? res.status(200).json({ message: 'Cannot get reviews' })
        : reviews
        ? res.json(reviews)
        : res.status(200).json({ message: 'Cannot get reviews' });
    }
    return res.status(200).json({ message: 'Cannot get reviews' });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});
reviewRouter.get('/products/:id', async (req, res) => {
  const { ID } = req.params;
  try {
    if (isNaN(ID)) {
      return res.status(400).json({ message: 'ID must be a number' });
    }
    let reviewProd = await getReviewProd(ID);
    reviewProd
      ? res.json(reviewBook)
      : res.status(404).json({ message: 'Review not found with id ' + ID });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});
reviewRouter.get('/users/:id', async (req, res) => {
  const { ID } = req.params;
  try {
    if (isNaN(ID)) {
      return res.status(400).json({ message: 'ID must be a number' });
    }
    let reviewUser = await getReviewUser(ID);
    reviewUser
      ? res.json(reviewUser)
      : res.status(404).json({ message: 'Review not found with id ' + ID });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});
reviewRouter.post('/', async (req, res) => {
  try {
    const validate = await validateReview(req.body);
    if (!validate) {
      const newReview = await createReview(req.body);
      newReview
        ? res.status(201).json({ message: 'Review created successfully' })
        : res.status(400).json({ message: `Error creating review` });
    } else {
      res.status(400).json(validate);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});
reviewRouter.put('/:id', async (req, res) => {
  const { ID } = req.params;
  const { report, user } = req.query;
  try {
    if (ID) {
      if (report) {
        if (isNaN(user))
          return res.status(400).json({ message: `User id must be a number` });
        const modified = await modifyReview(req.body, ID, report, user);
        return modified
          ? res.status(200).json({ message: 'Review modified successfully' })
          : res.status(400).json({ message: `Error modifying review` });
      }
      const validate = await validateReview(req.body);
      if (!validate) {
        const modified = await modifyReview(req.body, ID, report);
        modified
          ? res.status(200).json({ message: 'Review modified successfully' })
          : res.status(400).json({ message: `Error modifying review` });
      } else {
        res.status(400).json(validate);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
});
reviewRouter.delete('/:id', async (req, res) => {
  const { ID } = req.params;
  try {
    if (isNaN(ID)) {
      return res.status(400).json({ message: 'ID must be a number' });
    }
    const delReview = await deleteReview(ID);
    delReview
      ? res.status(201).json({ message: 'Review deleted successfully' })
      : res
          .status(400)
          .json({ message: `Error deleting review with id ${ID}` });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
});

module.exports = reviewRouter;