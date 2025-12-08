const meseci = [ { mesec: 'Januar', brojDana: 31 }, { mesec: 'Februar', brojDana: 28 }, {mesec: 'Mart', brojDana: 31}, 
{ mesec: 'April', brojDana: 30 }, { mesec: 'Maj', brojDana: 31 }, { mesec: 'Jun', brojDana: 30 }, { mesec: 'Jul', brojDana: 31 },
{ mesec: 'Avgust', brojDana: 30 }, { mesec: 'Septembar', brojDana: 30 }, { mesec: 'Oktobar', brojDana: 31 }, 
{ mesec: 'Novembar', brojDana: 30 }, { mesec: 'Decembar', brojDana: 31 },]

function datumi(meseci){
    for(let mesec of meseci){
        for(let i = 0; i<=mesec.brojDana; i++)
            console.log(i+". "+mesec.mesec)
    }
}

datumi(meseci);