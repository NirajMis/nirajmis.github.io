import React from 'react'

function Header(props) {
    return (
        <div className="flex flex-wrap w-full my-12 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl mb-2 text-white font-bold">{props.hname}</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-white font-semibold">{props.hdescription}</p>
        </div>
    )
}

export default Header