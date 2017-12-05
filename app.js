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

var seeMore = document.getElementById('seemore');
var seeMoreButton = document.getElementById('seemore-button');
var seeMoreContent = document.getElementById('seemore-content');
var seeMoreText = document.getElementById('seemore-text');


var reponseForm = document.getElementById('reponse-form');

var isMoreContentOpened = false;


var path = [];

seeMoreButton.onclick = function(){
    isMoreContentOpened ? seeMoreContent.setAttribute('class', 'close') : seeMoreContent.setAttribute('class', 'open');
    isMoreContentOpened = !isMoreContentOpened;
   /* setTimeout(function(){
        reponseForm.scrollTo(0, reponseForm.scrollHeight)
    }, 300);*/
}


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

var setSeeMore = function(text){
    if(!text)
        seeMore.style.display = 'none';
    else
        seeMore.style.display = 'block';
    seeMoreContent.setAttribute('class', 'close');
    isMoreContentOpened = false;
    seeMoreText.innerHTML = text;
}

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

    setSeeMore(question.seeMoreText);

    positiveButton.onclick = function(){

        path.push({id:question.id, response:1});
        sessionStorage.path = JSON.stringify(path);
        console.log(sessionStorage.path);

        if(!question.positiveRedirection){
            window.location = 'result.html';
        }
        else{
            initializePage(getQuestionById(question.positiveRedirection));
        }
    };

    negativeButton.onclick = function(){
        path.push({id: question.id, response: 0});
        sessionStorage.path = JSON.stringify(path);
        console.log(sessionStorage.path);

        if(!question.negativeRedirection){
            window.location = 'result.html';
        }
        else {
            initializePage(getQuestionById(question.negativeRedirection));
        }
    };

}

initializePage(getQuestionById(config.firstQuestionId));