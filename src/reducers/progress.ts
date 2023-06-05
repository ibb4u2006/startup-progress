import { ProgessAction, ProgressState } from '@/domain/progress';

export const progressReducer = (
  state: ProgressState,
  action: ProgessAction
): ProgressState => {
  switch (action.type) {
    case 'ADD_PHASE':
      return [
        ...state,
        {
          title: action.payload,
          isCompleted: false,
          isLocked: false,
          order: state.length,
          tasks: [],
        },
      ];
    case 'ADD_TASK':
      const { title, order } = action.payload;
      const orderNumber = parseFloat(order);
      const newAddState = [...state];
      const stateElement = newAddState[orderNumber];
      newAddState.splice(parseFloat(order), 1, {
        ...stateElement,
        tasks: [...stateElement.tasks, { title, isCompleted: false }],
      });
      return newAddState;
    case 'COMPLETE_TASK':
      const { index, order: completeOrder } = action.payload;
      const newCompleteState = [...state];
      const completeOrderNumber = parseFloat(completeOrder);
      const completeStateElement = newCompleteState[completeOrderNumber];
      newCompleteState[completeOrderNumber].tasks.splice(index, 1, {
        title: completeStateElement.tasks[index].title,
        isCompleted: true,
      });
      return newCompleteState;
    case 'COMPLETE_PHASE':
      const newPhaseState = [...state];
      newPhaseState.splice(action.payload, 1, {
        ...state[action.payload],
        isCompleted: true,
      });
      return newPhaseState;
    case 'LOCK_PHASE':
      const lockPhaseState = [...state];
      lockPhaseState.splice(action.payload, 1, {
        ...state[action.payload],
        isLocked: true,
      });
      return lockPhaseState;
    case 'UNLOCK_PHASE':
      const unlockPhaseState = [...state];
      unlockPhaseState.splice(action.payload, 1, {
        ...state[action.payload],
        isLocked: false,
      });
      return unlockPhaseState;
    case 'UNDO_PHASE':
      const undoPhaseState = [...state];
      undoPhaseState.splice(action.payload, 1, {
        ...state[action.payload],
        isCompleted: false,
        tasks: [...state[action.payload].tasks].map((task) => ({
          title: task.title,
          isCompleted: false,
        })),
      });
      return undoPhaseState;
    case 'UNDO_TASK':
      const { index: undoTaskIndex, order: undoTaskOrder } = action.payload;
      const newUndoState = [...state];
      const undoOrderNumber = parseFloat(undoTaskOrder);
      const undoStateElement = newUndoState[undoOrderNumber];
      newUndoState[undoOrderNumber].tasks.splice(undoTaskIndex, 1, {
        title: undoStateElement.tasks[undoTaskIndex].title,
        isCompleted: false,
      });
      return newUndoState;
    default:
      return state;
  }
};
