export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/jacare.png'), relatedTo: [4, 5], arrowAngulation: [-150, 180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14), (radius * 1.35)], interactions: ['predatism', 'competition'], animal: 'Jacaré',
            description: 'Jacaré também chamado aligator, são crocodilianos da família Alligatoridae, semelhantes aos crocodilos,' +
            'dos quais se distinguem pela cabeça mais curta e larga, pela presença de membranas interdigitais (semelhante barbatana)' +
            'nos polegares das patas traseiras e, com relação à dentição onde o quarto dente canino da mandíbula inferior encaixa em um' +
            'furo da mandíbula superior, enquanto que nos crocodilos sobressai para fora, quando têm a boca fechada.[3] O tamanho de um' +
            'jacaré pode variar de 1,2 metros (jacaré-anão) até 5,5 metros (jacaré-açu), podendo pesar de seis a seiscentos quilos. Os' +
            'jacarés habitam as Américas, tendo desaparecido da Europa na era Plioceno.[carece de fontes] Na América do Norte, ocorre, somente, o gênero Alligator.'
        },

        {
            id: 2, source: require('../images/onca.png'), relatedTo: [6, 4], arrowAngulation: [-90, -150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35), (radius * 1.14)], interactions: ['predatism', 'competition'], animal: 'Onça'
        },

        {
            id: 3, source: require('../images/jacare.png'), relatedTo: [4, 2], arrowAngulation: [-120, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57), (radius * 0.57)], interactions: ['competition', 'predatism'], animal: 'Jacaré'
        },

        {
            id: 4, source: require('../images/onca.png'), relatedTo: [6, 5, 2], arrowAngulation: [-30, -60, 30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14), (radius * 0.57), (radius * 1.14)], interactions: ['predatism', 'competition', 'mutualism'], animal: 'Onça'
        },

        {
            id: 5, source: require('../images/jacare.png'), relatedTo: [1, 2, 3], arrowAngulation: [60, 90, 30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.35), (radius * 1.14), (radius * 1.14)], interactions: ['competition', 'predatism', 'mutualism'], animal: 'Onça'
        },

        {
            id: 6, source: require('../images/onca.png'), relatedTo: [4, 5, 1], arrowAngulation: [150, 180, 60], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14), (radius * 0.57), (radius * 0.57)], interactions: ['competition', 'predatism', 'mutualism'], animal: 'Onça'
        },
    ]
}