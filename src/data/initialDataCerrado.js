export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/cerrado/jacare.png'), relatedTo: [4, 2], arrowAngulation: [-180, 120], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.35), (radius * 0.57)], interactions: ['predatism', 'competition'], animal: 'Jacaré',
            description: '- Predação sobre a capivara: O jacaré é um dos principais predadores da capivara, especialmente em áreas aquáticas. Ele ataca capivaras que se aproximam da água para beber ou nadar. \n \n' +
            '- Competição com a onça: Ocorre uma leve competição por presas em áreas próximas à água, como capivaras e veados, já que ambos predam essas espécies. No entanto, eles ocupam ambientes distintos a maior parte do tempo, minimizando essa interação.'
        },

        {
            id: 2, source: require('../images/cerrado/onca.png'), relatedTo: [4, 6, 5, 1,3], arrowAngulation: [-90, -150,-60,240,180], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14),(radius * 1.14),(radius * 0.57),(radius * 1.35), (radius * 0.57)], interactions: ['predatism', 'predatism','predatism','predatism','competition'], animal: 'Onça',
            description: '- Predação sobre a capivara: A onça é um dos principais predadores da capivara, caçando-a em áreas de campo aberto ou próximas a corpos de água. \n \n' +
            '- Predação sobre o veado: O veado é outra presa importante para a onça, que o caça em áreas de pastagem ou florestas do cerrado. \n \n' +
            '- Predação sobre o tatu: A onça caça tatus, especialmente os maiores, como o tatu-canastra, que fazem parte de sua dieta. \n \n' +
            '- Competição com o lobo-guará: A onça compete com o lobo-guará por algumas presas menores, como tatus, embora a dieta da onça inclua presas maiores.'
        },

        {
            id: 3, source: require('../images/cerrado/lobo.jpg'), relatedTo: [5, 2], arrowAngulation: [-90, 0], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.35), (radius * 0.57)], interactions: ['predatism', 'competition'], animal: 'Lobo',
            description: '- Predação sobre o tatu: O lobo-guará caça tatus, especialmente os menores, que são mais fáceis de capturar e fazem parte de sua dieta. \n \n' +
            '- Competição com a onça: O lobo-guará compete com a onça por presas menores, como tatus, embora a onça geralmente cace presas maiores.'
        },

        {
            id: 4, source: require('../images/cerrado/capivara.jpg'), relatedTo: [6], arrowAngulation: [-30], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Capivara',
            description: '- Competição com o veado: Capivaras e veados competem por alimentos, como gramíneas e vegetação aquática, nas áreas abertas do cerrado.'
        },

        {
            id: 5, source: require('../images/cerrado/tatu.jpg'), relatedTo: [], arrowAngulation: [], arrowStart: 'RightSide',
            arrowSize: [], interactions: [], animal: 'Tatu',
            description: 'O tatu-canastra é o maior dos tatus e um dos animais mais impressionantes do Cerrado, podendo atingir até 1,5 metro de comprimento e pesar 60 kg. Ele tem uma carapaça rígida que o protege de predadores, como a onça-pintada. O tatu-canastra é um excelente escavador, usando suas grandes garras para cavar tocas profundas e para se alimentar, principalmente de formigas e cupins, que são sua principal fonte de alimento. Embora seja um animal solitário e de hábitos noturnos, o tatu-canastra é essencial para o ecossistema, pois suas tocas oferecem abrigo para várias outras espécies menores.'
        },

        {
            id: 6, source: require('../images/cerrado/veado.jpg'), relatedTo: [4], arrowAngulation: [150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1.14)], interactions: ['competition'], animal: 'Veado',
            description: '- Competição com a capivara: O veado compete com a capivara por recursos alimentares, como gramíneas e vegetação nas áreas de campo aberto do cerrado.'
        },
    ]
}