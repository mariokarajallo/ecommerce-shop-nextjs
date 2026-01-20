# Descripcion

## correr en DEV

1.  clonar el repositorio
2.  crear una copia del archivo .env.example y nombrarlo .env y cambiar los valores de las variables de entorno
3.  instalar dependencias `npm install`
4.  levantar la base de datos `docker compose up -d`
5.  ejecutar las migraciones `npx prisma migrate dev`

6.  iniciar el servidor `npm run dev`

## correr en PROD
