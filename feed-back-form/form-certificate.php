<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['for_user_name'])   ||
   empty($_POST['for_user_email'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "Поля не заповнено!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$certificate_for_user_name = strip_tags(htmlspecialchars($_POST['for_user_name']));
$certificate_for_user_email = strip_tags(htmlspecialchars($_POST['for_user_email']));

// Create the email and send the message
$to = 'shyshka.oksa@gmail.com';
$email_subject = "Website natali-madiy.pp.ua certificate form:  $name";
$email_body = "You have received a new order from your website certificate form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\nCertificate for user name:$certificate_for_user_name\nTo email\n$certificate_for_user_email";
$headers = "From: noreply@natali-madiy.pp.ua\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
