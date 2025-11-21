import React from 'react';
import { Vote, Sparkles, MapPin, Clock, Info, CalendarPlus, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-4 px-2 md:px-6 max-w-5xl mx-auto mb-8">
      {/* Main Card */}
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-poster-blue min-h-[600px] flex flex-col md:flex-row group">
        
        {/* Pink Background Shape (Right Side / Bottom) */}
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full bg-poster-pink md:rounded-l-[120px] rounded-t-[80px] mt-[55%] md:mt-0 z-0 transform md:translate-x-10 transition-transform duration-700 ease-out md:group-hover:translate-x-5"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col md:flex-row p-6 md:p-12 h-full">
          
          {/* LEFT COLUMN: Text & Info (Blue Zone) */}
          <div className="md:w-1/2 flex flex-col relative z-20 pt-2 h-full">
            
            {/* Title Area */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                 <div className="flex -space-x-1">
                   <div className="w-7 h-7 rounded-full border-2 border-white bg-[#6abdf5] text-white flex items-center justify-center text-xs font-bold shadow-sm">♂</div>
                   <div className="w-7 h-7 rounded-full border-2 border-white bg-[#f7b6c6] text-white flex items-center justify-center text-xs font-bold shadow-sm">♀</div>
                 </div>
                 <span className="text-white/90 font-bold tracking-widest text-sm uppercase">Gender Reveal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight drop-shadow-md">
                源來是妮：<br/>
                <span className="relative inline-block">
                  幸福公投法案
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-poster-yellow fill-current opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0,5 Q50,10 100,5" stroke="none" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Event Info List (Replaces Instructions) */}
            <div className="space-y-6 mb-8">
               <h2 className="text-xl text-white font-bold flex items-center opacity-95">
                  <Info className="w-6 h-6 mr-2" />
                  公投資訊：
               </h2>
               <ul className="space-y-5">
                  {/* Time - Clickable for Calendar */}
                  <li className="group/item">
                     <a 
                       href={EVENT_DETAILS.googleCalendarUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center gap-4 hover:opacity-90 transition-opacity cursor-pointer"
                       title="點擊加入行事曆"
                     >
                         <div className="w-12 h-12 rounded-full bg-white text-poster-blue border-4 border-white/30 flex items-center justify-center font-black text-xl shadow-lg shrink-0 group-hover/item:scale-110 transition-transform relative">
                            <Clock className="w-6 h-6 group-hover/item:hidden" />
                            <CalendarPlus className="w-6 h-6 hidden group-hover/item:block" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white/80 text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-1">
                                時間 Time 
                                <CalendarPlus className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </span>
                            <span className="text-white text-xl font-bold tracking-wide drop-shadow-md leading-none border-b border-transparent group-hover/item:border-white/50 transition-colors">
                                {EVENT_DETAILS.date} {EVENT_DETAILS.time}
                            </span>
                         </div>
                     </a>
                  </li>

                  {/* Location - Clickable for Google Maps */}
                  <li className="group/item">
                     <a 
                        href={EVENT_DETAILS.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:opacity-90 transition-opacity cursor-pointer"
                        title="點擊開啟 Google Maps"
                     >
                         <div className="w-12 h-12 rounded-full bg-white text-poster-blue border-4 border-white/30 flex items-center justify-center font-black text-xl shadow-lg shrink-0 group-hover/item:scale-110 transition-transform">
                            <MapPin className="w-6 h-6 group-hover/item:hidden" />
                            <ExternalLink className="w-6 h-6 hidden group-hover/item:block" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white/80 text-xs font-bold tracking-wider uppercase mb-1 flex items-center gap-1">
                                地點 Location
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </span>
                            <span className="text-white text-lg font-bold tracking-wide drop-shadow-md leading-tight border-b border-transparent group-hover/item:border-white/50 transition-colors">
                                {EVENT_DETAILS.locationName}
                            </span>
                            <span className="text-white/90 text-sm font-medium mt-1">
                                {EVENT_DETAILS.address}
                            </span>
                         </div>
                     </a>
                  </li>
               </ul>
            </div>

            {/* Yellow Banner - Pushed to bottom to avoid overlap */}
            <div className="mt-12 md:mt-auto mb-16 self-start bg-poster-yellow text-gray-800 py-3 px-8 rounded-xl shadow-[0_8px_0_rgba(0,0,0,0.1)] transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default z-30 relative">
                 <span className="font-black text-lg md:text-xl tracking-wider block text-center">
                    本案將於 19:00 準時開票！
                 </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Voting Box & Photo (Pink Zone) */}
          <div className="md:w-1/2 relative flex flex-col items-center justify-center mt-16 md:mt-0">
             
             {/* Voting Box Illustration (Top Right) */}
             <div className="absolute -top-12 right-2 md:-top-8 md:-right-4 z-30 transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <div className="relative">
                   {/* Hand with Ballot */}
                   <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_infinite]">
                       <div className="bg-white border-2 border-gray-800 w-20 h-24 rounded-sm shadow-md flex items-center justify-center transform -rotate-6">
                          <span className="font-serif font-bold text-xl text-gray-800">Vote</span>
                       </div>
                       <div className="w-24 h-12 bg-gray-800 rounded-full absolute -right-12 top-12 transform rotate-45 -z-10"></div>
                   </div>
                   
                   {/* Box */}
                   <div className="bg-white w-40 h-40 rounded-3xl border-[6px] border-gray-800 shadow-xl flex flex-col items-center pt-8 relative overflow-hidden">
                       <div className="w-24 h-3 bg-gray-800 rounded-full mb-2"></div>
                       <div className="flex-1 w-full bg-gray-100 border-t-4 border-gray-200"></div>
                   </div>
                </div>
             </div>

             {/* Photo Blob - COUPLE IMAGE */}
             <div className="relative w-72 h-72 md:w-96 md:h-96 z-10 mt-8 md:mt-0">
                <div className="absolute inset-0 bg-white rounded-[45%_55%_70%_30%/40%_60%_60%_40%] shadow-[0_20px_60px_rgba(0,0,0,0.2)] transform rotate-6 overflow-hidden border-[8px] border-white group-hover:rotate-3 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop" 
                      alt="Lucas & Penny Ultrasound" 
                      className="w-full h-full object-cover transform scale-110"
                    />
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <p className="font-serif font-bold text-poster-pink text-sm">Lucas & Penny</p>
                    </div>
                </div>
                
                <Sparkles className="absolute top-0 -left-4 w-10 h-10 text-white animate-pulse" />
                <Sparkles className="absolute bottom-10 -right-4 w-8 h-8 text-poster-yellow animate-pulse delay-500" />
             </div>

          </div>
        </div>

        {/* Info Footer Strip */}
        <div className="absolute bottom-0 left-0 w-full bg-black/10 backdrop-blur-sm p-3 md:p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-white text-xs md:text-sm font-medium z-20">
           <a href={EVENT_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-poster-yellow transition-colors">
             <MapPin className="w-4 h-4" />
             <span>{EVENT_DETAILS.locationName}</span>
           </a>
           <div className="hidden md:block opacity-40">|</div>
           <a href={EVENT_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-poster-yellow transition-colors">
             <Info className="w-4 h-4" />
             <span>{EVENT_DETAILS.address}</span>
           </a>
        </div>

      </div>
    </section>
  );
};