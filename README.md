# React Native App Redit Challenge
## _Cristopher Lizame_

Primeramente me gustaria explicar la desición que tome de acuerdo al diseño, me parecio realizarlo lo mas simple posible para que no sea muy dificil de ver ni de entender, colores en grises y neutros, fueron mi primera opcion, usando un poco de animated para el Top Bar para poder diferenciar un poco en la transición horizontal.

Decidi ubicar en la estructura de datos  los componentes en la carpeta modules, y sus componentes hijos en la misma carpeta del componente principal, de esta manera si deseo cambiar algo a futuro puedo encontrar todos sus hijos en un mismo sitio.

Adicional cree una carpeta central de componentes que en este caso me sirvio para almacenar el Top Bar que uso como root para el proyecto.

Use expo cli para correr la app en mi dispositivo. Decidi no usar redux al ser una app muy sencilla, use el Web View que viene integrado con Expo Cli, React Navigation para la navegacion entre pantallas y Native Base para apoyarme en el diseño.

Para el unit testing use Testing Library con Jest, pueden ver los test corriendo:

*npm run test*

y el servidor de expo con:

*expo start*

Testeado tanto en iphone como en android.