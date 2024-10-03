//This section defines the available topics and rankings for the survey.
const topics = ['HTML', 'CSS', 'JavaScript'];
const rankings = ['Awesome', 'Great', 'Good', 'Poor', 'Unranked'];


//This function creates the main survey form.
function createClassSurvey() {
    //This creates the main form element and assigns it an ID.
    const form = document.createElement('form');
    form.id = 'classSurveyForm';

    //This inner function creates a fieldset with radio buttons for each option group.
    function createRadioGroup(name, legend, options) {
        const fieldset = document.createElement('fieldset');
        fieldset.innerHTML = `<legend>${legend}</legend>`;
        options.forEach(option => {
            fieldset.innerHTML += `
                <label>
                    <input type="radio" name="${name}" value="${option}" id="${name}-${option}">
                    ${option}
                </label>
            `;
        });
        return fieldset;
    }

    //This adds two radio button groups to the form: one for rankings and one for topics.
    form.appendChild(createRadioGroup('ranking', 'I am', rankings));
    form.appendChild(createRadioGroup('topic', 'With', topics));

    //This adds a submit button to the form.
    form.innerHTML += '<button type="submit">Submit Survey</button>';
    document.body.appendChild(form);

    //This creates a div to display the results of the survey.
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'surveyResults';
    document.body.appendChild(resultsDiv);

    //This sets up an event listener for form submission, preventing default form action and handling the survey response.
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const ranking = formData.get('ranking');
        const topic = formData.get('topic');

        if (ranking && topic) {
            const resultElement = document.createElement('p');
            resultElement.innerHTML = `I am <strong>${ranking}</strong> with <strong>${topic}</strong>.`;
            
            const existingResult = document.querySelector(`#result-${topic}`);
            if (existingResult) {
                existingResult.replaceWith(resultElement);
            } else {
                resultElement.id = `result-${topic}`;
                resultsDiv.appendChild(resultElement);
            }
        }
    });
}
createClassSurvey();