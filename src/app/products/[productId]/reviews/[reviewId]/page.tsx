"use client";
import { notFound } from "next/navigation";
import React, { use } from "react";

const ReviewDetails = ({ params }: { params: { reviewId: string } }) => {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      ReviewDetails for {params.reviewId}{" "}
      <button
        onClick={() => {
          throw new Error("Custom Error");
        }}
      >
        throw Error
      </button>{" "}
    </div>
  );
};

export default ReviewDetails;
