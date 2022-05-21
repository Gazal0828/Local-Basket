import React from "react";

const ListReviews = ({ reviews }) => {
  return (
    <div class="reviews w-75">
      <h3>Other's Reviews:</h3>
      <hr />
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} class="review-card my-3">
            <p className="text-success">Rating: {review.rating}</p>

            <p class="review_user">by {review.name}</p>
            <p class="review_comment">{review.comment}</p>

            <hr />
          </div>
        ))}
    </div>
  );
};

export default ListReviews;
