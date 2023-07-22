import { useEffect, useRef, useState } from "react"
import { useAppDispatch } from "./useRedux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateHistory } from "src/store/slices/route"
import { Path } from "src/types/types.type"


const useRouteHistory = (): any => {
    const preRoute = useRef<Path>({});
    const currentRoute = useRef<Path>({});
    const location: Path = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    
    useEffect(() => {
      currentRoute.current = location;
      dispatch(updateHistory({
        preRoute: preRoute.current,
        currentRoute: location,
      }));
    }, [location]);
  
    if (currentRoute.current?.pathname !== location.pathname) {
      preRoute.current = currentRoute.current;
    }
    if(preRoute.current == undefined){
      navigate("/")
    }
    return {
      preRoute: preRoute.current,
      currentRoute: currentRoute.current,
    };
  };
  

export default useRouteHistory
