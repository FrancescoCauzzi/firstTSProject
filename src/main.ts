interface IModel {
  DisplayName: string;
  Id: number;
}
class Model implements IModel {
  DisplayName: string;
  Id: number;
  constructor(model: IModel) {
    this.DisplayName = model.DisplayName;
    this.Id = model.Id;
  }
}
let firstModel = new Model({ Id: 1, DisplayName: "firstModel" });

console.log(firstModel.DisplayName);
