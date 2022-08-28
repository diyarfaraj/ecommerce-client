import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, productsPerPage, totalCount, totalPages } = metaData;
  console.log(currentPage, productsPerPage, totalCount, totalPages);
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        dispalying {(currentPage - 1) * (productsPerPage + 1)}-
        {currentPage * productsPerPage > totalCount
          ? totalCount
          : currentPage * productsPerPage}{" "}
        of {totalCount} item
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
      />
    </Box>
  );
}
