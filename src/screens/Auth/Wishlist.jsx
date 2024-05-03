import React, { useEffect } from "react";
import WishlistList from "../../components/user/WishlistList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { USER_WISHLIST_RESET } from "../../types/userConstants";
import { getUserWishlist } from "../../actions/userActions";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Table } from "react-bootstrap";
import WhislistCard from "../../components/user/WhislistCard";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  var { userData } = userLogin;
  const getWishlist = useSelector((state) => state.userWishlist);
  var { wishlist, loading } = getWishlist;

  useEffect(() => {
    dispatch({ type: USER_WISHLIST_RESET });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      userData = JSON.parse(localStorage.getItem("userData"));
    } else {
      navigate("/login");
      return;
    }
    if (userData) {
      dispatch(getUserWishlist(userData.token));
    }
  }, [userData]);

  return (
    <div>
      <Header />

      <div style={{ width: "100vw", height: "100px" }}></div>
      <div className="ms-5 mt-2">
        <Link to="/" className="button-6" >
          <FaHome /> Back To Home
        </Link>
      </div>
      <div className="cart-wrap " style={{ minHeight: "100vh" }}>
        <div className="p-3">
          <div className="">
            <div className="">
              <div
                className="main-heading mb-3 text-center fs-2"
                style={{ fontFamily: " serif", color: "#8991E4" }}
              >
                My wishlist
              </div>
              {/* <div className="table-wishlist">
                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                  <thead>
                    <tr>
                      <th width="45%">Product Name</th>
                      <th width="15%">Unit Price</th>
                    
                      <th width="5%"></th>
                      <th width="10%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist &&
                      wishlist.length > 0 &&
                      wishlist.map((list, ind) => {
                        return (
                          <WishlistList
                            name={list.name}
                            price={list?.cost?.price}
                            image={list?.images[0]}
                            key={list._id}
                            id={list._id}
                            product={list}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </div> */}
            
              {/* <Table
                bordered
                hover
                responsive
                className="table-sm"
                variant="light"
              >
                <thead>
                  <tr className="text-center ">
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>is Negotiable</th>
                    <th>Status</th>
                    <th>View</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist &&
                    wishlist.length > 0 &&
                    wishlist.map((list, ind) => {
                      return (
                        <WishlistList
                          name={list.name}
                          price={list?.cost?.price}
                          image={list?.images[0]}
                          key={list._id}
                          id={list._id}
                          product={list}
                        />
                      );
                    })}
                </tbody>
              </Table> */}
              <div className="w-100 d-flex flex-row flex-wrap">
                {wishlist &&
                  wishlist.length > 0 &&
                  wishlist.map((list, ind) => {
                    return (
                      <WhislistCard 
                        name={list.name}
                        price={list?.cost?.price}
                        image={list?.images[0]}
                        key={list._id}
                        id={list._id}
                        product={list} />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
