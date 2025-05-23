export enum ActionPlanStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  DELAYED = 'delayed',
  CANCELLED = 'cancelled'
}

export enum ValidationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export interface ActionPlan {
  id: string;
  title: string;
  description: string;
  okrId: string;
  responsible: string;
  status: ActionPlanStatus;
  validationStatus: ValidationStatus;
  progress: number; // 0-100
  startDate: string;
  endDate: string;
  unit?: string;
  unitId: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  feedback?: string;
  isBestPractice: boolean;
}