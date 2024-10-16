export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/cerrado/jacare.png'), relatedTo: [4, 2], arrowAngulation: [-180, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.75), (radius * 1)], interactions: ['predatism', 'competition'], animal: 'Jacaré',
            description: 'Jacaré também chamado aligator, são crocodilianos da família Alligatoridae, semelhantes aos crocodilos, dos quais se distinguem pela cabeça mais curta e larga, pela presença de membranas interdigitais (semelhante barbatana) nos polegares das patas traseiras e, com relação à dentição onde o quarto dente canino da mandíbula inferior encaixa em um furo da mandíbula superior, enquanto que nos crocodilos sobressai para fora, quando têm a boca fechada.[3] O tamanho de um jacaré pode variar de 1,2 metros (jacaré-anão) até 5,5 metros (jacaré-açu), podendo pesar de seis a seiscentos quilos. Os jacarés habitam as Américas, tendo desaparecido da Europa na era Plioceno.[carece de fontes] Na América do Norte, ocorre, somente, o gênero Alligator.'
        },

        {
            id: 2, source: require('../images/cerrado/onca.png'), relatedTo: [4, 6, 5, 1,3], arrowAngulation: [-90, -150,-60,240,180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.55),(radius * 1.5),(radius * 0.6),(radius * 1.75), (radius * 1.)], interactions: ['predatism', 'predatism','predatism','predatism','competition'], animal: 'Onça',
            description: 'A onça-pintada é o maior felino das Américas, podendo pesar até 100 kg. Ela é uma excelente caçadora, conhecida por sua força e habilidade em emboscar suas presas. Habita florestas densas, áreas de savana e zonas alagadas, o que inclui o Cerrado. Sua dieta é muito diversificada e inclui mamíferos de grande porte, como capivaras, veados, tatus, além de jacarés e até peixes. É uma predadora solitária e territorial, ocupando grandes áreas em busca de alimento. A onça-pintada é fundamental para manter o equilíbrio populacional das espécies no Cerrado, controlando as populações de herbívoros..'
        },

        {
            id: 3, source: require('../images/cerrado/lobo.jpg'), relatedTo: [5, 2], arrowAngulation: [-90, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.5), (radius * 0.6)], interactions: ['predatism', 'competition'], animal: 'Lobo',
            description: 'O lobo-guará é o maior canídeo da América do Sul e uma espécie emblemática do Cerrado. Com suas longas pernas e porte elegante, ele é adaptado para correr em campos abertos. Apesar de seu tamanho impressionante, pesando cerca de 20-30 kg, o lobo-guará é um predador oportunista e onívoro, com uma dieta variada que inclui pequenos mamíferos, como roedores, aves, insetos, e especialmente frutos, como a lobeira, que é crucial para sua alimentação. O lobo-guará é solitário e evita grandes confrontos, preferindo caçar à noite. Ele tem um papel importante na dispersão de sementes de frutos, contribuindo para a manutenção do bioma do Cerrado.'
        },

        {
            id: 4, source: require('../images/cerrado/capivara.jpg'), relatedTo: [6,5], arrowAngulation: [-30,-60], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.45),(radius * 1)], interactions: ['competition','comensalism'], animal: 'Capivara',
            description: 'A capivara é o maior roedor do mundo, pesando entre 35 e 70 kg. Ela vive em grandes grupos sociais, geralmente próximos a corpos d´cágua, o que inclui rios, lagoas e áreas alagadas do Cerrado. Herbívora, a capivara se alimenta de gramíneas, plantas aquáticas e frutas. É um animal muito adaptado ao ambiente aquático, nadando com facilidade para fugir de predadores como a onça-pintada e o jacaré. Além de ser presa de grandes predadores, a capivara tem uma relação de mutualismo com aves, que frequentemente removem parasitas de sua pele. Sua presença ajuda a moldar a vegetação ao redor de rios e lagos, afetando a estrutura do ecossistema local.'
        },

        {
            id: 5, source: require('../images/cerrado/tatu.jpg'), relatedTo: [4,6], arrowAngulation: [0,120], arrowStart: 'RightSide',
            arrowSize: [(radius * 1),(radius * 0.79)], interactions: ['comensalism','comensalism'], animal: 'Tatu',
            description: 'O tatu-canastra é o maior dos tatus e um dos animais mais impressionantes do Cerrado, podendo atingir até 1,5 metro de comprimento e pesar 60 kg. Ele tem uma carapaça rígida que o protege de predadores, como a onça-pintada. O tatu-canastra é um excelente escavador, usando suas grandes garras para cavar tocas profundas e para se alimentar, principalmente de formigas e cupins, que são sua principal fonte de alimento. Embora seja um animal solitário e de hábitos noturnos, o tatu-canastra é essencial para o ecossistema, pois suas tocas oferecem abrigo para várias outras espécies menores.'
        },

        {
            id: 6, source: require('../images/cerrado/veado.jpg'), relatedTo: [4,5], arrowAngulation: [150,180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.2),(radius * 0.79)], interactions: ['competition','comensalism'], animal: 'Veado',
            description: 'O veado-catingueiro é um pequeno cervídeo que habita áreas abertas e de mata no Cerrado, preferindo regiões de vegetação mais baixa, onde pode se esconder de predadores. Ele pesa cerca de 20-25 kg e se alimenta principalmente de gramíneas, folhas e frutos. Este animal é ágil e está sempre em alerta para escapar de predadores como a onça-pintada e o lobo-guará. Embora herbívoro, o veado tem grande importância no ecossistema, dispersando sementes e contribuindo para a regeneração da vegetação.'
        },
    ]
}