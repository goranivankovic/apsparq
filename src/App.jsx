import { useState,useEffect } from 'react'


import { motion, useScroll, useTransform } from "framer-motion";

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HugeText from './components/hugeText/HugeText';
import Marketing from './components/marketing/Marketing';
import Home from './components/home/Home';
import Nav from './components/nav/Nav'
import Creative from './components/creative/Creative';


import NotFound from './components/notFound/NotFound';
import Content from './components/content/Content';


import styles from './styles/loading/loading.module.css';


function App() {



 const [count, setCount] = useState(0);
 const [isAnimating, setIsAnimating] = useState(true);

 const [laz, setLaz] = useState(true)

  const [laz2, setLaz2] = useState(true)

  useEffect(() => {


    const interval = setInterval(() => {
      setCount(prev => {
           if (prev === 98) {
            setLaz(false)
           } else if (prev === 100) {
          clearInterval(interval); 

          setIsAnimating(false)
         


          setTimeout(() => {
            setLaz2(false)
            
          }, 800);

          return prev;
        }
        return prev + 1;
      });
    }, 30); 


    return () => clearInterval(interval);



  }, []);

  return (
    <>
    <Routes>

          {/* HOME ROUTE */}
       <Route path='/' element ={



       
            laz2 ?


           <motion.div className={styles.main}
               initial={{  opacity:1}}
               animate={{  opacity:1 } }
               transition={{ duration:1.2, ease: "easeOut" ,delay:3}}
              >
          
              <div>
                  
                  
                   <motion.div 
                   initial={{ x: 200, opacity: 0 }}
                  animate={isAnimating ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                  transition={{ duration:3, ease: "easeOut" }}>
                      
                     A
                  
                  </motion.div>  
          
                   <motion.div 
                   initial={{ opacity: 0 ,rotate:-90}}
                  animate={isAnimating ? { opacity: 1 ,rotate:0} : { opacity: 1,rotate:0 }}
                  transition={{ duration: 3, ease: "easeOut" }}>
                      
                    P
                  
                  </motion.div> 
          
             
                   
            </div>
          
          
                  <div>
              
                  
          
              {laz ? <span>0</span> :'' }
               <span>{count}</span>
                {'%'}
          
              </div> 
          
              </motion.div>




          
         :

      

    

            
          <div>
 
         <Nav />         
         <Home />
        
         <Marketing   boolLaz1 ={true}  boolLaz2 ={true} />  
         <Creative />
         <Content /> 
         <HugeText />
         <Footer />         

         </div>

          
  
       
          

       







        } 
        /> 





             {/* ROUTE  HOME*/}
    <Route  path='/home' element={

        <div>
 
         <Nav />         
         <Home />
        
         <Marketing   boolLaz1 ={true}  boolLaz2 ={true} />  
         <Creative />
         <Content /> 
         <HugeText />
         <Footer />         

         </div>
     
    
      
      }/>




              {/* ROUTE  MARKETING*/}
       <Route  path='/marketing' element={

        <div>
 
         <Nav />         
         <Marketing   boolLaz1 ={true}  boolLaz2 ={false} />  
   
         <HugeText />
         <Footer />         

         </div>
     
    
      
      }/>




               {/* ROUTE  MARKETING*/}
       <Route  path='/seo' element={

        <div>
 
         <Nav />         
         <Marketing   boolLaz1 ={false}  boolLaz2 ={true} />  
   
         <HugeText />
         <Footer />         

         </div>
     
    
      
      }/>



         {/* ROUTE  CREATIVE*/}
    <Route  path='/creative' element={

        <div>
 
         <Nav />         
       
         <Creative />
          <Content /> 

         <HugeText />
         <Footer />         

         </div>
     
    
      
      }/>






             {/* ROUTE  WRITER*/}
    <Route  path='/writer' element={

        <div>
 
         <Nav />         
       
         
          <Content /> 
         <Creative />
         <HugeText />
         <Footer />         

         </div>
     
    
      
      }/>



            {/* ROUTE  CONTACT*/}
        <Route  path='/contact' element={

        <div>
 
         <Nav /> 

       <HugeText />
        <Footer />   
         
           <Creative />
               

         </div>
     
    
      
      }/>














        {/* ROUTE  FOR ALL PATHS*/}
    <Route  path='*' element={
     
     <div>
      <Nav />

      <NotFound />

         <HugeText />
         <Footer />   

     </div>
      
      }/>


    </Routes>






     
    </>
  )
}

export default App
