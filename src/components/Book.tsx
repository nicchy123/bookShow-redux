import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addtoCart } from "../redux/feature/cart/cartSlice";
import booksInterface from "../interfacec/bookInterface";


const Book = () => {
    const { data } = useGetAllBooksQuery(undefined);
    const dispath = useAppDispatch()
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 my-20 ">
      {data?.data?.map((book: booksInterface) => (
        <div key={book._id}  className="card w-72 bg-base-100 shadow-xl mx-auto">
          <Link to={`/book/${book._id}`}>
          <figure>
            <img className="h-80 cursor-pointer"
              src={book.image}
              alt="books"
            />
          </figure>
          </Link>
          <div className="card-body">
            <h2 className="card-title">{book.Title}</h2>
            <p></p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary btn-sm">
                <Link to={`/book/${book._id}`}>
                Read More
                </Link>
              </button>
              <button onClick={()=>
                dispath(addtoCart(book),
              
              
                )} className="btn btn-primary btn-sm">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Book;