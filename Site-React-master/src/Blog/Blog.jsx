import React, {useState} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Pdf from "./pdf";
import FAQ from "./Faq";

function Blog() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    
    const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
    const toggleLogin = () => setIsLoginVisible(!isLoginVisible);
    
    return (
      <div className="App">
            <Header onSearchClick={toggleSearch} onLoginClick={toggleLogin} />
                {isSearchVisible && (
                    <Search isVisible={isSearchVisible} onClose={toggleSearch} />
                )}
                {isLoginVisible && (
                    <div>
                    <Login isVisible={isLoginVisible} onClose={toggleLogin} />
                    </div>
                )}
            <FAQ/>
            <Footer/>
      </div>
    );
  }
export default Blog;