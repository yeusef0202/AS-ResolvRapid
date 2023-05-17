import React from 'react'

import { Helmet } from 'react-helmet'

import './case-maker.css'

const CaseMaker = (props) => {

  const createCase = () =>{
    /*ADICIONAR AQUI CENAS PARA ADICIONAR UM CASO*/

    props.history.push('/case-page')
  }



  return (
    <div className="case-maker-container">
      <Helmet>
        <title>CaseMaker - Downright Average Eel</title>
        <meta property="og:title" content="CaseMaker - Downright Average Eel" />
      </Helmet>
      <div className="case-maker-android-large10">
        <img
          alt="Rectangle23091848"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/4eab3fd6-de42-4335-a3f3-ac1ea630586b?org_if_sml=12265"
          className="case-maker-rectangle2309"
          onClick={createCase}

        />
          
        <span className="case-maker-text" onClick={createCase} >
          <span>Concluir</span>
        </span>
        <img
          alt="Rectangle23091731"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/f2036a7b-949e-4061-b827-e05d6fadc40a?org_if_sml=13534"
          className="case-maker-rectangle23091"
        />
        <img
          alt="icons8home4821699"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/8cd28897-65a3-440f-9292-b6edce41d80d?org_if_sml=1446"
          className="case-maker-icons8home482"
          onClick={() => props.history.push('/main-menu')}

        />
        <img
          alt="icons8car4821699"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/8a76c5b3-ca2d-4d04-8f25-3be56af99d86?org_if_sml=1680"
          className="case-maker-icons8car482"
          onClick={() => props.history.push('/car-page')}
        />
        <img
          alt="icons8person6421699"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/793ae493-0a6e-4078-86f8-9d72b1838a18?org_if_sml=1605"
          className="case-maker-icons8person642"
        />
        <img
          alt="icons8folder10011699"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/8b677bab-d57a-4686-9a38-86393617547f?org_if_sml=1498"
          className="case-maker-icons8folder1001"
          onClick={() => props.history.push('/case-page')}

        />
        <span className="case-maker-text02">
          <span>Carro 1(meu carro):</span>
        </span>
        <img
          alt="Rectangle261719"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/a44dd540-9c3f-4f01-a5ce-513f1ae1735d?org_if_sml=194"
          className="case-maker-rectangle26"
        />
        <span className="case-maker-text04">
          <span>Local:</span>
        </span>
        <img
          alt="Rectangle541719"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/f0418667-54f9-4610-9877-a7e8fe70ebeb?org_if_sml=194"
          className="case-maker-rectangle54"
        />
        <span className="case-maker-text06">
          <span>Foto:</span>
        </span>
        <img
          alt="Rectangle551719"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/6cb2f0b0-a414-40e4-9566-8e5459aea1c1?org_if_sml=194"
          className="case-maker-rectangle55"
        />
        <span className="case-maker-text08">Selecionar</span>
        <span className="case-maker-text09">
          <span>Documentos:</span>
        </span>
        <img
          alt="Rectangle561719"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/4864564b-5d7d-4a74-bfca-ebba4e23cc8e?org_if_sml=194"
          className="case-maker-rectangle56"
        />
        <img
          alt="image391711"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/9520ebf3-a777-4d5d-845a-73b9d5b68a0b?org_if_sml=1320"
          className="case-maker-image39"
        />
        <img
          alt="Rectangle371841"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/53483a85-59a4-4dc2-a7d8-a22c46e7eef8?org_if_sml=128701"
          className="case-maker-rectangle37"
        />
        <span className="case-maker-text11">
          <span>ResolvRapid</span>
        </span>
        <span className="case-maker-text13">
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
          alt="image271841"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/0c85fd03-704a-4d25-b005-91842929cb82?org_if_sml=1514"
          className="case-maker-image27"
          onClick={() => props.history.push('/case-page')}
        />
        <span className="case-maker-text18">
          <span>Carro 2:</span>
        </span>
        <img
          alt="Rectangle571948"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/aac81cac-0552-420c-a2fb-d0977413f9c3?org_if_sml=194"
          className="case-maker-rectangle57"
        />
        <img
          alt="icons8plus9611948"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b6204680-0e1d-4392-9385-b5e891cd295a/7a4afc61-c9e6-4424-842b-a12481ee29e0?org_if_sml=1544"
          className="case-maker-icons8plus961"
        />
      </div>
    </div>
  )
}

export default CaseMaker
