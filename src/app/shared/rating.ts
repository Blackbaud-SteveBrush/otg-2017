export class Rating {
  constructor(app_id: number, value: number) {
      this.app_id = app_id;
      this.value = value;
  }

  app_id: number;
  value: number;
}