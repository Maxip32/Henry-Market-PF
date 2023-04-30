const { User, ProductsName, Reviews} = require('../../db');

let errors = [];
let reviewModel = {
  calculateRating: async function (ID) {
    const prod = await ProductsName.findByPk(ID, {
      include: Reviews,
    });
    let sum = 0;
    if (prod.toJSON().reviews.length > 0) {
      for (let i = 0; i < prod.toJSON().reviews.length; i++) {
        sum = sum + prod.toJSON().reviews[i].rating;
      }
      await prod.update({
        rating: (sum / prod.toJSON().reviews.length).toFixed(1),
      });
      return prod;
    } else {
      await prod.update({
        rating: 0,
      });
      return prod;
    }
  },
  validateReview: async function (review) {
    errors = [];
    if (review.title) {
      if (review.title.length > 20) {
        errors.push('Title cannot be more than 20 characters long');
      }
    } else {
      errors.push('Title cannot be empty');
    }
    if (!review.review) {
      errors.push('Review cannot be empty');
    }
    if (review.rating) {
      if (review.rating > 5) {
        errors.push('Rating must be between 0 and 5');
      }
    } else {
      errors.push('Rating cannot be empty');
    }
    if (errors.length) {
      return errors;
    }
    return undefined;
  },
  getAllReviews: async function () {
    const reviews = await Reviews.findAll({
      include: [
        ProductsName,
        { model: User, attributes: { exclude: ['password', 'resetCode'] } },
      ],
      attributes: { exclude: ['prodID', 'userID'] }, //! Chequear atributos
    });
    return reviews;
  },
  getReviewUser: async function (ID) {
    const user = await User.findOne({
      where: {
        ID,
      },
      include: Reviews,
    });
    return user;
  },
  getReviewProd: async function (ID) {
    const prod = await ProductsName.findOne({
      where: {
        ID,
      },
      include: Reviews,
    });
    return prod;
  },
  createReview: async function (newReview) {
    const createdReview = await Reviews.create({
      title: newReview.title,
      review: newReview.review,
      rating: newReview.rating,
      prodID: newReview.prodID,
      userID: newReview.userID,
    });
    await reviewModel.calculateRating(newReview.prodID);
    return createdReview;
  },

  modifyReview: async function (changes, ID, report, user) {
    const reviewModify = await Reviews.findByPk(ID, {
      include: ProductsName,
    });

    if (reviewModify) {
      if (report) {
        reviewModify.update({
          reports: [...reviewModify.toJSON().reports, parseInt(user)],
        });
        return true;
      } else {
        reviewModify.update({
          ...changes,
        });
        await reviewModel.calculateRating(reviewModify.toJSON().book.ID);
        return true;
      }
    }
    return undefined;
  },
  deleteReview: async function (ID) {
    const deletedReview = await Reviews.findByPk(ID, {
      include: ProductsName,
    });
    if (deletedReview) {
      await deletedReview.destroy();
      await reviewModel.calculateRating(deletedReview.toJSON().book.ID);
      return true;
    }
    return undefined;
  },
};

module.exports = reviewModel;