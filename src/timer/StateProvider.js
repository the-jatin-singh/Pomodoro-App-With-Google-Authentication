import Reac,{createContext, useState, useEffect} from 'react'


export const StateContext = createContext();

const StateProvider = ({children}) => {

    const [workTime,setWorkTime] = useState(25*60 )
    const [shortBreakTime,setShortBreakTime] = useState(5*60)

    const [initTime,setInitTime] = useState(0)
    const [animationProgress,setAnimationProgress] = useState(0)

    const [ active, setActive ] = useState(0);
    const [ time, setTime ] = useState(0);
    const [playPause, setplayPause] = useState(false);

    useEffect(()=>{
        switch(active) {
            case 0:
                setTime(workTime);
                setInitTime(workTime);
                break;
            case 1:
                setTime(shortBreakTime);
                setInitTime(shortBreakTime);
                break;
            default:
                break;
        }

    },[active, workTime, shortBreakTime])

    return (
    <StateContext.Provider value={{ active, setActive, time, setTime, playPause, setplayPause, initTime,setInitTime, animationProgress, setAnimationProgress }}>
        {children}
    </StateContext.Provider>
)}

export default StateProvider  