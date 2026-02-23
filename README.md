# FutScript

Aplicación backend aplicación FutScript, como evaluación de desafío 6opcional y demostración de conocimiento de Testing Unitarios y desarrollo con NodeJS y PostgreSQL con JWT.

## Tecnologías Empleadas

- Node JS
- JavaScript
- Express JS
- PostgreSQL

## Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (versión 14 o superior).
- Una terminal o consola de comandos.
- Tener instalado [PostgreSQL](https://www.postgresql.org/download/) (versión 16 o superior).
- Opcional: Tener instalado algún "Cliente API"

## Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/aepenalver/futscript.git
```

2. Acceder al directorio:

```bash
cd sfutscript.git
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar las variables de entorno

Crear archivo `.env` usando como referencia `.env.example`

5. Uso (modo desarrollo):

```bash
npm run dev
```

6.  Creación de Base de Datos

Desde la "CLI psql" crear la base de datos y tabla. Las sentencias se encuentran detalladas en el directorio `script.sql`

## Estructura de la aplicación

```bash
.
├── FutScript.postman_collection.json # Archivo para importar en Postman con todas las rutas y pruebas listas.
├── controllers                       # CAPA DE LÓGICA: Aquí se procesan las peticiones (req) y respuestas (res).
├── db                                # CAPA DE DATOS: Comunicación directa con la base de datos.
├── index.js                          # PUNTO DE ENTRADA: Entrada de la app.
├── package.json                      # Configuración del proyecto, scripts y dependencias.
├── script.sql                        # creación de base de datos y tablas.
├── test                              # CAPA DE PRUEBAS: Tests automatizados para asegurar que el código no se rompa.
└── utils.js                          # Funciones auxiliares o helpers
```
