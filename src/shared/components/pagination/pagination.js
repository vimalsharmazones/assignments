import React, { useState, useMemo } from "react";
import { util } from "../../utils/util";
import { key } from "../../key";

function Pagination(props) {
  const [activePageNo, setActivePageNo] = useState(1);

  // Memoized value
  const pageList = useMemo(() => util.range(props.noOfPages), [
    props.noOfPages,
  ]);

  // Event Delegation
  const onClickPageList = (e) => {
    const newPageNo = parseInt(e.target.getAttribute("data-index"));
    if (newPageNo !== activePageNo) {
      props.onPageChange(newPageNo);
      setActivePageNo(newPageNo);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination" onClick={onClickPageList}>
        {pageList.map((pageNo) => (
          <li
            className={
              activePageNo === pageNo ? "page-item active" : "page-item"
            }
            key={key()}
          >
            <a className="page-link" data-index={pageNo}>
              {pageNo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Memoization of function component
export const PaginationMz = React.memo(Pagination);
