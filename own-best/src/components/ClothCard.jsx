const clothCard = ({ imgURL, changeBigImage, bigImg }) => {
    const handleClick = () => {
      if (bigImg !== imgURL.bigImg) {
        changeBigImage(imgURL.bigImg);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigImg === imgURL.bigImg
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1 hover:border-blue-300`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.bigImg}
            alt='cloth colletion'
            width={127}
            height={90}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default clothCard;