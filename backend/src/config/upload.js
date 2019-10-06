const multer = require('multer');
const path = require('path');

module.exports = {
    storage : multer.diskStorage({
        destination : path.resolve(__dirname, '..', '..', 'uploads'), //path.resolve vc não coloca nenhuma barra e sim virgula para não ter problema entre windows e linux \ e /
        filename : (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),                             
};


/*
__dirname informa a pasta atual, é uma variavel global
fieldname é o nome do arquivo, se o nome é rocketseat, ele pega o texto rocketseat
formato template strings `${file.fieldname}-${Date.now()}`, vc inclui variaveis dentro de string q são essas aspas (` `)
path.extname busca a extensão
path.basename retorna o nome da imagem sem a extensão, por isso passamos a extensão como 2° parametro, para retirá-la
*/