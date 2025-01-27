
export const Sell=()={
    const backgroundImages =[
        '/Header1.jpg'
    ]
    return(
        <div 
        className="background-carousel min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full text-center relative"
        style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            transition: 'background-image 1s ease-in-out'
        }}
    ></div>
    );
};
