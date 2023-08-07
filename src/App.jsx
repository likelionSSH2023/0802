import MainPage from './pages/MainPage/MainPage'
import { Layout } from './components/Layout/Layout'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
