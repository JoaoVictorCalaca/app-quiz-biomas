export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/mataAtlantica/jaguar.jpg'), relatedTo: [4, 2], arrowAngulation: [-180, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14), (radius * 1.35)], interactions: ['predatism', 'predatism'], animal: 'Jaguar',
            description: 'Predação: Predador que se alimenta de pacas e caititus. Competição: Pode competir com outros grandes felinos por território e presas.O jaguar é o maior felino das Américas, conhecido por sua pelagem característica com manchas em forma de rosetas. Ele é um predador de topo e desempenha um papel crucial na manutenção do equilíbrio ecológico. O jaguar é um excelente nadador e pode caçar uma variedade de presas, incluindo mamíferos, aves e répteis.'
        },

        {
            id: 2, source: require('../images/mataAtlantica/caititu.jpg'), relatedTo: [4], arrowAngulation: [-150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35)], interactions: ['competition'], animal: 'Caititu',
            description: 'Competição: Compete com a paca por alimentos. Predação: Pode ser predado pelo jaguar. O caititu, ou porco-do-mato, é um mamífero herbívoro que possui um corpo robusto e patas curtas. Ele é encontrado em áreas florestais e se alimenta de frutos, raízes e plantas. O caititu é um animal social, vivendo em grupos, e desempenha um papel importante na dispersão de sementes.'
        },

        {
            id: 3, source: require('../images/mataAtlantica/mico.jpg'), relatedTo: [4], arrowAngulation: [-120, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57)], interactions: ['mutualism'], animal: 'Mico Leão Dourado',
            description: 'Mutualismo: Ajuda na dispersão de sementes das plantas que o paca consome.O mico-leão-dourado é um pequeno primata, conhecido por seu pelagem dourada e tamanho reduzido. É nativo da Mata Atlântica e vive em grupos familiares. Sua dieta é composta principalmente por frutas, insetos e pequenos vertebrados. É um animal arbóreo, passando a maior parte do tempo nas árvores.'
        },

        {
            id: 4, source: require('../images/mataAtlantica/paca.jpg'), relatedTo: [2], arrowAngulation: [30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Paca',
            description: 'Competição: Compete com o caititu por recursos alimentares. Predação: Pode ser predada pelo jaguar.A paca é um roedor de grande porte, com corpo robusto e pelagem marrom manchada. É encontrada em florestas tropicais e tem hábitos noturnos. A paca se alimenta de frutas, sementes e raízes, e é uma importante dispersora de sementes, contribuindo para a regeneração florestal.'
        },

        {
            id: 5, source: require('../images/mataAtlantica/beija-flor.jpg'), relatedTo: [], arrowAngulation: [], arrowStart: 'RightSide',
            arrowSize: [], interactions: [], animal: 'Beija Flor',
            description: 'Mutualismo: Poliniza flores enquanto se alimenta do néctar, beneficiando as plantas. Comensalismo: Pode se beneficiar de flores cultivadas por humanos. Os beija-flores são pequenos pássaros conhecidos por suas cores vibrantes e capacidade de voar em todas as direções, incluindo para trás. Eles se alimentam de néctar de flores, sendo importantes polinizadores. Os beija-flores têm um metabolismo acelerado e são essenciais para a manutenção da biodiversidade das plantas.'
        },

        {
            id: 6, source: require('../images/mataAtlantica/formiga-leao.jpg'), relatedTo: [4,3], arrowAngulation: [125,145], arrowStart: 'LeftSide',
            arrowSize: [(radius * 0.57),(radius * 0.57)], interactions: ['mutualism', 'mutualism'], animal: 'Formiga Leao',
            description: 'Competição: Compete com outras formigas por alimento. Mutualismo: Ajuda na dispersão de sementes, beneficiando plantas que o mico-leão-dourado e o paca consomem. As formigas-leão são insetos predadores conhecidos por suas larvas, que criam armadilhas de areia para capturar presas, como formigas. Adultos são geralmente atraentes e possuem uma aparência delicada. Elas desempenham um papel importante no controle de populações de insetos e na polinização.'
        },
    ]
}