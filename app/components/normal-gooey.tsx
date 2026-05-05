
"use client"
import { motion } from 'motion/react';

import { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function NormalGooey() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputref=useRef<HTMLInputElement>(null);
  const [serachText,setSearchText]=useState("");

  const buttonVariants={
    collapsed:{
      width:"115px",
      marginLeft:"0",
    },
    expanded:{
      width:"200px",
      marginLeft:"50"
    }
  } 

  useEffect(()=>{
    if(isExpanded){
      inputref.current?.focus();
    }
    else{
 setSearchText('');
    }

  },[isExpanded])


  return (
    <div className="relative  h-screen flex items-center justify-center ">
    <div className="relative flex h-10 items-center justify-center">
      <motion.div 
      variants={buttonVariants}
      initial="collapsed"
      animate={isExpanded ?"expanded":"collapsed"}
      onClick={() => {
        setIsExpanded(true);
        inputref.current?.focus();
        }}  
      className="h-10 w-full  flex  items-center justify-center">

<button
 onClick={()=>setIsExpanded(true)}
className="h-10 w-full cursor-pointer items-center justify-center flex gap-2 rounded-full bg-black text-white font-medium px-4">
<SearchIcon/>
<input 
ref={inputref}
value={serachText}
onBlur={()=>!serachText && setIsExpanded(false)}
onChange={(e)=>setSearchText(e.target.value)}
placeholder="Search,," className=" h-full w-full bg-transparent text-sm placeholder-white/50  outline-none"/>
</button>

      </motion.div>
      
    </div>
    </div>
  );
}

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"   // 👈 important
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};