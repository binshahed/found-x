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

// Initialize the context with default values (or undefined)
const UserContext = createContext<IUserProvider | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("C user", user);

  const handleUser = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

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
