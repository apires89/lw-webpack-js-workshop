import autoComplete from 'js-autocomplete';

const searchElement = document.getElementById('search-data');
const skills = JSON.parse(searchElement.dataset.skills);

const autoCompleteJs = function () {
    new autoComplete({
    selector: document.getElementById("q"),
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = skills;
        var matches = [];
        for (var i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});
}


export {autoCompleteJs};

