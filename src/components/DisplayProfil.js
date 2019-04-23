import React, { Component } from "react"
import axios from "axios"

import "./DisplayProfil.css"

class DisplayProfil extends Component {
  state = {
    character: {}
  }
  getProfil = async () => {
    const id = this.props.id
    const result = await axios.get(
      `https://melroune.github.io/starwars-api/api/id/${id}.json`
    )
    console.log(result.data)
    this.setState({ character: result.data })
  }
  componentDidMount() {
    this.getProfil()
  }
  render() {
    const {
      name,
      image,
      eyeColor,
      hairColor,
      height,
      mass
    } = this.state.character
    return (
      <div>
        <p>nom : {name}</p>
        <p>couleur de yeux : {eyeColor}</p>
        <p>couleur de cheveux : {hairColor}</p>
        <p>tailles : {height}</p>
        <p>mass : {mass}</p>
        <img src={image} alt={name} className="DisplayP-img" />
      </div>
    )
  }
}

export default DisplayProfil
