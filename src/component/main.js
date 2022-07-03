import data from '../data.js'
import Place from '../place'


function Main() {
    const tile = data.map(item => {
        return (
            <Place 
                id = {item.id}
                title = {item.title}
                location = {item.location}
                googleMapsUrl ={item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    })
    return (
        <div className="main">
            {tile}
        </div>
    )
}
export default Main;