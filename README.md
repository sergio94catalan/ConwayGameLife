# El juego de la vida de Conway

### Ejecución

Para ejecutar la prueba hay que descargar o clonar los archivos y abrir 'conway.html'

### Lenguaje de programación

El lenguaje que he utilizado ha sido Javascript.

## Commits

```

Para la realización de la prueba he tenido en cuenta los siguientes factores:

  - Realización de un grid con las dimensiones 10x10.
      Mediante un array multidimensional.


  - Inicializar aleatoriamente el número de células que están vivas o muertas.
      Se ha realizado de esta forma para que cada vez que se actualice la página o se inicialice la prueba, el resultado sea diferente utilizando la función Math.random()


  - Las propias reglas de las que consta el juego de la vida de Conway.
      Si la célula esta muerta (valor 0) y tiene 3 células vecinas vivas (valor 1)... esta célula nacerá en la siguiente generación.
      Si una célula viva (valor 1) tiene 2 o 3 células vecinas vivas, en la siguiente generación seguirá viva.
      Si tiene 1 célula viva o más de 3, esta célula seguirá muerta o morirá en la siguiente generación.


  - Tener en cuentas las 8 celulas vecinas para saber si en la siguiente generación sigue viva o muere.
      Para plantear esto, se  ha realizado una pequeña tabla, sabiendo que la célula que revisamos en nuestro caso, está en la posición (0 ,0) y las comprobamos con las vecinas de esta manera:
      Por ejemplo: La vecina de la esquina superior izquierda se encuentra a (x-1, y-1) respecto a la nuestra. Es decir si nuestra celula se encuentra en la posicion (3, 3), la vecina superior izquierda se encontraria en la posición (2, 2)
      +----------+----------+----------+
      | (-1, -1) | (-1,  0) | (-1,  1) |
      +----------+----------+----------+
      | ( 0, -1) | ( 0,  0) | ( 0,  1) |
      +----------+----------+----------+
      | ( 1, -1) | ( 1,  0) | ( 1,  1) |
      +----------+----------+----------+


  - Que el proceso se tiene que ir actualizando cada x tiempo.
      Para ello hemos utilizado la función setTimeout.


  - La forma de mostrar el grid, en este caso mediante canvas.
      Para poder mostrar el canvas utilizamos la función getContext('2d').
      Para difenciar entre vivas y muertas, coloreamos las células vivas (valor 1) con un color diferente al resto mediante el método fillStyle.
      Mediante el método fillRect() dibujamos la celdas del grid.

```
