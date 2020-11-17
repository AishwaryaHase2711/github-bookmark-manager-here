var form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;

  var fullName = search.split(" ").join("");

  document.getElementById("result").innerHTML = "";

  fetch("https://api.github.com/users/" + fullName)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);

      document.getElementById("result").innerHTML = `
      <h3>${data.name}</h3>
      <img src="${data.avatar_url}"/>
      <a href="https://www.github.com/${fullName}"/>
      <h4>${data.repos_url}</h4>
      
      
      
      `;
    });
});
