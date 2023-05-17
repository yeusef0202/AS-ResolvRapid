import React from 'react'

import { Helmet } from 'react-helmet'

import './case-page.css'

const CasePage = (props) => {
  return (
    <div className="case-page-container">
      <Helmet>
        <title>CasePage - Downright Average Eel</title>
        <meta property="og:title" content="CasePage - Downright Average Eel" />
      </Helmet>
      <div className="case-page-android-large15">
        <span className="case-page-text">
          <span>Os meus casos:</span>
        </span>
        <img
          alt="Rectangle23091741"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/fbdc1fe3-a0f0-4c90-96bf-01b6f9862aa8?org_if_sml=13534"
          className="case-page-rectangle2309"
        />
        <img
          alt="icons8home4821741"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/7caeb5c0-7c7b-4914-af77-f3b51507b921?org_if_sml=1446"
          className="case-page-icons8home482"
          onClick={() => props.history.push('/main-menu')}

        />
        <img
          alt="icons8car4821741"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/630b819f-2420-41bd-9318-1279fc836b9d?org_if_sml=1680"
          className="case-page-icons8car482"
          onClick={() => props.history.push('/car-page')}

        />
        <img
          alt="icons8person6421741"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/499c00f3-7606-43e3-bd37-66ed25057b61?org_if_sml=1605"
          className="case-page-icons8person642"
        />
        <img
          alt="icons8folder10011741"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/d23b027d-3635-4547-b44c-0c37ffc94a25?org_if_sml=1498"
          className="case-page-icons8folder1001"
        />
        <img
          alt="Rectangle371849"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/babb2cb4-800d-4402-95eb-ed429cdadb50?org_if_sml=128701"
          className="case-page-rectangle37"
        />
        <span className="case-page-text02">
          <span>ResolvRapid</span>
        </span>
        <span className="case-page-text04">
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
        <img
          alt="Rectangle23091849"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/84e60289-4386-4d8b-92d2-b4cf9c25e964?org_if_sml=12366"
          className="case-page-rectangle23091"
          onClick={() => props.history.push('/case-maker')}

        />
          
        <span className="case-page-text09" onClick={() => props.history.push('/case-maker')} >
          <span>Criar novo caso</span>
        </span>
      </div>
    </div>
  )
}

export default CasePage
