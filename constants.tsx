import { Binary, Scale, Activity, Calendar, Clock, MapPin } from 'lucide-react';
import { Proposal, ScheduleItem } from './types';

// Google Calendar Link Generation
const calendarTitle = encodeURIComponent("源來是妮：幸福公投法案 (Lucas & Penny)");
const calendarDetails = encodeURIComponent("波波性別揭曉派對！請準時出席。\n地點：Percent Café %");
const calendarLocation = encodeURIComponent("Percent Café %, 板橋區仁化街 67 號");
// Date: 2025/11/29 (Sat) 18:40 - 21:00
// Format: YYYYMMDDTHHMMSS
const calendarDates = "20251129T184000/20251129T210000"; 
const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarTitle}&dates=${calendarDates}&details=${calendarDetails}&location=${calendarLocation}`;

export const EVENT_DETAILS = {
  title: "源來是妮：幸福公投法案",
  subtitle: "Family Happiness Referendum",
  hosts: "Lucas & Penny",
  babyName: "Bobo (波波)",
  date: "11/29 (六)",
  time: "18:40",
  locationName: "Percent Café %",
  address: "板橋區仁化街 67 號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Percent+Cafe+板橋區仁化街67號",
  googleCalendarUrl: googleCalendarUrl
};

export const INTRO_TEXT = `
波波誕生進入重要階段，提案人 Lucas ＆ Penny 今日正式提案
《源來是妮：幸福公投法案》，公投將於 11/29（六）18:40 舉行，邀請你來參加！
本次公投象徵波波人生的第一份重大決議，請選民準時到場，並投下象徵幸福的一票。
`;

export const PROPOSALS: Proposal[] = [
  {
    id: '1',
    code: 'Protocol G-01',
    title: '波波性別資料解密',
    description: '賓客報到時選定陣營（Girl/Boy）並投票。儀式將戳破氣球揭曉結果，獲勝陣營每人獲刮刮卡一張，有機會刮中大獎！',
    prize: '最大獎：搖搖馬擴香石禮盒（共 3 名）',
    icon: Binary
  },
  {
    id: '2',
    code: 'Algorithm Cup',
    title: '重量預測演算法競賽',
    description: '以 $100 購買預測卷投入票箱，獲勝陣營可「平分全數獎金」！第二階段開放精準預測波波體重。',
    prize: '精準獎：迪士尼聖誕節倒數月曆禮盒（1 名）',
    icon: Scale
  },
  {
    id: '3',
    code: 'System Feedback V1.0',
    title: '孕期事件回授測試',
    description: '使用 Kahoot 進行 10 題互動問答，題目結合懷孕日常與公投數據，考驗親友對系統開發過程的關注度。',
    prize: '前三名：茶籽堂禮盒',
    icon: Activity
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '18:40 – 19:00', title: '報到、投票', description: '領取陣營貼紙、購買重量預測卷' },
  { time: '19:00 – 19:30', title: '提案一：波波性別資料解密', description: '戳氣球開票儀式、獲勝陣營刮刮樂' },
  { time: '19:30 – 20:00', title: '提案二：重量預測演算法競賽', description: '演算法競猜、頒發精準預測大獎' },
  { time: '20:00 – 20:30', title: '提案三：孕期事件回授測試', description: 'Kahoot 懷孕日常問答大賽' },
  { time: '20:30 – 21:00', title: '拍照', description: '發放本日新聞稿、全體委員會合影留念' },
];