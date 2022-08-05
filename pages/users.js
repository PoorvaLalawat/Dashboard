import React from 'react'
import Layout from "../components/Layout"
import Footer from "../components/Footer";
const users = () => {
  return (
  
      <Layout>

{/* 
<div class="container">
        <div>
            <div class="card">
                <div class="card-header">
                    <div class="card-photo">
                        <img src="https://demos.creative-tim.com/impact-design-system-pro/docs/assets/img/team/6.jpg" alt=""></img>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-name">Beni Smith</h3>
                    <p class="card-description">User Interface Designer and <br/>front-end developer</p>
                    <div class="card-button">
                        <button class="btn btn-primary">Message</button>
                        <button class="btn btn-outline-primary">Following</button>
                    </div>
                    <ul class="card-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> */}


<div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
  <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
     <div class="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
     <div class="text-center mt-2 font-light text-sm">@devpenzil</div>
     <div class="text-center font-normal text-lg">Kerala</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
         Front end Developer, avid reader. Love to take a long walk, swim
       </p>
     </div>
     <hr class="mt-8"/>
     <div class="flex p-4">
       <div class="w-1/2 text-center">
         <span class="font-bold">1.8 k</span> Followers
       </div>
       <div class="w-0 border border-gray-300">
         
       </div>
       <div class="w-1/2 text-center">
         <span class="font-bold">2.0 k</span> Following
       </div>
     </div>
  </div>
</div>
        <Footer/>
      </Layout>
      
    
  )
}

export default users
