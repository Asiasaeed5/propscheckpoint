import{players} from "./players"
import Player from "./Player" 

const playerslist=(props)=>{
    return(
    < div style={{display:"flex",justifycontent:"space-between"}}>
{
    players.map((el)=>
    <Player el={el}/>
    )
}
    </div>
    )
}
export default playerslist