import path from './images/Path.png'
import img1 from './images/b_palace.jpg'
import img2 from './images/tipu.jpg'
import img3 from './images/hal.jpg'
import img4 from './images/g_museum.jpg'
import img5 from './images/commercial.jfif'

function Place(props) {
    let imgg;
   switch(props.id)
   {
    case "1" :
        {
            imgg = `${img1}`;
            break;
        }
    case "2" :
        {
            imgg = `${img2}`;
            break;
        }
    case "3" :
        {
            imgg = `${img3}`;
            break;
        }
    case "4" :
        {
            imgg = `${img4}`;
            break;
        }
    case "5" : 
        {
            imgg = `${img5}`;
            break;
        }     
  }
    return (
        
        <div className="place">
            <div className="rbg">
                <img src= {imgg} alt="location image"className="place--phts"/>
            </div>
            <div className="detail">
                <div className="loc">
                    <img src={path} />
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h4>{props.title}</h4>
                <h5>{props.startDate} - {props.endDate}</h5>
                <h6>{props.description}</h6>
                <hr />
                
            </div>
        </div>
    )
}

export default Place;