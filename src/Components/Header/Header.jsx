import React from 'react'

function Header() {
  const headerItems = [
    { id: 1, name: "About" },
    { id: 2, name: "Services" },
    { id: 3, name: "Contact" },
  ]
  return (
    <div className=''>
      <header className='w-full flex bg-brandDark p-4 justify-around fixed '>
        <div className='pl-20'>
          <img src="https://thumbs.dreamstime.com/b/owl-illustration-owl-illustration-logo-jpg-ai-278162984.jpg" alt="" className='
        w-[100px] h-[50px] object-contain'/>
        </div>
        <nav>
          <ul className='flex gap-10 ite'>
            {
              headerItems.map(item => (
                <li key={item.id}>
                  <a href="" className='text-white'>{item.name}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header