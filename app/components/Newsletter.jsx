import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-gray-200 w-full py-6 mt-14">
    <div className="px-4 md:px-8">
      <div className="rounded-lg p-4 sm:p-8">
        <div className="mb-4 sm:mb-8">
          <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
            Newsletter
          </h2>
          <p className="text-center text-gray-500">Obtenga las últimas actualizaciones</p>
        </div>
        <form className="mb-3 mx-auto flex w-full max-w-md gap-2 sm:mb-5">
          <input
            placeholder="Email"
            className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
  
          <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Newsletter
