import React from "react";

type Review = {
  id: string;
  rating: number;
  customer: string;
  comment: string;
  email: string;
  date: string;
};

type ReviewsTableProps = {
  reviews: Review[];
};

const ReviewsTable: React.FC<ReviewsTableProps> = ({ reviews }) => {
  return (
    <div className="rounded-lg bg-white shadow p-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Reviews</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="pb-2">Ratings</th>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Ratings</th>
            <th className="pb-2">Email</th>
            <th className="pb-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td className="py-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 font-medium text-gray-900">{review.customer}</td>
              <td className="py-3 text-gray-700">{review.comment}</td>
              <td className="py-3 text-blue-600 underline">{review.email}</td>
              <td className="py-3 text-gray-500">{review.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;
