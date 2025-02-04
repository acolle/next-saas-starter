'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { use } from 'react';
import { User, Team } from '@/lib/db/schema';

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  team: Team | null;
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
  teamPromise
}: {
  children: ReactNode;
  userPromise: Promise<User | null>;
  teamPromise: Promise<Team | null>;
}) {
  let initialUser = use(userPromise);
  let initialTeam = use(teamPromise);

  let [user, setUser] = useState<User | null>(initialUser);
  let [team, setTeam] = useState<Team | null>(initialTeam);

  useEffect(() => {
    setUser(initialUser);
    setTeam(initialTeam);
  }, [initialUser, initialTeam]);

  return (
    <UserContext.Provider value={{ user, setUser, team }}>
      {children}
    </UserContext.Provider>
  );
}
