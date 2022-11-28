# Proyecto Tolerancia a Fallas

Aplicación web que utiliza una API la cual genera consejos/frases de manera aleatoria al presionar un boton.
![Arquitectura](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/arquitectura.png)


# Autores 👥💬

🔸🔹     Campos Serna Hector      🔹🔸 

🔹🔸  Medina Bolaños Danna Paola  🔸🔹 


# 🔸Comenzando 🎟️🎫

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en un contenedor de docker, con la cual podras realizar peticiones a una API externa y esta te retornara frases o consejos._

### 🔹Pre-requisitos🖇️

* Visual Studio Code
* Docker Desktop - Comandos
* Web Developer
* Conocimiento de API's


## Despliegue 📦
* Github <br>
Clonamos el repositorio mediente el siguiente comando: 
```gh repo clone Danna-Medina/ProyectoTolerante ```  o podemos descargar el archivo zip del proyecto.
* Docker <br>
Para el despliegue de la aplicacion en docker ejecutamos lo siguientes comandos.
```
docker build -t html-server:v1 .
docker images
docker run -d -p 80:80 html-server:v1
```

## Construido con 🛠️
* HTML5
* CSS3
* JavaScript
* API

## Arquitectura 🧭
![Arquitectura](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/arquitectura.png)
