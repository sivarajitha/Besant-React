import { useState, useCallback, useEffect , useRef } from 'react'

import './App.css'

function App() {
    const [length, setLength ] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charlAllowed, setcharAllowed] = useState(false)
    const [password, setPassword] = useState('')


    const passwordRef = useRef (null)

    const generatePassword = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str += "0123456789"
      if (charlAllowed) str += "!@#$%^&*()_+"

      for (let i = 1; i < length; i++){
        const char = Math.floor(Math.random() * str.length + 1)
        pass +=str.charAt(char)
      }

      setPassword(pass)

    
    }, [length, numberAllowed, charlAllowed])


    useEffect(() => {
      generatePassword()
    }, [length, numberAllowed, charlAllowed])


    const copyPasswordToClipboard = () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0, 4)
    }


  return (
    <>
      <div className='w-full max-w-md max auto shaddow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 p-3'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
            />

            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div
          className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=> {
            setNumberAllowed((prev)=> !prev)
          }}
          name="" 
          id=""
           />
           <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charlAllowed}
          onChange={() => {
            setcharAllowed ((prev) => !prev)
          }}
          name=""
          id="" />
      <label htmlFor='CharInput'>Character</label>
        </div>
        
        </div>

       
      </div>
    </>
  )
}

export default App