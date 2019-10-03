const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router(); //ta pegando o roteador do express e separando numa variavel
const upload = multer(uploadConfig); 


routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);
routes.get('/dashboard', DashboardController.show);

routes.get('/spots/:spot_id/bookings', BookingController.store); //querendo criar reserva dentro desse Spot com esse id

module.exports = routes; //ta exportando pro arquivo entender q isso existe

//1° rota q faremos é o login do usuario no web (39:10)
//Aos 47 ele mexe no Insomnia para setar o caminho numa variavel, assim não precisa digitar toda a linha todas as vezes
//upload.single('thumbnail')  ele coloca single pq é só 1 imagem e o parametro é o campo que receberá a imagem