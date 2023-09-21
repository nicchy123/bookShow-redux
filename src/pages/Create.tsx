import { usePostBooksMutation } from "../redux/api/apiSlice";

const Create = () => {
  const [postBook] = usePostBooksMutation()
  const handleCreateBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const Title = (form.elements.namedItem("title") as HTMLInputElement)?.value;
    const Author = (form.elements.namedItem("author") as HTMLInputElement)?.value;
    const Genre = (form.elements.namedItem("genre") as HTMLInputElement)?.value;
    const Price = (form.elements.namedItem("price") as HTMLInputElement)?.value;
    const image = (form.elements.namedItem("img") as HTMLInputElement)?.value;
    const date = new Date()
    const book = { Title, Author, Genre, Price, image, published:date };
    postBook(book);
  };
  return (
    <div className="min-h-[70vh] ">
      <div>
        <h2 className="text-center my-4 text-2xl">
          Publish Your Created Books
        </h2>
      </div>
      <form
        onSubmit={handleCreateBook}
        className=" flex flex-col justify-center items-center gap-6 my-10"
      >
        <input
          type="text"
          placeholder="Ttitle"
          name="title"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Imaga URL"
          name="img"
          className="input input-bordered w-full max-w-xs"
        />

        <button type="submit" className="btn btn-primary">
          Pulish
        </button>
      </form>
    </div>
  );
};

export default Create;
