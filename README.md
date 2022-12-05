# Proyecto Tolerancia a Fallas

Aplicación web que utiliza una API la cual genera consejos/frases de manera aleatoria al presionar un boton.

![Interfaz](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/interfaz.jpg)


# Autores 👥💬

🔸🔹     Campos Serna Hector      🔹🔸 

🔹🔸  Medina Bolaños Danna Paola  🔸🔹 


# 🔸Comenzando 🎟️🎫

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en un contenedor de docker, con la cual podras realizar peticiones a una API externa y esta te retornara frases o consejos._

### 🔹Pre-requisitos🖇️

* Visual Studio Code
* Docker Desktop 
* Web Developer
* Minikube
* Istio
* Conocimiento de API's


## Despliegue 📦
### Github <br>
Clonamos el repositorio mediente el siguiente comando: 
```gh repo clone Danna-Medina/ProyectoTolerante ```  o podemos descargar el archivo zip del proyecto.
### Docker <br>
Para el despliegue de la aplicacion en docker ejecutamos lo siguientes comandos.

![Docker](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/docker-image.jpg)

```
docker build -t proyecto-tolerante:v1 .
docker images
docker run -d -p 80:80  proyecto-tolerante:v1
```

### Docker Hub
Continuamos subiendo nuestro proyecto a Docker Hub para que podamos utilizarlo de mejor manera
```
docker tag proyecto-tolerante:v1 dannamedina17/proyecto-tolerante:v1
docker push dannamedina17/proyecto-tolerante:v1
```
### Kubernetes
Una vez generado el contedor con la imagen en Docker, crearemos un cluster en Kubernetes con lo cual agruparemos el contenedor que a su ves contine los servicios de nuestro proyecto, para esto ejecutamos los siguientes commandos con los generan nuestro cluster que estara ubicado en el puerto 8080.
```
 kubectl apply -f k8s/pod.yaml 
 kubectl apply -f k8s/deployment.yaml
```
Podemos verificar los pods que hemos creado y cuales estan corriendo.
```
kubectl get pods
```
Con el siguiente comando crearemos el "load balancer" basado en algoritmo round robbin como su nombre lo indica creara balanza de carcga en nuestros servicios.
```
minikube start
kubectl create deployment balanced --image=grc.io/k8s-minikube/storage-proyect
kubectl expose deployment balanced --type=LoadBalancer --port=8080
minikube tunnel
```
Con el siguiente comando podemos ver graficamente los servicio y pods asi como informacion adicional del host.
```
minikube dashboard
```
### Istio
Por ultimo desplegaremos nuestra aplicacion en Istio lo cual no permitira automatizar y gestionar nuestros servios.
Instalacion de Istio
```
isiotctl install
```
Podemos verificar su instalacion con 
```
isiotctl version
isiotctl x precheck
```
Con el siguiente comando podemos ver cuales pods estan disponibles en Istio System
```
kubectl get pod -n istio-system
```
Despues instalmos Kailia para istio
```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.16/samples/addons/kiali.yaml
```
Despues crearemos un nuevo proyecto con un espacio de trabajo el cual contendra una inyeccion de pods y servicios de nuestra apliacion.
Despues instalmos Kailia para istio
```
kubectl create ns proyecto-tolerante
kubectl label namespace proyecto-tolerante istio-injection=enabled
```
Con el siguiente comanodo podemos ver el estado actual de nuestros servicios en istio system
```
kubectl get svc -n istio-system
```
Por ultimo redirigimos el trafico a la consola grafica (Kiali) para obtner mas detalles de la malla de servicios.
```
kubectl port-forward scv/kiali -n isitio-system 20001
```

## Construido con 🛠️
* HTML5
* CSS3
* JavaScript
* API

## Arquitectura 🧭
![Arquitectura](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/arquitectura.png)
