import React from "react";
import { formatDistanceToNow, parseISO, differenceInDays, format } from "date-fns";
import Rating from "../app/Rating";

type Review = {
    rating: number;
    reviewerName: string;
    reviewerEmail: string;
    comment: string;
    date: string;
};

type ReviewsTableProps = {
    reviews: Review[];
};

const ReviewsTable: React.FC<ReviewsTableProps> = ({ reviews }) => {
    const formatDate = (dateString: string) => {
        try {
            const date = parseISO(dateString);
            const daysDifference = differenceInDays(new Date(), date);

            if (daysDifference <= 3) {
                return formatDistanceToNow(date, { addSuffix: true });
            }
            
            return format(date, 'd MMMM yyyy');
        } catch (error) {
            return dateString;
        }
    };

    return (
        <div className="bg-white section-spacing">
            <h2 className="text-24 font-manropeBold mb-10">Reviews</h2>

            <table className="min-w-full table-auto border-collapse text-14">
                <thead>
                    <tr className="text-left text-black">
                        <th className="pb-6 pl-6">Ratings</th>
                        <th className="pb-6">Customer</th>
                        <th className="pb-6 text-gray">Ratings</th>
                        <th className="pb-6 text-gray">Email</th>
                        <th className="pb-6 pr-6 text-gray text-right">Date</th>
                    </tr>
                </thead>
                
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.reviewerName} className="border-t border-black/20">
                            <td className="py-6 pl-6 w-[15%]">
                                <Rating
                                    rating={review.rating} />
                            </td>
                            <td className="py-6 w-auto">{review.reviewerName}</td>
                            <td className="py-6 w-[27%] text-gray">{review.comment}</td>
                            <td className="py-6 w-[27%] text-gray">{review.reviewerEmail}</td>
                            <td className="py-6 w-[10%] pr-6 text-gray text-right">{formatDate(review.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewsTable;
