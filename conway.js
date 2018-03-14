var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// tamaño canvas 400x400(px) y tamaño grid 10x10 (total 100 celdas)
var gridWidth = 10;
var gridHeight = 10;
var resolution = 40;

canvas.width = gridWidth * resolution;
canvas.height = gridHeight * resolution;


var grid = [];
var Next = [];


for (var row = 0; row < gridWidth; row++) {

  grid[row] = [];
  Next[row] = [];
  for (var cell = 0; cell < gridHeight; cell++) {
    grid[row][cell] = [];
    Next[row][cell] = [];

    var rand = Math.floor(Math.random() * 100);

    if (rand > 49) {
      grid[row][cell] = 1;
    }

  }

}



function life() {

  var countAlive = 0; // Contar celulas vivas hay. Incremento cada vez que una celula esta viva.

  for (var row = 0; row < gridWidth; row++) {
    for (var cell = 0; cell < gridHeight; cell++) {

      // contar celulas vecinas estan vivas o muertas
      var count = NearCells(row, cell);

      if (grid[row][cell] == 0) {
        if (count == 3) {
          // Una celula nace
          Next[row][cell] = 1;
          countAlive++;
        }
      } else {
        if (count < 2 || count > 3) {
          // Una celula muere por "soledad" o "superpoblación"
          Next[row][cell] = 0;

        } else {
          // Una celula nace
          Next[row][cell] = 1;
          countAlive++;
        }
      }

    }
  }

  // remplazar antiguo grid por nueva generación
  grid = Next;

  document.getElementById("count").innerHTML = 'Hay ' + countAlive + ' celulas vivas en esta generación';
}



// Contar celulas vecinas
function NearCells(x, y) {
  var count = 0;

  // Contar todas las celdas vecinas

  counter(x - 1, x - 1);
  counter(x - 1, y);
  counter(x - 1, y + 1);
  counter(x, y - 1);
  counter(x, y + 1);
  counter(x + 1, y - 1);
  counter(x + 1, y);
  counter(x + 1, y + 1);


  function counter(row, cell) {
    // comprobar si x e y estan en el grid
    if (row > 0 && row < gridWidth && cell > 0 && cell < gridHeight) {
      if (grid[row][cell] == 1) {
        count++;
      }
    }
  }
  return count;
}


function update() {
  life();

  draw();
}


function draw() {
  // clear canvas
  ctx.fillStyle = '#e2e2e2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var row = 0; row < gridWidth; row++) {
    for (var cell = 0; cell < gridHeight; cell++) {

      if (grid[row][cell] == 1) {
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(row * resolution, cell * resolution, resolution, resolution);

      }
    }
  }
}


var lastTime;

function gameLoop() {

  update();

  window.setTimeout(gameLoop, 400);
};

gameLoop();
