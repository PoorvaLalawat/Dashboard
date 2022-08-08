import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="p-2 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://Metronic.com/" className="hover:underline">Metronic</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Team</a>
                    </li>
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li> */}
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        </div>
    )
}

export default Footer


