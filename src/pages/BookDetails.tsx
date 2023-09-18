import { useParams } from "react-router-dom";
import { useGetBooksbyIdQuery } from "../redux/api/apiSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addtoCart } from "../redux/feature/cart/cartSlice";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetBooksbyIdQuery(id);
  const dispath = useAppDispatch();
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl container my-16 w-2/5">
      <figure>
        <img className="h-[50vh] my-10" src={data?.image} alt="Album" />
      </figure>
      <div className="card-body my-5">
        <h2 className="card-title">Title: {data?.Title}</h2>
        <h2 className="card-title">Genre: {data?.Genre}</h2>
        <h2 className="card-title">Published At: {data?.published}</h2>
        <h2 className="card-title">Author: {data?.Author}</h2>
        <h2 className="card-title">Price: ${data?.Price}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button
            onClick={() => dispath(addtoCart(data))}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
