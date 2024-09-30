import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Login } from "@/pages";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
