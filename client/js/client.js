console.log("It's working!");

const exerciseForm = document.querySelector('form');

exerciseForm.addEventListener('submit', (event) => {
    //Hold off the link to dashboard
    event.preventDefault();
    console.log('form is in');

    //Break down the form, make it an object
    const formData = new FormData(exerciseForm);
    const name = formData.get('exerciseName');
    const focus = formData.get('exerciseFocus');
    const calories = formData.get('exercsieCalories');
    const link = formData.get('exerciseLink');

    const exercise = {
        name,
        focus,
        calories,
        link
    };
    console.log(exercise);
    
    alert(name);
    exerciseForm.submit();
});