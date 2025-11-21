import React from 'react';
import { PROPOSALS, SCHEDULE } from '../constants';
import { Clock, Gift } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      {/* Proposals Grid */}
      <div className="mb-16">
        <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center space-x-4 mb-6">
               <div className="h-1 w-12 bg-poster-blue rounded-full"></div>
               <h2 className="text-3xl font-serif font-black text-gray-800 tracking-tight">審議議案</h2>
               <div className="h-1 w-12 bg-poster-pink rounded-full"></div>
            </div>
            <p className="text-center text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
                本次家庭幸福法案結合了波波爸爸媽媽的職業，<br className="hidden md:block" />
                我們將從工程數據解密，讓大家一起完成這場公民投票法案！
            </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {PROPOSALS.map((item, index) => {
            // Stronger, poster-like coloring
            const theme = index === 0 
                ? { border: 'border-poster-blue', text: 'text-poster-blue', bg: 'bg-blue-50', iconBg: 'bg-blue-100', prizeBg: 'bg-blue-50 text-blue-700' }
                : index === 1 
                ? { border: 'border-poster-pink', text: 'text-poster-pink', bg: 'bg-pink-50', iconBg: 'bg-pink-100', prizeBg: 'bg-pink-50 text-pink-700' }
                : { border: 'border-poster-yellow', text: 'text-yellow-600', bg: 'bg-yellow-50', iconBg: 'bg-yellow-100', prizeBg: 'bg-yellow-50 text-yellow-800' };
            
            return (
            <div key={item.id} className={`flex flex-col relative group p-6 rounded-[2rem] border-[3px] ${theme.border} bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden`}>
                {/* Decorative corner blob */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20 ${theme.bg} scale-150`}></div>

                <div className="relative mb-4 flex justify-between items-start">
                  <div className={`p-3 rounded-xl ${theme.iconBg} ${theme.text}`}>
                    <item.icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 select-none absolute top-0 right-0 -mt-2 -mr-2">0{item.id}</span>
                </div>
                
                <div className="relative space-y-3 flex-1">
                    <span className={`text-[10px] font-black tracking-wider uppercase ${theme.bg} ${theme.text} px-2 py-1 rounded-md inline-block`}>
                        {item.code}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 font-serif leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.description}</p>
                </div>

                {/* Prize Section */}
                {item.prize && (
                    <div className={`mt-6 pt-4 border-t border-gray-100`}>
                        <div className={`flex items-start gap-2 p-3 rounded-lg ${theme.prizeBg}`}>
                            <Gift className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="text-xs font-bold leading-snug">{item.prize}</span>
                        </div>
                    </div>
                )}
            </div>
          )})}
        </div>
      </div>

      {/* Timeline Schedule */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border-2 border-gray-100 relative overflow-hidden">
        
        {/* Background Split for Visual Interest */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-poster-blue via-poster-pink to-poster-yellow"></div>

        <div className="relative z-10">
            <div className="flex flex-col items-center mb-10">
                <div className="bg-gray-100 p-3 rounded-full mb-4">
                    <Clock className="w-8 h-8 text-gray-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-800">當日時程表</h2>
            </div>

            <div className="space-y-0 relative before:absolute before:top-4 before:bottom-4 before:left-[5.5rem] md:before:left-[7.5rem] before:w-0.5 before:bg-gray-200">
                {SCHEDULE.map((item, index) => (
                    <div key={index} className="flex group items-start relative py-4">
                        {/* Time Pill */}
                        <div className="w-20 md:w-28 flex-shrink-0 text-right pr-6 md:pr-8 pt-1">
                            <span className="inline-block text-sm font-black font-mono text-gray-400 group-hover/item:text-poster-blue transition-colors">
                                {item.time.split('–')[0].trim()}
                            </span>
                            <br />
                            <span className="text-[10px] text-gray-300 font-bold">{item.time.split('–')[1]?.trim()}</span>
                        </div>
                        
                        {/* Timeline Dot */}
                        <div className="absolute left-[5.5rem] md:left-[7.5rem] top-5 w-3 h-3 rounded-full bg-white border-[3px] border-gray-300 transform -translate-x-1/2 group-hover:border-poster-pink group-hover:scale-125 transition-all z-10"></div>

                        {/* Content */}
                        <div className="flex-1 pl-6 md:pl-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-poster-pink transition-colors">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-sm text-gray-500 font-medium">{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};