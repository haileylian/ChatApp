/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext, useRef } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  const socketRef = useRef(null);

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000/", {
        query: {
          userId: authUser._id,
        },
      });

      socket.on("connect", () => {
        console.log("Connected to socket server");
      });

      socket.on("getOnlineUsers", users => {
        setOnlineUsers(users);
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from socket server");
      });

      socketRef.current = socket;

      return () => {
        socket.close();
        socketRef.current = null;
      };
    } else {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    }
  }, [authUser]); // Only depend on authUser

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

// import { createContext, useState, useEffect, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// const SocketContext = createContext();

// export const useSocketContext = () => {
//   return useContext(SocketContext);
// };

// export const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { authUser } = useAuthContext();

//   useEffect(() => {
//     if (authUser) {
//       const socket = io("http://localhost:5000/", {
//         query: {
//           userId: authUser._id,
//         },
//       });

//       setSocket(socket);

//       // socket.on() is used to listen to the events. can be used both on client and server side
//       socket.on("getOnlineUsers", users => {
//         setOnlineUsers(users);
//       });

//       return () => socket.close();
//     } else {
//       if (socket) {
//         socket.close();
//         setSocket(null);
//       }
//     }
//   }, [authUser, socket]);

//   return (
//     <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
//   );
// };
