const express = require("express");
const app = express();
const notifier = require('node-notifier');
//definição do bodyParser
const bodyParser = require("body-parser");
//definição do view engine
app.set("view engine", "ejs");
//definição da pasta public para css, js e img
app.use(express.static("public"));
//configuração do bodyParser - serve para trabalhar com os formulários
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
//rota para a página inicial
app.get("/", (req, res) => {
    res.render("index");
});
//*************************************************ROTAS DAS PÁGINAS */
app.get("/lpd1", (req, res) => {
    res.render("lpd1");
});

app.get("/lpd3", (req, res) => {
    res.render("lpd3");
});

app.get("/lpd8", (req, res) => {
    res.render("lpd8");
});

app.get("/lpd10", (req, res) => {
    res.render("lpd10");
});

app.get("/lpd11", (req, res) => {
    res.render("lpd11");
});

app.get("/lpd12", (req, res) => {
    res.render("lpd12");
});

app.get("/lpd15", (req, res) => {
    res.render("lpd15");
});

app.get("/md2", (req, res) => {
    res.render("md2");
});

app.get("/md3", (req, res) => {
    res.render("md3");
});

app.get("/md4", (req, res) => {
    res.render("md4");
});

app.get("/md5", (req, res) => {
    res.render("md5");
});

app.get("/md6", (req, res) => {
    res.render("md6");
});

app.get("/md7", (req, res) => {
    res.render("md7");
});

app.get("/md8", (req, res) => {
    res.render("md8");
});

app.get("/md9", (req, res) => {
    res.render("md9");
});

app.get("/md10", (req, res) => {
    res.render("md10");
});

app.get("/md11", (req, res) => {
    res.render("md11");
});

app.get("/md12", (req, res) => {
    res.render("md12");
});

app.get("/md18", (req, res) => {
    res.render("md18");
});

app.get("/md19", (req, res) => {
    res.render("md19");
});

app.get("/md20", (req, res) => {
    res.render("md20");
});

app.get("/md21", (req, res) => {
    res.render("md21");
});

app.get("/md22", (req, res) => {
    res.render("md22");
});

app.get("/md23", (req, res) => {
    res.render("md23");
});

app.get("/md24", (req, res) => {
    res.render("md24");
});

app.get("/md25", (req, res) => {
    res.render("md25");
});

app.get("/md26", (req, res) => {
    res.render("md26");
});

app.get("/md27", (req, res) => {
    res.render("md27");
});

app.get("/md28", (req, res) => {
    res.render("md28");
});
//rota para a página do Descritor 4 de Língua Portuguesa
app.get("/lpd4", (req, res) => {
    res.render("lpd4");
});
//rota para a página do descritor 6 de Língua Portuguesa
app.get("/lpd6", (req, res) => {
    res.render("lpd6");
});
//rota para a página do descritor 5 de Língua Portuguesa
app.get("/lpd5", (req, res) => {
    res.render("lpd5");
});

