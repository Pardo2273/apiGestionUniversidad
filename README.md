El siguiente proyecto cuenta con el siguiente enunciado: 
Desde una universidad, te piden que desarrolles un sistema para gestionar el cursado. A grandes rasgos necesitan que este sistema administre tres grupos de datos:

1. Registro de ESTUDIANTES inscriptos en la universidad, que incluya:
        * [legajo]
        * [nombre]
        * [email]
2. Registro de CURSOS, que incluya:
        * [codigo]
        * [nombre]
        * [docente]
        * [descripción]
3. Registro de NOTAS de los exámenes que cada estudiante obtiene en cada curso, que incluya:
        * [id]
        * [legajo_estudiante]
        * [codigo_curso]
        * [nota]
        * [fecha]


REQUISITOS:
	* Crear manualmente una base de datos en base a la información proporcionada. Puedes utilizar base de datos relacionales (MySQL) o no relacionales (MongoDB), lo que tu prefieras.
	* Programar una API utilizando ExpressJS que establezca una conexión con la base de datos y desarrolle los siguientes métodos (endpoints):
		- GET: estudiantes/[legajo]
		    Consultar el registro del estudiante con el legajo recibido en la URL

		- POST: estudiantes/create
                Crear un nuevo registro de estudiantes con los datos recibidos

		- POST: notas/create
		    Crear un nuevo registro de un examen con los datos recibidos

		- PUT - notas/[id]/update
                Modificar el registro de un examen según el id recibido en la URL con los nuevos datos recibidos

		- DELETE - notas/[id]/delete
		    Eliminar un registro de un examen según el id recibido en la URL

		- GET - notas/[codigo]/aprobados
		    Consultar los exámenes registrados del curso cuyo código se recibe en la URL, pero solo incluir en la consulta los exámenes aprobados. Es decir con nota igual o mayor a 6.


CONSIDERACIONES PARA MANEJAR DATOS VARIABLES EN LA URL:
	Como habrás observado, algunas de las URL para estas peticiones incluyen datos variables, como [id] o [legajo], que sirven para identificar registros específicos. En esos casos, ten en cuenta lo siguiente.
	* Cuando definas la ruta que va a recibir cada método de mi API, tienes que colocar dos punto (:) antes del nombre del campo variable. Por ejemplo: estudiantes/:legajo donde la url esperada será estudiantes/635
	* Para obtener el valor del campo variable que contiene la url, dentro del método que va a procesar la petición, tengo que utilizar el parámetro "pedido" de la siguiente manera: pedido.params.legajo.


 Tomando en cuenta lo anterior se procede a resolven lo solicitado empleando Node.js, Express.js y MongoDB
 Tomar en cuenta que todos los componentes de node, express y mongoDb deben ser instalados por tu cuenta si gustas comprobar el funcionamiento de la API debido a que no es recomendado subir a github esos archivos.
