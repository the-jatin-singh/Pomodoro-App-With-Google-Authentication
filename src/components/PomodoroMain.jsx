import { useEffect, useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import { StateContext } from "../timer/StateProvider";
 
import sound from '../assets/beep.mp3'


export const PomodoroMain = () => {
    const { user } = UserAuth();

    const {active, setActive, time, setTime, playPause, setplayPause, initTime, animationProgress,setAnimationProgress} = useContext(StateContext);

    const handleActiveButton =(buttonIndex)=>{
        setActive(buttonIndex);
    }

    const getTime = (time) => {
        const min = Math.floor(time/60);
        const sec = time % 60;
        return `${min<10? "0"+min:min}:${sec<10?"0"+sec:sec}`
    }
    const togglePlayPause =()=>{
        setplayPause(!playPause)
    }
    const resetTime = () => {
        setTime(initTime)
        setplayPause(false)
    }
    const playSound = () => {
        new Audio(sound).play()
    }

    // For sound and Counter
    useEffect(()=>{

        if(playPause && time>0){
            const interval = setInterval(()=>{
                setTime((time)=>time-1);
            },1000);
            return ()=> clearInterval(interval);

        }
        if(time==0){
            playSound()
        }
       
    },[time, playPause])
 
    // event (space key)
    useEffect(()=>{
        document.body.onkeyup = function(e) {
            if (e.key == " " ||
                e.code == "Space" ||      
                e.keyCode == 32      
            ) {
                togglePlayPause()
            }
          }
    },[playPause])


    useEffect(()=>{
        setAnimationProgress(time/(initTime/100))
        
    },[setAnimationProgress, time])

  return (
    <div className="flex flex-col gap-10">
        <h1 className="welcome-text text-center">Welcome, {user?.displayName}</h1>
        <div className="timer flex flex-col gap-10">
            <div className="watch flex items-center justify-center h-[300px] w-[300px]">
                <div 
                style={{
                    background: `conic-gradient(#4ADE80 ${animationProgress}%, white 0%)`,
                }}
                className="time-circle h-[280px] w-[280px] flex items-center justify-center rounded-full bg-green-400">
                    <div className="h-[270px] w-[270px] flex flex-col items-center justify-center rounded-full bg-gray-100">
                        <p className="time-counter font-black text-[55px] ">{getTime(time)}</p>  {/* Time Counter */ }
                        <div className="flex gap-2">
                            <button 
                            className="text-gray-600"
                            onClick={togglePlayPause}>
                                {time!=0? playPause?'PAUSE':"START":"" }
                            </button>
                            <p>{time!=0? "|":"" }</p>
                            <button
                            className="text-gray-600"
                            onClick={resetTime}>
                            { "RESET"}
                            </button></div>
                        
                    </div>
                </div>
                
            </div>
            <div className="options">
                <div className=" bg-white flex rounded-[90px]  ">

                    <div
                    onClick={() => handleActiveButton(0)}
                    className={`option-button cursor-pointer p-4 w-[50%] ${active=== 0?"active-timer-button":""}`}
                    ><p className="text-center">Work</p></div>

                    <div
                    onClick={() => handleActiveButton(1)}
                    className={`option-button cursor-pointer p-4 w-[50%] ${active=== 1?"active-timer-button":""}`}
                    ><p className="text-center">Short Break</p></div>

                </div>
            </div>
        </div>
    </div>
  )
}
