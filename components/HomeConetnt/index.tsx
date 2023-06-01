import React from 'react';
import Head from 'next/head';
// import { Container } from './HomeElements'
import { Footer } from '../navigation/footer/Footer';
// import NavBar from '../navigation/header/NavBar'

// import Navbar from '../Navbar/index'
import Items from '../items/items';

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

        <div className="flex flex-col">
          <div className="mt-[100px]">
            <div>
              <h1 className="text-center text-4xl font-bold italic text-blue-700">
                Welcome to SIS{' '}
              </h1>
            </div>
            <div>
              <h1 className="text-center text-4xl font-bold italic text-blue-700 mb-5">
                Student Project Tracking System
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-4xl text-gray-400 mt-10 ml-14 mb-5 p-2">
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
    </div>
    // </Container>
  );
};

export default HomeContent;
