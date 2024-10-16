export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/pampa/cobra coral.jpg'), relatedTo: [4, 2], arrowAngulation: [-180, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35), (radius * 0.57)], interactions: ['predatism', 'competition'], animal: 'Cobra Coral',
            description: '- Predação com o tuco-tuco: A cobra coral é um predador que se alimenta de pequenos vertebrados, como roedores, anfíbios e até pequenos répteis. Não costuma atacar os animais mencionados, mas pode predar pequenos roedores que competem com outros herbívoros, como o tuco-tuco. \n \n' + 
            '- Competição: A cobra coral pode competir com outros predadores de pequeno porte, como o graxaim, por presas de tamanho pequeno a médio.'
        },

        {
            id: 2, source: require('../images/pampa/graxaim.jpg'), relatedTo: [4, 3, 5,3,6], arrowAngulation: [-90, -150,-185,240,185], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14),(radius * 1.14),(radius * 0.58),(radius * 1.35), (radius * 0.58)], interactions: ['competition', 'predatism','predatism','predatism','competition'], animal: 'Graxaim',
            description: '- Predação: O graxaim é um carnívoro que pode se alimentar de uma grande variedade de presas, incluindo pequenos mamíferos (como o tuco-tuco), aves, ovos e até outros pequenos répteis e insetos. Ele pode ser um predador tanto do veado campero (quando filhotes ou em situações específicas) quanto de ovos de espécies como a ema. \n \n' + 
            '- Competição: O graxaim pode competir com outros carnívoros de menor porte, como o zorrilho, por alimento e espaço. Em algumas áreas, o graxaim também pode competir com aves como a ema por recursos alimentares.'
        },

        {
            id: 3, source: require('../images/pampa/ema.jpg'), relatedTo: [5], arrowAngulation: [-90, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Ema',
            description: '- Competição: A ema pode competir com outros herbívoros (como o veado campero) por recursos alimentares em áreas com vegetação mais densa.'
        },

        {
            id: 4, source: require('../images/pampa/tuco tuco.jpg'), relatedTo: [6], arrowAngulation: [-30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Tuco Tuco',
            description: '- Competição: O tuco-tuco pode competir com outros herbívoros ou pequenos animais subterrâneos pela comida, mas suas interações com os outros animais mencionados tendem a ser mais de competição indireta (por alimentos subterrâneos).'
        },

        {
            id: 5, source: require('../images/pampa/veado campero.jpg'), relatedTo: [], arrowAngulation: [], arrowStart: 'RightSide',
            arrowSize: [], interactions: [], animal: 'Veado Campero',
            description: 'Predação: O veado campero é herbívoro e, como tal, não predador. No entanto, pode ser uma presa de predadores maiores, como o graxaim ou onças-pintadas (embora isso não envolva diretamente os animais mencionados na lista). Competição: Pode competir com outros herbívoros, como o tuco-tuco (embora o tuco-tuco seja mais especializado em escavar, sua alimentação pode sobrepor-se com a do veado campero em termos de plantas e raízes). Grande mamífero herbívoro típico da região sul da América do Sul. Vive em áreas abertas, alimentando-se principalmente de gramíneas e folhas.'
        },

        {
            id: 6, source: require('../images/pampa/zorrilho.jpg'), relatedTo: [4], arrowAngulation: [150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Zorrilho',
            description: '- Competição: Pode competir com outros carnívoros de menor porte, como o graxaim, por alimento e território. Pequeno mamífero carnívoro conhecido por seu cheiro forte, utilizado como defesa. Alimenta-se de insetos, pequenos vertebrados e ovos.'
        },
    ]
}