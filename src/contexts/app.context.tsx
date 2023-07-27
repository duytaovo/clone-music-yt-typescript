import { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLS, getProfileFromLS } from 'src/utils/auth'

interface AppContextInterface {
  profile: User | null
  profileWithGG: String | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  setProfileWithGG: React.Dispatch<React.SetStateAction<String | null>>
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  reset: () => void
  isPlaying: boolean;
  setPlaying: (isPlaying: boolean) => void;
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,

}


export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  profileWithGG: localStorage.getItem("email") ,
  setProfile: () => null,
  setProfileWithGG: () => null,
  reset: () => null,
  isPlaying:false,
  setPlaying: () => {},
  openModal:false,
  setOpenModal: () => {},
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)
  const [isPlaying, setPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [profile, setProfile] = useState<User | null>(defaultValue.profile)
  const [profileWithGG, setProfileWithGG] = useState<String | null>(defaultValue.profileWithGG)

  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        reset,
        isPlaying, 
        setPlaying,
        profile,
        setProfile,
        openModal,
        setOpenModal,
        profileWithGG,
        setProfileWithGG,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
