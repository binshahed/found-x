"use client";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  createContext,
  useState
} from "react";
import { getUser } from "../services/authService";

interface IUserProvider {
  user: TUserData | null;
  setUser: Dispatch<SetStateAction<TUserData | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserProvider | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
