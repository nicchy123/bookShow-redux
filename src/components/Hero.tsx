const Hero = () => {
    return (
        <div className="hero min-h-[80vh] ">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src="https://images.unsplash.com/photo-1516637897631-79d2d7f8a182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="max-w-sm rounded-3xl shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Hey, Book Lovers!</h1>
            <p className="py-6">Your gateway to a universe of books! Whether you're a passionate reader or just starting your literary journey, we have the perfect book waiting for you. Dive into our vast collection of novels, non-fiction, classics, and more.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;