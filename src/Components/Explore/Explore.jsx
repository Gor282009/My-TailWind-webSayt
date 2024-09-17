import React from 'react'

const exploreItems = [
    {
        id: 1,
        title: "Wonderful View",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOL13MSvAp5rzxLXN7ltynTt2zIx7K66KlA&s"
    },
    {
        id: 2,
        title: "Beautiful Mountain",
        image: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwbG9yZSUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fHww"
    },
    {
        id: 3,
        title: "Wonderful Lake",
        image: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg="
    }
]

function Explore() {
  return (
    <div className=' bg-brandDark'>
        <div className='w-full text-white flex  p-[50px] bg-branDark '>
             {
                exploreItems.map(item => (
                    <div key={item.id} className='w-1/2 md:w-1/3 p-4'>
                        <img src={item.image} alt={item.title} className='w-full h-64 object-cover rounded'/>
                        <h3 className='mt-2 text-xl font-bold'>{item.title}</h3>
                    </div>
                ))
             }            
        </div>
    </div>
  )
}

export default Explore