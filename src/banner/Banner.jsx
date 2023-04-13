import React, {useState} from 'react';
import styles from '../banner/banner.module.css';
import chevronLeft from '../assets/symbol/chevron-left.png';
import chevronRight from '../assets/symbol/chevron-right.png'

const Banner = () => {

   const [index, setIndex] = useState(0);


  const images = [
    
   {
      name: 'Grand Canyion',
      url:  'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051866/grandC_pra0gu.jpg'
   },
   
   {
      name: 'Grand Canyion',
      url: 'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051865/grandC2_d3rld0.jpg',
   },
   
   {
      name: 'Hoover Dam',
      url: 'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051866/hooverD_jivlff.webp',
   },
  
   {
      name: 'Hoover Dam',
      url: 'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051865/hooverdam_nnxzpu.jpg',
   },  
   {
      name:'Hoover Dam',
      url:'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681136935/hooverD2_ujivo0.jpg'
   } ,
  
   {
      name: 'Seven Magic Mountain',
      url: 'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681137177/magicM1_bjfpws.jpg',
   },
  
   {
      name: 'Seven Magic Mountain',
      url: 'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051865/sevenmagicmountains-webcrop-kg-001_pxlz5u.jpg',
   },
   
   {
     name: 'Las Vegas',
     url:'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051866/promociones-las-vegas-415x310_jwvjdk.jpg'
   },
  
   {
     name: 'Las Vegas',
     url:'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_400/v1681051866/ScenicByway_Desktop-1536x863_djnhrh.jpg'
   }
]


 let hasPrev = index > 0;
 let hasNext = index < images.length-1;

 function handlePrevClick() {
   if (hasPrev) {
     setIndex(index - 1);
   }
 }

 function handleNextClick() {
   if (hasNext) {
     setIndex(index + 1);
   }
 }

 let photo = images[index];


  return (
    <div id='about' className={styles.container}>
      <div className={styles.wrap}>
         <h1 style={{color:'#4ca4d7'}}>
         Discovering <br/>
         the Neon Oasis:
         </h1>
         <h3 style={{color:'#bdbdbd'}}>
         'A Journey Through the Vibrant<br/>
         Culture and Diverse<br/>
         Entertainment of Las Vegas'
         </h3>
      </div>

      <div className={styles.pic}>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
      <img className={styles.chevron} src={chevronLeft} alt=''/>
      </button>
      <img src={photo.url} alt=' ' />
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
      <img className={styles.chevron} src={chevronRight} alt=''/>
      </button>
        
      </div>
    </div>
  )
}

export default Banner