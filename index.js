const { pool } = require("./dataBase.js");

// const getEstudiantes = async() => {
//      try{

//          const res = await pool.query("SELECT * FROM estudiantes");
//          console.table(res.rows);

//      }catch(error){
//          console.error(error);
//      }
//  }

// getEstudiantes();

// const getCursos = async() => {
//     try{

//         const res = await pool.query("SELECT * FROM cursos");
//         console.table(res);

//     }catch(error){
//         console.error(error);
//     }
// }

// const insertarEstudiante = async() => {
//     const [nombres,apellidos,edad,nro_identificacion] = process.argv.slice(2);

//     try{
        
//         const res = await pool.query(
//             "INSERT INTO estudiantes(nombres,apellidos,edad,nro_identificacion) values($1,$2,$3,$4)",
//             [nombres,apellidos,edad,nro_identificacion]
//         );
//         console.log(`Se ha agregado con exito a ${nombres} ${apellidos}`);

//     }catch(error){
//         switch(error.code){
//             case '42601':
//                 console.log("\n ERROR! \n Error de Sintaxis\n");
//                 break;
//             case '25P01':
//                 console.log("\n ERROR! \n Password inválido\n");
//                 break;
//             case '08003':
//                 console.log("\n ERROR! \n Conexion intexistente\n");
//                 break;
//             case '08006':
//                 console.log("\n ERROR! \n Conexion falló\n");
//                 break;
//             case '2F002':
//                 console.log("\n ERROR! \n Sin permisos para modificar\n");
//                 break;
//             case '57P03':
//                 console.log("\n ERROR! \n Error en la conexion\n");
//                 break;
//             case '42501':
//                 console.log("\n ERROR! \n Privilegios insuficientes\n");
//                 break;
//             case '42602':
//                 console.log("\n ERROR! \n Nombre inválido\n");
//                 break;
//             case '42622':
//                 console.log("\n ERROR! \n Nombre demasiado largo\n");
//                 break;
//             case '42939':
//                 console.log("\n ERROR! \n Nombre reservado\n");
//                 break;
//             case '42703':
//                 console.log("\n ERROR! \n Columna indefinida\n");
//                 break;
//             case '42000':
//                 console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
//                 break;
//             case '42P01':
//                 console.log("\n ERROR! \n Tabla no definida\n");
//                 break;
//             case '42P02':
//                 console.log("\n ERROR! \n Parametro no definida\n");
//                 break;
//             default:
//                 console.error(error.stack);
//                 console.log(error.code);
//         }
//     }
//     finally{
//         console.log('Inserción Terminada');
//     }
// }

//insertarEstudiante();

// const insertarCurso = async() => {
//     const [titulo,descripcion] = process.argv.slice(2);

//     try{
        
//         const res = await pool.query(
//             "INSERT INTO cursos(titulo,descripcion) values($1,$2)",
//             [titulo,descripcion]
//         );
//         console.log(`Se ha agregado con exito a ${titulo} ${descripcion}`);

//     }catch(error){
//         switch(error.code){
//             case '42601':
//                 console.log("\n ERROR! \n Error de Sintaxis\n");
//                 break;
//             case '25P01':
//                 console.log("\n ERROR! \n Password inválido\n");
//                 break;
//             case '08003':
//                 console.log("\n ERROR! \n Conexion intexistente\n");
//                 break;
//             case '08006':
//                 console.log("\n ERROR! \n Conexion falló\n");
//                 break;
//             case '2F002':
//                 console.log("\n ERROR! \n Sin permisos para modificar\n");
//                 break;
//             case '57P03':
//                 console.log("\n ERROR! \n Error en la conexion\n");
//                 break;
//             case '42501':
//                 console.log("\n ERROR! \n Privilegios insuficientes\n");
//                 break;
//             case '42602':
//                 console.log("\n ERROR! \n Nombre inválido\n");
//                 break;
//             case '42622':
//                 console.log("\n ERROR! \n Nombre demasiado largo\n");
//                 break;
//             case '42939':
//                 console.log("\n ERROR! \n Nombre reservado\n");
//                 break;
//             case '42703':
//                 console.log("\n ERROR! \n Columna indefinida\n");
//                 break;
//             case '42000':
//                 console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
//                 break;
//             case '42P01':
//                 console.log("\n ERROR! \n Tabla no definida\n");
//                 break;
//             case '42P02':
//                 console.log("\n ERROR! \n Parametro no definida\n");
//                 break;
//             default:
//                 console.error(error.stack);
//                 console.log(error.code);
//         }
//     }
//     finally{
//         console.log('Inserción Terminada');
//     }    
// }

