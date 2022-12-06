 # ❌⭕ Proyecto Tolerancia a Fallas ❌⭕

Nuestra aplicacion creada en HTML, CSS y JavaScrip es una aplicación web que utiliza una API la cual nos ayuda a generar consejos/frases de manera aleatoria al presionar un boton en forma de dado de manera ilimitada.

![Interfaz](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/interfaz.png)

El tiempo de respuesta es de dos segundos para generar una frase aleatoria que regresa dentro de un objeto json.

![api](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/api.png)

Si falla la transaccion, nos retornara un mensaje con el tipo y detalles del error, de esta manera podemos redirijir al usuario.

![funcion-api](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/error.png)

# Autores 👥💬

🔸🔹     Campos Serna Hector      🔹🔸 

🔹🔸  Medina Bolaños Danna Paola  🔸🔹 


# Comenzando 🔝

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en un contenedor de docker, con la cual podras realizar peticiones a una API externa y esta te retornara frases o consejos._

### 🔹Pre-requisitos 🖇️

* Visual Studio Code
* Docker Desktop 
* Web Developer
* Minikube
* Kubernetes
* Istio
* Conocimiento de API's
* LoadBalancer


## Despliegue 📦

### Github 🥷 <br>
Clonamos el repositorio mediente el siguiente comando: 
```gh repo clone Danna-Medina/ProyectoTolerante ```  o podemos descargar el archivo zip del proyecto.

### Docker 🐳 <br>

Para el despliegue de la aplicacion en docker ejecutamos lo siguientes comandos.

Creamos un archivo el cual nombraremos "dockerfile" el cual contine la imagen de nuestro contendor a crear.
![Interfaz](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/docker1.png)


Creamos el contenedor con la imagen que definimos en nuestro archivo dockerfile.
```
docker build -t proyecto-tolerante:v1 .
```

Corremos nuestro contenedor en docker.
```
docker run -d -p 80:80  proyecto-tolerante:v1
```

* Contenedor 🟦✔️ <br>
![Docker](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/image.png)

* Imagen 🪧✔️
![Docker](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/docker-image.jpg)

Verificamos las imagenes que se han creado
```
docker images
```
![Docker](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/dock.png)


Ahora podemos ver nuestra aplicacion en el puerto localhost:80

![localhost](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/local.png)

### Docker Hub 🐳📤
Continuamos subiendo nuestro proyecto a Docker Hub para que podamos utilizarlo de mejor manera.
```
docker tag proyecto-tolerante:v1 dannamedina17/proyecto-tolerante:v1

```

![dockerTag](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/docker-image-tag.jpg)

```
docker push dannamedina17/proyecto-tolerante:v1

```

![dockerHub](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/dockerhub-push.jpg)

### Kubernetes ☸
Una vez generado el contedor con la imagen en Docker, crearemos un cluster en Kubernetes con lo cual agruparemos el contenedor que a su ves contiene los servicios de nuestro proyecto, para esto ejecutamos los siguientes commandos con los generan nuestro cluster que estara ubicado en el puerto 8080.
```
 kubectl apply -f pod.yaml 
 kubectl apply -f deployment.yaml
```

En el archivo pod.yml se define el tipo de archivo, nombre de proyecto y contenedores.

![pods](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/pod02.png)

Podemos verificar los pods que hemos creado y cuales estan corriendo.

```
kubectl get pods
```
![pods](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/pod01.png)

* ⚖ LoadBalance ⚖
Con el siguiente comando crearemos el "load balancer" basado en algoritmo round robbin como su nombre lo indica creara balanza de carga en nuestros servicios.
```
minikube start
kubectl create deployment balanced --image=grc.io/k8s-minikube/storage-proyect
kubectl expose deployment balanced --type=LoadBalancer --port=8080
minikube tunnel
```
![tunel-LB](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/tunel2.png)
Con el siguiente comando podemos ver graficamente los servicios y pods asi como informacion adicional del host.
```
minikube dashboard
```
![dashboard](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/kube.jpeg)
![dashboard](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/kube2.jpeg)
![dashboard](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/kube3.jpeg)
![dashboard](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/kube4.jpeg)

* ✅ Creando servicio ✅
```
kubectl create deployment proyecto-tolerante-service --image=proyecto-tolerante --port=80
kubectl expose deployment proyecto-tolerante-service
minukube service proyecto-tolerante-service
```
![servicio](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/crearservicio.jpg)



### Istio ⛵⛵
Por ultimo desplegaremos nuestra aplicacion en Istio lo cual no permitira automatizar y gestionar nuestros servicios, pero lo más importante del uso de istio es analizar y gestionar el trafico que se genere en nuestra pagina.

