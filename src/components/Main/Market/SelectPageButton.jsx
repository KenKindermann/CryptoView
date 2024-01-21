import { useContext } from "react";
import { CurrentDataContext } from "../../../provider/CurrentDataContext";

const SelectPageButton = ({ label, value }) => {
  const { currentPage, setCurrentPage } = useContext(CurrentDataContext);

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
