import { useState } from "react";
import React from "react";
import mainpage from "../../assets/mainpage.png";
import rocket from "../../assets/rocket.gif";
import axios from "axios";
import MAzure from "../../assets/MAzure.svg";
import office365 from '../../assets/office365.svg'


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      alert(response.data.message);
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  return (
    <div
      className="container-fluid  justify-content-center vh-100 d-flex gx-0"
    >
      {/* Left Section */}
      <div
        className="col-lg-8 text-white d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${mainpage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        
        }}
      >
        <h1
          className="mb-4 font"
          style={{
            width: "643px",
            fontFamily: "Work Sans",
            fontSize: "22px",
            fontWeight: 500,
            lineHeight: "29.81px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Euismod arcu cum lobortis et
          vitae nunc sagittis placerat lorem. Arcu commodo ipsum in hac orci.
          Cum orci cursus urna eu
        </h1>
        <img
          src={rocket}
          alt="Rocket"
          style={{ width: "400px", marginBottom: "20px" }}
        />
        <p
          className="text-center"
          style={{
            width: "520px",
            fontfamily: "Poppins",
            fontsize: "12px",
            fontweight: "500",
            lineheight: "18px",
            textalign: "center",
            textunderlineposition: "from-font",
            textdecorationskipink: "none",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Euismod arcu cum lobortis et
          vitae nunc sagittis placerat lorem. Arcu commodo ipsum in hac orci.
          Cum orci cursus urna eu
        </p>
      </div>
      {/* Right Section */}
      <div
        className="col-lg-4 d-flex bg-black align-items-center justify-content-center"
       
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            height: "447.24px",
            gap: "10px",
          }}
        >
          <h1 className="" style={{ color: "white" }}>
            <span
              style={{
        
                fontSize: "24px",
                fontWeight: "800",
              
              }}
            >
              
              TMM
            </span>{" "}
            <span
              style={{
               
                fontSize: "23px",
                fontWeight: "400",
                
              }}
            >
              Accelerator
            </span>
          </h1>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <div className="mb-3">
            {/* <label htmlFor="email" className="form-label">
              Email Address
            </label> */}
            <input
              style={{
                backgroundColor: "#1B1B1B",
                border: "0.56px solid #666464",
                borderRadius: "6px ",
                boxShadow: " 0px 4px 3.9px 0px #00000040",
                color: "white",
              }}
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="password" className="form-label">
              Password
            </label> */}
            <input
              style={{
                backgroundColor: "#1B1B1B",
                border: "0.56px solid #666464",
                borderRadius: "6px ",
                boxShadow: " 0px 4px 3.9px 0px #00000040",
                color: "white",
              }}
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex">
              <input
                type="checkbox"
                id="remember"
                style={{
                  color: "#ECECEC",
                }}
              />
              <label
                htmlFor="remember"
                className="ms-2"
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                
                  color: "#B5B5B5",
                }}
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-decoration-none"
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#B5B5B5",
              }}
            >
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn-danger w-100" style={{backgroundColor:'#ED1C21'}}>
            SIGN IN
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                content: "",
                flexGrow: 1,
                margin: "0 10px",
                border: "0.75px dashed #6664644D",
              }}
            />
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
               OR
            </span>
            <div
              style={{
                content: "",
                flexGrow: 1,
                border: "0.75px dashed #6664644D",
                margin: "0 10px",
              }}
            />
          </div>
          <p
            className="text-center"
            style={{
              color: "#B5B5B5",
            }}
          >
            Don't have an account yet?{" "}
            <a href="#" className="text-decoration-none"  style={{
              color: "#B5B5B5",
            }}>
              Sign Up
            </a>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                content: "",
                flexGrow: 1,
                margin: "0 10px",
                border: "0.75px solid #6664644D",
              }}
            />
            <span
           style={{
            color: "#B5B5B5",
          }}
            >
              Or Sign In With
            </span>
            <div
              style={{
                content: "",
                flexGrow: 1,
                border: "0.75px solid #6664644D",
                margin: "0 10px",
              }}
            />
          </div>
          <div className="d-flex justify-content-between  mt-3">
          <button type="button" className="btn btn-outline-primary w-45" style={{
               width:'140px',
                backgroundColor: "#1B1B1B",
                border: "0.56px solid #666464",
                borderRadius: "6px ",
                boxShadow: " 0px 4px 3.9px 0px #00000040",
                padding:'5px 0px 6px 0px'
              }}>
                <img src={office365} alt="Office365" style={{ 
                    width:'65px'
                }}></img>
                
          </button>
          <button type="button" className="btn btn-outline-primary w-45" style={{
            width:'140px',
                backgroundColor: "#1B1B1B",
                border: "0.56px solid #666464",
                borderRadius: "6px",
                boxShadow: " 0px 4px 3.9px 0px #00000040",
                padding:'5px 0px 8px 0px',
              
              }}> <img src={MAzure} alt="Azure" style={{
              
                width:'65px'
              }}></img>
        
          </button>
          
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Register;
