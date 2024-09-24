function Login(){
  return(
 <div className="container">

    <main className="login-card">
      <h1>Login</h1>
      <input type="text" placeholder="Username" className="login-field"/>
      <input type="password" placeholder="Password" className="login-field"/>
      <label htmlFor="rem-me">
        <input type="checkbox" id="rem-me"/><b>Remember me</b>
        <a href="#"><b>Forget Password</b></a>
      </label>
      <button type="button" className="login-btn">Login</button>
      <a href="#">Don't have an account? <b>Register</b></a>
    </main>
  </div>
    )
}

export default Login;