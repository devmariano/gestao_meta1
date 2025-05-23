export enum OKRStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export interface OKR {
  id: string;
  title: string;
  description: string;
  status: OKRStatus;
  category: string;
  responsible: string;
  targetDate: string;
  createdAt: string;
  updatedAt: string;
  unit?: string;
  unitId: string;
  createdBy: string;
}

export interface KeyResult {
  id: string;
  okrId: string;
  title: string;
  target: number;
  unit: string; // %, valor absoluto, etc
  initialValue: number;
  currentValue: number;
  progress: number; // 0-100
}