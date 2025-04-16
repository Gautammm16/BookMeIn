// const HotelViewCardSkeleton = () => {
//   return (
//     <div
//       className="card border p-4 flex flex-col md:flex-row gap-x-2 w-full animate-pulse"
//       data-testid="hotel-view-card-skeleton"
//     >
//       <div className="md:w-[220px] md:h-[140px]">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <rect x="0" y="0" width="100%" height="100%" fill="#e0e0e0" />
//         </svg>
//       </div>
//       <div className="flex flex-col justify-between ml-0 md:ml-2 flex-1">
//         <div>
//           <div className="h-2 bg-gray-200 rounded-full w-40 mb-4"></div>
//           <div className="h-2 bg-gray-200 rounded-full w-40 mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full w-40 mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full w-40 mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full w-40 mb-2.5"></div>
//         </div>
//         <ul></ul>
//       </div>
//       <div className="flex flex-col ml-0 md:ml-auto justify-between border-l-0 md:border-l-2 items-stretch pl-0 md:pl-4">
//         <div className="flex justify-between my-3 md:my-0 items-center md:flex-col md:justify-between w-full h-full">
//           <div className="flex justify-between my-3 md:my-0 items-center md:flex-col md:justify-between w-full h-full">
//             <div className="h-2 bg-gray-200 rounded-full w-14 mb-2.5"></div>
//             <div className="h-2 bg-gray-200 rounded-full w-14 mb-2.5"></div>
//           </div>
//           <div className="h-2 bg-gray-200 rounded-full w-14 mb-2.5"></div>
//           <button className="opacity-0 bg-brand-secondary px-4 py-2 text-white whitespace-nowrap">
//             Book now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HotelViewCardSkeleton;



const HotelViewCardSkeleton = () => {
  return (
    <div
      className="border p-4 flex flex-col md:flex-row gap-4 w-full animate-pulse bg-white rounded-lg shadow-sm"
      data-testid="hotel-view-card-skeleton"
    >
      {/* Image Placeholder */}
      <div className="w-full md:w-[220px] h-[180px] md:h-[140px] bg-gray-200 rounded-lg overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#e0e0e0" />
        </svg>
      </div>

      {/* Text Content Skeleton */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded mb-2 w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded mb-2 w-1/3"></div>
        </div>

        {/* Footer Area Placeholder */}
        <div className="mt-4 flex items-center gap-4">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
      </div>

      {/* Right Side Skeleton (Price + Button) */}
      <div className="flex flex-col items-end justify-between mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
        <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
        <div className="opacity-0 bg-brand-secondary px-4 py-2 text-white rounded">
          Book now
        </div>
      </div>
    </div>
  );
};

export default HotelViewCardSkeleton;
