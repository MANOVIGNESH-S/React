import './Assets/css/style.css'
import {CloudOff , CloudSun ,CloudRain ,CloudRainWind ,ShieldQuestion,ShieldCheck,ShieldBan,ShieldAlert,Volume ,VolumeX ,Volume1,Volume2,SunDim,SunMoon,SunSnow,SunMedium} from 'lucide-react'
export const Table=()=>{
    return(
        <>
        <center>
            <table>
               <tr><td><CloudOff size={48} strokeWidth={3}/></td><td><CloudSun size={48} strokeWidth={3}/></td><td><CloudRain size={48} strokeWidth={3}/></td><td><CloudRainWind size={48} strokeWidth={3}/></td></tr>
               <tr><td><Volume2 size={48} strokeWidth={3}/></td><td><VolumeX size={48} strokeWidth={3}/></td><td><Volume1 size={48} strokeWidth={3}/></td><td><Volume size={48} strokeWidth={3}/></td></tr>
               <tr><td><SunDim size={48} strokeWidth={3}/></td><td><SunMoon size={48} strokeWidth={3}/></td><td><SunSnow size={48} strokeWidth={3}/></td><td><SunMedium size={48} strokeWidth={3}/></td></tr>
               <tr><td><ShieldQuestion size={48} strokeWidth={3}  /></td><td><ShieldCheck size={48} strokeWidth={3}/></td><td><ShieldBan size={48} strokeWidth={3}/></td><td><ShieldAlert size={48} strokeWidth={3}/></td></tr>
            </table>
            </center>
        </>

    )
}