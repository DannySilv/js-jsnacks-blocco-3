// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

let teams = [
    {
        nome: 'Juventus',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Bologna',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Milan',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Lazio',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: 'Atalanta',
        puntifatti: 0,
        fallisubiti: 0,
    },
]
console.log(teams);

teams = teams.map((team) => {
    return {
        nome: team.nome,
        puntifatti: genRndNumb(1, 100), 
        falliSubiti: genRndNumb(1, 20),
    };
});
console.log(teams);

// FUNCTIONS
// FUNCTION 1 - RANDOM NUMBER GENERATOR
function genRndNumb (min, max) {
    const rndNumb = Math.floor(Math.random() * (max - min)) + 1;
    return rndNumb
}