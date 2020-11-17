import React from "react";
import App from "./App";

// https://api.github.com/search/repositories?q=html
function Repo() {
  <App message="hey der" />;
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [outputValue, setOutputValue] = React.useState("");

  React.useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    // make API calls
    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Search Github Repositories"
          class="form-control"
        />

        <div class="form-group">
          <br />
          <br />
          <button className="btn btn-primary btn-block">
            Search Repository
          </button>
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
      {isLoading && <div className="loading">Loadingggggggggggggggg</div>}
      {error && (
        <div>
          Unexpected Error Occurred fetching data. Please try again later!
        </div>
      )}
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <a href={repo.html_url} target="_self">
                {repo.name}
              </a>
              &nbsp;&nbsp;
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  setOutputValue(outputValue + " " + repo.html_url);

                  console.log({ outputValue });
                }}
                key={repo.id}
              >
                Add
              </button>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
      <h3 className="loading">Newly Added Repositories :</h3>
      <br />
      <ul>
        <li>
          <a href={outputValue} target="_self">
            {outputValue}
          </a>
          &nbsp;&nbsp;
        </li>
      </ul>
      <br />
    </div>
  );
}

export default Repo;
