import io from 'socket.io-client';
import { JoinSession } from '../interface/joinSession.interface';

const socket = io(process.env.EXPO_PUBLIC_API_URL); // Remplacez par l'URL de votre API

socket.emit('joinSession', { sessionCode: 'ABC123', operatorId: 'player1' } as JoinSession);

socket.emit('startTimer', { sessionId: 'ABC123', duration: 600 });

socket.on('timerUpdate', ({ remaining }) => {
  console.log('Temps restant:', remaining);
  // TODO : Mettre à jour l'UI en conséquence
});

socket.on('gameOver', (data) => {
  console.log(data.message);
  // TODO : Gerer la fin de partie
});
