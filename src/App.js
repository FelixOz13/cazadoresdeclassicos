import Card from "./components/Card"
import bandsData from "./data/bandsData"
import Navbar from "./components/Navbar"

export default function CardApp() {
    const cards = bandsData.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                 />
        )
    })        
    
           
    return (
       
        <div>
             <Navbar/>
            <section className="cards-list">
               {cards}
            </section>
            
        </div>
    )
}
        
        
    
    


    
         
    
 