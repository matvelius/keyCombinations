var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var lineIndex = 0
var numberOfKeys = 0

// . 1 2 3 4 5 6 7 8 9
var symbolsAtIndex = Array(10).fill(0)
console.log(`initial symbolsAtIndex:`)
console.log(symbolsAtIndex)

rl.on('line', function (line) {

    if (lineIndex == 0) {

        numberOfKeys = parseInt(line)

    } else { // input
        var array = line.split('')
        var index = 0
        array.forEach(value => {
            if (value == '.') {
                index = 0
            } else {
                index = parseInt(value)
            }
            symbolsAtIndex[index] = symbolsAtIndex[index] + 1
            console.log(`symbolsAtIndex after input: ${symbolsAtIndex}`)
        })

        if (lineIndex == 4) { // last line & output
            // final calculations
            var output = 0
            symbolsAtIndex.forEach((numberOfOccurences, index) => {
                if (numberOfOccurences < numberOfKeys * 2 && numberOfOccurences != 0) {
                    output += 1
                }
            })

            console.log(output)
            rl.close()
            return
        }
    }

    lineIndex += 1
})


// Гоша и Кондратий нашли необычный тренажёр для скоростной печати и хотят освоить его. Тренажёр представляет собой поле из клавиш 4x4, в котором каждый раунд появляется конфигурация цифр и точек. На каждой клавише написана либо точка, либо цифра от 1 до 9.
// В момент времени t игрок должен одновременно нажать на все клавиши, на которых написана цифра t. Гоша и Кондратий могут нажать в один момент времени на k клавиш каждый. Если в момент времени t были нажаты все нужные клавиши, то игроки получают 1 балл.
// Найдите число баллов, которое смогут заработать Гоша и Кондратий, если будут нажимать на клавиши вдвоём.

// Формат ввода
// В первой строке дано целое число k, 1 ≤ k ≤ 5.
// В четырёх следующих строках задан вид тренажёра — по 4 символа в каждой строке. Каждый символ — либо точка, либо цифра от 1 до 9.
// Символы одной строки идут подряд и не разделены пробелами.

// Формат вывода
// Выведите единственное число — максимальное количество баллов, которое смогут набрать Гоша и Кондратий.