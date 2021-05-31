const themeMap = Object.freeze({
  dark: "light",
  light: "dark",
})

const theme =
  sessionStorage.getItem("theme") ||
  // if no theme in storage, set new one
  (function () {
    tmp = Object.keys(themeMap)[0]
    sessionStorage.setItem("theme", tmp)
    return tmp
  })()

const bodyClasses = document.body.classList
bodyClasses.add(theme)

document.getElementById("themeButton").onclick = function toggleTheme(ev) {
  ev.preventDefault()

  const currentTheme = sessionStorage.getItem("theme")
  const nextTheme = themeMap[currentTheme]

  bodyClasses.replace(currentTheme, nextTheme)
  sessionStorage.setItem("theme", nextTheme)
}
