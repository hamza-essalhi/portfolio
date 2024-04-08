// Importing necessary styles and React Router components
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import AboutMe from './routes/AboutMe';
import RouteController from './RouteController';
import ContactMe from './routes/ContactMe';
import Projects from './routes/Projects';
import "./styles/main.css" 
// Main App Component
function App() {
  // Creating a browser router with routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        {/* Public Routes */}
        <Route
          path='/'
          element={<RouteController />}
        >
          {/* Route for the Home page */}
          <Route path='/' element={<Home />} />
          {/* Route for the About Me page */}
          <Route path='/about-me' element={<AboutMe />} />
          {/* Route for the Contact Me page */}
          <Route path='/contact-me' element={<ContactMe />} />
          {/* Route for the Projects page */}
          <Route path='/projects' element={<Projects />} />
        </Route>
      </React.Fragment>
    )
  );

  // Rendering the App
  return (
    <div className="App">
      {/* Providing the router to the app */}
      <RouterProvider router={router} />
    </div>
  );
}

// Exporting the App component
export default App;
