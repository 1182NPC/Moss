import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-homepage"
export default class extends Controller {
  static targets = ["central_container"]

  connect() {
    console.log("controller is here!")
  }


  blog(event) {
    event.preventDefault()
    const url = "http://localhost:3000/posts"
    fetch(url, {
      method: "GET",
      headers: { "Accept": "text/html" }
    })
      .then(response => response.text())
      .then((data) => {
        this.central_containerTarget.innerHTML = data
      })

  }

  radiosets(event) {
    event.preventDefault()
    const url = "http://localhost:3000/radiosets"
    fetch(url, {
      method: "GET",
      headers: { "Accept": "text/html" }
    })
      .then(response => response.text())
      .then((data) => {
        this.central_containerTarget.innerHTML = data
      })

  }

  
}