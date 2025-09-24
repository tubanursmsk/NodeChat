import express from 'express'; //expres: web server oluşturmak için ya da API oluşturmak için kullanılır
const app = express(); //
const PORT = process.env.PORT || 3000; //process.env.PORT: ortam değişkenlerinden port numarasını alır, yoksa 3000 kullanır
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map