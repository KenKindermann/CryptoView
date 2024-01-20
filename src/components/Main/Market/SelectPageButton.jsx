import { useContext, useEffect } from "react";
import { FetchDataContext } from "../../../provider/fetchDataContext";

const SelectPageButton = ({ label, value }) => {
  const { currentPage, setCurrentPage } = useContext(FetchDataContext);

  return (
    <div
      className={`${currentPage === value ? `select-page-btn active` : `select-page-btn`}`}
      onClick={() => setCurrentPage(value)}
    >
      {label}
    </div>
  );
};

export default SelectPageButton;
