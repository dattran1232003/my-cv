const chooseTheme = (hour) => (hour >= 7 && hour <= 18 ? "light" : "dark")

const currentHour = new Date().getHours()

if (!sessionStorage.getItem("theme")) {
  sessionStorage.setItem("theme", chooseTheme(currentHour))
}
