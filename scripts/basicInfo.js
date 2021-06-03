;(function () {
  const popup = document.getElementById("basicInfo")
  const openBtn = document.querySelector(".popup__btn-open[target='basicInfo']")

  function showPopup() {
    popup.classList?.toggle("d-none")
  }

  function closePopup() {
    popup.classList?.add("d-none")
  }

  openBtn.onclick = showPopup
  popup.getElementsByClassName("popup__btn-close")[0].onclick = closePopup
})()
