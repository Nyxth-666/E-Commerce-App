export default function StarRating({ stars, count }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            color:
              star <= Math.round(stars)
                ? "var(--color-star)"
                : "var(--color-secondary-button)",
            fontSize: "14px",
          }}
        >
          ★
        </span>
      ))}
      {count && (
        <span className="text-xs ml-1 text-(--color-secondary-text)">
          ({count})
        </span>
      )}
    </div>
  );
}
