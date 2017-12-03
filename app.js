var question = document.getElementById('question');

var positiveButton = document.getElementById('positive-button');
var positiveButtonWrapper = document.getElementById('positive-button-wrapper');
var positiveButtonText = document.getElementById('positive-button-text');
var positiveButtonIcon = document.getElementById('positive-button-icon');

var negativeButton = document.getElementById('negative-button');
var negativeButtonWrapper = document.getElementById('negative-button-wrapper');
var negativeButtonText = document.getElementById('negative-button-text');
var negativeButtonIcon = document.getElementById('negative-button-icon');

var positiveRaisons = document.getElementById('positive-raisons');
var negativeRaisons = document.getElementById('negative-raisons');




var setQuestionText = function(text){
    question.innerHTML = text;
};

var setPositiveButton = function(text, icon, color, backgroundOpacity){
    positiveButtonText.innerHTML = text;
    if(icon)
        positiveButtonIcon.className = "fa fa-" + icon;
    if(color){
        var hexaOpacity = (backgroundOpacity*255).toString(16);
        positiveButton.style.backgroundColor = color + hexaOpacity;
        positiveButtonWrapper.style.backgroundColor = color;
    }

};

var setNegativeButton = function(text, icon, color, backgroundOpacity){
    negativeButtonText.innerHTML = text;
    if(icon)
        negativeButtonIcon.className = "fa fa-" + icon;
    if(color){
        var hexaOpacity = (backgroundOpacity*255).toString(16);
        negativeButton.style.backgroundColor = color + hexaOpacity;
        negativeButtonWrapper.style.backgroundColor = color;
    }
};

var setRaisons = function(container, raisons, color, defaultQuestionIcon, defaultConfigIcon){
    if(!raisons)return;
    var htmlRaisons = '';
    var raison, raisonIcon, raisonText;

    for(var i = 0; i < raisons.length ; i++){
        raison = raisons[i];
        if(!raison.icon){
            if(defaultQuestionIcon){
                raisonIcon = defaultQuestionIcon;
            }
            else{
                raisonIcon = defaultConfigIcon;
            }
        }
        else{
            raisonIcon = raison.icon;
        }

        if(!raison.text)
            raisonText = raison;
        else
            raisonText = raison.text;

        htmlRaisons += '<div class="row"><i class="fa fa-' + raisonIcon + '"></i><div>' + raisonText + '</div></div>'
    }

    container.innerHTML = htmlRaisons;
    container.style.color = color;
};

var getQuestionById = function(id){
    for(var i = 0; i < config.questions.length ; i++){
        if(config.questions[i].id === id)
            return config.questions[i];
    }

    alert('L\'ID ' + id +' de question n\'existe pas');

    return;
}

/**
 * Allow to set default properties for a question
 */
var setDefaultProperties = function(question){
    question.positiveButtonText = question.positiveButtonText || config.defaultStyle.positiveButtonText;
    question.negativeButtonText = question.negativeButtonText || config.defaultStyle.negativeButtonText;

    question.positiveIcon = question.positiveIcon || config.defaultStyle.positiveIcon;
    question.negativeIcon = question.negativeIcon || config.defaultStyle.negativeIcon;

    question.positiveColor = question.positiveColor || config.defaultStyle.positiveColor;
    question.negativeColor = question.negativeColor || config.defaultStyle.negativeColor;

    question.positiveBackgroundOpacity = question.positiveBackgroundOpacity || config.defaultStyle.positiveBackgroundOpacity;
    question.negativeBackgroundOpacity = question.negativeBackgroundOpacity || config.defaultStyle.negativeBackgroundOpacity;

    question.positiveRaisonsIcon = question.positiveRaisonsIcon || config.defaultStyle.positiveRaisonsIcon;
    question.negativeRaisonsIcon = question.negativeRaisonsIcon || config.defaultStyle.negativeRaisonsIcon;
}

var initializePage = function(question){

    setDefaultProperties(question);

    setQuestionText(question.question);

    setPositiveButton(question.positiveButtonText, question.positiveIcon, question.positiveColor, question.positiveBackgroundOpacity);
    setNegativeButton(question.negativeButtonText, question.negativeIcon, question.negativeColor, question.negativeBackgroundOpacity);
    setRaisons(positiveRaisons, question.positiveRaisons, question.positiveColor, question.positiveRaisonsIcon, config.defaultStyle.positiveRaisonsIcon);
    setRaisons(negativeRaisons, question.negativeRaisons, question.negativeColor, question.negativeRaisonsIcon, config.defaultStyle.negativeRaisonsIcon);

    positiveButton.onclick = function(){
        initializePage(getQuestionById(question.positiveRedirection));
    };

    negativeButton.onclick = function(){
        initializePage(getQuestionById(question.negativeRedirection));
    };

}

initializePage(getQuestionById(config.firstQuestionId));