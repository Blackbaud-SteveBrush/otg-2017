export class Rating {
  public app_id: number;
  public comment: string;
  public value: number;

  constructor(app_id: number, comment: string, value: number) {
    this.app_id = app_id;
    this.comment = comment;
    this.value = value;
  }
}
