# Proyecto Tolerancia a Fallas

Aplicación web que utiliza una API la cual genera consejos/frases de manera aleatoria al presionar un boton.

# Autores 👥💬

🔸🔹     Campos Serna Hector      🔹🔸 
🔹🔸  Medina Bolaños Danna Paola  🔸🔹 


# 🔸Comenzando 🎟️🎫

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en un entorno Sandbox de Red Hat Openshift para propósitos de desarrollo y pruebas._

🔹Pre-requisitos🖇️
Docker Desktop


## Despliegue 📦
* Github <br>
Clonamos el repositorio mediente el siguiente comando: 
```gh repo clone Danna-Medina/ProyectoTolerante ```  o podemos descargar el archivo zip del proyecto.
* Docker <br>
Para el despliegue de la aplicacion en docker ejecutamos lo siguientes comandos.
```
docker build -t html-server-image:v1 .
docker ejecutar -d -p 80:80 html-server-image:v1
```

## Construido con 🛠️
* HTML5
* CSS3
* JavaScript
* API

## Arquitectura 🧭
