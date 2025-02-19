import axios from "axios";
import { JoinSession } from "../interface/joinSession.interface";
import { saveSession } from "../service/session.service";

const createSession = async (agentId: string) => {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/sessions/`,
      { agentId }
    );
    if (response.data.error) {
        // TODO : Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
      } else {
        const session = response.data;
        await saveSession(session);
        // TODO : Rediriger l'opérateur vers l'écran de la session
      }
  } catch (error) {
    console.error("Error creating session:", error);
  }
};

const joinSession = async ({ sessionCode, operatorId }: JoinSession) => {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/sessions/join`,
      {
        sessionCode,
        operatorId,
      }
    );
    if (response.data.error) {
      // TODO : Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    } else {
      const session = response.data;
      await saveSession(session);
      // TODO : Rediriger l'opérateur vers l'écran de la session
    }
  } catch (error) {
    console.error("Error joining session:", error);
  }
};

const clearSession = async (sessionId: string) => {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/sessions/clear`,
      { sessionId }
    );
    if (response.data.error) {
      // TODO : Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
    } else {
      const session = response.data;
      await saveSession(session);
      // TODO : Rediriger l'opérateur vers l'écran de la session
    }
  } catch (error) {
    console.error("Error joining session:", error);
  }
};
