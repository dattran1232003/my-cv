const waypoints = document.querySelectorAll(".js-slideUp")

waypoints.forEach((el, i) => {
  new Waypoint({
    element: el,
    handler() {
      const { classList } = this.element
      classList.add("slide-up--show")
    },
    offset: "70%",
  })
})
