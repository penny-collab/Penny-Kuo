import React from 'react';

export enum Gender {
  BOY = 'BOY',
  GIRL = 'GIRL',
  UNKNOWN = 'UNKNOWN'
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

export interface Proposal {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}