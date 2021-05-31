const waypoints = document.querySelectorAll(".js-slideUp")
const slideUp = (classList) => classList.add("slide-up--show")

const activeNavItem = (id) => {
  console.log(id)
  const targetNavItem = document.querySelector(`a[href='#${id}']`).parentNode

  // remove all activated items
  document.querySelector(".nav-item.active")?.classList.remove("active")

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
