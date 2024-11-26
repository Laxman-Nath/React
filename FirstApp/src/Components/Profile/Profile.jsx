import { ProfileCard } from "./ProfileCard"

export const Profile=()=>{
    return <ProfileCard name="Laxman" age={23} address="mahendranagar"
    information={<div>
        <h1> Thank you for visiting my profile.</h1>
      
    </div>}>
        <button>Click ok</button>  
        <button>Show more</button>
    </ProfileCard>
}