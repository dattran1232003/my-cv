/* Customize to avoid add id to url bar */
const anchors = document.getElementsByTagName("a")

const scrollToTarget = (anchor) => (ev) => {
  ev.preventDefault()
  const targetId = anchor.href.split("#")[1] || ""
  if (!targetId) return

  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
}

;[...anchors].forEach((a) => {
  a.onclick = scrollToTarget(a)
})
