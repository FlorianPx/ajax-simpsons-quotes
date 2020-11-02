function fetchSimpsonsJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0];
    })
    .then(function (simpson) {
      console.log("data decoded from JSON:", simpson);

      const simpsonHtml = `
        <p><strong>${simpson.character}</strong></p>
        <img src="${simpson.image}" />
        <blockquote>${simpson.quote}</blockquote>
      `;
      document.querySelector("#simpson").innerHTML = simpsonHtml;
    });
}
document.getElementById("buttonSimpson").addEventListener("click", () => {
  fetchSimpsonsJSON();
});

fetchSimpsonsJSON();
