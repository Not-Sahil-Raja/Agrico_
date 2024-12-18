import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { XSquare, CheckSquare2, ArrowLeft, X } from "lucide-react";
import axios, { all } from "axios";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SellItem = () => {
  const [additemCheck, setAdditemCheck] = useState(false);
  const [addedPop, setAddedPop] = useState(false);
  const [addedItemList, setAddedItemList] = useState([]);
  const [refresh, setRefresh] = useState(0);

  //item details
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [catr, setCatr] = useState("Fruits");
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("Kg");
  const [price, setPrice] = useState("");
  const [cover, setCoverImg] = useState(null);

  // user Details
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");

  const userInfos = useSelector((state) => state.userInfo.userInfo);
  const [addItemdet, setAddItemdet] = useState(false);
  const [allAddedItems, setAllAddedItems] = useState([]);
  const [soldItemList, setSoldItemList] = useState([]);

  //items cost
  const [listedCost, setListedCost] = useState(0);

  //fetching all items
  useEffect(() => {
    axios
      .get(
        // `http://localhost:3000/api/dashboard/listedItem/${userInfos.username}`
        `${import.meta.env.VITE_SERVER}/dashboard/listedItem/${
          userInfos.username
        }`
      )
      .then((res) => {
        setAllAddedItems(res.data);
        if (res.data.length > 0) {
          let totalCost = 0;
          res.data.map((item) => {
            totalCost += item.price;
          });
          setListedCost(totalCost);
        }
      });

    axios
      .get(
        // `http://localhost:3000/api/dashboard/soldItem/${userInfos.username}`
        `${import.meta.env.VITE_SERVER}/dashboard/soldItem/
        ${userInfos.username}`
      )
      .then((res) => {
        setSoldItemList(res.data);
        console.log(res);
      });
    // console.log(allAddedItems);
  }, [refresh]);
  // console.log(userInfos);
  // console.log(listedCost);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImg(file);
  };
  // console.log(cover);
  useEffect(() => {
    setFullName(userInfos.username);
  }, [userInfos]);

  const addItem = (e) => {
    e.preventDefault();
    // noramal object wasn't working so used FormData
    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("itemDescription", itemDescription);
    formData.append("category", catr);
    formData.append("quantity", quantity);
    formData.append("unit", unit);
    formData.append("price", price);
    formData.append("username", fullName);
    formData.append("contact", contactNumber);
    formData.append("location", location);
    formData.append("cover", cover);

    axios
      .post(`${import.meta.env.VITE_SERVER}/Allitems`, formData)
      .then((res) => {
        console.log(res.data);
        setAddedPop(true);
        setTimeout(() => {
          setAddedPop(false);
          setItemName("");
          setItemDescription("");
          setCatr("Fruits");
          setQuantity(0);
          setUnit("Kg");
          setPrice("");
          setCoverImg(null);
          setFullName("");
          setContactNumber("");
          setLocation("");
        }, 2000);
        setRefresh(refresh + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] pt-[10vh] bg-[#fffff2]  rounded-lg relative  overflow-x-hidden">
        <NavLink
          className=" absolute z-30 right-[11%] top-[9%] font-WorkSans font-semibold opacity-40 flex gap-2 items-center justify-center cursor-pointer"
          to="/marketplace"
        >
          <ArrowLeft size={20} />
          Go Back
        </NavLink>
        <div
          className=" absolute z-10 top-[8%] left-[2%]  m-2 cursor-pointer rounded-lg "
          onClick={() => setAddItemdet(!addItemdet)}
        >
          <div className=" w-24 h-8 overflow-hidden relative rounded-xl border border-[#00000065] font-WorkSans font-medium">
            <motion.div
              className=" absolute [transform:translate(-50%,-50%)] top-1/2 left-1/2 whitespace-nowrap w-full   flex justify-center items-center px-2 py-1 "
              animate={{
                transform: addItemdet
                  ? "translate(-50%,-180%)"
                  : "translate(-50%,-50%)",
              }}
              transition={{
                duration: 0.25,
                type: "tween",
                stiffness: 300,
                damping: 50,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              List Items
            </motion.div>
            <motion.div
              className=" absolute [transform:translate(-50%,-50%)] top-1/2 left-1/2 w-full h-full bg-[#d67063] text-[white] flex justify-center items-center px-2 py-1 "
              animate={{
                transform: addItemdet
                  ? "translate(-50%,-50%)"
                  : "translate(-50%,250%)",
              }}
              transition={{
                duration: 0.25,
                type: "tween",
                stiffness: 500,
                damping: 50,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <X size={18} /> Close
            </motion.div>
          </div>
        </div>
        <div className=" absolute top-0 h-fit z-[5]">
          <motion.form
            encType="multipart/form-data"
            className="w-[80%] mt-10 overflow-hidden h-full bg-[#ffffff] backdrop-blur-md drop-shadow-lg flex flex-col font-WorkSans"
            onSubmit={addItem}
            initial={{ width: "0%" }}
            animate={{ width: addItemdet ? "100%" : "0%" }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.2,
            }}
          >
            <div className=" flex-[1] px-8 pt-5  gap-2 ">
              <div className="h-full flex flex-col  w-[50vw] xl:px-36 md:px-24 py-3 gap-2 ">
                <div className=" h-[40%] flex flex-col  px-5 py-1">
                  <span className=" text-lg font-medium">Description</span>
                  <div className=" w-full h-full flex flex-col rounded-md border my-2 px-3 py-2 gap-2  border-[#00000044]">
                    <div className=" h-[35%]  flex flex-col">
                      <label
                        htmlFor="ProductName"
                        className="text mb-1 font-medium cursor-pointer"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Product Name"
                        id="ProductName"
                        className="w-full h-full px-2 py-1 bg-transparent border rounded-md focus:outline-none  focus:border-[#000000a2]"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </div>
                    <div className=" h-[65%] flex flex-col">
                      <label
                        htmlFor="description"
                        className="text mb-1 font-medium cursor-pointer"
                        onChange={(e) => setItemDescription(e.target.value)}
                        value={itemDescription}
                      >
                        Description
                      </label>
                      <textarea
                        className="w-full h-full px-2 py-2 bg-transparent border rounded-md focus:outline-none  focus:border-[#000000a2]"
                        placeholder="Description"
                        id="description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className=" h-[50%] mt-[5%]  px-5 py-2 flex flex-col">
                  <span className=" text-lg font-medium">Category</span>
                  <div className="  w-full h-full flex flex-col rounded-md border my-2 px-3 py-2 gap-2  border-[#00000044]">
                    <div className=" h-full  flex items-center ">
                      <label
                        htmlFor="category"
                        className="text mb-1 font-medium w-[30%] cursor-pointer"
                      >
                        Product Category
                      </label>
                      <select
                        className="w-[70%] bg-transparent border rounded-md py-2 px-3 focus:outline-none  focus:border-[#000000a2] flex-[3]"
                        name="category"
                        id="category"
                        value={catr}
                        onChange={(e) => setCatr(e.target.value)}
                        required
                      >
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Dairy">Dairy</option>
                      </select>
                    </div>
                    <div className=" h-full  flex items-center gap-2 ">
                      <label
                        htmlFor="quantity"
                        className="text mb-1 font-medium w-[30%] cursor-pointer"
                      >
                        Quantity
                      </label>
                      <input
                        className="w-[70%] bg-transparent border rounded-md py-2 px-3 focus:outline-none  focus:border-[#000000a2] flex-[3]"
                        name="quantity"
                        id="category"
                        value={quantity}
                        type="number"
                        required
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <select
                        className="w-[70%] bg-transparent border rounded-md py-2 px-3 focus:outline-none  focus:border-[#000000a2] flex-[3]"
                        name="unit"
                        id="unit"
                        required
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                      >
                        <option value="Kg">Kg</option>
                        <option value="Litre">Litre</option>
                      </select>
                    </div>
                    <div className=" h-full  flex items-center ">
                      <label
                        htmlFor="category"
                        className="text mb-1 font-medium w-[30%] cursor-pointer"
                      >
                        Price
                      </label>
                      <input
                        className="w-[70%] bg-transparent border rounded-md py-2 px-3 focus:outline-none  focus:border-[#000000a2] flex-[3]"
                        name="price"
                        type="number"
                        id="price"
                        value={price}
                        required
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full  w-full flex-1">
              <div className=" flex-[1] px-8 pb-5 gap-7 ">
                <div className="h-full flex flex-col w-[50vw]  xl:px-36 md:px-24 py-3  ">
                  <div className=" h-[50%] flex flex-col  px-5 py-2">
                    <span className=" text-lg font-medium">Upload Image</span>
                    <div className=" w-full h-full flex flex-col rounded-md border my-2 px-3 py-2 gap-2  border-[#00000044]">
                      <div className=" h-[40%]  flex flex-col">
                        <label
                          htmlFor="image"
                          className="text mb-1 font-medium opacity-60 cursor-pointer"
                        >
                          drag and drop or navigate to upload
                        </label>
                        <div className="w-full h-[60%] flex items-center justify-center border border-dashed rounded-md">
                          <input
                            onChange={handleImageChange}
                            type="file"
                            accept="image/*"
                            id="image"
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-800 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-[#00000018] file:px-3 file:py-[.4rem] file:text-neutral-900 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#00000028] hover:file:cursor-pointer   focus:border-primary focus:text-neutral-700  dark:focus:border-primary cursor-pointer file:cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* supplier details */}
                  <div className=" h-[50%] flex flex-col  px-5 py-2">
                    <span className=" text-lg font-medium">
                      Your Contact Details
                    </span>
                    <div className=" w-full h-full flex flex-col rounded-md border my-2 px-3 py-2 gap-2  border-[#00000044]">
                      <div className=" h-[40%]  flex flex-col">
                        <label
                          htmlFor="name"
                          className="text mb-1 font-medium opacity-60 cursor-pointer"
                        >
                          Your Full Name
                        </label>
                        <div className="w-full h-[60%] flex items-center justify-center border border-dashed rounded-md">
                          <input
                            id="name"
                            type="text"
                            className="form-input block w-full px-3 py-1 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 select-none"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            // readOnly={true}
                          />
                        </div>
                      </div>
                      <div className=" h-[40%]  flex flex-col">
                        <label
                          htmlFor="contactNumber"
                          className="text mb-1 font-medium opacity-60 cursor-pointer"
                        >
                          Contact Number
                        </label>
                        <div className="w-full h-[60%] flex items-center justify-center border border-dashed rounded-md">
                          <input
                            id="contactNumber"
                            type="number"
                            className="form-input block w-full px-3 py-1 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            required
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className=" h-[40%]  flex flex-col">
                        <label
                          htmlFor="location"
                          className="text mb-1 font-medium opacity-60 cursor-pointer"
                        >
                          Pickup Location
                        </label>
                        <div className="w-full h-[60%] flex items-center justify-center border border-dashed rounded-md">
                          <input
                            id="location"
                            name="location"
                            className="form-input block w-full px-3 py-1 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" h-[20%] flex flex-col  px-2 py-2">
                    <motion.input
                      type="submit"
                      value="Add Item"
                      className=" bg-[#6781ca] py-2 mx-4 text-white w-28 h-full rounded-lg cursor-pointer font-WorkSans font-medium"
                      whileHover={{ scale: 1.02, backgroundColor: "#4f6aa3" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
        <motion.div
          className=" w-full  h-full  px-16 py-10  fill-slate-800"
          animate={{
            // filter: addItemdet ? "blur(3px)" : "blur(0px)",
            brightness: addItemdet ? 0.5 : 1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          style={{
            filter: addItemdet ? "blur(3px)" : "blur(0px)",
          }}
        >
          {/* Profits */}
          <motion.div
            className=" border px-4 flex py-3 gap-5 mt-5 rounded-md min-h-44 font-WorkSans max-h-96 border-[#00000044] bg-[#e7e7e7] "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* For Gross Profit */}
            <div className=" flex-1 flex flex-col h-[23vh] px-3 bg-white rounded-sm drop-shadow-md overflow-hidden">
              <span className="h-[25%] py-1 border-b border-b-[#0000003f] font-medium text-[#000000ce]  px-2 text-lg ">
                Gross Profit
              </span>
              <span className="h-[40%] py-1 px-2 text-lg">1900₹</span>
              <span className="h-[35%] py-1 px-2">Change </span>
            </div>
            {/* Cost & Fees */}
            <div className=" flex-1 flex flex-col h-[23vh] px-3 bg-white rounded-sm drop-shadow-md overflow-hidden">
              <span className="h-[25%] py-1 border-b border-b-[#0000003f] font-medium text-[#000000ce]  px-2 text-lg ">
                Cost & Fees
              </span>
              <span className="h-[40%] py-1 px-2 text-lg">1900₹</span>
              <span className="h-[35%] py-1 px-2">Change </span>
            </div>
            {/* Gross Profit*/}
            <div className=" flex-1 flex flex-col h-[23vh] px-3 bg-white rounded-sm drop-shadow-md overflow-hidden">
              <span className="h-[25%] py-1 border-b border-b-[#0000003f] font-medium text-[#000000ce]  px-2 text-lg ">
                Not Selled Yet
              </span>
              <span className="h-[40%] py-1 px-2 text-lg">{listedCost}₹</span>
              <span className="h-[35%] py-1 px-2">Change </span>
            </div>
          </motion.div>

          {/*Recent Orders & Best Seller */}
          <div className=" w-full flex bg-[#e7e7e7] border-[#00000044] border  h-fit mt-5 rounded-md overflow-hidden  ">
            <motion.div
              className=" flex-1 h-fit bg-[white] flex flex-col rounded-sm m-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="h-8 mt-2 mx-3 py-1 border-b border-b-[#0000003f] font-medium text-[#000000ce]  px-2 text-base ">
                Not Selled Yet
              </span>
              <div className="h-8 mt-2 mx-3 py-1 border border-[#0000003f] rounded-md font-medium text-[#000000ce]  px-2 text-sm flex ">
                <span className=" flex-1 flex justify-center items-center">
                  Image
                </span>
                <span className=" flex-1 flex justify-center items-center">
                  Product
                </span>
                <span className=" flex-1 flex justify-center items-center">
                  Quantity
                </span>
                <span className=" flex-1 flex justify-center items-center">
                  Price
                </span>
                <span className=" flex-1 flex justify-center items-center">
                  Date
                </span>
              </div>
              <div className="  flex flex-col gap-2 w-full h-fit mt-3 px-4 py-2 pb-6">
                {allAddedItems.map((product, index) => (
                  <div
                    className=" w-full bg-white border h-20 flex-wrap  py-1 px-1 rounded-md overflow-hidden font-WorkSans drop-shadow-lg flex justify-around"
                    key={index}
                  >
                    <span className="  flex-1 overflow-hidden text-ellipsis relative">
                      <div className=" absolute h-full">
                        <img
                          src={product.cover}
                          alt=""
                          className=" w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </span>
                    <span className="  flex-1 overflow-hidden  flex justify-center items-center  text-ellipsis relative">
                      <p className=" absolute">{product.itemName}</p>
                    </span>
                    <span className="   flex-[.7] flex justify-center items-center  text-ellipsis relative">
                      <p className=" absolute font-medium">
                        {product.quantity}
                        {product.unit}
                      </p>
                    </span>
                    <span className="  flex-[.7] flex justify-center opacity-70 items-center font-semibold overflow-hidden text-ellipsis relative">
                      <p className=" "> {product.price}₹</p>
                    </span>
                    <span className="  flex-1 overflow-hidden text-ellipsis flex justify-center items-center relative whitespace-nowrap">
                      <p className=" ">{product.updatedAt.substring(2, 10)}</p>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className=" flex-1 h-fit bg-[white] flex flex-col rounded-sm m-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="h-8 mt-2 mx-3 py-1 border-b border-b-[#0000003f] font-medium text-[#000000ce]  px-2 text-base ">
                Recent Orders
              </span>
              <div className="h-8 mt-2 mx-3 py-1 border border-[#0000003f] rounded-md font-medium text-[#000000ce]  px-2 text-sm flex justify-around">
                <span>Image</span>
                <span>Product</span>
                <span>Order ID</span>
                <span>Price</span>
                <span>Est Price</span>
              </div>
              <div className="  flex flex-col gap-2 w-full h-fit mt-3 px-4 py-2 pb-6">
                {soldItemList.map((product, index) => (
                  <div
                    className=" w-full bg-white border h-20 flex-wrap  py-1 px-1 rounded-md overflow-hidden font-WorkSans drop-shadow-lg flex justify-around"
                    key={index}
                  >
                    <span className="  flex-1 overflow-hidden text-ellipsis relative">
                      <div className=" absolute h-full">
                        <img
                          src={product.cover}
                          alt=""
                          className=" w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </span>
                    <span className="  flex-1 overflow-hidden  flex justify-center items-center  text-ellipsis relative">
                      <p className=" absolute">{product.itemName}</p>
                    </span>
                    <span className="   flex-[.7] flex justify-center items-center  text-ellipsis relative">
                      <p className=" absolute font-medium">
                        {product.quantity}
                        {product.unit}
                      </p>
                    </span>
                    <span className="  flex-[.7] flex justify-center opacity-70 items-center font-semibold overflow-hidden text-ellipsis relative">
                      <p className=" "> {product.price}₹</p>
                    </span>
                    <span className="  flex-1 overflow-hidden text-ellipsis flex justify-center items-center relative whitespace-nowrap">
                      <p className=" ">{product.updatedAt.substring(2, 10)}</p>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SellItem;
