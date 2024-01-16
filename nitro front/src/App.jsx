import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./assets/layout/MainLayout/MainLayout"
import Home from "./assets/page/Home/Home"
import NoPage from "./assets/page/NoPage/NoPage"
import AddPage from "./assets/page/Add/AddPage"

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddPage />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
