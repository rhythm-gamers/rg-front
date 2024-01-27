// 메모리에 실제 크기 설정 (픽셀 밀도를 고려하여 크기 조정)
function setCanvasDPR(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number) {
  canvas.width *= dpr;
  canvas.height *= dpr;

  ctx.scale(dpr, dpr);
}

export default setCanvasDPR;
