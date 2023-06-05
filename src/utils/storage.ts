import { STORAGE_KEY } from '@/constants/keys';
import { ProgressState } from '@/types/progress';

export const storeProgress = (state: ProgressState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const getProgress = (): ProgressState => {
  if (typeof window !== 'undefined') {
    const progressState = localStorage.getItem(STORAGE_KEY);
    if (!progressState) {
      return [];
    }
    return JSON.parse(progressState);
  }
  return [];
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};
