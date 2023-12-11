// AlertSound.js
import React, { useEffect, useState } from 'react';

const AlertSound = () => {
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const playAlertSound = () => {
      if (!audioPlayed) {
        // Lógica para tocar o som de alerta
        // Exemplo: você pode usar a API de áudio do navegador ou uma biblioteca como Howler.js
        const alertSound = new Audio('/path/to/alert-sound.mp3');
        alertSound.play();

        // Marca o som como reproduzido para evitar alertas repetidos
        setAudioPlayed(true);
      }
    };

    // Chama a função para tocar o som quando necessário (por exemplo, quando alguma base atingir 90%)
    playAlertSound();
  }, [audioPlayed]);

  return null; // Este componente não renderiza nada na interface, é apenas para a lógica de reprodução de som
};

export default AlertSound;
