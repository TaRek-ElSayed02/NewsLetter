import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styles1 = {
  border: {
    border: "2px solid black",

  }
}

const styles = {
  input: {

      width: "400px",
      height: '40px',
      fontSize: "16px",
      backgroundColor: " #04594D",


      '::placeholder': {
          color: "whitesmoke",
          fontStyle: "italic",
      }
  },
  h2: {
      color: "whitesmoke"
  },

  searchBtn: {
      height: '40px',
      color: "whitesmoke",

      marginRight: '60px',
      background: "#8E4042",

  }


}
const styles2={
  LI:{
      cursor: "pointer",
      // border : "2px solid white",
      height : "100%",
     
  },
  header2:{
  
      // border: "2px  solid white",
      padding: "10px",
      backgroundColor : "rgb(42, 41, 41)",
      color : "white",
  },


}


root.render(
  <React.StrictMode>
   <div style={{height : "40vh"}} className="row bg-dark w-100">
            <header className="header">
                <nav className="navbar">
                    <h2 style={styles.h2} className="m-3" >NEWSLETTER</h2>
                    <div >
                        <input className="Search" type="text" placeholder="Search for headlines" style={styles.input} />
                        <button className="searchBtn" style={styles.searchBtn}>SEARCH</button>
                    </div>

                </nav>
            </header>

        </div>
        <div className="row m-auto navbar1 space" style={styles2.header2}>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Politics</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>World</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Economy</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Science&tech</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Travel</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Climate</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>LifeStyle</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Food</div>
    <div className="col-1 p-1 pt-2 focus" style={{ ...styles.LI, cursor: 'pointer' }}>Sports</div>
</div>


    <App />


    <div className="fo row mt-5  w-100" style={styles1.border}>
        <footer class="footer">
          <div class="footer-container">

            <div class="footer-logo">
              <h2>NEWSLETTER</h2>
            </div>


            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Copyright Policy</a>
              <a href="#">Data Policy</a>
              <a href="#">Accessibility</a>
              <a href="#">Help</a>
              <p>© 2023 Newsletter. All rights reserved</p>
            </div>
            <div class="footer-categories">
              <div className="categories-data">
                <a href="#">Politics</a>
                <a href="#">World</a>
                <a href="#">Economy</a>
                <a href="#">Science & Tech</a>
                <a href="#">Business</a>
              </div>
              <div className="categories-data">
                <a href="#">Travel</a>
                <a href="#">Climate</a>
                <a href="#">Lifestyle</a>
                <a href="#">Food</a>
                <a href="#">Sports</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
