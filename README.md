Atualização Multizap Flow 3.9.0


ATENÇÃO FAZER BACKUP ANTES DE QUALQUER ALTERAÇÃO

Extraia o arquivo Multizap.zip e utiliza as pastas backend e frontend para o tutorial.

------------------------------------------------------------------------------------------------------
NO SEU SISTEMA (PELO TERMINAL SSH)

REMOVER AS PASTAT DO BACKEND( MENOS A PUBLIC E .ENV)

rm -rf /home/deploy/empresa01/backend/certs
rm -rf /home/deploy/empresa01/backend/dist
rm -rf /home/deploy/empresa01/backend/node_modules
rm -rf /home/deploy/empresa01/backend/src

-----------------------------------

APÓS EXCLUIR AS PASTAS INDICADAS, ARRASTE AS PASTAS DO NOVO SISTEMA(MENOS A PUBLIC e .env)


----------------------------------------------------------------
GEMINI_API_KEY=   (colar no .env)

APÓS FEITO O UPLOAD DAS PASTAS DÊ OS COMANDOS:

cd /home/deploy/empresa01/backend
npm i
npm run build
npm run db:migrate
---------------------------------------------------------

AGORA DELETAR AS PASTAS DO FRONTEND( MENOS A PUBLIC E .ENV)
Faça backup da sua pasta ASSETS do SRC, ou já substitua no arquivo novo antes de fazer o upload.
Pode trocar o INDEX da PUBLIC do FRONTEND.

cd ..
cd frontend/
rm -rf /home/deploy/empresa01/frontend/src
rm -rf /home/deploy/empresa01/frontend/node_modules
rm -rf /home/deploy/empresa01/frontend/build
-------------------------------------------------------------

APÓS EXCLUIR AS PASTAS INDICADAS, ARRASTE AS PASTAS DO NOVO SISTEMA(MENOS A PUBLIC e .env)

------------------------------------------------------------


cd /home/deploy/empresa01/frontend
npm i --f
npm run build

TERMINANDO, ABRA SEU SISTEMA E DÊ UM CONTROL SHIFT R

Pronto....