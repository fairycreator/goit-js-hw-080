import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

loadFormState();

feedbackForm.addEventListener('input', throttle(saveFormState, 500));
feedbackForm.addEventListener('submit', handleSubmit);

function saveFormState() {
    const formState = {
    email: emailInput.value,
    message: messageInput.value,
};

localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function loadFormState() {
    const savedFormState = localStorage.getItem(STORAGE_KEY);

        if (savedFormState) {
    const formState = JSON.parse(savedFormState);

    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
}
}

function handleSubmit(event) {
    event.preventDefault();

const formState = {
    email: emailInput.value,
    message: messageInput.value,
};

console.log(formState);

    localStorage.removeItem(STORAGE_KEY);
    feedbackForm.reset();
}
