import { INoteRef } from "../types/rhythmGameTypes";
import { IFindCloseNote } from "../utils/findCloseNoteWorker";
import {
  JUDGE_LINE_HEIGHT,
  JUDGE_LINE_OFFSET,
  JUDGE_MAXIMUM_HEIGHT,
  MILLISECOND,
  NOTE_SPEED,
} from "../utils/constants";

interface IFindCloseNoteWorker {
  data: IFindCloseNote;
}

self.onmessage = ({ data }: IFindCloseNoteWorker) => {
  const { key, canvasHeight, timePerFrame, visibleNotesRef, timeRef } = data;

  const totalDistance = canvasHeight - JUDGE_LINE_OFFSET - JUDGE_LINE_HEIGHT / 2;
  const rangeOfHitBox = totalDistance - JUDGE_MAXIMUM_HEIGHT;

  const distancePerFrame = NOTE_SPEED * (timePerFrame / MILLISECOND);
  const totalFrame = totalDistance / distancePerFrame;
  const totalSeconds = (totalFrame * timePerFrame) / MILLISECOND;

  const notesCloseToHitBox = visibleNotesRef.current.filter(
    (note) => note.key === key && note.positionY >= rangeOfHitBox
  );
  // 히트박스에 가까운 노트가 없다면 early return;
  if (notesCloseToHitBox.length === 0) return;

  // 여러 노트 중 가장 판정선과 가까이 있는 노트를 색출.
  const targetNote = notesCloseToHitBox.reduce((minNote: INoteRef, currentNote: INoteRef) => {
    const minSecondsFromNoteToHitBox = Math.abs(
      minNote?.time + totalSeconds - timeRef.current
    );

    const currentSecondsFromNoteToHitBox = Math.abs(
      currentNote?.time + totalSeconds - timeRef.current
    );

    return currentSecondsFromNoteToHitBox < minSecondsFromNoteToHitBox ? currentNote : minNote;
  });

  self.postMessage({ targetNote, totalSeconds });
};
