export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/pantanal/jacare.png'), relatedTo: [2, 6], arrowAngulation: [120, -120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 0.57), (radius * 0.57)], interactions: ['competition', 'predatism'], animal: 'Jacaré',
            description: '- Predação sobre a capivara: O jacaré também pode predar capivaras, especialmente quando elas estão nadando ou se aproximando de corpos de água. O ataque geralmente é rápido, com o jacaré puxando a capivara para a água. \n \n' +
            '- Competição com a onça-pintada: Embora não caçem as mesmas presas frequentemente, o jacaré e a onça competem pelo espaço nos ambientes aquáticos e pelas presas disponíveis nas margens de rios e lagoas.'
        },

        {
            id: 2, source: require('../images/pantanal/onca.png'), relatedTo: [1, 3, 4], arrowAngulation: [-60, 180, -90], arrowStart: 'LeftSide',
            arrowSize: [(radius * 0.57), (radius * 0.57), (radius * 1.35)], interactions: ['competition', 'predatism', 'predatism'], animal: 'Onça',
            description: '- Predação sobre a capivara: A onça-pintada é um predador de topo no Pantanal e uma das principais predadoras da capivara. Ela caça esses roedores tanto em terra quanto próximo a corpos de água. \n \n' +
            '- Predação sobre a anta: A onça-pintada também pode predar antas, embora isso ocorra com menos frequência, devido ao grande porte da anta. Filhotes ou antas solitárias são mais vulneráveis aos ataques. \n \n' +
            '- Competição com o jacaré: Embora não caçem as mesmas presas frequentemente, o jacaré e a onça competem pelo espaço nos ambientes aquáticos e pelas presas disponíveis nas margens de rios e lagoas.'
        },

        {
            id: 3, source: require('../images/pantanal/anta.jpg'), relatedTo: [4], arrowAngulation: [-120], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57)], interactions: ['mutualism'], animal: 'Anta',
            description: '- Mutualismo com os frutos do buriti: A anta é uma frugívora importante no Pantanal e consome os frutos do buriti (Mauritia flexuosa). Ela auxilia na dispersão de sementes, ao defecar longe da planta-mãe, contribuindo para a regeneração das palmeiras.'
        },

        {
            id: 4, source: require('../images/pantanal/buriti.jpg'), relatedTo: [3, 6], arrowAngulation: [60, -30], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57), (radius * 1.14)], interactions: ['mutualism', 'mutualism'], animal: 'Buriti',
            description: '- Fornecimento de frutos para a anta e capivara: O buriti é uma fonte de alimento importante para a anta e ocasionalmente para capivara. Ao consumir os frutos, esses animais desempenham um papel fundamental na dispersão das sementes dessa palmeira, ajudando a manter o equilíbrio do ecossistema do Pantanal.'
        },

        {
            id: 5, source: require('../images/pantanal/garca.jpg'), relatedTo: [6], arrowAngulation: [0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57)], interactions: ['comensalism'], animal: 'Garça Branca',
            description: '- Comensalismo com a capivara: A garça-branca se beneficia das capivaras ao pousar em suas costas para remover parasitas. Esse comportamento de comensalismo não prejudica nem beneficia a capivara diretamente, mas a garça se alimenta dos parasitas presentes.'
        },

        {
            id: 6, source: require('../images/pantanal/capivara.jpg'), relatedTo: [4, 5], arrowAngulation: [150, -180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14), (radius * 0.57)], interactions: ['mutualism', 'comensalism'], animal: 'Capivara',
            description: '- Comensalismo com a garça-branca: A capivara não se beneficia diretamente da presença da garça-branca, mas tolera a ave em suas costas enquanto ela remove parasitas de sua pele.\n \n' +
            '- Mutualismo de sementes de buriti: Embora a capivara seja principalmente herbívora, ela pode ocasionalmente consumir frutas e, assim como a anta, ajudar na dispersão de sementes, incluindo as de palmeiras como o buriti, embora em menor escala.'
        },
    ]
}