import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  useDeferredValue,
} from "react";
import crispPixel from "../../utils/crispPixel";
import setCanvasDPR from "../../utils/setCanvasDPR";

interface INoteRef {
  key: string;
  time: number;
  positionX: number;
  positionY: number;
  width: number;
  color: string;
}

interface IJudgeResult {
  "100%": number;
  "90%": number;
  "60%": number;
  "30%": number;
  "0%": number;
  total: number;
}

type JudgeResult = "100%" | "90%" | "60%" | "30%" | "0%";

const MILLISECOND = 1000;

const NOTE_HEIGHT = 5;
const NOTE_SPEED = 280;

const BORDER_LINE_COLOR = "black";
const BORDER_LINE_HEIGHT = 1;

const JUDGE_LINE_COLOR = "red";
const JUDGE_LINE_OFFSET = 20;
const JUDGE_LINE_HEIGHT = 1;
const JUDGE_MAXIMUM_HEIGHT = 30;
const JUDGE_MAXIMUM_SECONDS = 0.3;
const JUDGE_POSITIVE_RESULT = ["100%", "90%", "60%"];
const JUDGE_NEGATIVE_RESULT = ["30%", "0%"];

const KEY_LENGTH = 4;

const PatternPractice: React.FC = () => {
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
    { key: "s", time: 2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 3, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 4, positionX: 0, positionY: 0, width: 0, color: "#3498db" },

    { key: "a", time: 5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 5.5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 6.5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },

    { key: "a", time: 7, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 7.5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 7.5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },

    { key: "a", time: 8.5, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 8.6, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 8.7, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 8.8, positionX: 0, positionY: 0, width: 0, color: "#3498db" },

    { key: "a", time: 9, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 9, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 9, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 9, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "a", time: 9.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: ";", time: 9.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "s", time: 9.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
    { key: "'", time: 9.2, positionX: 0, positionY: 0, width: 0, color: "#3498db" },
  ]);

  const notesCanvasRef = useRef<HTMLCanvasElement>(null);
  const constCanvasRef = useRef<HTMLCanvasElement>(null);
  const deltaRef = useRef(0);
  const timeRef = useRef(0);
  const comboRef = useRef(0);
  const notesRef = useRef<INoteRef[]>(notes);
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
        notesRef.current = notesRef.current.filter((n) => n !== note);
        setNotes((prev) => prev.filter((n) => n !== note));
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
    setCanvasDPR(noteCanvas, noteCtx, dpr);

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
    const canvasHeight = notesCanvasRef.current.height;

    const totalDistance = canvasHeight - JUDGE_LINE_OFFSET - JUDGE_LINE_HEIGHT / 2;
    const rangeOfHitBox = totalDistance - JUDGE_MAXIMUM_HEIGHT;

    const distancePerFrame = NOTE_SPEED * (lastDiffTimeBetweenFrameRef.current / MILLISECOND);
    const timePerFrame = lastDiffTimeBetweenFrameRef.current;
    const totalFrame = totalDistance / distancePerFrame;
    const totalSeconds = (totalFrame * timePerFrame) / MILLISECOND;

    const notesCloseToHitBox = notesRef.current.filter(
      (note) => note.key === key && note.positionY >= rangeOfHitBox
    );
    // 히트박스에 가까운 노트가 없다면 early return;
    if (notesCloseToHitBox.length === 0) return;

    // 여러 노트 중 가장 판정선과 가까이 있는 노트를 색출.
    const targetNote = notesCloseToHitBox.reduce((minNote, currentNote) => {
      const minSecondsFromNoteToHitBox = Math.abs(
        minNote?.time + totalSeconds - timeRef.current
      );

      const currentSecondsFromNoteToHitBox = Math.abs(
        currentNote?.time + totalSeconds - timeRef.current
      );

      return currentSecondsFromNoteToHitBox < minSecondsFromNoteToHitBox
        ? currentNote
        : minNote;
    });
    // 노트 색출 후, 바로 해당 노트 바로 제거
    notesRef.current = notesRef.current.filter((note) => note !== targetNote);
    setNotes((prev) => prev.filter((note) => note !== targetNote));

    const secondsFromNoteToHitBox = targetNote?.time + totalSeconds - timeRef.current;
    const absSecondsFromNoteToHitBox = Math.abs(secondsFromNoteToHitBox);
    const msFromNoteToHitBox = secondsFromNoteToHitBox * MILLISECOND;

    // 예외 처리
    const withinTimingThreshold = absSecondsFromNoteToHitBox < JUDGE_MAXIMUM_SECONDS;
    if (!withinTimingThreshold) return;

    // 노트 판정
    if (absSecondsFromNoteToHitBox <= JUDGE_MAXIMUM_SECONDS) {
      absSecondsFromNoteToHitBox <= 0.03 // 30ms
        ? addJudgeResult("100%")
        : absSecondsFromNoteToHitBox <= 0.04 // 40ms
        ? addJudgeResult("90%")
        : absSecondsFromNoteToHitBox <= 0.06 // 60ms
        ? addJudgeResult("60%")
        : absSecondsFromNoteToHitBox <= 0.09 // 90ms
        ? addJudgeResult("30%")
        : addJudgeResult("0%"); // ~300ms
      setDiffTime(msFromNoteToHitBox);
    } else {
      comboRef.current = 0;
    }
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

  useEffect(() => {
    window.addEventListener("keydown", activateKeys);
    return () => {
      window.removeEventListener("keydown", activateKeys);
    };
  }, [activateKeys]);

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
