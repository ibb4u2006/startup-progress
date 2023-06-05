export type ProgessAction =
  | {
      type: 'ADD_PHASE';
      payload: string;
    }
  | { type: 'ADD_TASK'; payload: { order: string; title: string } }
  | { type: 'COMPLETE_TASK'; payload: { order: string; index: number } }
  | { type: 'COMPLETE_PHASE'; payload: number }
  | { type: 'LOCK_PHASE'; payload: number }
  | { type: 'UNLOCK_PHASE'; payload: number }
  | { type: 'UNDO_PHASE'; payload: number }
  | { type: 'UNDO_TASK'; payload: { order: string; index: number } };

export type ProgressState = {
  order: number;
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  tasks: {
    title: string;
    isCompleted: boolean;
  }[];
}[];
