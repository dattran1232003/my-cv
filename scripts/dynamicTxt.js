const greeting = function () {
  const currentHour = new Date().getHours()

  const inRange =
    (start = 0, end = Infinity) =>
    (val) =>
      start <= val && val <= end

  const timeGreeting = (hour) => {
    const morning = inRange(0, 11)
    const afternoon = inRange(12, 17)
    const everning = inRange(18, 23)

    if (morning(hour)) return "morning"
    if (afternoon(hour)) return "afternoon"
    if (everning(hour)) return "everning"
  }

  const greeting = document.querySelector("#greeting span")
  greeting.innerHTML = timeGreeting(currentHour)
}

greeting() // on load page
setInterval(greeting, 1000 * 60 * 5) // every 5 minutes
