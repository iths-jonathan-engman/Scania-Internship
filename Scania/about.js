const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(jokes => {
        const joke = jokes;
        document.querySelector(".jokeResult").innerHTML = joke.value;
      });
  };
  document.querySelector(".submitBtn1").addEventListener("click", getJoke);