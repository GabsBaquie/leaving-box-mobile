import axios from "axios";
import { JoinSession } from "../interface/joinSession.interface";
import { saveSession } from "../service/session.service";
import { io } from "socket.io-client";
import { SessionResponse } from "../interface/sesssion.interface";

const socket = io("http://192.168.86.236:3000", {
  transports: ["websocket"],
  upgrade: false,
  forceNew: true,
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});

socket.on("connect", () => {
  console.log("Socket connected:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});

socket.on("disconnect", (reason) => {
  console.log("Socket disconnected:", reason);
});

export const createSession = async (agentId: string) => {
  try {
    socket.emit(
      "createSession",
      { agentId },
      async (response: SessionResponse) => {
        if (response.session) {
          const session = response.session;
          await saveSession(session);
          console.log(response.message, session);
          return response;
          // TODO : Rediriger l'opérateur vers l'écran de la session
        } else {
          console.log(response.message);
          return response.message;
          // TODO : Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
        }
      }
    );
  } catch (error) {
    console.error("Error creating session:", error);
  }
};

export const joinSession = async ({ sessionCode, operatorId }: JoinSession) => {
  try {
    socket.emit(
      "joinSession",
      { sessionCode, operatorId } as JoinSession,
      async (response: SessionResponse) => {
        if (!response.session && response.message) {
          console.log(response.message);
          return response.message;
          // TODO : Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
        } else {
          const session = response.session;
          await saveSession(session);
          console.log(response.message, session);
          return response;
          // TODO : Rediriger l'opérateur vers l'écran de la session
        }
      }
    );
  } catch (error) {
    console.error("Error joining session:", error);
  }
};

export const clearSession = async (sessionId: string) => {
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
