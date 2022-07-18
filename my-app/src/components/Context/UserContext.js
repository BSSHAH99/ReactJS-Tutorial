import { createContext } from "react";

const UserContext = createContext("B.S.Shah");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
