import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  useDeferredValue,
  useTransition,
} from "react";
import crispPixel from "../../utils/crispPixel";
import setCanvasDPR from "../../utils/setCanvasDPR";
import { findCloseNote } from "../../utils/findCloseNoteWorker";
import {
  BORDER_LINE_COLOR,
  BORDER_LINE_HEIGHT,
  JUDGE_LINE_COLOR,
  JUDGE_LINE_HEIGHT,
  JUDGE_LINE_OFFSET,
  JUDGE_MAXIMUM_HEIGHT,
  JUDGE_MAXIMUM_SECONDS,
  JUDGE_NEGATIVE_RESULT,
  JUDGE_POSITIVE_RESULT,
  KEY_LENGTH,
  MILLISECOND,
  NOTE_HEIGHT,
  NOTE_SPEED,
} from "../../utils/constants";
import { IJudgeResult, INoteRef, JudgeResult } from "../../types/rhythmGameTypes";

const PatternPractice: React.FC = () => {
  const [_, startTransition] = useTransition();

  const [diffTime, setDiffTime] = useState(0);
  const [keyBounding] = useState(["a", "s", ";", "'"]);
  const [averageOfJudgeResult, setAverageOfJudgeResult] = useState(0);
  const deferredAverageOfJudgeResult = useDeferredValue(averageOfJudgeResult);
  const [judgeResult, setJudgeResult] = useState<IJudgeResult>({
    "100%": 0,
    "90%": 0,
    "60%": 0,
    "30%": 0,
    "0%": 0,
    total: 0,
  });
  const [notes, setNotes] = useState<INoteRef[]>([
    { key: "a", time: 1, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 1, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 1, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 1, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 1.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 1.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 1.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 1.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 1.4, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 1.4, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 1.4, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 1.4, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 1.6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 1.6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 1.6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 1.6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 1.8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 1.8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 1.8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 1.8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
  ]);

  const notesCanvasRef = useRef<HTMLCanvasElement>(null);
  const constCanvasRef = useRef<HTMLCanvasElement>(null);
  const deltaRef = useRef(0);
  const timeRef = useRef(0);
  const comboRef = useRef(0);
  const visibleNotesRef = useRef<INoteRef[]>(notes);
  const lastDiffTimeBetweenFrameRef = useRef(0);

  const keyMappings = new Map();
  keyMappings.set("a", { color: "rgba(255, 36, 0, 1)" });
  keyMappings.set("s", { color: "rgba(125, 249, 255, 1)" });
  keyMappings.set(";", { color: "rgba(125, 249, 255, 1)" });
  keyMappings.set("'", { color: "rgba(255, 36, 0, 1)" });

  const songDuration = Math.max(...notes.map((note) => note.time)) + 1;
  const maxNotesNumber = notes.length - 1;
  const isPlaying = true;

  const addJudgeResult = (judgement: JudgeResult) => {
    if (judgement in JUDGE_POSITIVE_RESULT) {
      comboRef.current += 1;
    } else if (judgement in JUDGE_NEGATIVE_RESULT) {
      comboRef.current = 0;
    }
    setJudgeResult((prev) => {
      prev[judgement] += 1;
      prev["total"] += 1;
      return prev;
    });
    setAverageOfJudgeResult(
      () =>
        (100 * judgeResult["100%"] +
          90 * judgeResult["90%"] +
          60 * judgeResult["60%"] +
          30 * judgeResult["30%"]) /
        judgeResult["total"]
    );
  };

  const drawNote = (ctx: CanvasRenderingContext2D, note: INoteRef) => {
    if (!notesCanvasRef.current) return;

    // Draw the falling box
    ctx.fillStyle = note.color;
    ctx.fillRect(note.positionX, note.positionY, note.width, NOTE_HEIGHT);
  };

  const drawJudgeLine = (ctx: CanvasRenderingContext2D) => {
    if (!notesCanvasRef.current) return;
    ctx.strokeStyle = JUDGE_LINE_COLOR;
    ctx.lineWidth = JUDGE_LINE_HEIGHT;
    ctx.beginPath();
    ctx.moveTo(0, crispPixel(notesCanvasRef.current.height - JUDGE_LINE_OFFSET));
    ctx.lineTo(
      crispPixel(notesCanvasRef.current.width),
      crispPixel(notesCanvasRef.current.height - JUDGE_LINE_OFFSET)
    );
    ctx.stroke();
  };

  const drawBorderLine = (ctx: CanvasRenderingContext2D) => {
    if (!notesCanvasRef.current) return;
    ctx.strokeStyle = BORDER_LINE_COLOR;
    ctx.lineWidth = BORDER_LINE_HEIGHT;
    ctx.beginPath();
    for (let i = 0; i < KEY_LENGTH + 1; i++) {
      i === KEY_LENGTH
        ? ctx.moveTo(crispPixel((notesCanvasRef.current.width / KEY_LENGTH) * i - 1), 0)
        : ctx.moveTo(crispPixel((notesCanvasRef.current.width / KEY_LENGTH) * i), 0);
      ctx.lineTo(
        crispPixel((notesCanvasRef.current.width / KEY_LENGTH) * i),
        crispPixel(notesCanvasRef.current.height)
      );
    }
    ctx.stroke();
  };

  const deleteNote = (targetNote: INoteRef) => {
    visibleNotesRef.current = visibleNotesRef.current.filter(
      (note) => note.key !== targetNote.key || note.time !== targetNote.time
    );
    setNotes((prev) =>
      prev.filter((note) => note.key !== targetNote.key || note.time !== targetNote.time)
    );
  };

  const deleteLateNote = (targetNote: INoteRef) => {
    visibleNotesRef.current = visibleNotesRef.current.filter((note) => note !== targetNote);
    setNotes((prev) => prev.filter((note) => note !== targetNote));
  };

  const update = useCallback(
    (now: number, delta: number, ctx: CanvasRenderingContext2D, note: INoteRef) => {
      if (!notesCanvasRef.current) return;
      const diffTimeBetweenAnimationFrame = (now - delta) / MILLISECOND;

      note.width = notesCanvasRef.current.width / KEY_LENGTH;
      note.positionX =
        (notesCanvasRef.current.width / KEY_LENGTH) * keyBounding.indexOf(note.key);
      note.positionY += diffTimeBetweenAnimationFrame * NOTE_SPEED;
      lastDiffTimeBetweenFrameRef.current = now - delta;

      if (note.positionY > notesCanvasRef.current.height + JUDGE_MAXIMUM_HEIGHT) {
        addJudgeResult("0%");
        deleteLateNote(note);
      } else {
        drawNote(ctx, note);
      }
    },
    [drawNote, drawJudgeLine]
  );

  const renderNotes = useCallback(
    (now: number, delta: number, ctx: CanvasRenderingContext2D, notes: INoteRef[]) => {
      const notesArray = notes.sort((prev, next) => prev.time - next.time);

      notesArray.forEach((note) => {
        update(now, delta, ctx, note);
      });
    },
    [update]
  );

  useLayoutEffect(() => {
    let animationFrameId: number;

    const noteCanvas = notesCanvasRef.current;
    if (!noteCanvas) return;
    const noteCtx = noteCanvas.getContext("2d");
    if (!noteCtx) return;

    const constCanvas = constCanvasRef.current;
    if (!constCanvas) return;
    const constCtx = constCanvas.getContext("2d");
    if (!constCtx) return;

    // 메모리에 실제 크기 설정 (픽셀 밀도를 고려하여 크기 조정)
    const dpr = window.devicePixelRatio;
    setCanvasDPR(noteCanvas, noteCtx, dpr);
    setCanvasDPR(constCanvas, constCtx, dpr);

    const updateNotes = () => {
      const now = Date.now();

      if (!deltaRef.current) {
        deltaRef.current = now;
      }

      noteCtx?.clearRect(0, 0, noteCanvas.width, noteCanvas.height);
      timeRef.current += (now - deltaRef.current) / MILLISECOND;
      // console.log(timeRef.current, songDuration);
      const visibleNotes = notes.filter((note) => note.time <= timeRef.current);

      renderNotes(now, deltaRef.current, noteCtx, visibleNotes);
      drawBorderLine(constCtx);
      drawJudgeLine(constCtx);

      if (timeRef.current >= songDuration) {
        console.log("song finish");
      } else {
        animationFrameId = requestAnimationFrame(updateNotes);
      }

      deltaRef.current = now;
    };

    if (isPlaying) {
      updateNotes();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [notes, isPlaying, songDuration, maxNotesNumber, renderNotes]);

  const onPressKey = (key: string) => {
    if (!notesCanvasRef.current) return;
    findCloseNote.postMessage({
      key,
      canvasHeight: notesCanvasRef.current.height,
      timePerFrame: lastDiffTimeBetweenFrameRef.current,
      visibleNotesRef: visibleNotesRef,
      timeRef: timeRef,
    });
  };

  const activateKeys = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;
      const keyBtn = keyMappings.get(key);
      if (keyBtn) {
        onPressKey(key);
      }
    },
    [keyMappings, onPressKey]
  );

  const judgeNoteAndDelete = (targetNote: INoteRef, totalSeconds: number) => {
    // 노트 색출 후, 바로 해당 노트 바로 제거
    deleteNote(targetNote);
    startTransition(() => {
      const secondsFromNoteToHitBox = targetNote?.time + totalSeconds - timeRef.current;
      const absSecondsFromNoteToHitBox = Math.abs(secondsFromNoteToHitBox);
      const msFromNoteToHitBox = secondsFromNoteToHitBox * MILLISECOND;

      // 예외 처리
      const withinTimingThreshold = absSecondsFromNoteToHitBox < JUDGE_MAXIMUM_SECONDS;
      if (!withinTimingThreshold) return;

      // 노트 판정
      if (absSecondsFromNoteToHitBox <= JUDGE_MAXIMUM_SECONDS) {
        absSecondsFromNoteToHitBox <= 0.034 // 34ms
          ? addJudgeResult("100%")
          : absSecondsFromNoteToHitBox <= 0.051 // 51ms
          ? addJudgeResult("90%")
          : absSecondsFromNoteToHitBox <= 0.085 // 85ms
          ? addJudgeResult("60%")
          : absSecondsFromNoteToHitBox <= 0.1 // 100ms
          ? addJudgeResult("30%")
          : addJudgeResult("0%"); // ~300ms
        setDiffTime(msFromNoteToHitBox);
      } else {
        comboRef.current = 0;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", activateKeys);
    return () => {
      window.removeEventListener("keydown", activateKeys);
    };
  }, [activateKeys]);

  useEffect(() => {
    findCloseNote.onMessage(judgeNoteAndDelete);
  }, []);

  return (
    <div className="w-screen max-w-7xl mx-auto my-0 p-8 text-center">
      <div className="border-1 mx-auto w-[400px] h-[740px] relative">
        <canvas ref={notesCanvasRef} className="w-full h-full" />
        <canvas ref={constCanvasRef} className="absolute top-0 left-0 w-full h-full" />
      </div>
      <p>Combo: {comboRef.current}</p>
      <p>차이: {diffTime}ms</p>
      <p>
        100% - {judgeResult["100%"]}개 90% - {judgeResult["90%"]}개 60% -{judgeResult["60%"]}개
        30% - {judgeResult["30%"]}개 0% - {judgeResult["0%"]}개
      </p>
      <p>평균: {deferredAverageOfJudgeResult}%</p>
    </div>
  );
};

export default PatternPractice;
