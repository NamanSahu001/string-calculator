import React, { useState } from 'react'
import axios from 'axios'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult(null)
    setError(null)

    try {
      const res = await axios.post('http://localhost:5000/api/calculator/add', {
        numbers: input,
      })
      setResult(res.data.result)
    } catch (err) {
      setError(err.response.data.error)
    }
  }

  return (
    <div>
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inputField'>
          Enter numbers - use commas, newlines, or custom delimiters:
        </label>
        <textarea
          id='inputField'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='e.g., //;\n1;2 or 1\n2,3'
          rows='4'
          cols='50'
        />
        <br />
        <button type='submit'>Calculate</button>
      </form>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}
    </div>
  )
}

export default Calculator
