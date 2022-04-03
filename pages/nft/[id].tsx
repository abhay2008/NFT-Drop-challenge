import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react"

function NFTDropPage() {

  // Authentication
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  // ---

  console.log(address)

  return <div className="fles h-screen flex-col lg:grid lg:grid-cols-10">
    {/* Left */}
    <div className='lg:col-span-4 bg-gradient-to-br from-blue-800 to-purple-500'>
      <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
        <div className="bg-gradient-to-br from-lime-300 to-cyan-300 p-2 rounded-xl">
          <img className="w-44 rounded-xl object-cover lg:h-88 lg:w-84" src="https://wallpaperaccess.com/full/765574.jpg" alt="" /> 
        </div>
        <div className="space-y-2 p-5 text-center">
          <h1 className="text-4xl font-bold text-white">Discorduto! Hey bud!</h1>
          <h2 className="text-2xl text-gray-100">What's up?</h2>
        </div>
      </div>
    </div>
    
    {/* Right */}
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="w-52 cursor-pointer font-extralight sm:w-80">
          <span className="font-extrabold underline decoration-blue-500/50">Discord</span> NFT Market Place
        </h1>

        <button onClick={() => address ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-3 lg:py-3 lg:text-base'>{address ? 'Sign Out' : 'Sign In'}</button>

      </header>

      <hr className="my-2 border" />
      {address && (
        <p className="text-center text-sm text-rose-400">You're logged in with wallet <span className="font-extrabold">{address.substring(0, 5)}...{address.substring(address.length - 5)}</span></p>
      )}

      {/* Content */}
      <div className="mt-10 flex flex-1 flex-col items-center space-y-2 text-center lg:justify-center">
        <img className="w-80 object-cover pb-6 lg:h-40" src="https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg" alt="" />
        <h1 className="text-3xl font-bold lg:text-4xl lg:font-extrabold">Discorduto Money Minters</h1>
        <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
      </div>

      {/* Mint Button */}
      <button className="h-16 w-full text-white rounded-full mt-10 font-bold bg-gradient-to-br from-purple-500 to-cyan-300">
        Mint NFT (0.01 ETH)
      </button>
    </div>
  </div>
}

export default NFTDropPage