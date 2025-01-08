import React, { useEffect, useState } from 'react'

const BetterImageSlider = () => {
  const imageUrls = [
          'https://wallhalla.com/thumbs/42',
          'https://wallhalla.com/thumbs/43',
          'https://wallhalla.com/thumbs/50',
          'https://wallhalla.com/thumbs/61',
          'https://wallhalla.com/thumbs/9'
      ];
  
      const [selectedIndex, setSelectedIndex] = useState(0);

      useEffect(() => {
        const timer = setInterval(() => {
            handleOnArrowClick('right')
        }, 5000);
        return(() => clearInterval(timer))
      },[selectedIndex])
  
      const handleOnArrowClick = (direction) => {
          if(direction === 'right') {
              // direction - right
              setSelectedIndex((selectedIndex+1)%5)
          } else {
              // direction - left
              selectedIndex === 0 ?
              setSelectedIndex(imageUrls.length - 1) :
              setSelectedIndex((selectedIndex-1))
          }
      };
  
      return(
          <div className="flex justify-center items-center bg-blue-100 p-3 rounded-md gap-3 mt-1">
              <div className="p-1" onClick={() => handleOnArrowClick('left')}>
                  <img className="w-7" src={'https://cdn-icons-png.flaticon.com/128/507/507257.png'} />
              </div>
              <div className="p-1">
                  {
                    imageUrls.map((img,idx) => <div key={idx} className={selectedIndex === idx ? 'block' : 'hidden'}>
                                    <img className="w-72 rounded-md" src={img} />
                            </div>)
                  }
              </div>
              <div className="p-1" onClick={() => handleOnArrowClick('right')}>
                  <img className="w-7" src={'https://cdn-icons-png.flaticon.com/128/271/271226.png'} />
              </div>
          </div>
      )
}

export default BetterImageSlider;