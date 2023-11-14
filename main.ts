const color = require("cli-color");
const input = require("prompt-sync")();

const planta: number[][] = [
    [22, 22, 22, 22, 33, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 45],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]
const planta2: number[][] = [
    [22, 22, 22, 22, 33, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 22, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [45, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22] 
]


const colorir = (text: number): any => {
    if (text == 22) {
        return color.red.bgRed("  ")
    } else if (text == 11) {
        return color.blue.bgBlue("  ")
    } else if (text == 33) {
        return color.green.bgGreen("  ")
    } else if(text == 45){
        return color.yellow.bgYellow("  ")  
    }else if (text == 88){
        return color.black.bgBlack("  ")
    }
}

var x: number = 0;
var y: number = 5;
var passos: number = 0;

const mostrarPlanta = (planta_atual:number [][]): void => {
    console.clear();
    for (let i of planta_atual) {
        let linha: any[] = [];
        for (let e of i) {
            linha.push(colorir(e))
        }
        console.log(linha.toString().replaceAll(',', ''))
    }
    console.log("passos:", passos);
}
const descer = (planta:number[][]): void => {
    if (x + 1 < planta.length && planta[x + 1][y] !== 22) {
        planta[x][y] = 11
        x = x + 1;
        planta[x][y] = 33;
        passos++;
    }
}
const subir = (planta:number[][]): void => {
    if (x - 1 >= 0 && planta[x - 1][y] !== 22) {
        planta[x][y] = 11
        x = x - 1
        planta[x][y] = 33;
        passos++;
    }
}
const esquerda = (planta:number[][]): void => {
    if (y - 1 >= 0 && planta[x][y - 1] !== 22) {
        planta[x][y] = 11
        y = y - 1
        planta[x][y] = 33;
        passos++;
    }
}
const direita = (planta:number[][]): void => {
    if (y + 1 <planta[0].length && planta[x][y + 1] !== 22) {
        planta[x][y] = 11
        y = y + 1
        planta[x][y] = 33;
        passos++;
    }
}
const verificarProduto = (): boolean => {
    for (var linha of planta) {
        for (var item of linha) {
            if (item == 88) {
                return false;
            }
        }
    }
    return true;
}

const start = (plantaAtual:number[][])=> {
    mostrarPlanta(plantaAtual);
    let escolha = input("Digite uma direção(w,a,s,d) ou (q) para sair:")
    if (escolha.toUpperCase() == "Q" || verificarProduto()) {
        return
    } else if (escolha.toUpperCase() == "W") {
        subir(plantaAtual);
    } else if (escolha.toUpperCase() == "A") {
        esquerda(plantaAtual);
    } else if (escolha.toUpperCase() == "S") {
        descer(plantaAtual);
    } else if (escolha.toUpperCase() == "D") {
        direita(plantaAtual);
    }
    if (x == 8 && y == 19){
        plantaAtual = planta2
        x = 0;
        y = 5;
    }
   
    if(x ==  8 && y == 0){
        plantaAtual = planta
        x = 8;
        y = 19;
    }
    start(plantaAtual);
}
start(planta);


