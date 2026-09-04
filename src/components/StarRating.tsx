import '../styles/blocks/StarRating.css';

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <span className="star-rating" aria-label={`${rating} / 5`}>
      {'★'.repeat(full)}
      {hasHalf && '½'}
    </span>
  );
}

export default StarRating;
