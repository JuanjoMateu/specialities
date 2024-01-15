const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

function filtrarEspecialidades(specialty) {
    if ('marketing' in usersData)
    return
};
const marketing = usersData.filter(userData => userData.specialty === 'marketing');
const developer = usersData.filter(userData => userData.specialty === 'developers');
const qa = usersData.filter(userData => userData.specialty === 'QAs');
const venta = usersData.filter(userData => userData.specialty === 'ventas');

console.log(marketing)
console.log(developer)
console.log(qa)
console.log(venta)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.path)
    res.send(`<h1>Este es el listado de trabajadores de El Puente.Tecnología</h1>
            <a href="/marketing">Marketing</a>
            <a href="/developers"> Desarrolladores </a>
            <a href="/qas"> QAs </a>
            <a href="/sales"> Ventas </a>
            <a href="/manager"> Managers</a>`)
})
app.get('/marketing', (req, res) => {
    console.log(req.path)
    res.send(`<h1>Personal de Marketing de El Puente.Tecnología</h1>
            <a href="/">Inicio </a>
            <a href="/developers"> Desarrolladores </a>
            <a href="/qas"> QAs </a>
            <a href="/sales"> Ventas </a>
            <a href="/manager"> Managers</a>
            `)
})
app.get('/developers', (req, res) => {
    console.log(req.path)
    res.send(`<h1>Personal de Desarrolladores de El Puente.Tecnología</h1>
            <a href="/">Inicio </a>
            <a href="/marketing"> Marketing </a>
            <a href="/qas"> QAs </a>
            <a href="/sales"> Ventas </a>
            <a href="/manager"> Managers</a>`)
})
app.get('/qas', (req, res) => {
    console.log(req.path)
    res.send(`<h1>Personal de QAs de El Puente.Tecnología</h1>
            <a href="/">Inicio </a>
            <a href="/marketing"> Marketing </a>
            <a href="/developers"> Desarrolladores </a>
            <a href="/sales"> Ventas </a>
            <a href="/manager"> Managers</a>`)
})
app.get('/sales', (req, res) => {
    console.log(req.path)
    res.send(`<h1>Personal de Ventas de El Puente.Tecnología</h1>
            <a href="/">Inicio </a>
            <a href="/marketing"> Marketing </a>
            <a href="/developers"> Desarrolladores </a>
            <a href="/qas"> QAs </a>
            <a href="/manager"> Managers</a>`)
})

app.use((req, res) => {
    console.log(req.path)
    res.status(404).send('<h1>Página no encontrada</h1><a href="/"> Inicio </a>')
})

app.listen(3000, () => {
    console.log('Node.js está escuchando en http://localhost:3000')
})