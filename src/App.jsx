import React, {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar'



const api = {
  key: '75e8d2726ab8f06e826821a6b45563e5', 
  base: 'https://api.openweathermap.org/data/2.5/'
}


const App = () => {
  return (
    <div className='grid h-screen place-content-center'>
      <main>
        <SearchBar />
      </main>
    </div>
  )
}

export default App
