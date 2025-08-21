import React from "react";
import { Star, StarHalf, StarOff } from "lucide-react";

export default function StarRating({
  rating,
  max = 5,
  size = 20,
  className = "",
}) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (rating >= i) {
      stars.push(
        <Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <StarHalf
          key={i}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      );
    } else {
      stars.push(<StarOff key={i} size={size} className="text-gray-300" />);
    }
  }

  return <div className={`flex gap-1 ${className}`}>{stars}</div>;
}
