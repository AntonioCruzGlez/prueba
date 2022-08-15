let cantidad = prompt("Que matricula tiene el aula");
let alumnos = [];

function listarAlumnos(alumnos,cantidad){
    for (let i = 0; i < cantidad; i++){
        alumnos[i] = [prompt("Nombre del Alumno "+ (i+1),false)];
    }
}

function Asistencia(alumnos,cantidad){
    let flag = false;
    for (let i = 0; i < cantidad; i++) {
        flag = prompt(alumnos[i][0]+" esta presente?");
        if(flag == 'si'){
            alumnos[i][1]=true;
        }else {
            alumnos[i][1]=false;
        }
    }
}

listarAlumnos(alumnos,cantidad);
Asistencia(alumnos,cantidad);

for (let i=0; i<cantidad; i++){
    if(alumnos[i][1]==true){
        document.write(alumnos[i][0]+ " esta presente"+ "<br>");
    } else {
        document.write(alumnos[i][0]+ " esta ausente" + "<br>");
    }
    
}

