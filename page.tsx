'use client';

import Image from 'next/image';

export default function CardComponent() {
  return (
   <div className="bg-blue-950 font-[peyda] flex items-center justify-center min-h-scree p-4"> 
    <div className="container max-w-full px-5 sm:px-16 md:px-20 lg:px-24 xl:px-32 2xl:px-36 mx-auto">
      {/* هدر بالا */}
      <div>
        <h3 className="font-normal text-xl leading-6 tracking-[1%] text-right">
          قدم چهارم
        </h3>
        <h1 className="font-extrabold text-xl leading-6 tracking-[1%] text-right">
          انتخاب قالب و پالت رنگی
        </h1>
      </div>
      
      {/* متن توضیحی */}
      <div className="pt-6 pb-10">
        <p className="w-80 h-7 text-base font-normal leading-6 text-[rgba(255,255,255,0.64)] text-justify">
          نوع قالب و رنگ مورد نظر خود را انتخاب کنید
        </p>
      </div>
      
      {/* لیست کارت‌ها */}
      <div className="w-full flex flex-wrap justify-center items-center gap-10 mx-auto mt-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="min-w-80 flex-1 h-[305px] bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden flex flex-col shadow-lg"
          >
            <div className="w-full h-44 relative">
              <Image
                src="image1.svg"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-[16px]"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-white text-lg pr-3">
                قالب ویژه شماره {item} آی پرتال
              </p>
              <div className="flex justify-center mt-auto gap-4 flex-row">
              <button className="flex flex-row items-center text-center bg-[#4338CA] text-white text-sm font-normal leading-6 tracking-[0px] py-1 px-3 gap-1 rounded-lg w-[70%]">
                  <i className="mr-auto ml-1">
                    <img src="/Eye.svg" alt="Eye Icon" className="w-4 h-4" />
                  </i>
                  <div className="ml-auto">پیش نمایش قالب</div>
                </button>
                <button className="border border-[rgba(255,255,255,0.3)] text-white text-sm font-normal leading-6 tracking-[0px] py-1 px-3 gap-1 rounded-xl w-[20%] items-center">
                  انتخاب
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* دکمه‌های مراحل قبل و بعد */}
      <div className="mt-24 flex justify-between items-center px-8 sm:px-6">
       <a href="#" className="flex items-center text-[#6B7280] text-base font-normal">
          <img src="/Move-R.svg" alt="Previous" className="block w-8 h-8" />
          <span className="block mx-2">مرحله بعد</span>
        </a>
        <a href="#" className="flex items-center text-[#6B7280] text-base font-normal">
           <span className="block mx-2">مرحله قبل</span>
           <img src="/Move-L.svg" alt="Next" className="block w-8 h-8" />
        </a>
        
       </div>
    </div>
   </div>  
  );
}
