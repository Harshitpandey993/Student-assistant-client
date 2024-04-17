import React from 'react'
import { Card } from 'react-bootstrap'
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { updateUserWishlist } from '../actions/userActions';
const Product = ({product,userID,token}) => {
  const dispatch=useDispatch();

  console.log(product);
  const isYourProduct =userID===product.owner?._id;

  function handleWishlist(){
    dispatch(updateUserWishlist(product._id,token))
  }
  
  return (
    <>
      <Card className='my-3 p-3 rounded product-card'>
        <Link to={`/product/${product._id}`}>
          <Card.Img className='card-image'style={{height:"300px"}} src={product.images[0]} />
        </Link>
        <Card.Body>
       
          <Link to={`/product/${product._id}`}>
            <Card.Title as='p' className='name-label'>
              <strong>{product.name}</strong>
              
            </Card.Title>
            <p style={{ fontFamily: "'Gluten', sans-serif" }}>{product?.description}</p>
          </Link>
            <Card.Text as='h3' className='text-success ' style={{ fontSize: "33px", fontWeight: "bold" }}>₹ {product.cost.price} </Card.Text>
          <div className='d-flex mt-4 flex-wrap'>
            {isYourProduct ? (
              <>
              <a className='btn style-btn style-btn-chat' style={{cursor:"default"}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="30px" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>
                Your Product
              </a>
                <Link onClick={handleWishlist} className="btn text-danger btn-circle btn-circle-sm m-1 style-btn-wishlist-pro style-btn" >
                <FaRegHeart /> wishlist
              </Link>
              </>
            ) : (
              <>
              <Link to={`/chatScreen/${product.owner?._id}`} className='btn  style-btn style-btn-chat'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="30px" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>
                Chat with seller
              </Link>
               <Link onClick={handleWishlist} className="btn text-danger btn-circle btn-circle-sm m-1 style-btn-wishlist-pro style-btn" >
                <FaRegHeart /> wishlist
              </Link>
                </>
            )}

          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
