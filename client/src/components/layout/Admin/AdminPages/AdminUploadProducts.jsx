import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
const AdminUploadProducts = () => {
  const [image, setImage] = useState("../../img/profile_img.jpeg");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className=" upload_products_details_area">
            <div className="upload_products_details_area1">
              <div className="toggle_body_area1_cont1_input products_cat_upload">
                <div className="add_cat_input_title">
                  <span className="input_brand">Category code</span>
                  <TextField
                    className="width_incr"
                    id="outlined-basic"
                    label="Code"
                    variant="outlined"
                    name="firstname"
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Category Name</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
                <span className="submit_cat_btn_div">
                  <button className="submit_cat_btn">Submit</button>
                </span>
              </div>
              {/* ==[]]]]]]]]]]]] */}
              <div className="prod_upload_img width_incra">
                <div className="profile_modal_area1_img">
                  <img
                    // src={value}
                    src={image}
                    // src="/img/profile_img.jpeg"
                    alt=""
                    className="user_upload_img_box"
                    style={{ width: "500px", height: "250px" }}
                  />
                  <label
                    for="file-upload"
                    className="custom-file-upload33b"
                    onChange={onImageChange}
                  >
                    <AddCircleIcon
                      className="add_icon33"
                      onChange={onImageChange}
                    />{" "}
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={onImageChange}
                    className="filetype"
                  />
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="filetype"
                  />
                </div>{" "}
                <div className="profile_modal_area2">
                  <button className="add_photo">
                    <AddAPhotoIcon className="photo_icon" /> Upload Image
                  </button>
                  <button className="cancel_photo">
                    <DoDisturbIcon className="cancel_icon" /> Cancel
                  </button>
                </div>
              </div>

              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
            </div>
            <div className="upload_products_details_area2">
              {/* === */}
              <div className="toggle_body_area1_cont1_input products_des_upload">
                {" "}
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Id</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Product Id"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product category code</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Product Code"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
              </div>
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              <div className="toggle_body_area1_cont1_input products_des_upload">
                {" "}
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Name</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
              </div>
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              {/* [[[[[[[[[[[[]]]]]]]]]]]] */}
              <div className="toggle_body_area1_cont1_input products_des_upload">
                {" "}
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Count</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Product count"
                    type="number"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Duration</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Duration"
                    variant="outlined"
                    name="lastname"
                    type="number"
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Brand</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Brand"
                    variant="outlined"
                    name="lastname"
                  />
                </div>
                <div className="add_cat_input_title">
                  <span className="input_brand">Product Amount</span>

                  <TextField
                    className=" width_incr"
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    name="lastname"
                    type="number"
                  />
                </div>
              </div>
              <div className="add_cat_input_title">
                <span className="input_brand">Product Specifications</span>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="prod_desc_text_area"
                ></textarea>
              </div>
              <div className="add_cat_input_title">
                <span className="input_brand">Product Details</span>

                <textarea
                  name=""
                  id=""
                  cols="5"
                  rows="5"
                  className="prod_desc_text_area"
                ></textarea>
              </div>
              <div className="add_cat_input_title">
                <span className="submit_cat_btn_div">
                  <button className="submit_cat_btn">Submit</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminUploadProducts;
