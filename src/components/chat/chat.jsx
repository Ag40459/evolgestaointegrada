import React, { useState, useEffect } from "react";
import axios from "axios";
import "./chat.css";

function Chat() {
  const [isOpen, setIsOpen] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState("");

  const keyApiClimate = "3753e0ec72e1347724bc9fde668fedc2";

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${keyApiClimate}`
        );
        setWeatherData(response.data);
        setCurrentCity(response.data.timezone);
      } catch (error) {
        console.error("Erro ao buscar dados do tempo:", error);
      }
    };

    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchData(latitude, longitude);
          },
          (error) => {
            console.error("Erro ao obter geolocalização:", error);
          }
        );
      } else {
        console.error("Navegador não suporta geolocalização.");
      }
    };

    getGeolocation();
  }, []);

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3 className="chatbot-title">ChatBot</h3>
            <button className="chatbot-close-button" onClick={handleCloseChat}>
              X
            </button>
          </div>

          <div className="chatbot-body">
            {weatherData && (
              <div className="chatbot-message bot-message">
                <p className="chatbot-message-text">
                  Você está em: {currentCity}
                </p>
              </div>
            )}
            {weatherData && (
              <div className="chatbot-message bot-message">
                <p className="chatbot-message-text">
                  A temperatura atual é: {weatherData.current.temp}
                </p>
              </div>
            )}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Digite sua mensagem..."
            />
            <button className="chatbot-send-button">Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
