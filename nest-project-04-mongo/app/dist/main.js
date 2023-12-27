"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT;
async function bootstrap() {
    console.log(`STARTED NESTJS ON PORT ${PORT}`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map