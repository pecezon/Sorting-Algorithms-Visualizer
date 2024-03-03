
//Obteniendo los elementos del HTML
const randomize_array = document.getElementById("randomize-array-btn");
const sort_btn = document.getElementById("sort-btn");
const bars_container = document.getElementById("bars-container");
let velocidad = 200;

//Cuadros de informacion
const insertionInfo = document.getElementById("insertionSortInfo");
const bubbleInfo = document.getElementById("bubbleSortInfo");
const selectionInfo = document.getElementById("selectionSortInfo");
const mergeInfo = document.getElementById("mergeSortInfo");
const heapInfo = document.getElementById("heapSortInfo");
const quickInfo = document.getElementById("quickSortInfo");
const infoArr = [insertionInfo, bubbleInfo, selectionInfo, mergeInfo, heapInfo, quickInfo];


//*Funcion que imprime en pantalla solo un cuadro de informacion
function displayOneInfo(index, array) {
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            (array[i]).style.display = "block";
        }else{
            (array[i]).style.display = "none";
        }
    }
}

//*Elementos de la grafica
let minRange = 1;
let maxRange = document.getElementById("maxVal").value;
let numOfBars = parseInt(document.getElementById("elements").value)
let unsortedArray = new Array(numOfBars);


//Funcion para agarrar numero random en un rango
function randomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}


//*Funcion para crear Array random
function createRandomArray() {
    maxRange = document.getElementById("maxVal").value;

    //? Para que no se pase de verga el usuario
    if (maxRange < 2) {
        maxRange = 1;
        document.getElementById("maxVal").value = 2;
    } else if (maxRange > 75) {
        maxRange = 75
        document.getElementById("maxVal").value = 75;
    }


    for (let i = 0; i < unsortedArray.length; i++) {
        unsortedArray[i] = randomNum(minRange, maxRange)
    }
}

//*Funcion para cuando cambien el Valor Maximo o la cantidad de las barritas
function valChange() {

    numOfBars = parseInt(document.getElementById("elements").value)

    //?Igual para que no quiera meter 500,000 barras el culero
    if (numOfBars < 2) {
        numOfBars = 2;
        document.getElementById("elements").value = 2;
    }else if(numOfBars > 50){
        numOfBars = 50;
        document.getElementById("elements").value = 50;
    }

    unsortedArray = new Array(numOfBars);
    createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsortedArray);
}

//*Funcion para el cambio de velocidad (ms)
function speedChange() {
    //? Formula de la velocidad -x + 600
    velocidad = -parseInt(document.getElementById("speed").value) + 600;
    document.getElementById("speedLabel").innerHTML = `Speed (${velocidad}ms)`
}


//Cuando carga la pagina renderiza las barras de la grafica usando el array random
document.addEventListener("DOMContentLoaded", function() {
    createRandomArray();
    renderBars(unsortedArray);
    cambio();
})

//*Funcion renderizadora de barras
function renderBars(array) {
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar")
        bar.style.height = array[i]*10 + "px";
        bars_container.appendChild(bar);
        bar.innerHTML = array[i];
    }
}

//*Funcion para mezclar un array nuevo con valores totalmente aleatorios
randomize_array.addEventListener("click", function() {
    createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsortedArray);
})

//Funcion para que se duerma el programa un rato
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

//*Creamos el algoritmo actual funcion la cual cambiara dependiendo la seleccion
let algoritmoActual = nonRecursiveBubbleSort;

//Funcion para deshabilitar botones mientras se sortea
function disableButtons() {
    document.getElementById("sort-btn").disabled = true;
    document.getElementById("randomize-array-btn").disabled = true;
    document.getElementById("maxVal").disabled = true;
    document.getElementById("elements").disabled = true;
}

//Funcion para habilitar botones
function enableButtons() {
    document.getElementById("sort-btn").disabled = false;
    document.getElementById("randomize-array-btn").disabled = false;
    document.getElementById("maxVal").disabled = false;
    document.getElementById("elements").disabled = false;
}

//*Funcion para cuando el usuario cambie el algoritmo a usar
function cambio() {
    let algo = document.getElementById("algos").value

    if (algo === "insertion") {
        displayOneInfo(0, infoArr);
    } else if (algo === "bubble") {
        algoritmoActual = nonRecursiveBubbleSort;
        displayOneInfo(1, infoArr);
    } else if (algo === "selection") {
        displayOneInfo(2, infoArr);
    } else if (algo === "merge") {
        displayOneInfo(3, infoArr);
    } else if (algo === "heap") {
        displayOneInfo(4, infoArr);
    } else if (algo === "quick") {
        displayOneInfo(5, infoArr);
    }

}


//Boton de parar
let stopVal = false;

//Valor para ver si acabo de sortear
let completado = false;

//Funcion de bubble Sort
async function nonRecursiveBubbleSort(array) {
    let bars = document.getElementsByClassName("bar")
    document.getElementById("stop").disabled = false

    for (let i = 0; i < array.length; i++) {
        let ultimaI = 0;

        for (let j = 0; j < array.length - i - 1; j++) {
            for (let k = 0; k < array.length; k++) {
                if (k !== j && k !== j + 1) {
                    bars[k].style.backgroundColor = "white"
                }
            }

            if (array[j] > array[j+1]) {
                let val = array[j]
                array[j] = array[j+1]
                array[j+1] = val
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "lightblue"
                bars[j].innerHTML = array[j]
                bars[j+1].style.height = array[j+1] * 10 + "px";
                bars[j+1].style.backgroundColor = "lightblue"
                bars[j+1].innerHTML = array[j+1]
                await sleep(velocidad)
            }

            if(stopVal){
                ultimaI = i;
                break;
            }

        }

        if (ultimaI === array.length-1) {
            completado = true;
        }

    }


    document.getElementById("stop").disabled = true
    stopVal = false
    enableButtons();

    if (completado) {
        document.getElementById("sort-btn").disabled = true
    }

    return array
}


