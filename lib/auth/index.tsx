'use client';

import { createContext, useContext, ReactNode } from 'react';
import { UserWithTeamData } from '@/lib/db/schema';

type UserContextType = {
  userPromise: Promise<UserWithTeamData | null>;
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
  userPromise
}: {
  children: ReactNode;
  userPromise: Promise<UserWithTeamData | null>;
}) {
  return (
    <UserContext.Provider value={{ userPromise }}>
      {children}
    </UserContext.Provider>
  );
}