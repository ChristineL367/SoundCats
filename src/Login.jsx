import React from 'react';
const AUTH_URL =  "https://accounts.spotify.com/authorize?client_id=cb9e1fe6cfec435597f475759dcfee01&response_type=code&redirect_uri=https://soundcats.repl.co/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}

export default Login;