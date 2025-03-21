const SkeletonCarousel = () => {
    return (
      <div className="w-full bg-white px-4 py-6 md:px-8 animate-pulse">
        {/* Skeleton Title */}
        <div className="h-8 w-1/4 bg-gray-300 rounded mb-4"></div> 
  
        <div className="relative group">
          <div className="flex gap-6 overflow-hidden">
          
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-48 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-lg overflow-hidden shadow-md bg-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCarousel;
  