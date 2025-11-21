import React, { useState } from 'react';
import { askCommitteeAI } from '../services/aiService';
import { Send, Sparkles, MessageCircle } from 'lucide-react';

export const CommitteeAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse(null);
    
    const result = await askCommitteeAI(query);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 pb-12">
      <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100">
        
        <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-tr from-poster-blue to-poster-pink p-3 rounded-2xl text-white shadow-md">
                <MessageCircle className="w-6 h-6" />
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-800 font-serif">公投委員會 AI 發言人</h2>
                <p className="text-xs text-gray-400">AI Spokesperson</p>
            </div>
        </div>

        <div className="space-y-4">
            {/* Chat Window */}
            <div className="bg-gray-50 rounded-2xl p-6 min-h-[140px] relative border border-gray-100">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2">
                        <Sparkles className="w-6 h-6 text-poster-yellow animate-spin" />
                        <span className="text-xs font-medium tracking-widest">COMPUTING...</span>
                    </div>
                ) : response ? (
                    <div className="text-gray-700 leading-relaxed font-medium">
                        <span className="text-2xl mr-2">🤖</span>
                        {response}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-4">
                        <p className="text-sm mb-2">關於這次公投的所有問題，都可以問我</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <button onClick={() => setQuery("你是誰？")} className="text-xs bg-white px-3 py-1 rounded-full border hover:border-poster-blue hover:text-poster-blue transition-colors">你是誰？</button>
                            <button onClick={() => setQuery("可以給我一個祝福嗎？")} className="text-xs bg-white px-3 py-1 rounded-full border hover:border-poster-pink hover:text-poster-pink transition-colors">給波波祝福</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="輸入問題..."
                    className="flex-1 px-6 py-4 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-poster-blue focus:ring-2 focus:ring-poster-blue/20 transition-all outline-none text-gray-800 placeholder-gray-400"
                    onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                />
                <button
                    onClick={handleAsk}
                    disabled={isLoading || !query.trim()}
                    className="bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-poster-blue transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send className="w-5 h-5 ml-0.5" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};