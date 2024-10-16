export const images = (radius) => {
    return [
    
        {
            id: 1, source: require('../images/amazonia/formiga.png'), relatedTo: [3], arrowAngulation: [150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14)], interactions: ['mutualism'], animal: 'Formiga Cortadeira',
            description: '- Relação simbiótica com fungos Basidiomycota: As formigas cortadeiras mantêm uma relação mutualística com fungos do filo Basidiomycota, cultivando esses fungos em seus ninhos. As folhas que cortam servem de substrato para o crescimento dos fungos, que por sua vez, são a principal fonte de alimento das formigas.'
        },

        {
            id: 2, source: require('../images/amazonia/alga.jpg'), relatedTo: [4], arrowAngulation: [-150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14)], interactions: ['comensalism'], animal: 'Alga Trichophilus',
            description: '- Comensalismo com o bicho-preguiça: A alga Trichophilus cresce nos pelos do bicho-preguiça, beneficiando-se da umidade e nutrientes presentes no pelo sem prejudicar o animal. Essa relação é um exemplo de comensalismo, onde apenas a alga é beneficiada.'
        },

        {
            id: 3, source: require('../images/amazonia/fungo.jpg'), relatedTo: [1], arrowAngulation: [-30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['mutualism'], animal: 'Fungo Basidiomycota',
            description: '- Relação simbiótica com formigas cortadeiras: Os fungos Basidiomycota são cultivados pelas formigas cortadeiras em uma relação mutualística. As formigas fornecem material vegetal, e os fungos crescem sobre ele, servindo de alimento para a colônia.'
        },

        {
            id: 4, source: require('../images/amazonia/preguica.png'), relatedTo: [2], arrowAngulation: [30], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14)], interactions: ['comensalism'], animal: 'Bicho preguiça',
            description: '- Comensalismo com a alga Trichophilus: O bicho-preguiça abriga a alga Trichophilus em seus pelos, proporcionando um ambiente favorável para o crescimento da alga, que não prejudica o animal.'
        },
        
        {
            id: 5, source: require('../images/amazonia/jacare.jpeg'), relatedTo: [4, 6], arrowAngulation: [120,0], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57), (radius * 0.57)], interactions: ['predatism', 'competition'], animal: 'Jacaré-açu',
            description: '- Predação sobre o bicho-preguiça: O jacaré-açu, um dos maiores predadores da Amazônia, pode capturar e consumir bichos-preguiça que se aproximam de áreas aquáticas ou caem na água. \n \n' +
            '- Competição com piranhas-vermelhas: O jacaré-açu pode competir com as piranhas-vermelhas por presas, como outros mamíferos ou aves que entram na água, embora normalmente os dois predadores tenham presas e nichos distintos.'
        },

        {
            id: 6, source: require('../images/amazonia/piranha.jpg'), relatedTo: [5, 4], arrowAngulation: [180, 150], arrowStart: 'RightSide',
            arrowSize: [(radius * 0.57), (radius * 1.14)], interactions: ['competition', 'predatism'], animal: 'Piranha vermelha',
            description: '- Predação sobre o bicho-preguiça: Piranhas-vermelhas podem atacar bichos-preguiça que caem na água, especialmente se estiverem feridos ou incapazes de nadar rapidamente. \n \n' +
            '- Competição com o jacaré-açu: As piranhas competem com o jacaré-açu por presas menores ou animais que entram na água, como outros mamíferos e aves. Em situações de escassez de alimentos, pode haver competição direta por carcaças.'
        },
    ]
}