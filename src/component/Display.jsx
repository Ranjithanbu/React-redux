import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'
const Display = () => {
  const getValue = useSelector((state) => state.productReducer.value)
  const [data, setData] = useState(getValue)

  // calculating total price

  const Tprice = data.reduce((acc, data) => acc + data.price * (data.quantity || 1), 0)

  //calculating total quantity

  const Tquantity = data.reduce((acc, data) => acc + (data.quantity || 1), 0)




  return (
    <div>
      <div className='navbar bg-dark text-white'><span className=" col-md-4 border border-2 rounded-pill  ms-4 w-25 text-center" ><h2 >Abc Mobiles</h2></span>

        <h5 className="offset-5 col-md-2 text-center me-3  p-1 ">Cart Items
          <span className="ms-2 border rounded-pill"> <span class="bi bi-cart4 p-1 text-primary"> <i className="text-white m-1">{Tquantity}</i></span></span></h5>
        ‎</div>
      <div className="text-center container ">


        <h2 className="mt-4 border-bottom border-2 text-primary">Total Price : ₹‎ {Tprice}</h2>

      </div>
      <div className="d-flex flex-wrap justify-content-center">

        {/* mapping and passing the data to card component      */}

        {data.map((item, index) => {
          return (



            <Card item={item} index={index} data={data} setData={setData} />


          )
        })}
      </div>

    </div>
  );
};

export default Display;
