
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="form-box">
        <h2>Register</h2>

        <form>

          <div className="input-group">
            <label>Name</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default App
