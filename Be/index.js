import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

const employeeSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  price: Number,
});
const employeeModel = mongoose.model('employee', employeeSchema);

app.get('/employee', async (req, res) => {
  const employee = await employeeModel.find()
  res.send(employee)
})
app.get('/employee/:id', async (req, res) => {
  const { id } = req.params
  const employee = await employeeModel.findById(id)
  res.send(employee)
})
app.delete('/employee/:id', async (req, res) => {
  const { id } = req.params
  const employee = await employeeModel.findByIdAndDelete(id)
  res.send(employee)
})
app.put('/employee/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body
  console.log(body);
  const employee = await employeeModel.findByIdAndUpdate(id, body)
  res.send({ message: "update olundu" })
})
app.post('/employee', async (req,res)=>{
 const body=req.body
 const employee=new employeeModel(body)
 await employee.save()
 res.send({message:"post"})
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
  .then(() => console.log('Connected'))
  .catch(() => console.log('Not connected'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})