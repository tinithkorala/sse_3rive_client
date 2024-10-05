import PropTypes from "prop-types";
import MuiPagination from "@mui/material/Pagination";

const Pagination = ({ currentPage = 1, setCurrentPage, totalPage = 0 }) => {
  return (
    <MuiPagination
      count={totalPage}
      page={currentPage}
      onChange={(event, page) => setCurrentPage(page)}
      color="primary"
      size="large"
      shape="rounded"
      showFirstButton
      showLastButton
    />
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
};

export default Pagination;
