const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

app.post("/loginIn", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username == 'admin1' && password == '123456') {
        res.json({
            id: 1,
            mes: "登录成功"
        })
    } else if (username == 'admin2' && password == '123456') {
        res.json({
            id: 2,
            mes: "登录成功"
        })
    } else {
        res.json({
            mes: "用户名错误"
        })
    }
})
app.get("/getRoute", (req, res) => {
    let id = req.query.id;
    if (id == 1) {
        res.json({
            data: [
                {
                    path: "/page1",
                    component: 'Page1'
                },
                {
                    path: "/page2",
                    component: 'Page2',
                    children: [
                        {
                            path: "page2Son",
                            component: 'Page2Son'
                        },
                        {
                            path: "page2Son2",
                            component: 'Page2Son2'
                        }
                    ]
                },

            ]
        })
    }
    if (id == 2) {
        res.json({

            data: [

                {
                    path: "/page2",
                    component: 'Page2',
                    children: [
                        {
                            path: "page2Son",
                            component: 'Page2Son'
                        },
                        {
                            path: "page2Son2",
                            component: 'Page2Son2'
                        }
                    ]
                },
                {
                    path: "/page3",
                    component: 'Page3'
                }
            ]
        })
    }
})
app.listen(8000);