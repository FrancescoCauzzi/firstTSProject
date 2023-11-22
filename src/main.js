"use strict";
class Model {
    constructor(model) {
        this.DisplayName = model.DisplayName;
        this.Id = model.Id;
    }
}
let firstModel = new Model({ Id: 1, DisplayName: "firstModel" });
console.log(firstModel.DisplayName);
