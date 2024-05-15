<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'medbeny206@gmail.com';
  $subject = 'New message from your website';
  $headers = 'From: ' . $email;

  if (mail($to, $subject, $message, $headers)) {
    echo 'Your message has been sent.';
  } else {
    echo 'There was an error sending your message.';
  }
} else {
  echo 'Please fill out all the fields.';
}
?>
