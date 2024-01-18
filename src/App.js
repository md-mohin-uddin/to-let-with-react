import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import UserProfile from "./authentication/UserProfile";
import Error from "./components/Error";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Post from "./components/Post";
import PostDetails from "./components/PostDetails";
import AddPropertyForm from "./authentication/AddPropertyForm";
import AdminPanel from "./pages/admin/AdminPanel";

function App() {
  const handleAddProperty = (propertyData) => {
    // Handle the property data (e.g., send it to an API, update state, etc.)
    console.log("Property Data:", propertyData);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-property"
            element={<AddPropertyForm onAddProperty={handleAddProperty} />}
          />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/post/" element={<Post />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
