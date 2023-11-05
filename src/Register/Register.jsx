import React, { useEffect, useState } from "react";
import '../../User.css'

const initialstudentdata = {
  first_name: " ",
  last_name: " ",
  username: " ",
  email: " ",
  password: " ",
  date_of_birth: " ",
  contact: " ",
};
const initialLogindata = {
  email: " ",
  password: " ",
};

const Register = () => {
  const [LoginToggle, setLoginToggle] = useState(false);
  // const [registerstudentData, setRegisterstudentData] = useState(initialstudentdata);
  // const [createname, setcreatername] = useState();
  // const [getData, setgetData] = useState();
  const [resgisterlogindata, setresgisterlogindata] =
  useState(initialLogindata);
  const navi = useNavigate();





  // console.log(resgisterlogindata,getData);

  // const handalinput = (event) => {
  //   // console.log(event.target.name);
  //   switch (event.target.name) {
  //     case "first_name":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         first_name: event.target.value,
  //       }));
  //       break;
  //     case "last_name":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         last_name: event.target.value,
  //       }));
  //       break;
  //     case "username":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         username: event.target.value,
  //       }));
  //       setcreatername((prevState) => ({
  //         ...prevState,
  //         username: event.target.value,
  //       }));
  //       break;
  //     case "email":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         email: event.target.value,
  //       }));
  //       break;
  //     case "password":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         password: event.target.value,
  //       }));
  //       break;
  //     case "date_of_birth":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         date_of_birth: event.target.value,
  //       }));
  //       break;
  //     case "contact":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         contact: event.target.value,
  //       }));
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // const hendalsubmit = () => {
  //   axios
  //     .post("http://localhost:8080/user/create-user", registerstudentData)
  //     .then((response) => {
  //       console.log("responce for post", response);
  //       setgetData(response);        
  //       localStorage.setItem("user",JSON.stringify(response.data))
  //       navi("/menu");
  //         // setcreatername(response.data.result.username)        
  //     })
  //     .catch((error) => {
  //       console.log("error from api ", error);
  //     });
  // };

  const hendallogin = (e) => {
    // console.log(event.target.name);
    switch (e.target.name) {
      case "email":
        setresgisterlogindata((prevState) => ({
          ...prevState,
          email: e.target.value,
        }));
        break;
      case "password":
        setresgisterlogindata((prevState) => ({
          ...prevState,
          password: e.target.value,
        }));
        break;
      default:
        break;
    }
  };
  const loginsubmit = () => {
    axios
      .post("http://localhost:8080/user/login", resgisterlogindata)
      .then((res) => {
        console.log(res.data.message);       
        setLoginToggle(false)
        localStorage.setItem("user",JSON.stringify(res.data))
        if(res.data.message === "Login successfullly"){
          // alert("Login successfullly")
          navi("/menu");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // useEffect(() =>{
  //   const auth = localStorage.getItem('user')
  //   if(auth){
  //     navi("/menu")
  //   }
  // },[])


  return (
    <>
      <div className="Register">
        <br />
        {LoginToggle && LoginToggle ? (
          <>
          <h1 > Sign up </h1>
        </> 
        ) : (
          <>
            <h1> Login now</h1>
          </>
          
        )}
        <br />
        <div className="form-page">
          <div className="form-box">
            {LoginToggle && LoginToggle ? (
              <>
              {/* Register page */}
              <form>
                <label className="" htmlFor="first_name">
                  First name &nbsp;
                  <input
                   placeholder="Enter Your First Name"
                    type="text"
                    id="first_name"
                    className="first_name form-input-box"
                    name="first_name"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="last_name">
                  Last name &nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Last Name"
                    type="text"
                    id="last_name"
                    className="last_name form-input-box"
                    name="last_name"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="username">
                  UserName &nbsp;
                  <input
                  placeholder="Enter Your UserName"
                    type="text"
                    id="username"
                    className="username form-input-box"
                    name="username"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="email">
                  Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Email"
                    type="email"
                    id="email"
                    className="email form-input-box"
                    name="email"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="password">
                  Password &nbsp;&nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Password"
                    type="password"
                    id="password"
                    className="password form-input-box"
                    name="password"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="contact">
                  Conatct &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Number"
                    type="number"
                    id="contact"
                    className="number form-input-box"
                    name="contact"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>{" "}
                <br />
                <label htmlFor="date_of_birth">
                  Date
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="date"
                    id="date_of_birth"
                    className="date form-input-box"
                    name="date_of_birth"
                    onChange={(e) => {
                      handalinput(e);
                    }}
                  />
                </label>{" "}
                <br />
                <div className="dlf">
                <button
                      type="button"
                      name="cancel"
                      className="btn01"
                      onClick={() => {
                        setLoginToggle(false)
                      }}
                    >
                      Cancel
                    </button>
                <button
                      className="submit-btn btn01"
                      type="button"
                      name="submit"
                      onClick={()=>{hendalsubmit()}}
                    >
                      Submit
                    </button>
                  <span className="form-button-box02">
                    {/* <button
                      className="cancel btn01"
                      type="button"
                      name="cancel"
                    >
                      Cancel
                    </button> */}
                    &nbsp;
                    
                  </span>
                </div>
              </form>
             
            </>
             
            ) : (
              <>
              {/* Login page */}
              <form>
                {/* <label htmlFor="username">
                  UserName &nbsp;
                  <input
                    type="text"
                    id="username"
                    className="username form-input-box"
                    name="username"
                    onChange={(e) => {
                      hendallogin(e);
                    }}
                  />
                </label> */}
                <br />
                <label htmlFor="email">
                  Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Email"
                    type="email"
                    id="email"
                    className="email form-input-box"
                    name="email"
                    onChange={(e) => {
                      hendallogin(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="password">
                  Password &nbsp;&nbsp;&nbsp;
                  <input
                   placeholder="Enter Your password"
                    type="password"
                    id="password"
                    className="password form-input-box"
                    name="password"
                    onChange={(e) => {
                      hendallogin(e);
                    }}
                  />
                </label>
                <br />

                <div>
                  <div className="form-button-box">                   
                    &nbsp;
                    <button
                      className="submit-btn01 "
                      type="button"
                      name="submit"
                      onClick={()=>{loginsubmit()}}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p>
                Create new User?{" "}
                <button
                  className="login-button"
                  onClick={() => {
                    setLoginToggle(true);
                  }}
                >
                  {" "}
                  Create User
                </button>
              </p>
            </>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
