'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { use } from 'react';
import { UserWithTeamData } from '@/lib/db/schema';

type UserContextType = {
  user: UserWithTeamData | null;
  setUser: (user: UserWithTeamData | null) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function useUser(): UserContextType {
  let context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({
  children,
  userPromise,
}: {
  children: ReactNode;
  userPromise: Promise<UserWithTeamData | null>;
}) {
  let initialUser = use(userPromise);

  let [user, setUser] = useState<UserWithTeamData | null>(initialUser);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
