import React from "react";
import './ShoppingCart.css'
import { useCart } from 'react-use-cart';


const ShoppingCart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();


  return (

    <div className="container border">
    <div className='container-fluid py-3'>
      <div className='row justify-content-center'>
        <h4 className="text-center py-3 ">The things you rent</h4>
        <div className='col-sm-12 col-md-12 col-lg-8 col-xxl-8 py-4 '>
          <div className="d-flex justify-content-center py-3">
            <p className="fw-bolder text-title">Total Items <span className="position-absolute translate-middle"></span></p>
          </div>
          <div>
            {isEmpty ?
              <h1 className='text-center yourCartisEmpty'>Your Cart is Empty</h1> :
              <table className='table table-light table-hover m-0'>
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr key={index} className='align-middle' >
                        <td>
                          <img src={item.img} className='img-cart' alt={item.title} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <button onClick={()=>removeItem(item.id) } className='btn btn-danger ms-5'>Remove Item</button>
                        </td>

                      </tr>
                    )
                  })}
                </tbody>
              </table>}
          </div>
          <div className="d-flex justify-content-between py-5">
             <button onClick={()=>emptyCart() } className =' btn zerclear'> Remove All </button>
             <h3>Total Price :${cartTotal}</h3>
             
        </div>

        </div>
      </div>
    </div>
</div>
  )
}

export default ShoppingCart 