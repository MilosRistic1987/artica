"use client";
import { PaginationControlsProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { PER_PAGE } from "@/helpers/global.helper";
import React from "react";

const PaginationControls: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalItems,
  locale,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? PER_PAGE;
  const totalPages = Math.ceil(totalItems / Number(per_page));

  console.log("per_page", per_page);
  return (
    <div className="paginationWrapp">
      <button
        className=""
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/${locale}?page=${Number(page) - 1}&per_page=${per_page}#project`
          );
        }}
      >
        <ChevronLeftIcon /> prev
      </button>

      <div className="pagNumPrev">
        {page} / {totalPages}
      </div>

      <button
        className=""
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/${locale}?page=${Number(page) + 1}&per_page=${per_page}#project`
          );
        }}
      >
        next <ChevronRightIcon />
      </button>
    </div>
  );
};

export default PaginationControls;
