"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
class iFruit {
    give_juice() { return 0; }
    ;
}
let Apple = class Apple {
    constructor() { }
    give_juice() { return 100; }
    ;
};
Apple = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Apple);
let Orange = class Orange {
    constructor() { }
    give_juice() { return 50; }
    ;
};
Orange = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Orange);
let Juicer = class Juicer {
    constructor(fruit) {
        this.fruit = fruit;
    }
    get_juice() {
        console.log(this.fruit.give_juice());
    }
};
Juicer = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(iFruit)),
    __metadata("design:paramtypes", [iFruit])
], Juicer);
const container = new inversify_1.Container();
container.bind(iFruit).to(Orange);
container.bind(Juicer).toSelf();
const juice = container.get(Juicer);
juice.get_juice();
