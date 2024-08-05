import { createContext, useContext } from "react"
import { AppUser } from "../pages/PracticePage";

let UserContextProvider = createContext<AppUser | undefined>(undefined);

function getUserContext()
{
    var context = useContext(UserContextProvider);
    
    if(context === undefined)
    {
        context = {Name: "ADefault", Age: 99};
    }

    return context;
}

export default getUserContext;

interface CountType{
    count: number,
    setCount(count: number): void
}
export const countContext = createContext<CountType | null>(null);