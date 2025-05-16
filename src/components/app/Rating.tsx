import React, { JSX } from 'react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    const renderStars = (rating: number) => {
        const stars: JSX.Element[] = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <img 
                        key={i}
                        src="/icons/star-full.svg"
                        alt="full star"
                        className="w-5 h-5"
                    />
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <img 
                        key={i}
                        src="/icons/star-full.svg"
                        alt="half star"
                        className="w-5 h-5"
                    />
                );
            } else {
                stars.push(
                    <img 
                        key={i}
                        src="/icons/star-empty.svg"
                        alt="empty star"
                        className="w-5 h-5"
                    />
                );
            }
        }
        return stars;
    };

    return (
        <div className="flex items-center">
            {renderStars(rating)}
        </div>
    );
};

export default Rating;