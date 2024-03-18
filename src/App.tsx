import { env } from "./env"

const message = env.VITE_HELLO_USER

export default function App() {
  return (
    <div className="content" style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "black",
      color: "white"
    }}>
      <div className="container">
        <h1>HELLO USER, VISIT MY PERSONAL WEB SITE</h1>
        <a href={message}><h1>{message}</h1></a>
      </div>
    </div>
  )
}
