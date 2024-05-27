import { createContext } from "react";

// class is used to initialize context with default values
export const UserContext = createContext({ user: null, username: null });
