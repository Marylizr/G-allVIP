import React from 'react';
import styles from '../tours/tours.module.css';



const Tours = () => {


  return (
    <div className={styles.container}>
      <div>
         <h2>We offer Tours to:</h2>
      </div>
     

      <div className={styles.pictures}>
        <a href='#grandcanyon'>
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681051865/grandC2_d3rld0.jpg' alt='grand canyon'/>
        </a>
        <a href='#hoover' >
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681136935/hooverD2_ujivo0.jpg' alt= 'Hoover Dam' />
        </a>
        <a href='#seven'>
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681137177/magicM1_bjfpws.jpg' alt= 'Seven Magic' />
        </a>
      </div>


      <section id='grandcanyon' className={styles.block} >
        <h2 style={{color:'#4ca4d7'}}>Grand Canyon</h2>
        <div className={styles.grandcanyon}>
          <p>
          The Grand Canyon is one of the most breathtaking natural wonders in the world. It is located in northern Arizona, 
          USA and is about 277 miles (446 km) long, up to 18 miles (29 km) wide, and over a mile (6,000 feet or 1,800 meters) deep. 
          It was formed by the Colorado River over millions of years, as it eroded the rocks and created the stunning landscape 
          that we see today.
          The Grand Canyon is divided into two main sections: the South Rim and the North Rim. The South Rim is more popular and more 
          accessible to visitors, while the North Rim is more remote and less visited. Both sides offer spectacular views and a wide 
          range of activities for visitors.
          One of the best ways to experience the Grand Canyon is to take a hike along one of the many trails. There are trails for 
          all skill levels, from easy walks along the rim to strenuous hikes into the canyon itself. Some popular trails include the 
          Bright Angel Trail, the South Kaibab Trail, and the Rim Trail.
          </p>
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/v1681221566/grandC3_pwrzqh.jpg' alt='Grand Canyon' />
        </div>
      </section>

      <section id='hoover' className={styles.block}>
        <h2 style={{color:'#4ca4d7'}}>Hoover Dam</h2>
        <div className={styles.hoover}>
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/v1681051865/hooverdam_nnxzpu.jpg' alt='Hoover Dam'/>
          <p>
          The Hoover Dam is a marvel of modern engineering and a popular tourist destination located on the border between Arizona and 
          Nevada in the United States. It was built during the Great Depression in the 1930s and remains a symbol of American ingenuity 
          and perseverance.
          The dam was constructed to harness the power of the Colorado River and provide electricity and water to the surrounding region. 
          It is a concrete arch-gravity dam that stands at 726 feet (221 meters) tall and 1,244 feet (379 meters) long. It creates Lake Mead, 
          which is the largest reservoir in the United States by volume.
          Visitors to the Hoover Dam can take a tour of the facilities, which includes a visit to the power plant and the observation deck. 
          The observation deck offers stunning views of the surrounding area, including the Colorado River and the Black Canyon. There are 
          also exhibits and displays that showcase the history and construction of the dam.
          In addition to the tour, visitors can also enjoy a variety of outdoor activities in the surrounding area, such as hiking, boating, 
          and fishing. The Hoover Dam is a must-see destination for anyone interested in engineering, history, or the natural beauty of the 
          American Southwest.
          </p>
        </div>
      </section>

      <section id='seven' className={styles.block}>
        <h2 style={{color:'#4ca4d7'}}>Seven Magic Mountain</h2>
        <div className={styles.seven}>
          <p>
          Seven Magic Mountains is a unique art installation located in the desert just outside of Las Vegas, Nevada, USA. It was created by Swiss 
          artist Ugo Rondinone and consists of seven towering sculptures made of brightly colored boulders stacked on top of each other.
          Each of the sculptures is between 30 and 35 feet tall and weighs between 20 and 25 tons. They are arranged in a line, with each sculpture 
          consisting of between three and six boulders. The boulders are sourced from a nearby quarry and have been painted in vibrant colors such as 
          pink, yellow, and blue.
          The installation is located in a remote desert location, surrounded by mountains and natural beauty. It offers a stark contrast to the bright 
          lights and neon of Las Vegas, making it a unique and memorable destination for visitors.
          Visitors to Seven Magic Mountains can walk around and between the sculptures, taking in the vibrant colors and unique shapes. 
          The installation is open to the public 24 hours a day, seven days a week, and admission is free.
          Seven Magic Mountains is a must-see destination for anyone interested in contemporary art, or for anyone looking for a unique and memorable 
          experience during their visit to Las Vegas.
          </p>
          <img src='https://res.cloudinary.com/da6il8qmv/image/upload/v1681051865/magicM1_inxo9i.jpg' alt='Seven Magic Mountain'/>
        </div>
      </section>

    </div>
  )
}

export default Tours