import React from 'react'
import 'tw-elements';
import styles from "../styles/Home.module.css"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Sales/ month",
            fill: true,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
        },
    ],
};

const cards = () => {
    return (

        <div class="flex flex-col bg-gray-300">
            <div class='flex flex-row flex-wrap justify-evenly mt-8 mb-8 relative'>
                {/* Card 1 */}

                <div className="bg-white w-3/12 rounded-lg">
                    <div class='m-4 flex justify-between font-bold'>
                        <p> Actions Needed </p>
                      
                        <div class="flex justify-center">
                            <div>
                                <div class="dropdown relative">
                                    <button
                                        class="
                                                dropdown-toggle
                                                
                                                rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                
                                                
                                                
                                                
                                                flex
                                                items-center
                                                whitespace-nowrap
                                                "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                    <ul
                                        class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >New Group</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                                dropdown-item
                                                                text-sm
                                                                py-2
                                                                px-4
                                                                font-normal
                                                                block
                                                                w-full
                                                                whitespace-nowrap
                                                                bg-transparent
                                                                text-gray-700
                                                                hover:bg-gray-100
                                                                "
                                                href="#"
                                            >Contacts</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >Calls</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                            

                            

                    </div>

                    <div class="flex flex-row">

                        <div class="circle-big">
                            <div class="text">
                                87%
                            </div>
                            <svg>
                                <circle class="bg" cx="57" cy="57" r="52"></circle>
                                <circle class="progress" cx="57" cy="57" r="52"></circle>
                            </svg>
                        </div>
                    </div>

                    <div class="justify-between">
                        <p class="text-sm text-black-200 ml-8 mt-14">Notes: Current sprint requires stakeholders <br></br>
                            to approve newly amended policies</p>
                    </div>
                    <div class="flex space-x-2 justify-center">

                        <button type="button" class="inline-block px-6 py-2.5 mt-8 mb-4 bg-teal-400 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Generate Report</button>

                        {/* <button class="bg-teal-300/75 font-bold h-8 px-4 m-2 mt-14 rounded-lg text-xs text-gray-400 "> Generate Report</button> */}
                    </div>


                </div>


                {/* Card 2 */}
                <div className="bg-white w-3/12 rounded-lg">
                    <div class='m-4 flex justify-between font-bold'>
                        <p> My Activity </p>
                        <div class="flex justify-center">
                            <div>
                                <div class="dropdown relative">
                                    <button
                                        class="
                                                dropdown-toggle
                                                
                                                rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                
                                            
                                                
                                                
                                                flex
                                                items-center
                                                whitespace-nowrap
                                                "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                    <ul
                                        class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        shadow-lg
                                                        border-none
                                                        "
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >New Group</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                                dropdown-item
                                                                text-sm
                                                                py-2
                                                                px-4
                                                                font-normal
                                                                block
                                                                w-full
                                                                whitespace-nowrap
                                                                bg-transparent
                                                                text-gray-700
                                                                hover:bg-gray-100
                                                                "
                                                href="#"
                                            >Contacts</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >Calls</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="m-4 mt-8">
                        <ul id="progress">
                            <li><div class="node green"></div><p class="text-gray-400">Hello</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node red"></div><p>The Second Thing!</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node blue"></div><p>The Third Thing!</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node purple"></div><p>The Fourth Thing!</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node green"></div><p class="text-gray-400">The Last Thing!</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node red"></div><p class="text-gray-400">The Fourth Thing!</p></li>
                            <li><div class="divider grey"></div></li>
                            <li><div class="node purple"></div><p class="text-gray-400">The Fourth Thing!</p></li>
                        </ul>
                    </div>
                </div>


                {/* CARD 3 */}

                <div className='text-bold text-black bg-white w-3/12 rounded-lg'>

                    <div class='m-4 flex justify-between font-bold'>
                        <p> Tasks Overview </p>
                        <div class="flex justify-center">
                            <div>
                                <div class="dropdown relative">
                                    <button
                                        class="
                                                dropdown-toggle
                                                rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                
                                                
                                                
                                                
                                                flex
                                                items-center
                                                whitespace-nowrap
                                                "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                    <ul
                                        class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >New Group</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                                dropdown-item
                                                                text-sm
                                                                py-2
                                                                px-4
                                                                font-normal
                                                                block
                                                                w-full
                                                                whitespace-nowrap
                                                                bg-transparent
                                                                text-gray-700
                                                                hover:bg-gray-100
                                                                "
                                                href="#"
                                            >Contacts</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                                href="#"
                                            >Calls</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-8 m-4">
                        <div class="flex flex-row  mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-sky-300 p-2" fill="blue">
                                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" /></svg>

                            <div class="ml-4">
                                <p class="text-sm font-semibold"> Project Briefing </p>
                                <p class="text-xs text-slate-500"> Project Manager</p>
                            </div>
                        </div>

                        <div class="flex flex-row mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-yellow-400 p-2" fill="yellow">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            </svg>
                            <div class="ml-4">
                                <p class="text-sm font-semibold"> Concept Design </p>
                                <p class="text-xs text-slate-500"> Art Director</p>
                            </div>
                        </div>

                        <div class="flex flex-row mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-green-300 p-2" fill="green">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"/>
                            </svg>
                            <div class="ml-4">
                                <p class="text-sm font-semibold"> Development </p>
                                <p class="text-xs text-slate-500">DevOps</p>
                            </div>
                        </div>

                        <div class="flex flex-row mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-red-300 p-2" fill="red">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <div class="ml-4">
                                <p class="text-sm font-semibold"> Functional Logics </p>
                                <p class="text-xs text-slate-500"> Lead Developer </p>
                            </div>
                        </div>


                        <div class="flex flex-row mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 bg-purple-300 p-2" fill="purple">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>

                            </svg>
                            <div class="ml-4">
                                <p class="text-sm font-semibold"> Testing </p>
                                <p class="text-xs text-slate-500"> QA Managers</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-evenly mt-1 mb-8">
                {/* CARD 4  */}
                <div className="bg-white rounded-lg w-3/12 h-96 ml-6">
                    <div class='m-4 mt-3 flex justify-between font-bold'>
                        Charts           
                    </div>
                    <div class="flex flex-col">

                    <div className={styles.charts}>
                        <div className={styles.bar}>

                            <Line data={data} width={375} height={375} padding-top="10rem" />
                        </div>
                    </div>
                    </div>

                </div>
                {/* CARD 5 */}
                <div className="bg-white inline-block w-7/12 rounded-lg ml-6">
                    <div class='m-4 flex flex-row justify-between font-bold'>
                        <p> New Arrivals </p>
                        <div class="flex items-center justify-center">
                            <div class="inline-flex">
                                <button type="button" class="rounded-lg inline-block text-gray-500 px-6 py-2.5 font-medium text-xs leading-tight uppercase hover:bg-black hover:text-yellow-300 focus:bg-black">Left</button>
                                <button class="rounded-lg px-6 py-2.5  text-gray-500 font-medium text-xs leading-tight uppercase hover:bg-black hover:text-yellow-300 focus:bg-black">Middle</button>
                                <button type="button" class="rounded-lg inline-block px-6 py-2.5 text-gray-500 font-medium hover:text-yellow-300 text-xs leading-tight uppercase hover:bg-black focus:bg-black">Right</button>
                            </div>
                        </div>
                    </div>



                    <div class="flex flex-col">

                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">

                                        <tbody class="text-gray-600 text-sm font-light">

                                            <tr>
                                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="mr-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                                width="35" height="35"
                                                                viewBox="0 0 48 48"
                                                                style={{ fill: '#000000' }}>
                                                                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                                            </svg>
                                                        </div>
                                                        <span class="font-medium">React Project</span>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-left">
                                                    <div class="flex items-center">
                                                        <div class="mr-2 font-bold ">
                                                            $2,00,000

                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex items-center justify-center">
                                                        React JS, HTML
                                                    </div>
                                                </td>

                                                <td class="py-3 px-6 text-center">
                                                    <span class="bg-purple-200 text-purple-600 py-2 px-3 rounded-lg text-xs">Approved</span>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex item-center justify-center">
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="mr-2">
                                                            <img class="w-10 h-10" src="https://img.icons8.com/color/48/000000/pinterest--v1.png" />
                                                        </div>
                                                        <span class="font-medium">Application</span>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-left">
                                                    <div class="flex items-center">
                                                        <div class="mr-2 font-bold ">
                                                            $2,00,000

                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex items-center justify-center">
                                                        React JS, HTML
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <span class="bg-yellow-200 text-yellow-600 py-2 px-3 rounded-lg text-xs">Scheduled</span>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex item-center justify-center">
                                                    

                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>













                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="mr-2">
                                                            <img class="w-10 h-10" src="https://img.icons8.com/color/48/000000/telegram-app--v1.png" />
                                                        </div>
                                                        <span class="font-medium">React Project</span>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-left">
                                                    <div class="flex items-center">
                                                        <div class="mr-2 font-bold ">
                                                            $2,00,000

                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex items-center justify-center">
                                                        React JS, HTML
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <span class="bg-green-200 text-green-600 py-2 px-3 rounded-lg text-xs">Successful</span>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex item-center justify-center">
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="mr-2">
                                                            <img class="w-10 h-10" src="https://img.icons8.com/color/48/000000/angularjs.png" />
                                                        </div>
                                                        <span class="font-medium">React Project</span>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-left">
                                                    <div class="flex items-center">
                                                        <div class="mr-2 font-bold ">
                                                            $2,00,000

                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex items-center justify-center">
                                                        React JS, HTML
                                                    </div>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <span class="bg-red-200 text-red-600 py-2 px-3 rounded-lg text-xs">Rejectedd</span>
                                                </td>
                                                <td class="py-3 px-6 text-center">
                                                    <div class="flex item-center justify-center">
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>

            {/* Card 6 */ }

    <div class='flex flex-row flex-wrap justify-evenly mt-1 mb-8'>


        <div className="bg-white w-3/12 h-5/6 rounded-lg ml-6">
            <div class='m-4 flex justify-between font-bold'>
                <p> Authors </p>
                <div class="flex justify-center">
                    <div>
                        <div class="dropdown relative">
                            <button
                                class="
          dropdown-toggle
          px-4
          py-1.5
          bg-blue-500 
          text-white
          font-medium
          text-xs
          
       
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Create
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    class="w-2 ml-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                    ></path>
                                </svg>
                            </button>
                            <ul
                                class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                        href="#"
                                    >New Group</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                        href="#"
                                    >Contacts</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                        href="#"
                                    >Calls</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* start */}
            <div class="mt-8 m-4">
                <div class="flex justify-between">
                    <div class="flex flex-row mb-8">
                        <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg" />
                        <div class="ml-4">
                            <p class="text-sm font-semibold"> Ricky Hunt </p>
                            <p class="text-xs text-slate-500"> PHP, SQLite</p>
                        </div>

                    </div>
                    <div className='justify-center'>
                        <div>
                            <div class="dropdown relative">
                                <button
                                    class="
                                                        dropdown-toggle
                                                        rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                        flex
                                                        items-center
                                                        whitespace-nowrap
                                                        "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </button>
                                <ul
                                    class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >New Group</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Contacts</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Calls</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card end */}
            <div class="m-4">
                <div class="flex justify-between">
                    <div class="flex flex-row mb-8">
                        <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                        <div class="ml-4">
                            <p class="text-sm font-semibold"> Kristaps Zumman </p>
                            <p class="text-xs text-slate-500"> React JS, PHP</p>
                        </div>

                    </div>
                    <div className='justify-center'>
                        <div>
                            <div class="dropdown relative">
                                <button
                                    class="
                                                        dropdown-toggle
                                                        rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                        flex
                                                        items-center
                                                        whitespace-nowrap
                                                        "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </button>
                                <ul
                                    class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >New Group</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Contacts</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Calls</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Card end */}


            <div class="m-4">
                <div class="flex justify-between">
                    <div class="flex flex-row mb-8">
                        <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg" />
                        <div class="ml-4">
                            <p class="text-sm font-semibold"> Rick Sans </p>
                            <p class="text-xs text-slate-500"> Project Manager</p>
                        </div>

                    </div>
                    <div className='justify-center'>
                        <div>
                            <div class="dropdown relative">
                                <button
                                    class="
                                                        dropdown-toggle
                                                        rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                        flex
                                                        items-center
                                                        whitespace-nowrap
                                                        "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </button>
                                <ul
                                    class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >New Group</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Contacts</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Calls</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* Card end */}
            <div class="m-4">
                <div class="flex justify-between">
                    <div class="flex flex-row mb-8">
                        <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg" />
                        <div class="ml-4">
                            <p class="text-sm font-semibold"> Lawrens Peter </p>
                            <p class="text-xs text-slate-500"> Project Manager</p>
                        </div>

                    </div>
                    <div className='justify-center'>
                        <div>
                            <div class="dropdown relative">
                                <button
                                    class="
                                                        dropdown-toggle
                                                        rounded
                                                hover:bg-blue-200 hover:shadow-lg
                                                        flex
                                                        items-center
                                                        whitespace-nowrap
                                                        "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#808080" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </button>
                                <ul
                                    class="
                                                        dropdown-menu
                                                        min-w-max
                                                        absolute
                                                        hidden
                                                        bg-white
                                                        text-base
                                                        z-50
                                                        float-left
                                                        py-2
                                                        list-none
                                                        text-left
                                                        rounded-lg
                                                        shadow-lg
                                                        mt-1
                                                        hidden
                                                        m-0
                                                        bg-clip-padding
                                                        border-none
                                                        "
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >New Group</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Contacts</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="
                                                            dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-4
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "
                                            href="#"
                                        >Calls</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card end */}





                {/* card end */}
            </div>

        </div>

        {/* Card 7 */}

        <div className="bg-white w-7/12 ml-6 rounded-lg">
            <div class='m-4 flex justify-between font-bold'>
                <p> Agents Stat </p>
                <div class="flex space-x-2 justify-center">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >New Report</button>

                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-200transition duration-150 ease-in-out"
                    >Create</button>
                </div>



            </div>
            <div class="flex flex-col">

                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead>
                                    <tr class="uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left text-gray-600">PRODUCTS</th>
                                        <th class="py-3 px-6 text-left text-gray-400">EARNINGS</th>
                                        <th class="py-3 px-6 text-center text-gray-400">COMPANY</th>
                                        <th class="py-3 px-6 text-center text-gray-400">Status</th>

                                    </tr>
                                </thead>

                                <tbody class="text-gray-600 text-sm font-light">

                                    <tr>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                
                                                <span class="font-medium">Brad Simmons</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="mr-2 font-bold ">
                                                    $2,00,000

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                React JS, HTML
                                            </div>
                                        </td>

                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-purple-200 text-purple-600 py-2 px-3 rounded-lg text-xs">Approved</span>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex item-center justify-center">
                                                <button className='text-white h-10 px-4 bg-teal-400 hover:bg-teal-500 text-xs rounded justify-center'>View Offer</button>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                
                                                <span class="font-medium">Application</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2 font-bold ">
                                                    $2,00,000

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                React JS, HTML
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-yellow-200 text-yellow-600 py-2 px-3 rounded-lg text-xs">Scheduled</span>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex item-center justify-center">
                                                <button className='text-white h-10 px-4 bg-teal-400 hover:bg-teal-500 text-xs rounded justify-center'>View Offer</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                
                                                <span class="font-medium">React Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2 font-bold ">
                                                    $2,00,000

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                React JS, HTML
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-green-200 text-green-600 py-2 px-3 rounded-lg text-xs">Successful</span>
                                        </td>
                                        <td class="text-center">
                                            <div class="flex item-center justify-center">


                                                <button className='text-white h-10 px-4 bg-teal-400 hover:bg-teal-500 text-xs rounded justify-center'>View Offer</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                
                                                <span class="font-medium">React Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2 font-bold ">
                                                    $2,00,000

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                React JS, HTML
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-red-200 text-red-600 py-2 px-3 rounded-lg text-xs">Rejectedd</span>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex item-center justify-center">
                                                <button className='text-white h-10 px-4 bg-teal-400 hover:bg-teal-500 text-xs rounded justify-center'>View Offer</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                
                                                <span class="font-medium">React Project</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2 font-bold ">
                                                    $2,00,000

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                React JS, HTML
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <span class="bg-red-200 text-red-600 py-2 px-3 rounded-lg text-xs">Rejectedd</span>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex item-center justify-center">
                                                <button className='text-white h-9 px-4 bg-teal-400 hover:bg-teal-500 text-xs rounded justify-center'>View Offer</button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img class="w-48 h-48 mt-8 bg-red-400" src="https://img.icons8.com/wired/64/000000/line-chart.png"/> */}
        </div>

    </div>




        </div >



    )
}

export default cards