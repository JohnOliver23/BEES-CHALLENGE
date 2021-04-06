export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}
