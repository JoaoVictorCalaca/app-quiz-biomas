export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/amazonia/onca.jpg'), relatedTo: [3, 2], arrowAngulation: [-210, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.5), (radius * 1)], interactions: ['predatism', 'competition'], animal: 'Onça Pintada',
            description: `\nA onça-pintada, um dos principais predadores da Amazônia, compete com a harpia por presas como pequenos mamíferos. Ela também pode predar o veado-mateiro
\nA onça-pintada é o maior felino das Américas e um dos principais predadores da Amazônia. Ela é conhecida por sua força, habilidade de natação e habilidade em caçar desde pequenos mamíferos até grandes herbívoros. Sua presença é essencial para manter o equilíbrio ecológico ao controlar as populações de presas.
`
        },

        {
            id: 2, source: require('../images/amazonia/harpia.jpg'), relatedTo: [4, 1,], arrowAngulation: [-150, -60], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35),(radius * 0.61)], interactions: ['predatism','competition'], animal: 'Harpia',
            description: `\nA harpia é uma ave de rapina que predomina no topo da cadeia alimentar, competindo com a onça-pintada pelo mesmo nicho ecológico. Ela pode se alimentar de preguiças.
\nA harpia é uma das maiores aves de rapina do mundo e vive nas florestas tropicais da América Central e do Sul, incluindo a Amazônia. Com suas garras poderosas, ela caça preguiças, macacos e outras aves. É um símbolo de poder e um predador de topo na região.
`
        },

        {
            id: 3, source: require('../images/amazonia/veado-mateiro.jpg'), relatedTo: [6], arrowAngulation: [-60], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.77)], interactions: ['comensalism'], animal: 'Veado Mateiro',
            description: `\nO veado-mateiro pode ter uma relação de comensalismo com a bromélia ao usar plantas próximas para proteção sem prejudicá-las. Também pode ser presa da onça-pintada.
\nO veado-mateiro é um cervídeo encontrado nas florestas da Amazônia. Ele se alimenta de folhas, frutos e brotos. Prefere viver em áreas de vegetação densa, onde pode se esconder de predadores como a onça-pintada. Sua capacidade de adaptação e movimentação discreta entre as plantas faz dele um comensal de várias espécies.
`
        },

        {
            id: 4, source: require('../images/amazonia/preguica.jpg'), relatedTo: [6,5], arrowAngulation: [-30,-60], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.5),(radius * 1)], interactions: ['mutualism','comensalism'], animal: 'Preguiça',
            description: `\nA preguiça tem uma relação de mutualismo com as bromélias, que crescem em seus pelos, abrigando pequenos insetos e algas. Ela, por sua vez, pode ser predada pela harpia
\nA preguiça-de-três-dedos é um mamífero conhecido por sua lentidão e por passar a maior parte do tempo em árvores, onde se alimenta de folhas. Sua relação com outros seres vivos, como algas e pequenos insetos que habitam seus pelos, demonstra como ela se adapta ao ambiente. Além disso, suas características lentas a tornam uma presa fácil para grandes predadores.
`
        },

        {
            id: 5, source: require('../images/amazonia/garca.jpg'), relatedTo: [3,4], arrowAngulation: [120,0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57),(radius * 0.57)], interactions: ['comensalism','mutualism'], animal: 'Garça',
            description: `\nA garça pode estabelecer uma relação de comensalismo ao se beneficiar de insetos e pequenos animais que surgem enquanto o veado-mateiro se move pela vegetação. Ela também pode ter uma relação de mutualismo com a preguiça ao retirar parasitas de seus pelos.
\nA garça-branca é uma ave de grande porte encontrada em áreas alagadas da Amazônia. Ela se alimenta principalmente de pequenos peixes, insetos e anfíbios, caçando pacientemente nas margens dos rios. Seu comportamento tranquilo e observador permite que ela se beneficie de comensalismo com outros animais, como o veado-mateiro, ao aproveitar o deslocamento de presas.
`
        },

        {
            id: 6, source: require('../images/amazonia/bromelia.jpg'), relatedTo: [4,5,3], arrowAngulation: [150,180,120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.2),(radius * 0.6),(radius * 1.41)], interactions: ['mutualism','mutualism','comensalism'], animal: 'bromelia',
            description: `\nAs bromélias proporcionam abrigo para a preguiça e a garça (mutualismo) e são usadas pelo veado-mateiro para proteção (comensalismo).
\nAs bromélias são plantas epífitas que crescem sobre árvores na floresta amazônica, onde acumulam água e criam micro-habitats para vários pequenos organismos. Elas são uma parte vital do ecossistema, oferecendo abrigo e água para muitos animais, como a preguiça e a garça, além de serem parte de relações de mutualismo.
`
        },
    ]
}