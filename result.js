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