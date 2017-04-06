export class Rating {
  public app_id: number;
  public value: number;

  constructor(app_id: number, value: number) {
    this.app_id = app_id;
    this.value = value;
  }
}
