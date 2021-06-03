const player1 = {
    name: 'Silver',
    hp: 100,
    img: 'img' ,
    weapon: ['ak47', 'kunai', 'sword', 'axe'],
    attack: function () {
        console.log(player1.name + ' Fight....');
    }
};
const player2 = {
    name: 'Bronze',
    hp: 100,
    img: 'img',
    weapon: ['ak47', 'kunai', 'sword', 'axe'],
    attack: function () {
        console.log(player2.name + ' Fight....');
    }
};
function createPlayer(player, name, hp, img) {
    // create elements
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.innerText = name;
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.src = img;

    // appends
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $character.appendChild($img);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    // style
    $life.style.width = hp + '%';


    return createPlayer;
};
createPlayer('player1', 'Bronze', 80, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif');
createPlayer('player2', 'Silver', 50, 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif');