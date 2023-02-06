import React, {  useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import  { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import "./login.css";
import firebaseConfig from "firebase/compat/app";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/actions/userActions";
import Loader from "../spinner/Loader";
// Initialize Firebase

const Login = () => {
    initializeApp(firebaseConfig);
  
  const [isNewUser, setUser] = useState(false);
  const [isError, setIsError] = useState({
    emailError: false,
    password: false,
  });
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const dispatch= useDispatch()

  const userdetails= useSelector(state => state.user)
  const {userInfo, loading, error} = userdetails

useEffect(() => {
  userInfo && history.push('/')


},[history,from,userInfo])
  // google login
  function googleLogin() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email } = result.user;

        const userdetails = { name: displayName, email: email };
        // setloggedInUser(userdetails);
        
        // getting token for the user....
        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          
          
          localStorage.setItem("userInfo",{...userdetails, token:idToken});
          // setloggedInUser(userdetails);
        }).catch(function(error) {
          alert(error.message);
        });

        history.replace(from);
        console.log(userdetails)
        
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        const errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  }

  function handleNewUser() {
    setUser(!isNewUser);
  }
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  async function handleSignup(e) {
    e.preventDefault();
    

    if (isNewUser) {
      const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
      if (validateEmail(email)) {
        setIsError({ emailError: false, password: true });
        document.getElementById("loginForm").reset();
        console.log(displayName, email, password);

        // dispatch user register reducer
        await dispatch(register(displayName, email, password))
        history.push('/');

        
      } else {
        setIsError({ emailError: true, password: true });
      }
    }  else {
      /////   sign in for existing user
      const email = e.target.email.value;
    const password = e.target.password.value;
    await dispatch(login(email, password))
      
      if (userInfo) {
        
        history.push('/');
      }



  }}
  // const getUserToken = () => {
    
  //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  //     console.log(idToken)
  //   }).catch(function(error) {
  //     // Handle error
  //   });
  // }

  return (
    <>
    {loading ? (
      <Loader />
    )  : 

    <div className="align-items-center login-page">
       <div className="main-container__content">
          <div className="col-md-6 content__inputs">
            {error ? <p style={{color: '#ab0606', fontFamily: 'cursive',fontWeight: '600'}}>{error}</p> :''}
            <form
              onSubmit={handleSignup}
              id="loginForm"
              className="content__input--form"
            >
              {isNewUser && (
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom"
                  />
                </label>
              )}
              <label htmlFor="email">
                <input type="email" name="email" required placeholder="Email" />
                {isError.emailError === false ? (
                  <span></span>
                ) : (
                  <span className="error-msg" style={{ color: "red" }}>
                    Veuillez saisir une adresse e-mail valide
                  </span>
                )}
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Mot de passe"
                />
              </label>
              <button type="submit" className="formbutton">
                {isNewUser ? `Sign Up` : `Sign In`}
              </button>
            </form>

            <div>
          <div className="d-flex justify-content-center"><div className="content__submit--line"></div></div>
            

            {!isNewUser ? 
            <p className="text-center">
              Nouvel utilisateur?

              <Link onClick={handleNewUser} to='/login?redirect=register'>
                <strong> Register</strong>
              </Link>
            </p> :
            <p className="text-center">
            Vous avez déjà un compte?
            <Link onClick={handleNewUser} to="/login">
              <strong> S'identifier</strong>
            </Link>
          </p>
          }
            
          </div>
            
          </div>

          
          

          <div className="col-md-6 content__submit">
            
            <div style={{ cursor: "pointer" }} className="button google-button">
              <div className="button google-button__google-icon"></div>
              <p
                style={{ display: "contents" }}
                className="button"
                onClick={googleLogin}
              >
                Se connecter avec Google
              </p>
            </div>
            
            <div className="content__footer">
              <p>
                En cliquant sur le bouton "S'inscrire" ci-dessus, vous acceptez notre
                <strong>conditions d'utilisation</strong>
              </p>
            </div>
          </div>
        </div>
    </div> 
}
    </>
  );
};

export default Login;


















/* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/actions/userActions";
import Loader from "../spinner/Loader";

const Login = () => {
  const [isNewUser, setUser] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isError, setIsError] = useState({
    emailError: false,
    password: false,
  });
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push(from);
    }
  }, [user, history, from]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setIsError({ ...isError, emailError: true });
      return;
    }

    if (!formData.password) {
      setIsError({ ...isError, passwordError: true });
      return;
    }

    if (isNewUser) {
      if (!formData.name) {
        setIsError({ ...isError, nameError: true });
        return;
      }
      dispatch(register({ name: formData.name, email: formData.email, password: formData.password }));
    } else {
      dispatch(login({ email: formData.email, password: formData.password }));
    }
  };

 return (
    <div className="container mt-5">
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              {isNewUser && (
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                  />
                  {isError.nameError && (
                    <small className="form-text text-danger">Name is required</small>
                  )}
                </div>
              )}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                {isError.emailError === false ? (
                  <span></span>
                ) : (
                  <span className="error-msg" style={{ color: "red" }}>
                    Please enter valid email address
                  </span>
                )}
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                />
              </label>
              <button type="submit" className="formbutton">
                {isNewUser ? `Sign Up` : `Sign In`}
              </button>
            </form>

            <div>
          <div className="d-flex justify-content-center"><div className="content__submit--line"></div></div>
            

            {!isNewUser ? 
            <p className="text-center">
              New User?
              <Link onClick={handleNewUser} to='/login?redirect=register'>
                <strong> Register</strong>
              </Link>
            </p> :
            <p className="text-center">
            Already have an account?
            <Link onClick={handleNewUser} to="/login">
              <strong> Sign in</strong>
            </Link>
          </p>
          }
            
          </div>
          </div>

          <div className="col-md-6 content__submit">
            
            <div style={{ cursor: "pointer" }} className="button google-button">
              <div className="button google-button__google-icon"></div>
              <p
                style={{ display: "contents" }}
                className="button"
                onClick={googleLogin}
              >
                Sign In with Google
              </p>
            </div>
            
            <div className="content__footer">
              <p>
                By clicking "Sign up" button above you agree to our
                <strong> terms of use</strong>
              </p>
            </div>
          </div>
        </div>
    </div> 
}
    </>
  );
};

export default Login; */
