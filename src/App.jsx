import React from 'react'

import './App.css'
import Todo from './pages/Todo'
import Header from './components/Header'
// import Copyright from './components/Footer/Copyright'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>

         
          <Todo />
        </main>

        {/* <Copyright /> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
