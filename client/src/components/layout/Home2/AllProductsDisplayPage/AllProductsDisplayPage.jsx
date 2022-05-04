import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import ReactPaginate from "react-paginate";
import { numberWithCommas } from "../../../../static";
import "./allProductDisplay.css";
import { connect } from "react-redux";

// import "./styles.css";
import { API_URL2 as api_url2 } from "../../../../actions/types";

function Items({ currentItems, searchVal, totalItems }) {
  return (
    <div className="products_display">
      <div className="pagination_header_body">
        <div className="pagination_header_body_cont1">
          Search Results - {searchVal}
        </div>
        <div className="pagination_header_body_cont2"></div>
      </div>
      <div className="pagination_header_body2">
        {totalItems} product(s) found
      </div>
      <div className="product_display_cards_body">
        {currentItems &&
          currentItems.map((asset, index5) => (
            <div className="product_display_cards_cont">
              <a
                href={`/products/details/${
                  asset.id
                }/${asset.product_name.replace(/\s+/g, "-")}`}
                key={index5.toString()}
                className="product_display_card"
              >
                <li className="carous_list no_marg inventory_cards">
                  <div
                    className="storeTiles_storeTileContainer__HoGEa"
                    style={{
                      backgroundImage: `url(${asset.product_image})`,
                      //           height: "200px",
                      //           width: "100%",
                      //           backgroundRepeat: "no-repeat",
                      //           backgroundSize: "cover",
                      //           borderRadius: "8px",
                      //           borderBottomLeftRadius: "0px",
                      //           borderBottomRightRadius: "0px",
                      //   backgroundPositionY: "center",
                    }}
                  >
                    {asset.payment_type == "OUTRIGHT" ? (
                      <div className="out_right_install_tag">
                        <button
                          className="out_right_install_tag_btn"
                          style={{
                            background: "#3ebc6e",
                            borderColor: "#3ebc6e",
                          }}
                        >
                          Outright
                        </button>
                      </div>
                    ) : (
                      <div className="out_right_install_tag">
                        <button className="out_right_install_tag_btn">
                          Savings
                        </button>
                      </div>
                    )}
                    <div className="storeTiles_storeTileBottomContainer__2sWHh">
                      <div className="asset_name">{asset.product_name}</div>
                      <div class="asset_prices_div">
                        <div className="asset_title">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <span className="init_amount">
                              ₦{numberWithCommas(asset.amount)}{" "}
                            </span>
                          ) : (
                            <span className="init_amount">
                              ₦{numberWithCommas(asset.roundedAmount)}{" "}
                            </span>
                          )}
                          {asset.payment_type == "OUTRIGHT" ? (
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          ) : (
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.roundedAmount * 2)}
                            </span>
                          )}
                        </div>
                        {asset.payment_type == "OUTRIGHT" ? null : (
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* </a> */}
                  </div>
                </li>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

function PaginatedItems({ itemsPerPage, items, searchVal, totalItems }) {
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        searchVal={searchVal}
        totalItems={totalItems}
      />
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Previous"
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

const AllProductsDisplayPage = ({ match }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(match.params.tag);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  // const [searchVal, setSearchVal] = useState(match.params.tag);
  const [searchVal, setSearchVal] = useState("n");
  const assetBrand = [
    {
      id: "apple",
      name: "Apple",
    },
    {
      id: "samsung",
      name: "Samsung",
    },
    {
      id: "oppo",
      name: "Oppo",
    },
    {
      id: "huawei",
      name: "HUAWEI",
    },
    {
      id: "tecno",
      name: "TECNO",
    },
    {
      id: "infinix",
      name: "Infinix",
    },
    {
      id: "nokia",
      name: "Nokia",
    },
    {
      id: "gionee",
      name: "Gionee",
    },
    {
      id: "itel",
      name: "Itel",
    },
    {
      id: "lenovo",
      name: "Lenovo",
    },
    {
      id: "vivo",
      name: "Vivo",
    },
    {
      id: "xiaomi",
      name: "Xiaomi",
    },
  ];
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
        setTotalItems(data.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const results = assetBrand.filter((name) =>
      name.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div style={{ background: "#f3f3f3" }}>
      <section className="market_page_section">
        <div className="custom_container">
          <div className="pagination_product_card_body">
            <div className="filter_products_body">
              <div className="filter_products_body_div">
                <div className="cat_select_div2_head">
                  Brand{" "}
                  <div className="brand_search_area">
                    <input
                      type="search"
                      name="search"
                      id="searchBrand"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="search_brand"
                    />
                    <SearchIcon className="search_icon" />
                  </div>
                </div>
                <div className="cat_select_div2_body">
                  {searchResults.map((brand, index10) => (
                    <div
                      className="select_brand_check_box"
                      key={index10.toString()}
                    >
                      <label class="label_cont">
                        {brand.name}
                        <input
                          type="checkbox"
                          name="apple"
                          //   id="apple"
                          className="brand_check_input"
                          key={brand.id}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pagination_body">
              <PaginatedItems
                itemsPerPage={40}
                items={items}
                searchVal={searchVal}
                totalItems={totalItems}
              />
            </div>
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
