import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button.jsx"
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <>
      <div className="text-green-500"></div>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
      </div>
      <ButtonGradient />
    </>
  );
}