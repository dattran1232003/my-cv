;(function () {
  const waypoints = document.querySelectorAll(".js-slideUp")
  const slideUp = (classList) => {
    classList.add("slide-up--show")
  }
  const activeNavItem = (id) => {
    const targetNavItem = document.querySelector(`a[href='#${id}']`).parentNode

    // remove all activated items
    document.querySelector(".nav-item.active")?.classList.remove("active")

    sessionStorage.setItem("currentSection", id)

    targetNavItem.classList.add("active")
  }

  waypoints.forEach((el, i) => {
    new Waypoint({
      element: el,
      handler(dirc) {
        const { classList } = this.element
        slideUp(classList)

        const id =
          i > 0 && dirc === "up"
            ? waypoints[i - 1].id // on scroll up
            : el.id // scroll down

        activeNavItem(id)
      },
      offset: "50%",
    })
  })

  const currentFocusSection = sessionStorage.getItem("currentSection")
  if (currentFocusSection) {
    document.getElementById(currentFocusSection)?.scrollIntoView()
  }
})()
