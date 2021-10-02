let baraja=[];
const tipos=['C','D','H','S']
// crear un deck

const crearDeck=()=>
{
    for(let i =2;i<=10;i++)
    {
        for(let tipo of tipos)
        {
            baraja.push(i+tipo);
        }
    }
    console.log(baraja);
}

