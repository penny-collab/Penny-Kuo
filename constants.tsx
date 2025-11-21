import { Binary, Scale, Activity, Calendar, Clock, MapPin } from 'lucide-react';
import { Proposal, ScheduleItem } from './types';

export const EVENT_DETAILS = {
  title: "源來是妮：幸福公投法案",
  subtitle: "Family Happiness Referendum",
  hosts: "Lucas & Penny",
  babyName: "Bobo (波波)",
  date: "11/29 (六)",
  time: "18:40",
  locationName: "Percent Café %",
  address: "板橋區仁化街 67 號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Percent+Cafe+板橋區仁化街67號"
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
    description: '針對系統核心數據進行解密，正式揭露波波的性別配置設定。',
    icon: Binary
  },
  {
    id: '2',
    code: 'Algorithm Cup',
    title: '重量預測演算法競賽',
    description: '透過超音波數據與母體參數，全體選民共同參與出生重量預測模型建立。',
    icon: Scale
  },
  {
    id: '3',
    code: 'System Feedback V1.0',
    title: '孕期事件回授測試',
    description: '回顧系統開發（孕期）過程中的重大事件與錯誤排除紀錄。',
    icon: Activity
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '18:40 – 19:00', title: '報到、投票', description: '領取公投選票與身份驗證' },
  { time: '19:00 – 19:30', title: '提案一：波波性別資料解密', description: 'Protocol G-01 解密程序啟動' },
  { time: '19:30 – 20:00', title: '提案二：重量預測演算法競賽', description: 'Algorithm Cup 決選' },
  { time: '20:00 – 20:30', title: '提案三：孕期事件回授測試', description: 'System Feedback V1.0 發表' },
  { time: '20:30 – 21:00', title: '拍照', description: '全體委員會合影留念' },
];