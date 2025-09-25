"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //expres: web server oluşturmak için ya da API oluşturmak için kullanılır
const app = (0, express_1.default)(); //
const PORT = process.env.PORT || 3000; //process.env.PORT: ortam değişkenlerinden port numarasını alır, yoksa 3000 kullanır
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map