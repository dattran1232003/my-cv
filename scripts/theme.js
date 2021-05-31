const themeMap = Object.freeze({
  dark: "light",
  light: "dark",
})

const theme =
  localStorage.getItem("theme") ||
  // if no theme in storage, set new one
  (function () {
    tmp = Object.keys(themeMap)[0]
    localStorage.setItem("theme", tmp)
    return tmp
  })()

const bodyClasses = document.body.classList
bodyClasses.add(theme)

document.getElementById("themeButton").onclick = function toggleTheme(ev) {
  ev.preventDefault()

  const currentTheme = localStorage.getItem("theme")
  const nextTheme = themeMap[currentTheme]

  bodyClasses.replace(currentTheme, nextTheme)
  localStorage.setItem("theme", nextTheme)
}
