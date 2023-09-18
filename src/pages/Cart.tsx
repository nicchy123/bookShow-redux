import booksInterface from "../interfacec/bookInterface";
import { addtoCart, removeFromCart } from "../redux/feature/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { FaPlus, FaMinus,  } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
    const cart = useAppSelector(state=>state.cart);
    const dispatch = useAppDispatch()
    return (
        <div className="container min-h-[70vh]">
            {
                cart.product.length> 0?
                
                   <div>
                    {
                         cart?.product?.map((item:booksInterface,index:number)=>{
                            return(
                                <div key={index} className="flex justify-between items-center border my-2 p-3">
                                    <div className="flex justify-start items-start gap-10  " key={index}>
                                   <img className="h-40 w-40" src={item.image} alt="" />
                                   <div className="flex flex-col justify-center">
                                       <h1 className="text-2xl font-bold">{item.Title}</h1>
                                       <p className="text-gray-600 text-sm">Author: {item.Author}</p>
                                       <p className="text-gray-600 text-sm">Price: ${item.Price}</p>
                                       <p className="text-gray-600 text-sm">Quantity: {item.Quantity}</p>
                          
                                </div>
                                </div>
                                <div className="flex flex-col justify-end items-center gap-6" >
                                    <button  onClick={()=>dispatch(addtoCart(item))}  className="text-3xl">
                                        <FaPlus className="w-6 h-6"/>
                                    </button>
                                    <button className="text-3xl">
                                        <FaMinus className="w-6 h-6"/>
                                    </button>
                                    <button onClick={()=>dispatch(removeFromCart(item))}>
                                        <MdDeleteForever className="w-10 h-10 text-red-600"/>
                                        
                                        </button>
                                </div>
                                </div>
                            )
                        })
                        
                    }
                    <p className="text-end my-2 text-xl font-semibold">Total Amount: ${cart.total}</p>
                   </div>
                
               
                :
                <div>
                    <p className="text-center font-semibold text-2xl my-10">Your Cart is Empty</p>
                </div>
            }
        </div>
    );
};

export default Cart;