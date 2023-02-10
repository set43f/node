const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use("/contact", function(request, response) {
    response.render("contact", {
    title: "Мои контакты",
    emalisVisible: true,
    emails: ["gladvalacos@mycorp.com","mioaw@mycorp.com"],
    phone: "+1234567890",
    })
})
app.use("/FIO", function(request, response) {
    response.render("FIO", {
    name: "Бузук",
    pastname: "Бузоков",
    lastname: "Бузукович",
    emalisVisible: true,
    })
})

app.use("/info", function(request, response) {
    response.render("info", {
    inform: "Пожилая годзилла,а вообще пуля от бабули ветеран горячих точек,диванный эксперт,опыт работы присутвует бездержинно хочу учиться",
    emalisVisible: true,
    })
})

app.use("/power", function(request, response) {
    response.render("power", {
    power: "Могу ходить задом, проффессиональное обращение с Багданчиком",
    skills: " Моё увлечение ходить в бар",
    emalisVisible: true,
    })
})

app.use("/lang", function(request, response) {
    response.render("lang", {
    lang: "Английский,Русский,Китайский",
    emalisVisible: true,
    })
})

app.use("/", function (request, response) {
    response.send("Главная страница")
})
app.listen(3000)