// const deletebtn = document.querySelector('.content__rightdiv_icon');

// deletebtn.addEventListener('click', () => {
//     deleteSportsData();
// })

// function deleteSportsData () {
//   const deleteInfo = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({sportname: document.querySelector('.content__leftdiv h1')})
//   }
//   console.log(document.querySelector('.content__leftdiv h1').value);
//   fetch('/detail/delete', deleteInfo)
//       .then(response => response.json())
//       .then(data => alert(data["msg"]))
//       .catch(error => alert("문제가 발생해 삭제에 실패했습니다."))
// }