// const editarEstudiante = async() => {
//     const [nombres,id_estudiante] = process.argv.slice(2);    
//     try{
        
//         const res = await pool.query(
//             "UPDATE estudiantes SET nombres = $1 WHERE id_estudiante = $2",
//             [nombres,id_estudiante]
//         );
//         console.log(`Se ha editado con exito a ${nombres}`);

//     }catch(error){
//         switch(error.code){
//             case '42601':
//                 console.log("\n ERROR! \n Error de Sintaxis\n");
//                 break;
//             case '25P01':
//                 console.log("\n ERROR! \n Password inválido\n");
//                 break;
//             case '08003':
//                 console.log("\n ERROR! \n Conexion intexistente\n");
//                 break;
//             case '08006':
//                 console.log("\n ERROR! \n Conexion falló\n");
//                 break;
//             case '2F002':
//                 console.log("\n ERROR! \n Sin permisos para modificar\n");
//                 break;
//             case '57P03':
//                 console.log("\n ERROR! \n Error en la conexion\n");
//                 break;
//             case '42501':
//                 console.log("\n ERROR! \n Privilegios insuficientes\n");
//                 break;
//             case '42602':
//                 console.log("\n ERROR! \n Nombre inválido\n");
//                 break;
//             case '42622':
//                 console.log("\n ERROR! \n Nombre demasiado largo\n");
//                 break;
//             case '42939':
//                 console.log("\n ERROR! \n Nombre reservado\n");
//                 break;
//             case '42703':
//                 console.log("\n ERROR! \n Columna indefinida\n");
//                 break;
//             case '42000':
//                 console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
//                 break;
//             case '42P01':
//                 console.log("\n ERROR! \n Tabla no definida\n");
//                 break;
//             case '42P02':
//                 console.log("\n ERROR! \n Parametro no definida\n");
//                 break;
//             default:
//                 console.error(error.stack);
//                 console.log(error.code);
//         }
//     }
//     finally{
//         console.log('Edición de estudiante Terminada');
//     }
// }

//editarEstudiante();

// const editarCurso = async() => {
//     const [titulo,id_curso] = process.argv.slice(2);    
//     try{
        
//         const res = await pool.query(
//             "UPDATE cursos SET titulo = $1 WHERE id_curso = $2",
//             [titulo,id_curso]
//         );
//         console.log(`Se ha editado con exito a ${titulo}`);

//     }catch(error){
//         switch(error.code){
//             case '42601':
//                 console.log("\n ERROR! \n Error de Sintaxis\n");
//                 break;
//             case '25P01':
//                 console.log("\n ERROR! \n Password inválido\n");
//                 break;
//             case '08003':
//                 console.log("\n ERROR! \n Conexion intexistente\n");
//                 break;
//             case '08006':
//                 console.log("\n ERROR! \n Conexion falló\n");
//                 break;
//             case '2F002':
//                 console.log("\n ERROR! \n Sin permisos para modificar\n");
//                 break;
//             case '57P03':
//                 console.log("\n ERROR! \n Error en la conexion\n");
//                 break;
//             case '42501':
//                 console.log("\n ERROR! \n Privilegios insuficientes\n");
//                 break;
//             case '42602':
//                 console.log("\n ERROR! \n Nombre inválido\n");
//                 break;
//             case '42622':
//                 console.log("\n ERROR! \n Nombre demasiado largo\n");
//                 break;
//             case '42939':
//                 console.log("\n ERROR! \n Nombre reservado\n");
//                 break;
//             case '42703':
//                 console.log("\n ERROR! \n Columna indefinida\n");
//                 break;
//             case '42000':
//                 console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
//                 break;
//             case '42P01':
//                 console.log("\n ERROR! \n Tabla no definida\n");
//                 break;
//             case '42P02':
//                 console.log("\n ERROR! \n Parametro no definida\n");
//                 break;
//             default:
//                 console.error(error.stack);
//                 console.log(error.code);
//         }
//     }
//     finally{
//         console.log('Edición de curso Terminada');
//     }
// }

