import React from 'react'

import { Helmet } from 'react-helmet'

import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Downright Average Eel</title>
        <meta property="og:title" content="Downright Average Eel" />
      </Helmet>
      <div className="login-page-android-large1">
        <img
          alt="BlackBMW1334"
          src="/playground_assets/blackbmw1334-53wh-1000h.png"
          className="login-page-black-bmw1"
        />
        <img
          alt="Rectangle1517"
          src="/playground_assets/rectangle1517-9e4i-400w.png"
          className="login-page-rectangle15"
        />
        <img
          alt="Rectangle1618"
          src="/playground_assets/rectangle1618-xzji-400w.png"
          className="login-page-rectangle16"
        />
        <div className="login-page-rectangle17">
          <div className="login-page-rectangle171">
            <img
              alt="Rectangle17I233"
              src="/playground_assets/rectangle17i233-hue-200h.png"
              className="login-page-rectangle172"
            />
          </div>
        </div>
        <span className="login-page-text">
          <span>email</span>
        </span>
        <span className="login-page-text02">
          <span>Password</span>
        </span>
        <span className="login-page-text04">
          <span>Log In</span>
        </span>
        <span className="login-page-text06">
          <span>don’t have an account yet?</span>
        </span>
        <span className="login-page-text08">
          <span>Create an Account</span>
        </span>
        <div className="login-page-email21">
          <div className="login-page-group">
            <img
              alt="Vector118"
              src="/playground_assets/vector118-ee8l.svg"
              className="login-page-vector"
            />
            <img
              alt="Vector119"
              src="/playground_assets/vector119-l8d4.svg"
              className="login-page-vector1"
            />
            <img
              alt="Vector120"
              src="/playground_assets/vector120-f4pk.svg"
              className="login-page-vector2"
            />
            <img
              alt="Vector121"
              src="/playground_assets/vector121-otk4.svg"
              className="login-page-vector3"
            />
          </div>
        </div>
        <div className="login-page-lock1">
          <div className="login-page-group1">
            <div className="login-page-group2">
              <img
                alt="Vector125"
                src="/playground_assets/vector125-35is.svg"
                className="login-page-vector4"
              />
            </div>
          </div>
        </div>
        <img
          alt="Rectangle143730"
          src="/playground_assets/rectangle143730-kfzb-500h.png"
          className="login-page-rectangle14"
        />
        <span className="login-page-text10">
          <span>Rapid</span>
        </span>
        <span className="login-page-text12">
          <span>
            <span>
              Resolv
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default LoginPage