//rota para a página do descritor 1 de matemática
app.get("/md1", (req, res) => {
    res.render("md1");
});
//rota para a página do descritor 9 de Língua Portuguesa
app.get("/lpd9", (req, res) => {
    res.render("lpd9");
});
//rota para a página do descritor 13 de matemática
app.get("/md13", (req, res) => {
    res.render("md13");
});
//rota para a página do descritor 14 de matemática
app.get("/md14", (req, res) => {
    res.render("md14");
});
//rota para a página do descritor 2 de língua portuguesa
app.get("/lpd2", (req, res) => {
    res.render("lpd2");   
});
//rota para a página do descritor 15 de Matemática
app.get("/md15", (req, res) => {
    res.render("md15");   
});
//rota para a página do descritor 7 de Língua Portuguesa
app.get("/lpd7", (req, res) => {
    res.render("lpd7");
});
//rota para a página do descritor 16 de Matemática
app.get("/md16", (req, res) => {
    res.render("md16");
});
//rota para a página do descritor 17 de Matemática
app.get("/md17", (req, res) => {
    res.render("md17");
});
//rota para a página do descritor 13 de Língua Portuguesa
app.get("/lpd13", (req, res) => {
    res.render("lpd13");
});
//rota para a página do descritor 13 de Língua Portuguesa
app.get("/lpd14", (req, res) => {
    res.render("lpd14");
});
//********************ROTAS PARAS AS PÁGINAS DE CONFIRMAÇÃO********************************** */
app.post('/confirmacao-lpd1', (req, res) => {
    const respostasCorretas = ["A", "B", "C", "D", "D", "B", "B", "A", "B", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd1");
    }else{
        res.render("confirmacao-lpd1",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd3', (req, res) => {
    const respostasCorretas = ["A", "D", "A", "C", "A", "B", "B", "C", "D", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd3");
    }else{
        res.render("confirmacao-lpd3",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd15', (req, res) => {
    const respostasCorretas = ["C", "B", "C", "D", "B", "A", "D", "A", "D", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd15");
    }else{
        res.render("confirmacao-lpd15",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd8', (req, res) => {
    const respostasCorretas = ["B", "C", "A", "D", "B", "B", "D", "D", "D", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd8");
    }else{
        res.render("confirmacao-lpd8",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd10', (req, res) => {
    const respostasCorretas = ["B", "A", "D", "A", "A", "C", "D", "D", "B", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd10");
    }else{
        res.render("confirmacao-lpd10",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd11', (req, res) => {
    const respostasCorretas = ["A", "B", "D", "B", "D", "A", "D", "D", "A", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd11");
    }else{
        res.render("confirmacao-lpd11",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd12', (req, res) => {
    const respostasCorretas = ["D", "C", "C", "B", "B", "B", "D", "C", "B", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd12");
    }else{
        res.render("confirmacao-lpd12",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md2', (req, res) => {
    const respostasCorretas = ["C", "A", "A", "B", "D", "B", "B", "C", "C", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md2");
    }else{
        res.render("confirmacao-md2",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md3', (req, res) => {
    const respostasCorretas = ["C", "C", "B", "B", "A", "B", "B", "C", "D", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md3");
    }else{
        res.render("confirmacao-md3",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md4', (req, res) => {
    const respostasCorretas = ["D", "B", "D", "D", "C", "C", "B", "B", "C", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md4");
    }else{
        res.render("confirmacao-md4",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md5', (req, res) => {
    const respostasCorretas = ["B", "B", "A", "C", "A", "D", "C", "C", "C", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md5");
    }else{
        res.render("confirmacao-md5",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md6', (req, res) => {
    const respostasCorretas = ["C", "C", "D", "B", "A", "B", "B", "B", "D", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md6");
    }else{
        res.render("confirmacao-md6",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md7', (req, res) => {
    const respostasCorretas = ["D", "D", "D", "A", "D", "B", "A", "C", "B", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md7");
    }else{
        res.render("confirmacao-md7",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md8', (req, res) => {
    const respostasCorretas = ["B", "C", "B", "A", "B", "B", "C", "B", "D", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md8");
    }else{
        res.render("confirmacao-md8",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md9', (req, res) => {
    const respostasCorretas = ["C", "B", "D", "D", "D", "A", "C", "C", "B", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md9");
    }else{
        res.render("confirmacao-md9",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md10', (req, res) => {
    const respostasCorretas = ["D", "B", "B", "C", "C", "B", "A", "A", "C", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md10");
    }else{
        res.render("confirmacao-md10",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md11', (req, res) => {
    const respostasCorretas = ["B", "B", "B", "C", "C", "C", "A", "D", "A", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md11");
    }else{
        res.render("confirmacao-md11",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md12', (req, res) => {
    const respostasCorretas = ["D", "A", "B", "A", "A", "D", "D", "C", "B", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md12");
    }else{
        res.render("confirmacao-md12",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md18', (req, res) => {
    const respostasCorretas = ["C", "B", "D", "A", "A", "D", "A", "B", "C", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md18");
    }else{
        res.render("confirmacao-md18",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md19', (req, res) => {
    const respostasCorretas = ["B", "D", "D", "A", "D", "C", "B", "C", "A", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md19");
    }else{
        res.render("confirmacao-md19",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md20', (req, res) => {
    const respostasCorretas = ["A", "B", "D", "D", "C", "D", "C", "B", "C", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md20");
    }else{
        res.render("confirmacao-md20",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md21', (req, res) => {
    const respostasCorretas = ["A", "B", "B", "C", "B", "A", "C", "A", "A", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md21");
    }else{
        res.render("confirmacao-md21",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md22', (req, res) => {
    const respostasCorretas = ["D", "C", "B", "B", "A", "C", "B", "C", "A", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md22");
    }else{
        res.render("confirmacao-md22",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md23', (req, res) => {
    const respostasCorretas = ["C", "C", "A", "D", "B", "A", "D", "B", "C", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md23");
    }else{
        res.render("confirmacao-md23",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md24', (req, res) => {
    const respostasCorretas = ["D", "A", "D", "A", "C", "A", "C", "B", "B", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md24");
    }else{
        res.render("confirmacao-md24",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md25', (req, res) => {
    const respostasCorretas = ["C", "C", "D", "D", "C", "A", "A", "D", "A", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md25");
    }else{
        res.render("confirmacao-md25",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md26', (req, res) => {
    const respostasCorretas = ["A", "C", "B", "B", "C", "A", "A", "A", "B", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md26");
    }else{
        res.render("confirmacao-md26",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md27', (req, res) => {
    const respostasCorretas = ["D", "D", "A", "D", "C", "B", "B", "D", "C", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md27");
    }else{
        res.render("confirmacao-md27",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md28', (req, res) => {
    const respostasCorretas = ["A", "D", "B", "C", "B", "B", "D", "D", "A", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md28");
    }else{
        res.render("confirmacao-md28",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

//rota para a página de confirmação do Descritor 2 de Língua Portuguesa
app.post('/confirmacao-lpd2', (req, res) => {
    const respostasCorretas = ["A", "D", "B", "D", "C", "B", "A", "B", "C", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd2");
    }else{
        res.render("confirmacao-lpd2",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});
//rota para a página de confirmação do Descritor 4 de Língua Portuguesa
app.post('/confirmacao-lpd4', (req, res) => {
    const respostasCorretas = ["C", "B", "C", "B", "B", "B", "B", "D", "B", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd4");
    }else{
        res.render("confirmacao-lpd4",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd6', (req, res) => {
    const respostasCorretas = ["B", "C", "B", "A", "D", "B", "A", "A", "D", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd6");
    }else{
        res.render("confirmacao-lpd6",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd5', (req, res) => {
    const respostasCorretas = ["D", "B", "A", "B", "C", "A", "D", "D", "B", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd5");
    }else{
        res.render("confirmacao-lpd5",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd9', (req, res) => {
    const respostasCorretas = ["C", "D", "B", "D", "A", "D", "B", "C", "D", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd9");
    }else{
        res.render("confirmacao-lpd9",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd7', (req, res) => {
    const respostasCorretas = ["D", "A", "C", "B", "D", "A", "B", "B", "D", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd7");
    }else{
        res.render("confirmacao-lpd7",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd13', (req, res) => {
    const respostasCorretas = ["B", "B", "A", "A", "D", "D", "A", "C", "A", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd13");
    }else{
        res.render("confirmacao-lpd13",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-lpd14', (req, res) => {
    const respostasCorretas = ["A", "B", "B", "D", "B", "C", "B", "C", "D", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/lpd14");
    }else{
        res.render("confirmacao-lpd14",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md1', (req, res) => {
    const respostasCorretas = ["C", "D", "C", "A", "D", "D", "A", "D", "B", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md1");
    }else{
        res.render("confirmacao-md1",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md13', (req, res) => {
    const respostasCorretas = ["C", "A", "C", "A", "A", "B", "B", "A", "C", "C"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md13");
    }else{
        res.render("confirmacao-md13",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md14', (req, res) => {
    const respostasCorretas = ["B", "B", "C", "D", "C", "C", "D", "A", "C", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md14");
    }else{
        res.render("confirmacao-md14",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md15', (req, res) => {
    const respostasCorretas = ["D", "B", "A", "B", "A", "D", "D", "A", "B", "A"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md15");
    }else{
        res.render("confirmacao-md15",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md16', (req, res) => {
    const respostasCorretas = ["C", "A", "C", "B", "D", "A", "D", "B", "D", "B"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md16");
    }else{
        res.render("confirmacao-md16",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});

app.post('/confirmacao-md17', (req, res) => {
    const respostasCorretas = ["A", "B", "D", "C", "B", "A", "A", "B", "A", "D"];
    var total = 0;
    var descritor = req.body.descritor;
    var nome = req.body.name;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    if(nome==""||q1==""||q2==""||q3==""||q4==""||q5==""||q6==""
    ||q7==""||q8==""||q9==""||q10==""){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("/md17");
    }else{
        res.render("confirmacao-md17",{
            descritor: descritor,
            nome: nome,
            total: total,
            reslpd2: respostasCorretas,
            respostas: respostasEnviadas
        });
    }
});


//servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

