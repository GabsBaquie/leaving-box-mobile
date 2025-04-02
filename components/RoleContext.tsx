import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "agent" | "operator";

type RoleContextType = {
  role: Role | null;
  setRole: (role: Role) => void;
};

export const RoleContext = createContext<RoleContextType>({
  role: null,
  setRole: () => {},
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}