import myImage from './es6_img.jpg';

const ImageExample = () => {
    return(
        <div>
            <p>Various ways to add images in to our app</p>
           <div>
                <p>1. Importing images using ES6 Modules </p>
                <img style={{width: '200px', height: '200px'}}
                src={myImage} />
           </div>
           <div>
                <p>2. Using the 'public folder' </p>
                <img style={{width: '200px', height: '200px'}}
                src='/my_photo_public.jpg' />
           </div>
           <div>
                <p>3. From remote url </p>
                <img style={{width: '200px', height: '200px'}}
                src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All' />
           </div>
           <div>
                <p>Using css background - background-image: url('/my_image.jpg')</p>
           </div>
        </div>
    );
};

export default ImageExample;