import Book from "../components/Book";
import Hero from "../components/Hero";
import Stat from "../components/Stat";

const Home = () => {
  return (
    <div className="container">
      <Hero/>
      <h2 className="mt-10 text-center text-3xl font-semibold">Get Recent Books!</h2>
      <Book/>
      <h2 className="mt-10 text-center text-3xl font-semibold">Recent Stats!</h2>
      <Stat/>
    </div>
  );
};

export default Home;
