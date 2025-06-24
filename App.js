
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import QuizPage from './pages/QuizPage/QuizPage';
import AnkurSchool from './pages/AnkurSchool/AnkurSchool'; 
import SparshSchool from './pages/SparshSchool/SparshSchool'; 
import AradhanaSchool from './pages/AradhanaSchool/AradhanaSchool';
import MaheshSchool from './pages/MaheshSchool/MaheshSchool';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-backpack-fill" viewBox="0 0 16 16">
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
              </svg>
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Schools for
                <br></br>
                Specially challenged
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase'>Schools</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
              <Nav.Link href='/blog' className='text-uppercase'>Blog</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
              <Nav.Link href='/quiz' className='text-uppercase'>About You</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/ankur' element={<AnkurSchool />} />
        <Route path='/sparsh' element={<SparshSchool />} /> 
        <Route path='/aradhana' element={<AradhanaSchool />} />
        <Route path='/mahesh' element={<MaheshSchool />} />{/* Add new route */}
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.824 0 5.555.012 4.707.072c-.852.059-1.432.26-1.949.547-.53.293-.97.68-1.41 1.12-.44.44-.828.88-1.12 1.41-.288.517-.488 1.097-.547 1.949C.012 5.555 0 5.824 0 8s.012 2.445.072 3.293c.059.852.26 1.432.547 1.949.293.53.68.97 1.12 1.41.44.44.88.828 1.41 1.12.517.288 1.097.488 1.949.547.848.06 1.117.072 3.293.072s2.445-.012 3.293-.072c.852-.059 1.432-.26 1.949-.547.53-.293.97-.68 1.41-1.12.44-.44.88-.828 1.41-1.12.517-.288 1.097-.488 1.949-.547.848-.06 1.117-.072 3.293-.072s2.445-.012 3.293-.072c.852-.059 1.432-.26 1.949-.547.53-.293.97-.68 1.41-1.12.44-.44.828-.88 1.12-1.41.288-.517.488-1.097.547-1.949.06-.848.072-1.117.072-3.293s-.012-2.445-.072-3.293c-.059-.852-.26-1.432-.547-1.949-.293-.53-.68-.97-1.12-1.41-.44-.44-.88-.828-1.41-1.12-.517-.288-1.097-.488-1.949-.547C10.445.012 10.176 0 8 0zm0 1.443c2.132 0 2.39.008 3.233.046.78.034 1.204.166 1.484.277.374.145.641.32.923.602.282.282.457.55.602.923.11.28.243.704.277 1.484.038.843.046 1.101.046 3.233s-.008 2.39-.046 3.233c-.034.78-.166 1.204-.277 1.484-.145.374-.32.641-.602.923-.282.282-.55.457-.923.602-.28.11-.704.243-1.484.277-.843.038-1.101.046-3.233.046s-2.39-.008-3.233-.046c-.78-.034-1.204-.166-1.484-.277a3.178 3.178 0 0 1-.923-.602 3.178 3.178 0 0 1-.602-.923c-.11-.28-.243-.704-.277-1.484-.038-.843-.046-1.101-.046-3.233s.008-2.39.046-3.233c.034-.78.166-1.204.277-1.484.145-.374.32-.641.602-.923.282-.282.55-.457.923-.602.28-.11.704-.243 1.484-.277.843-.038 1.101-.046 3.233-.046zm0 3.144a3.853 3.853 0 1 0 0 7.706 3.853 3.853 0 0 0 0-7.706zm0 6.365a2.512 2.512 0 1 1 0-5.023 2.512 2.512 0 0 1 0 5.023zm4.917-6.65a.898.898 0 1 1 0-1.796.898.898 0 0 1 0 1.796z"/>
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.324 0 .72 0h14.56c.396 0 .72.513.72 1.146v13.708c0 .633-.324 1.146-.72 1.146H.72c-.396 0-.72-.513-.72-1.146V1.146zm4.812 12.248V5.968H2.539v7.426h2.273zM3.675 4.997c.744 0 1.348-.614 1.348-1.373 0-.758-.604-1.372-1.348-1.372-.744 0-1.348.614-1.348 1.372 0 .759.604 1.373 1.348 1.373zm4.107 8.397V9.359c0-.689-.012-1.574-.96-1.574-.96 0-1.107.748-1.107 1.52v4.345h2.273zM12.248 7.5c-1.204 0-1.77.66-2.073 1.27v-1.087H7.902c.03.72 0 7.426 0 7.426h2.273v-4.146c0-.223.016-.446.083-.61.18-.445.591-.907 1.28-.907.9 0 1.261.684 1.261 1.685v3.978H14.9V11.3c0-2.222-1.185-3.259-2.653-3.259z"/>
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-4'>
              
              <p className='text-muted'>&copy; 2023 School. All rights reserved.</p>
            </div>
            <div className='col-md-4'>
              <h6>Quick Links</h6>
              <ul className='list-unstyled'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;