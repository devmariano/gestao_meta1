export enum UserRole {
  SCHOOL = 'SCHOOL',
  GPA = 'GPA'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  unitId: string;
  unitName: string;
  position: string;
  avatar?: string;
}