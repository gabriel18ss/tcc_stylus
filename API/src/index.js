import 'dotenv/config'


import adminController from './controller/adminController.js';
import cadastrarController from './controller/cadastrarController.js';
import UsuarioController from './controller/usuarioController.js';
import pedidoController from './controller/pedidoController.js';


import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/capaTenis', express.static('storage/capaTenis'));


server.use(adminController);
server.use(cadastrarController);
server.use(UsuarioController);
server.use(pedidoController);




server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));