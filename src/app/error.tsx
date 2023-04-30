'use client'

import type { NextPage } from 'next'
import { useEffect } from 'react'

const Custom404: NextPage<{
  error: Error;
  reset: () => void;
}> = ({ error, reset }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>

      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 my-5 transition-opacity ease-in duration-300"
        role="alert"
      >
        <span className="font-medium">{ error.name }</span>
        {error.message && <span className="border-l-2 border-current pl-2 ml-2">{ error.message }</span>}
      </div>

      <button
        type="button"
        className="
          inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg
          text-sm font-medium text-gray-900
          group bg-blue-500 hover:bg-blue-600 hover:text-white
          focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
      >
        <span className="px-[1.1rem] py-1.5 transition-colors ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Try Again
        </span>
      </button>
    </div>
  )
}

export default Custom404
