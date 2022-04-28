import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { numberWithCommas } from "../../../../static";
import "./allProductDisplay.css";
import { connect } from "react-redux";

// import "./styles.css";
import { API_URL2 as api_url2 } from "../../../../actions/types";

function Items({ currentItems }) {
  return (
    <div className="product_display_cards_body">
      {currentItems &&
        currentItems.map((item) => (
          <div className="product_display_cards_cont">
            <a href="" className="product_display_card">
              <li className="carous_list">
                <div
                  className="storeTiles_storeTileContainer__HoGEa"
                  style={{
                    background: "#000",
                  }}
                >
                  <div className="storeTiles_storeTileOffersContainer__3v8lC">
                    <button className="items_remaining_btn">
                      <p className="no_margg"> Buy now</p>
                    </button>

                    <button className="items_remaining_btn2">
                      {" "}
                      {item.percentage}% locked
                    </button>
                  </div>
                  <div className="storeTiles_storeTileBottomContainer__2sWHh">
                    <div className="asset_name">{item.product_name}</div>
                    <div className="asset_prices_div">
                      <div className="asset_title">
                        ₦{numberWithCommas(item.amount)}{" "}
                        <span className="slashed_price">
                          ₦{numberWithCommas(item.amount * 2)}
                        </span>
                      </div>
                      <div className="amount_per_day_div">
                        ₦{numberWithCommas(item.paymentPerday.toFixed())}
                        <span className="per_day_symbol">/ perday</span>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </li>
            </a>
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    console.log(items, "hhhhhhhhh");
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const AllProductsDisplayPage = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [items, setItems] = useState([]);
  const [searchVal, setSearchVal] = useState("n");

  useEffect(() => {
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/search/" + searchVal,
        null,
        config
      )
      .then((data) => {
        setItems(data.data.data);
        console.log(data.data.data, "samuel_Chuks");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <section className="market_page_section">
        <div className="custom_container">
          <div className="pagination_body">
            <PaginatedItems itemsPerPage={20} items={items} />
          </div>
        </div>{" "}
      </section>
    </div>
  );
};
AllProductsDisplayPage.propsTypes = {};
const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps1)(AllProductsDisplayPage);
