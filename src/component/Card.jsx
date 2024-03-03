import React from 'react';
import { useDispatch } from 'react-redux';
import { decCart, incCart, removeItem } from '../features/ProductSlice';

const Card = ({ item, index, data, setData }) => {

const dispatch=useDispatch();    
    // unique id for carousel

    let ide = "sec" + index;
    let ides = '#' + ide;





    // handle add quantity

    const handleAdd = (id, quantity) => {
        dispatch(incCart({id,quantity,setData}))
    }

    // handle remove quantity 

    const handleSud = (id, quantity) => {
       dispatch(decCart({id,quantity,setData}))
    }

    //Removing products from the total products

    const handleRemove = (id) => {

        dispatch(removeItem({id,setData,data}))
    }


    return (
        <div>
            <div key={index} className="card m-4" style={{ width: "18rem", height: "28rem" }}>

                <div id={ide} className="carousel carousel-dark slide">
                    <div class="carousel-inner">

                        {item.images.map((items, index) => {
                            return (

                                <img src={items} className="img-fluid carousel-item active  img-thumbnail  " alt="images" style={{ height: "14rem" }} />


                            )
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={ides} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target={ides} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>


                <div className="m-1 mx-auto ">
                    <p className="h5 mt-1">{item.title}</p>
                    <p className="h5 mt-1">Item : {item.id}</p>
                    <p className="h5 mt-1">Price : ₹‎ {item.price}</p>
                    <button onClick={() => { handleSud(item.id, item.quantity || 1) }} className="h5 mt-2 "  >-</button ><span className="h5 mt-2 "> {item.quantity || 1} </span><button onClick={() => { handleAdd(item.id, item.quantity || 1) }} className="h5 mt-2">+</button>

                </div>
                <button onClick={() => { handleRemove(item.id) }} className="h5 mt-2 mx-auto rounded bg-danger  text-white border-white w-50">Remove</button>
            </div>

        </div>
    );
};

export default Card;
