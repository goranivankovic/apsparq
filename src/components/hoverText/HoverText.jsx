import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HoverLetter  = ({ target }) => {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [char, setChar] = useState(target);
  const [anim, setAnim] = useState(false);

  const spin = () => {
    if (anim) return;
    setAnim(true);
    let i = 0;
    const loop = setInterval(() => {
      setChar(abc[i++]);
      if (abc[i] === target || i >= abc.length) {
        clearInterval(loop);
        setChar(target);
        setAnim(false);
      }
    }, 100);
  };

useEffect(() => {
  const timer = setTimeout(() => {
    spin();
  },2000); // promeni na 1000 za 1s, 2000 za 2s itd.
  return () => clearTimeout(timer);
}, []);

  return (
    <motion.span

     onMouseEnter={spin}
   
    
  initial={{ x: -100, opacity: 0 }}
        
      animate={{ rotateY: [0, 180, 0] ,opacity:[0,1],x:[0]}}
      transition={{
            duration: 2,
            delay: 2,
      
          }}

    >
      {char}
    </motion.span>
  );
};





const HoverWord = ({ word = "HELLO" }) => {
  return (
    <div style={{  display: "flex", gap: "0.2em" }}>
      {word.split("").map((char, i) => (
        <HoverLetter  key={i} target={char} delay={i * 0.3}/>
      ))}
    </div>
  );
};


export default HoverWord;