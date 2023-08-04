import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className='bg-gray-100 h-screen p-10'>
      <p className='text-4xl text-green-500'>WhatNot</p>
      <Button className='bg-green-500 m-4'>Get Started!</Button>
    </div>
  );
}

export default App;
