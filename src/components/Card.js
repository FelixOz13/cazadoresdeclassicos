import ReactPlayer from 'react-player/lazy';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FcWikipedia} from 'react-icons/fc';
import Sponsors from './Sponsors';


 
export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "Vendido"
    }
    else if (props.item.openSpots > 0) {
        badgeText = "Disponible para la Venta"
        
    }


 return (
        
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../imagenes/${props.item.coverImg}`} className="card--image" alt="card" />
                <div className='notranslate'>
             <h1 className="card--title">{props.item.title}</h1>
             <span className="category"> Estilo : {props.item.category}</span> 
             <div className="card--stats">
                    <span className="gray">Precio : {props.item.location}</span>
                    <img src={`../imagenes/${props.item.locationImg}`} className="locationImg" alt="location" />
                </div>
         </div>
         <div>
               <p className="card--price">
                        <span className="bold">{props.item.description}</span>
             </p>
         </div>
         
                 <div className="video">
                        <ReactPlayer
                            className ="video"    
                            width="280px"
                            height="180px"
                            light
                         controls url={props.item.videourl} />
                 </div>
             
                   
                     <div className="third-party-icons">
                         
                     <a target="_blank" rel="noreferrer" href={props.item.facebook}
                     className='icons-fb'>
                    <FaFacebook />
                         </a>
                         
                      <a target="_blank" rel="noreferrer" href={props.item.youtube}
                      className='icons-YT'>
                      <FaYoutube />
                         </a>
                         
                      <a target="_blank" rel="noreferrer" href={props.item.wiki}
                      className='icons-twitter'>
                     <FcWikipedia />
                         </a>
                         
                      <a target="_blank" rel="noreferrer" href={props.item.instagram}
                      className='icons-instagram'>
                         <FaInstagramSquare />
             </a>
              <a target="_blank" rel="noreferrer" href={props.item.tiktok}
                      className='icons-tiktok'>
                         <FaTiktok />
             </a>
         </div>
         <Sponsors />
          <div>
        <h2 className="contactheader">Cazadores de Classicos</h2>
             <img className="flag-logo2" src="../imagenes/cazadoresdeclassicoslogo.jpg" alt="" />   
        <h4 className="contact">Gabriel Arechiga contacto@cazadoresdeclassicos.com
          Whattsap-52+3318032409
        </h4>
      </div>
</div>
          
    )
}
           



                  
                       
        
                       
                       
      
                  
                   
            
        
                       
      
