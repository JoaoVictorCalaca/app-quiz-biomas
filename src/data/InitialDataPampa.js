export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/pampa/cobra coral.jpg'), relatedTo: [4, 2], arrowAngulation: [-180, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14), (radius * 1.35)], interactions: ['predatism', 'competition'], animal: 'Cobra Coral',
            description: 'Predação: A cobra coral é um predador que se alimenta de pequenos vertebrados, como roedores, anfíbios e até pequenos répteis. Não costuma atacar os animais mencionados, mas pode predar pequenos roedores que competem com outros herbívoros, como o tuco-tuco.Competição: A cobra coral pode competir com outros predadores de pequeno porte, como o graxaim, por presas de tamanho pequeno a médio. Mutualismo: Não há interações mutualísticas diretas entre a cobra coral e os outros animais mencionados, mas como predadora de roedores, ela pode ajudar a controlar a população de espécies que, em maior número, competem por recursos. Serpente venenosa, de cores vibrantes (geralmente vermelho, amarelo e preto), que se alimenta principalmente de pequenos vertebrados e invertebrados.'
        },

        {
            id: 2, source: require('../images/pampa/graxaim.jpg'), relatedTo: [4, 3, 5,3,6], arrowAngulation: [-90, -150,-183,240,180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35),(radius * 1.35),(radius * 1.35),(radius * 1.35), (radius * 1.14)], interactions: ['competition', 'predatism','predatism','predatism','competition'], animal: 'Graxaim',
            description: 'Predação: O graxaim é um carnívoro que pode se alimentar de uma grande variedade de presas, incluindo pequenos mamíferos (como o tuco-tuco), aves, ovos e até outros pequenos répteis e insetos. Ele pode ser um predador tanto do veado campero (quando filhotes ou em situações específicas) quanto de ovos de espécies como a ema.Competição: O graxaim pode competir com outros carnívoros de menor porte, como o zorrilho, por alimento e espaço. Em algumas áreas, o graxaim também pode competir com aves como a ema por recursos alimentares. Mutualismo: Não há relações de mutualismo direto entre o graxaim e os outros animais mencionados, mas ele pode indireta ou ocasionalmente ajudar a controlar populações de pequenos herbívoros, que competem por vegetação. Mamífero carnívoro de porte médio, semelhante a uma raposa, que se alimenta de pequenos animais, frutas e vegetais. É oportunista e adaptável.'
        },

        {
            id: 3, source: require('../images/pampa/ema.jpg'), relatedTo: [5], arrowAngulation: [-90, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57)], interactions: ['competition'], animal: 'Ema',
            description: 'Predação: A ema é uma grande ave que é herbívora e não predadora. No entanto, filhotes de ema podem ser presas de carnívoros como o graxaim ou zorrilho, que podem caçar ovos ou filhotes.Competição: A ema pode competir com outros herbívoros (como o veado campero) por recursos alimentares em áreas com vegetação mais densa.           Mutualismo: Não há muitas relações de mutualismo diretas com os outros animais listados, embora a presença de grandes herbívoros como a ema possa ajudar a dispersar sementes de plantas pelas áreas que percorrem.Grande ave não voadora nativa da América do Sul, herbívora, que se alimenta de plantas, sementes e pequenos invertebrados. Vive em bandos.'
        },

        {
            id: 4, source: require('../images/pampa/tuco tuco.jpg'), relatedTo: [6], arrowAngulation: [-30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Tuco Tuco',
            description: 'Predação: O tuco-tuco é um pequeno mamífero que se alimenta principalmente de raízes e tubérculos. Embora não seja predador, ele pode ser uma presa para carnívoros como o graxaim e a cobra coral (no caso de presas menores). Competição: O tuco-tuco pode competir com outros herbívoros ou pequenos animais subterrâneos pela comida, mas suas interações com os outros animais mencionados tendem a ser mais de competição indireta (por alimentos subterrâneos). Mutualismo: Não há grandes relações mutualísticas evidentes entre o tuco-tuco e outros animais, mas a sua escavação pode afetar o solo e o habitat de outras espécies, influenciando a distribuição de plantas ou até criando esconderijos para outras pequenas criaturas. Pequeno mamífero subterrâneo, roedor, que cava tocas profundas para procurar raízes, tubérculos e outros alimentos no solo.'
        },

        {
            id: 5, source: require('../images/pampa/veado campero.jpg'), relatedTo: [], arrowAngulation: [], arrowStart: 'RightSide',
            arrowSize: [], interactions: [], animal: 'Veado Campero',
            description: 'Predação: O veado campero é herbívoro e, como tal, não predador. No entanto, pode ser uma presa de predadores maiores, como o graxaim ou onças-pintadas (embora isso não envolva diretamente os animais mencionados na lista). Competição: Pode competir com outros herbívoros, como o tuco-tuco (embora o tuco-tuco seja mais especializado em escavar, sua alimentação pode sobrepor-se com a do veado campero em termos de plantas e raízes). Grande mamífero herbívoro típico da região sul da América do Sul. Vive em áreas abertas, alimentando-se principalmente de gramíneas e folhas.'
        },

        {
            id: 6, source: require('../images/pampa/zorrilho.jpg'), relatedTo: [4], arrowAngulation: [150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 0.57)], interactions: ['competition'], animal: 'Zorrilho',
            description: 'Predação: O zorrilho é um carnívoro oportunista, alimentando-se de pequenos animais, como insetos, roedores, ovos de aves, etc. Ele pode predar ovos de espécies como a ema ou até caçar pequenos vertebrados. Competição: Pode competir com outros carnívoros de menor porte, como o graxaim, por alimento e território. Pequeno mamífero carnívoro conhecido por seu cheiro forte, utilizado como defesa. Alimenta-se de insetos, pequenos vertebrados e ovos.'
        },
    ]
}