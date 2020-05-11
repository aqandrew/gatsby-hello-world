import React, { useState } from "react"
import { Link } from "gatsby"

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello Gatsby!</h1>
      <Link to="/about/" style={{ display: `block` }}>
        About
      </Link>
      <button onClick={() => setCount(count + 1)}>
        Number of times clicked: {count}
      </button>
    </div>
  )
}

export default Home
