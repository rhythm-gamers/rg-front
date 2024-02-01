import { INoteRef } from "../types/rhythmGameTypes";
import WFindCloseNote from "../workers/findCloseNote.worker.ts?worker";

export interface IFindCloseNote {
  key: string;
  canvasHeight: number;
  timePerFrame: number;
  visibleNotesRef: React.MutableRefObject<INoteRef[]>;
  timeRef: React.MutableRefObject<number>;
}

export const findCloseNoteWorker = new WFindCloseNote();

export const findCloseNote = {
  postMessage: ({
    key,
    canvasHeight,
    timePerFrame,
    visibleNotesRef,
    timeRef,
  }: IFindCloseNote) => {
    findCloseNoteWorker.postMessage({
      key,
      canvasHeight,
      timePerFrame,
      visibleNotesRef,
      timeRef,
    });
  },
  onMessage: (judgeNoteAndDelete: (targetNote: INoteRef, totalSeconds: number) => void) => {
    findCloseNoteWorker.onmessage = ({ data: { targetNote, totalSeconds } }) => {
      judgeNoteAndDelete(targetNote, totalSeconds);
    };
  },
};
