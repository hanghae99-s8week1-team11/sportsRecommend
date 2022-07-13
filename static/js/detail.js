

const getSportsDataDetail = () => {
  fetch('/word')
    .then(response=> response.json())
    .then(data => console.log(data))
}