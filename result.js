var resultatDiv = document.getElementById('result');
var responsesPath = sessionStorage.path ? JSON.parse(sessionStorage.path) : '';


var responsePathItem, response, section;

if(!responsesPath || responsesPath.length === 0){
    window.location = 'index.html';
}
else {
    for (var i = 0; i < responsesPath.length; i++) {
        responsePathItem = responsesPath[i];
        response = responses[responsePathItem.id];
        section = sections[response.section];

        var sectionElement = document.getElementById('section'+response.section);

        if(!sectionElement){
            sectionElement = document.createElement('div');
            sectionElement.setAttribute('id', 'section'+response.section);
            sectionElement.setAttribute('class', 'section');
            resultatDiv.appendChild(sectionElement);

            var sectionTitle = document.createElement('h3');
            sectionTitle.innerHTML = section;
            sectionElement.appendChild(sectionTitle);

        }

        var text = document.createElement('p');
        text.innerHTML = responsePathItem.response ? response.responsePositive : response.responseNegative;
        sectionElement.appendChild(text);
    }
}


var getPathQuestion = function(dataQuetion){
    for (var i = 0; i < responsesPath.length; i++) {
        if(dataQuetion.id === responsesPath[i].id)
            return responsesPath[i];
    }
};

//Create Graph
var responseNodes = [{
    id:"start",
    level:0,
    label: 'Départ',
    color:'#718C1D',
    borderWidthSelected:1,
    border:'#FFB000'
}, {
    id:"end",
    level:config.questions.length*2,
    label: 'Fin',
    color:'#718C1D',
    borderWidthSelected:1,
    border:'#FFB000'}];
var edges = [{from:"start", to:config.firstQuestionId}];
var question, pathQuestion;
for (var i = 0; i < config.questions.length; i++) {
    question = config.questions[i];
    pathQuestion = getPathQuestion(question);
    var border =
    responseNodes.push({
        id:question.id,
        level:i*2,
        label: question.graphLabel,
        color:{border:pathQuestion?'#FFB000':'#422341', background :'#422341',highlight:'#422341', hover: '#422341'}

    });

    if(!pathQuestion)
        pathQuestion = {response:''};

    var color = {
        border:pathQuestion.response === 1?'#FFB000':config.defaultStyle.positiveColor,
        background :config.defaultStyle.positiveColor,
        highlight:config.defaultStyle.positiveColor,
        hover: config.defaultStyle.positiveColor
    };

    responseNodes.push({
        level:i*2+1,id:'RP' + question.id,
        label: question.positiveButtonText,
        borderWidthSelected:1,
        color:color});

    edges.push({
        from: question.id, to: 'RP' + question.id,
        color:{
            color:config.defaultStyle.positiveColor,
            inherit:false,
            highlight:config.defaultStyle.positiveColor,
            hover: config.defaultStyle.positiveColor
        }
    });

    if(question.positiveRedirection) {
        edges.push({
            from: 'RP' + question.id,
            to: question.positiveRedirection,
            color:{
                color:config.defaultStyle.positiveColor,
                inherit:false,
                highlight:config.defaultStyle.positiveColor,
                hover: config.defaultStyle.positiveColor
            }
        });
    }
    else{
        edges.push({
            from:'RP' + question.id,
            to:'end',
            color:{
                color:config.defaultStyle.positiveColor,
                inherit:false,
                highlight:config.defaultStyle.positiveColor,
                hover: config.defaultStyle.positiveColor
            }
        });
    }
    var color = {
        border:pathQuestion.response === 0?'#FFB000':config.defaultStyle.negativeColor,
        background :config.defaultStyle.negativeColor
    };
    responseNodes.push({
        level:i*2+1,id:'RN' + question.id,
        label: question.negativeButtonText,
        borderWidthSelected:1,
        color:color});

    edges.push({
        from: question.id,
        to: 'RN' + question.id,
        color:{
            color:config.defaultStyle.negativeColor,
            inherit:false,
            highlight:config.defaultStyle.negativeColor,
            hover: config.defaultStyle.negativeColor
        }
    });
    if(question.negativeRedirection) {
        edges.push({
            from: 'RN' + question.id,
            to: question.negativeRedirection,
            color:{
                color:config.defaultStyle.negativeColor,
                inherit:false,
                highlight:config.defaultStyle.negativeColor,
                hover: config.defaultStyle.negativeColor
            }
        });
    }
    else{
        edges.push({
            from:'RN' + question.id,
            to:'end',
            color:{
                color:config.defaultStyle.negativeColor,
                inherit:false,
                highlight:config.defaultStyle.negativeColor,
                hover: config.defaultStyle.negativeColor
            }});
    }
}


var nodes = new vis.DataSet(responseNodes);


// create a network
var container = document.getElementById('graph');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    nodes: {borderWidth:3,font:{color:'white', size:15, face:'Helvetica'}, borderWidthSelected:1 ,shape:'circle', margin:10, chosen:false},
    interaction: {hover: true},
    layout: {
        hierarchical: {
            sortMethod: 'directed'
        }
    },
    edges: {
        smooth: true,
        arrows: {to : true}
    },
    interaction:{
        zoomView:false
    }
}
var network = new vis.Network(container, data, options);