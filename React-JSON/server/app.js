const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let id = 2;
const todolist = [{
    id : 1,
    text: '할일 1',
    done : false
}];



app.get('/api/todo', (req,res) => {
    res.json(todolist);
})

app.post('/api/todo', (req, res) => {
    const {text,done} = req.body;
    todolist.push({
        id: id++,
        text,
        done
    })
    return res.send('sucess')
})

app.listen(4000, ()=> {
    console.log('잘 실행이 되나요~?')
})