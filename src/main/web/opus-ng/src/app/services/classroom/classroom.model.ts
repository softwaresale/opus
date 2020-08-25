import { Assignment } from '../assignment/assignment.model';

export interface Timeslot {
  startTime: Date;
  endTime: Date;
  repeat: boolean;
  repeatDays: string | number[]; // comma separated list
  repeatEndDate: Date;
  id?: number;
}

export interface Classroom {
  id?: number;
  name: string;
  description?: string;
  assignments: Assignment[];
  times: Timeslot[];
}
