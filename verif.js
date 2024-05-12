document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var message = document.querySelector('#message').value;

  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (email === '') {
    alert('Please enter your email address.');
    return;
  }

  if (message === '') {
    alert('Please enter your message.');
    return;
  }

  this.submit();
});