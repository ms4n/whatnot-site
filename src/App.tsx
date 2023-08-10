import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className='py-10 noise h-screen m-12'>
      <p className='text-5xl font-bold text-white'>WhatNot</p>
      <Button className='bg-white text-green-500 m-4'>Get Started!</Button>
    </div>
  );
}

export default App;
