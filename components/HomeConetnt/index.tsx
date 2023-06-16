import React from 'react';
import Head from 'next/head';

import { Footer } from '../navigation/footer/Footer';

import Items from '../items/items';
import Image from 'next/image';
// import CommentModal from './CommentSection';
import {useState} from 'react'
type Props = {};

const HomeContent = (props: Props) => {

  return (
    // <Container>
    <div>
      <Head>
        <title>Student Project Tracking System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        {/* <NavBar></NavBar> */}

        <header className="py-6 mt-3 shadow-lg mt-5 mr-48 ml-48">
<div className="container mx-auto flex flex-col items-center justify-center">
  <h1 className="text-5xl font-bold text-blue mb-2">Discover Projects</h1>
  <p className="font-bold text-xl text-gray-400">Find and explore exciting projects uploaded by our Students</p>
</div>

</header>
<div className="grid grid-cols-2 gap-16 mx-auto pl-24 pt-12">
 <div>
  <h1 className="font-bold text-6xl text-blue-500 mb-2 ml-5 mt-5">Welcome to <span className="font-bold text-xl text-blue-400"></span>SIS Student Project Tracking System</h1>
  <p className="text-xl font-bold  mb-2 ml-5 pt-3">Browse our collection of projects to discover new tools, apps, and designs</p>
   <div className="w-20 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 ml-5 mt-6 rounded w-40">
    <a href="" className="text-white font-bold pl-2 px-4 rounded w-50">Login</a></div>
 </div>
 <div>
 <Image src="/home.jpg" alt="My Image" width={400} height={250} className='pl-16'/>
 </div>
</div>


        <div className="flex flex-col">
          <div className="mt-[100px]">
            
            <div>
              <h1 className="font-bold text-4xl text-gray-400 text-center pb-12">
                Latest Projects
              </h1>
            </div>
            <Items />
          </div>
        </div>

        <div className="grid max-w-screen-xl gap-8 p-4 mx-auto text-gray-900 grid-cols-3 dark:text-blue-500 sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-3xl font-extrabold">300+</h2>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Projects Uploaded
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-3xl font-extrabold">500+</p>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Students
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-3xl font-extrabold">50+</p>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Staffs
            </p>
          </div>
        </div>
        <Footer></Footer>
      </main>
     
    



    {/* student */}


    
  
    </div>
 




        
  );
};

export default HomeContent;
