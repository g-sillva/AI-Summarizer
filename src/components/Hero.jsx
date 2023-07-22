const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="nav_text">AI Summarizer</h1>

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/g-sillva/AI-Summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc pt-3">
        Experience simplified reading using <span className="font-bold">AI Summarizer</span>, an open-source article
        summarizer designed to condense lengthy articles into clear and concise
        information.
      </h2>
    </header>
  );
};

export default Hero;
