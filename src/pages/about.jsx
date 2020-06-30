import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const About = () => (
  <div>
    <Header headerText="This is an About page" />
    <Header headerText="It has a Header component" />
    <Link to="/">Return Home</Link>
    <p>Let's go for a ride with the dog!</p>
  </div>
)

export default About
