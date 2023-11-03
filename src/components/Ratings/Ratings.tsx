import React from 'react';

interface RatingsProps {
    rating: number;
}

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.min(Math.max(0, rating), maxStars); // Ensure rating is between 0 and 5

    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        const starClassName = i <= filledStars ? 'star filled' : 'star';
        const starSymbol = i <= filledStars ? '★' : '☆';
        stars.push(<span key={i} className={starClassName}>{starSymbol}</span>);
    }

    return <div>{stars}</div>;
};

export default Ratings;
