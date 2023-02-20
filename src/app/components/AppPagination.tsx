import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { number } from "yup";
import { MetaData } from "../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, productsPerPage, totalCount, totalPages } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }
  console.log(currentPage, productsPerPage, totalCount, totalPages);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        dispalying {(currentPage - 1) * productsPerPage + 1}-
        {currentPage * productsPerPage > totalCount
          ? totalCount
          : currentPage * productsPerPage}{" "}
        of {totalCount} item
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={pageNumber}
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}