const eliminarCurso = async() => {
    const [id_curso] = process.argv.slice(2);    
         try{
            
             const res = await pool.query(
                 "DELETE FROM cursos WHERE id_curso = $1",
                 [id_curso]
             );
             console.log(`Se ha eliminado con exito a ${id_curso}`);
    
         }catch(error){
             switch(error.code){
                 case '42601':
                     console.log("\n ERROR! \n Error de Sintaxis\n");
                     break;
                 case '25P01':
                     console.log("\n ERROR! \n Password inválido\n");
                     break;
                 case '08003':
                     console.log("\n ERROR! \n Conexion intexistente\n");
                     break;
                 case '08006':
                     console.log("\n ERROR! \n Conexion falló\n");
                     break;
                 case '2F002':
                     console.log("\n ERROR! \n Sin permisos para modificar\n");
                     break;
                 case '57P03':
                     console.log("\n ERROR! \n Error en la conexion\n");
                     break;
                 case '42501':
                     console.log("\n ERROR! \n Privilegios insuficientes\n");
                     break;
                 case '42602':
                     console.log("\n ERROR! \n Nombre inválido\n");
                     break;
                 case '42622':
                     console.log("\n ERROR! \n Nombre demasiado largo\n");
                     break;
                 case '42939':
                     console.log("\n ERROR! \n Nombre reservado\n");
                     break;
                 case '42703':
                     console.log("\n ERROR! \n Columna indefinida\n");
                     break;
                 case '42000':
                     console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
                     break;
                 case '42P01':
                     console.log("\n ERROR! \n Tabla no definida\n");
                     break;
                 case '42P02':
                     console.log("\n ERROR! \n Parametro no definida\n");
                     break;
                 default:
                     console.error(error.stack);
                     console.log(error.code);
             }
         }
         finally{
             console.log('Eliminación de curso Terminada');
         }
     }

     const eliminarEstudiante = async() => {
        const [id_estudiante] = process.argv.slice(2);    
             try{
                
                 const res = await pool.query(
                     "DELETE FROM estudiantes WHERE id_estudiante = $1",
                     [id_estudiante]
                 );
                 console.log(`Se ha eliminado con exito a ${id_estudiante}`);
        
             }catch(error){
                 switch(error.code){
                     case '42601':
                         console.log("\n ERROR! \n Error de Sintaxis\n");
                         break;
                     case '25P01':
                         console.log("\n ERROR! \n Password inválido\n");
                         break;
                     case '08003':
                         console.log("\n ERROR! \n Conexion intexistente\n");
                         break;
                     case '08006':
                         console.log("\n ERROR! \n Conexion falló\n");
                         break;
                     case '2F002':
                         console.log("\n ERROR! \n Sin permisos para modificar\n");
                         break;
                     case '57P03':
                         console.log("\n ERROR! \n Error en la conexion\n");
                         break;
                     case '42501':
                         console.log("\n ERROR! \n Privilegios insuficientes\n");
                         break;
                     case '42602':
                         console.log("\n ERROR! \n Nombre inválido\n");
                         break;
                     case '42622':
                         console.log("\n ERROR! \n Nombre demasiado largo\n");
                         break;
                     case '42939':
                         console.log("\n ERROR! \n Nombre reservado\n");
                         break;
                     case '42703':
                         console.log("\n ERROR! \n Columna indefinida\n");
                         break;
                     case '42000':
                         console.log("\n ERROR! \n Syntaxis error o violacion de acceso\n");
                         break;
                     case '42P01':
                         console.log("\n ERROR! \n Tabla no definida\n");
                         break;
                     case '42P02':
                         console.log("\n ERROR! \n Parametro no definida\n");
                         break;
                     default:
                         console.error(error.stack);
                         console.log(error.code);
                 }
             }
             finally{
                 console.log('Eliminación de estudiante Terminada');
             }
         }
eliminarEstudiante();

//eliminarCurso()
// editarCurso();

