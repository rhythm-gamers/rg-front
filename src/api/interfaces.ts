// 여러 API 모듈들에서 사용되는 공통 인터페이스들을 작성

export interface IPaging {
  page: number;
  limit?: number;
}

export interface IPatternInfo {
  roll?: number;
  offGrid?: number;
  stairs?: number;
  peak?: number;
  multiple?: number;
  trill?: number;
  hold?: number;
}
