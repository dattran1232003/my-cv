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
;(function () {
  const describe = document.querySelector(
    ".popup__btn-open .popup__btn-open__describe"
  )

  function hideDescribe() {
    describe.classList.add("slide-right")
  }

  setTimeout(() => {
    describe.classList.remove("slide-right")
  }, 1000)

  describe.onclick = hideDescribe
  setTimeout(() => {
    hideDescribe()
  }, 9000)
})()
