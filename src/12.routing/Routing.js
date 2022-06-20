import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import StudentMongoAPI from '../11.ajax-calls/StudentMongoAPI'
import UserAPI from '../11.ajax-calls/UserAPI'
import NameList from '../7.list-rendering/NameList'
import StudentForm from '../9.form-handling/StudentForm'

const Home =() => <div className="container"><h1>Welcome Home</h1></div>
const ErrorPage =() => <div className="container"><h1>Please Contact Administartor</h1></div>

function Routing() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">ReactUI</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/form" className="nav-item nav-link">Form</Link>
                        <Link to="/users" className="nav-item nav-link">Users</Link>
                        <Link to="/students" className="nav-item nav-link">Students</Link>

                    </div>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={ <Home />}></Route>
            <Route path="/form" element={ <StudentForm />}></Route>
            <Route path="/users" element={ <UserAPI />}></Route>
            <Route path="/students" element={ <StudentMongoAPI />}></Route>
        </Routes>
    </Router>
  )
}

export default Routing