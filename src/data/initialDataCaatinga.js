export const images = (radius) => {
    return [
        {
            id: 1, source: require('../images/caatinga/cobra-cipo.jpg'), relatedTo: [6,2,2], arrowAngulation: [-120, 120, 123], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1), (radius * 1),(radius * 0.9)], interactions: ['predatism','predatism','competition'], animal: 'Cobra Cipó',
            description: `\nPredatismo: Pode predar filhotes do Veado-catingueiro ou até ovos da Coruja-buraqueira. \n\nCompetitivismo: Compete com a Coruja-buraqueira pela caça de pequenos roedores, uma vez que ambos são predadores de pequenos animais..`
        },

        {
            id: 2, source: require('../images/caatinga/coruja-buraqueira.jpg'), relatedTo: [3, 5, 1], arrowAngulation: [180,240,-60], arrowStart: 'LeftSide',
            arrowSize: [(radius * 1),(radius * 1.4  ),(radius * 0.6)], interactions: ['predatism','comensalism','competition'], animal: 'Coruja Buraqueira',
            description: `\nPredatismo: A Coruja-buraqueira pode predar pequenos roedores ou até filhotes do Gambá em estágios iniciais. \n\nComensalismo: A coruja pode usar a toca abandonada pelo Tatu-peba para fazer seu ninho, sem que isso prejudique o tatu.`
        },

        {
            id: 3, source: require('../images/caatinga/gamba.jpg'), relatedTo: [6,2,5], arrowAngulation: [-60, 0, -90], arrowStart: 'RightSide',
            arrowSize: [(radius * 1.5), (radius * 0.6),(radius * 1.5)], interactions: ['predatism', 'predatism', 'comensalism'], animal: 'Gambá',
            description: `\nPredatismo: O gambá pode caçar pequenos roedores como o Veado-catingueiro jovem ou ovos de aves como a Coruja-buraqueira, predando diretamente esses animais. \n\nComensalismo: Pode se beneficiar das tocas abandonadas pelo Tatu-peba para se proteger, sem prejudicar o tatu.`
        },

        {
            id: 4, source: require('../images/caatinga/mandacaru.jpg'), relatedTo: [6,3,2,5], arrowAngulation: [-60,30,-30,60], arrowStart: 'RightSide',
            arrowSize: [(radius * 1),(radius * 1.2),(radius * 1.45),(radius * 0.61)], interactions: ['mutualism','mutualism','comensalism','comensalism'], animal: 'Mandacaru',
            description: `\nMutualismo: O Veado-catingueiro e o Gambá podem se alimentar dos frutos do Mandacaru, ajudando na dispersão de suas sementes, beneficiando a planta.\n\nComensalismo: Pequenos animais como a Coruja-buraqueira ou o Tatu-peba podem utilizar a sombra do Mandacaru como abrigo, sem causar danos à planta.`
        },

        {
            id: 5, source: require('../images/caatinga/tatu-peba.jpg'), relatedTo: [3,2,6], arrowAngulation: [0,90,60], arrowStart: 'RightSide',
            arrowSize: [(radius * 1),(radius * 1.2),(radius * 1.41)], interactions: ['competition','comensalism','comensalism'], animal: 'Tatu-Peba',
            description: `\nComensalismo: Suas tocas abandonadas podem ser usadas por outros animais, como o Gambá ou a Coruja-buraqueira, sem prejuízo ao tatu.\n\nCompetitivismo: O Tatu-peba pode competir com o Veado-catingueiro por alimentos como raízes e pequenos invertebrados.`
        },

        {
            id: 6, source: require('../images/caatinga/veado-catingueiro.jpg'), relatedTo: [5,6], arrowAngulation: [180,150], arrowStart: 'LeftSide',
            arrowSize: [(radius * 0.61),(radius * 1.2)], interactions: ['competition','comensalism'], animal: 'Veado Catingueiro',
            description: `\nCompetitivismo: Compete com o Tatu-peba por fontes de alimento, como raízes e brotos que são escassos no bioma Caatinga.\n\nComensalismo: Pode aproveitar os espinhos do Mandacaru para se proteger de predadores, já que a planta oferece uma barreira natural.`
        },
    ]
}