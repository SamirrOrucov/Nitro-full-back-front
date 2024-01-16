import React, { useEffect, useState } from 'react'
import OurServiceCard from './OurServiceCard/OurServiceCard'
import "./OurServices.scss"
function OurServices() {
    const [dbData, setDbData] = useState([])
    const [search, setsearch] = useState('')
    const [sortBy, setSortBy] = useState(second)
   async function getFetch() {
        const result= await fetch("http://localhost:3003/")
        const data=await result.json()
        setDbData (data)   
    }
   async function deleteCard(id) {
       await fetch('http://localhost:3003/'+id, { method: 'DELETE' })
       .then(()=>setDbData((prevData)=>prevData.filter((x)=>x._id!==id)))

        
    }
useEffect(() => {
 
    getFetch()
}, [])

  return (
    <div className="cards">

<input type="text" name="" id="" placeholder='Enter name of service' onChange={e=>setsearch(e.target.value)} />
<button onChange={()=>setSortBy({field:"title", asc:true})}>A-Z</button>
<button onChange={()=>setSortBy({field:"title", asc:false})}>Z-A</button>
    <div className='cards_container'>
        {
            dbData
            .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) => {
                if (sortBy&&sortBy.asc) {
                    return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
                }else if (sortBy&&sortBy.asc ===  false) {
                 return   (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
                    
                }else{
                    return 0
                }

            })
                
            
            .map((x)=>
                
                <OurServiceCard key={x._id } id={x._id} getfetch={getFetch}  icon={x.icon} title={x.title} desc={x.description}
                deleteCard={()=>deleteCard(x._id)}/>
                )
        }

    </div>
    </div>
  )
}

export default OurServices