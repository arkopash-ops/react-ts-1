import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/UserList'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import SignupForm from "./components/SignupForm";
import SignupList from "./components/SignupList";

function App() {

  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100' style={{ fontFamily: "cursive", backgroundColor: "#000" }}>
        <Navbar />

        <main className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/signupform" element={<SignupForm />} />
            <Route path="/signuplist" element={<SignupList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
