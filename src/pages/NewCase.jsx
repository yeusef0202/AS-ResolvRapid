import './pages.css';
import './logged.css';
import './Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';

export function NewCase() {
  const [isOutroEnvolvidoChecked, setIsOutroEnvolvidoChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carrosLista, setCarrosLista] = useState([]);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // New state for button click
  const [description, setDescription] = useState(''); // Add the description state
  const [caseId, setCaseId] = useState(0);
  const [occurrenceDate, setOccurrenceDate] = useState(new Date().toISOString().slice(0, 10));
  
  const handleAutomaticLocationClick = (event) => {
    event.preventDefault();
    setIsButtonClicked(true); // Set isButtonClicked to true when the button is clicked
  };

  useEffect(() => {
    let videoStream;

    if (isModalOpen) {
      // Access the user's camera
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          // Display video stream in the video element
          videoRef.current.srcObject = stream;
          videoStream = stream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }

    // Retrieve carros from cookies
    const storedCarros = Cookies.get('carros');
    const parsedCarros = storedCarros ? JSON.parse(storedCarros) : [];
    setCarrosLista(parsedCarros);
  }, [isModalOpen]);

  useEffect(() => {
    // Retrieve the last used case ID from cookies
    const storedCaseId = Cookies.get('caseId');
    const parsedCaseId = storedCaseId ? parseInt(storedCaseId) : 0;
    setCaseId(parsedCaseId);
  }, []);
  

  function gotoHome() {
    navigate('/home');
  }
  function gotoCasos() {
    navigate('/casos');
  }

  const handleCheckboxChange = (event) => {
    setIsOutroEnvolvidoChecked(event.target.checked);
  };

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCase = {
      id: caseId,
      occurrenceDate: occurrenceDate,
      location: 'Rua da Pega - Aveiro - Portugal',
      carro: document.getElementById('Carro1').value,
      outroEnvolvido: isOutroEnvolvidoChecked ? '1' : '0',
      description: description,
      status: 'A decorrer',
    };
  
    // Increment the case ID for the next case
    setCaseId((prevId) => prevId + 1);
  
    // Store the updated case ID in cookies
    Cookies.set('caseId', caseId + 1);
  
    // Retrieve existing cases from cookies
    const storedCases = Cookies.get('cases');
    const parsedCases = storedCases ? JSON.parse(storedCases) : [];
  
    // Add the new case to the existing list of cases
    const updatedCases = [...parsedCases, newCase];
  
    // Store the updated cases list in cookies
    Cookies.set('cases', JSON.stringify(updatedCases));
    gotoCasos();
  };
  

  const novoCarro = {
    matricula: 'AB-123-CD',
    marca: 'Toyota',
    modelo: 'Corolla',
    pais: 'Japão',
    apolice: '987654321',
    transfCode: 'AB-CD-EF-123',
  };

  // Create a new car list with only the new car
  const novosCarros = [novoCarro];

  // Save the new car list to cookies
  Cookies.set('carroInimigo', JSON.stringify(novosCarros));

  return (
    <div className="bg">
      <div className="holder">
        <div className="logo" onClick={gotoHome}>
          <p className="logo-align">
            <span style={{ fontSize: '35px' }}>RESOLV</span>
            <br />
            <span style={{ fontFamily: 'postnobills' }}>RAPID</span>
          </p>
        </div>
        <div
          className="middle casos-holder"
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-30px',
          }}
        >
          <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:'10px', alignItems:'center'}}>
          <button onClick={gotoCasos} style={{padding:'8px 10px', fontSize:'17px'}}><i className="fa-solid fa-left-long"></i> Voltar</button>
          <h2 style={{ textAlign: 'left', textShadow: '0px 0px 4px #000000' }}>A criar um novo caso:</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <select
              name=""
              id="Carro1"
              className="forms-newcase-input"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Carro 1 (meu carro):
              </option>
              {carrosLista.map((carro, index) => (
                <option value={carro.marca +': '+ carro.matricula} key={index}>
                  {carro.marca}: {carro.matricula}
                </option>
              ))}
            </select>
            <div className="divider-form" style={{ textAlign: 'left', marginTop: '10px' }}>
              <label htmlFor="" style={{ fontSize: '18px', textShadow: '0px 0px 4px #000000', fontWeight: '600' }}>
                Houve outro carro envolvido?
              </label>
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                name=""
                id="outroEnvolvido"
                style={{ width: '20px', height: '16px' }}
              />
            </div>
            {isOutroEnvolvidoChecked && (
              <button
                className="localizacao-buttons 2Carro"
                onClick={handleOpenModal}
                id="2ndCar"
              >
                Adicionar o 2º carro
              </button>
            )}
            {/* Modal para adicionar o segundo carro do acidente */}
            {isModalOpen && (
              <div
                className="modal"
                style={{
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <h2>Ler/inserir código do outro veículo</h2>
                <video
                  ref={videoRef}
                  width={200}
                  height={200}
                  style={{
                    border: '1px solid #fff',
                    objectFit: 'cover',
                    width: '230px',
                    height: '230px',
                  }}
                  autoPlay
                />
                <h2>Código:</h2>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="230-FDSAA-211"
                  className="forms-newcase-input"
                  style={{ maxWidth: '300px', outline: 'none' }}
                />
                <button onClick={handleCloseModal} className="localizacao-buttons">
                  Fechar
                </button>
              </div>
            )}
            <div className="divider-form" style={{ display: 'flex', gap: '10px' }}>
              <button className="localizacao-buttons">
                <i className="fa-solid fa-map-pin"></i> Localização manual
              </button>
              <button
                className={`localizacao-buttons ${isButtonClicked ? 'green-background' : ''}`}
                onClick={handleAutomaticLocationClick}
                style={{
                  backgroundColor: isButtonClicked ? 'green' : '',
                  color: isButtonClicked ? 'white' : '',
                }}
              >
                <i className="fa-solid fa-location-dot"></i> Localização Automática
              </button>
            </div>
            <div className="divider-forum" style={{ textAlign: 'left', marginTop: '10px' }}>
              <label htmlFor="" style={{ fontSize: '18px', textShadow: '0px 0px 4px #000000', fontWeight: '600' }}>Descrição do acidente:</label>
              <textarea
                className='forms-newcase-input'
                name=""
                id=""
                cols="30"
                rows="8"
                style={{ width: '100%', resize: 'none', fontSize:'17px'}}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button id="criarNovoCasoBotao" type="submit" className='localizacao-buttons' style={{ marginTop: '5px' }}>Criar novo caso</button>
          </form>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default NewCase;
