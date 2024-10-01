import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login } from "@/pages";
import {useEffect, useState} from "react";
import {getFromLocalStorage} from "@/utils/local-storage";

function App() {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);

    const isAuth = getFromLocalStorage('isLoggedIn');
    if (isAuth) {
      setIsLoggedIn(true);
    }

    setLoading(false);
  }, [])

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <></>
        ) : !isLoggedIn ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />

          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Navigate to="/" />} />

            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
