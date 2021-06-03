;(function () {
  const dateOfBirth = document.getElementById("date-of-birth")
  const age = document.getElementById("age")

  const date = new Date(dateOfBirth.innerHTML)

  dateOfBirth.innerHTML = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`

  const msToYears = (ms) => Math.floor(ms / 1000 / 60 / 60 / 24 / 365)
  age.innerHTML = `(${msToYears(new Date() - date)} yo)`
})()