* Instalacion de Istio.
```
istioctl install
```
![instalacion-istio](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/istio.png)

Podemos verificar su instalacion con los siguieentes comandos.
```
istioctl version
istioctl x precheck
```
![verificacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/ver.png)
Configuramos el nombre del perfil que sera instalado en el cluster.
```
istioctl install --set profile=demo -y
```
Con el siguiente comando podemos ver cuales pods estan disponibles en Istio System.
```
kubectl get pod -n istio-system
```
![PosIstio-System](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/pod.jpeg)

* 📉📈 Instalamos Kaili para Istio 📌 <br>
Veremos le trafico de nuestra pagina de manera grafica
```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.16/samples/addons/kiali.yaml
```
![Kiali-Instalacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/down.png)


* Namespace 🔘🔘 <br>
Despues crearemos un nuevo espacio de trabajo el cual se realizará una inyeccion de pods y servicios de nuestra aplicacion.

```
kubectl create ns proyecto-tolerante
kubectl label namespace proyecto-tolerante istio-injection=enabled
```

Con el siguiente comando podemos ver el estado actual de nuestros servicios en Istio system.
```
kubectl get svc -n istio-system
```
![ns](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/fordward.jpg)

Por ultimo redirigimos el trafico a la consola grafica (Kiali) para obtner mas detalles de la malla de servicios.

```
kubectl port-forward scv/kiali -n isitio-system 20001
```
![dashboar-Kiali](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/isitio1.jpeg)
![dashboar-Kiali2](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/isitio2.jpeg)

* Generar Pods 🔘🔘
Lo que hacemos es actualizar nuestros archivos yaml para generar nuestros pods con las descripciones necesarias
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```
![pods-yaml](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/crearpods2.jpg)

* Descripcion 🔘🔘
```
kubectl get pods
kubectl describe pod <NOMBRE-PODS>
```
![desc-pods](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/descrip1.jpg)
![desc-pods2](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/descrip2.jpg)


### Chaos Monkey 🐒🐒
Primero verificamos el estado actual de nuestros componentes. De primeras podemos ver un comente en “unhealthy” lo cual podia indicar un fallo en nuestra aplicacion.

```
kubectl get componentstatus
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/1.png)

Despues verificamos que los nodos estan corrriendo asi como la aplicación en kubernetes.

```
kubectl get nodes
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/2.png)

Con el siguiente comando insatalamos helm, la cual nos ayudara a instalar chaos monkey y a deplegar esta herramientas por la linea de comandos.
```
scoop install helm
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/3.png)

Generamos un nuevo namespace donde realizaremos las pruebas, para chaos monkey.

```
kublectl create namespace kube-mokey
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/4.png)

Dentro de esta carpeta clonamos el proyecto git de  https://github.com/asobti/kube-monkey la cual kube-monkey es una implementación de Chaos Monkey  para clústeres de Kubernetes . Elimina aleatoriamente los pods de Kubernetes (k8s) en el clúster.

```
git clone https://github.com/asobti/kube-monkey
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/5.png)

Dentro de la ruta kube-monkey instalamos el espacio de trabajo para chaos monkey.

```
helm install mmy-release kubemonkey/kube-monkey --version 1.
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/6.png)

Con el siguiente comando podemos ver que el despligue se ha desplegado correctamente.

```
kubeclt get pods
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/7.png)

Con el siguiente comando podemos ver que el despligue se ha heco correctamente.

```
kubectl get pods
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/7_1.png)

Configuramos el archivo nginx.yaml con la configuracion necesaria, habilitamos chaos monkey, indicamos que eliminara un pod por segundo y lo replicara 8 veces.

![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/7_2.png)

Aplicamos la configuracion para generar el deploy y correr el proceso.

```
kubectl apply -f nginx.yamel
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/7_3.png)

Podemos verificar que los pods estan corriendo con el siguiente comando.
```
kubectl get  pods --all-namespaces -l app-purpose=chaos
```
![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/8.png)

Cada vez que un pod es eliminado este vuelve a inicializar de manera que nuestra aplicación sigue corriendo, con esta inyeccion de fallas nos permiten conocer que tan robusta es nuestra aplicación en cuanto a fallos de servicios (pods) y de esta manera conocer si el sistema puede sobreponerse por si mismo.

![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/9.png)


Podemos verificar que nuestra aplicacion sigue funcionadoy todos sus servicios han sido desplegados correctamente.

![aplicacion](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/ad.png)

## Construido con 🛠️
* HTML5
* CSS3
* JavaScript
* API

## Arquitectura 🧭
![Arquitectura](https://raw.githubusercontent.com/Danna-Medina/ProyectoTolerante/master/images/arquitectura.png)
