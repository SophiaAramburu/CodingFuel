const interviewFormHandler = async (event) => {
  event.preventDefault();

  const questionResponse = document
    .querySelectorAll('.question-response')
    .values.trim();

  if (questionResponse) {
    const response = await fetch('/api/interviews', {
      method: 'POST',
      body: JSON.stringify({ question, response, user_id }),
      headers: {
        'Content-Type': 'applications/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to save questions');
    }
  }
};

document.querySelector('.new-interview-question').addEventListener('submit');
