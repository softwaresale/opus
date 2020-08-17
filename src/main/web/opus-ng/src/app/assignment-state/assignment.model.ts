export interface Assignment {
  id?: number;
  name: string;
  description: string;
  due: Date;
  complete: boolean;
  classId: string;
}
