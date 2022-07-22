
var restNameList = [
    '無所不用其極',
    '煙味番茄醬',
    '台灣野隔離',
    '香港粉麵',
    '雙喜燒味'
]

var restCount = restNameList.length

function randomRest() {
    randomIndex = Math.floor(Math.random() * restCount);
    randomRestName = restNameList[randomIndex]
    document.getElementById('restNameDisplay').innerText = randomRestName
}

