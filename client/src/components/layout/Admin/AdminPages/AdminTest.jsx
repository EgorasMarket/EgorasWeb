import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  API_URL2 as api_url2
} from "../../../../actions/types.js";
const AdminTest = () => {
  const getproductId = localStorage.getItem("productId");
  const config = {
    headers: {
        'Content-Type': 'application/json'
    },
  };
  const [product_image, setproduct_image] = useState("../../img/profile_img.jpeg");
  const [getrandom, setRandom] = useState('');
  const [productId, setProductId] = useState('');
  const [product_category_code1, setProduct_category_code1] = useState('');
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const [allCategories, setCategories] = useState([]);
  const [categoryInsert, setCategoryInsert] = React.useState({
    product_category_code: '',
    product_category_desc: "",
  });


  const [productUpdateInfo, setProductUpdateInfo] = React.useState({
    // product_category_code1: '',
    product_name: "",
    unitCount: null,
    product_duration: null,
    product_brand: "",
    product_specifications: "",
    amount: null,
    product_details: ""
  });

  const { product_category_code, product_category_desc } = categoryInsert;
  const { product_name, unitCount, product_duration, product_brand, product_specifications, amount, product_details } = productUpdateInfo;

  const generateString = (length) => {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  useEffect(() => {
    setRandom(generateString(10))
  }, [])

  useEffect(() => {
    // setIsLoading(true);

    axios.get(
        api_url2 + "/v1/product/retrieve/category",
        null,
        config
    ).then((data) => {
        // setIsLoading(false);
        // setFormData({
        //     id: data.data.data.id
        // })

        console.log(data.data.data, 'Weeee');
        setCategories(data.data.data)

    }).catch((err) => {
        console.log(err); // "oh, no!"
    })

}, []);

  const onChange = (e) => {
    setCategoryInsert({ ...categoryInsert, [e.target.name]: e.target.value });

    switch(e.target.name) {
      case 'product_category_desc':
        // console.log('fff');
        // setRandom(generateString(10))
        setCategoryInsert({
          product_category_code: getrandom,
          product_category_desc: e.target.value 
        });
        break;
      default:
        // code block
    }

  };

  const onChange1 = (e) => {
    setProductUpdateInfo({ ...productUpdateInfo, [e.target.name]: e.target.value });

  };

  const addCategory = async () => {
    console.log(product_category_code, product_category_desc);

    if (product_category_desc === '') {
      console.log('Please supply product description.');
    } else {
      const body = JSON.stringify({ product_category_code, product_category_desc });
      console.log(body);
      try {
          const res = await axios.post(api_url2 + '/v1/product/add/category', body, config);
          console.log(res, 'undefined');

          if (res.data.statusCode === 200) {
              // setExDateUpload(true)
              // window.location.reload();

          } else {
              // console.log('Not Delete');
              // setAlert('Something went wrong, please try again later', 'danger');
          }

      } catch (err) {
          console.log(err.response);
          // setAlert('Check your internet connection', 'danger');
      }
    }

  }

  // console.log(generateString(10));
  // console.log('oookkkk');

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      
      

      const types = ['jpg', 'png', 'jpeg']

      if (event.currentTarget.id === "product_image") {
        
          if (event.currentTarget.files.length === 0) {
              // setUserInfo({ ...userInfo, applicantImg: "" });
              // document.getElementById("output1").src = "";
          } else {
              let productFile = document.getElementById("product_image").files[0];

              let fileExtension = productFile.name.split(".").pop();
              console.log(productFile);

              if (!types.includes(fileExtension)) {

              } else {
                console.log(productFile.size);
                  if (productFile.size > 1000000) {

                      console.log('file too large.');

                  } else {
                    setproduct_image(URL.createObjectURL(event.target.files[0]));
                  }
              }

          }
      }
    }

    
  };


  const AddProductPhoto = async e => {
    e.preventDefault();


    const formData = new FormData()

    if (product_image === '') {
        console.log('empty passport');

        // setAlert('Please provide a passport photo', 'danger');

    } else {

        const element = document.getElementById('product_image')
        const file = element.files[0]
        formData.append('product_image', file, file.name)

        console.log(formData, 'hhhh');

        try {
            const res = await axios.post(api_url2 + '/v1/product/add/product/image', formData);
            console.log(res.data, 'undefined');

            if (res.data.statusCode === 200) {
              console.log(res.data.data[0].productId, 'undefined');
              setProductId(res.data.data[0].productId);
              localStorage.setItem(res.data.data[0].productId, "productId");
            } else {
                // setAlert('Something went wrong, please try again later', 'danger');
            }

        } catch (err) {
            console.log(err.response);
            // setAlert('Check your internet connection', 'danger');
        }

    }

  }

  const handleCenter = (event) => {
    setProduct_category_code1(event.target.value || '');
    // // console.log('handleMOI');

};

  const UpdateProductInfo = async e => {
    if (product_name === '' || 
    product_category_code1 === '' || 
    unitCount === null || 
    product_duration === null || 
    product_brand === '' || 
    product_specifications === '' || 
    amount === null || 
    product_details === '') {
      console.log('Please supply all information.');
    } else {
      console.log(product_name, product_category_code1, unitCount, product_duration, product_brand, product_specifications, amount, product_details); 
      
    }
  }

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          jkjkljkjkkjh
        </div>
      </section>
    </div>
  );
};

export default AdminTest;
