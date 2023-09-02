import express, { Express } from 'express';
import noticiasRoutes from './modules/noticias/noticia.routes';
import bodyParser from 'body-parser';

const app: Express = express();

//instancia global de express es app
app.use(bodyParser.json());

//app.use('/noticia', noticiasRoutes);

app.listen( 4000, () => {
	console.log('Servidor esta funcionando OK en el PORT: 4000');
});
