import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="p-2 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <span class="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://Metronic.com/" class="hover:underline">Metronic</a>
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Team</a>
                    </li>
                    {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li> */}
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        </div>
    )
}

export default Footer


