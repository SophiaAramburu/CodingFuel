const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#interview-name').value.trim();
  const needed_funding = document.querySelector('#interview-funding').value.trim();
  const description = document.querySelector('#interview-desc').value.trim();

  if (name && tokens_earned && description) {
    const response = await fetch(`/api/interviews`, {
      method: 'POST',
      body: JSON.stringify({ name, tokens_earned, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create interview');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/interviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete interview');
    }
  }
};

document
  .querySelector('.new-interview-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.interview-list')
  .addEventListener('click', delButtonHandler);
