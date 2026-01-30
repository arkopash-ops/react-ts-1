import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/UserList'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import SignupForm from "./components/SignupForm";
import SignupList from "./components/SignupList";
import SigninForm from "./components/SigninForm";
import ProtectedRoute from "./components/ProtectedRoute";
import MyHooks from "./Calling/MyHooks";
import UseMemoHook from "./Calling/UseMemoHook";

function App() {

  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100' style={{ fontFamily: "cursive", backgroundColor: "#000" }}>
        <Navbar />

        <main className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<MyHooks />} />
            <Route path="/useMemoHook" element={<UseMemoHook />} />

            <Route path="/signinform" element={<SigninForm />} />
            <Route path="/signupform" element={<SignupForm />} />

            <Route path="/userlist" element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            } />

            <Route path="/signuplist" element={
              <ProtectedRoute>
                <SignupList />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
