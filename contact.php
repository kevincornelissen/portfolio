<?php
  // get the posted data  
  $name = $_POST["name"];  
  $email_address = $_POST["email"];  
  $message = $_POST["message"];  
        
  // write the email content  
  $email_content = "Name: $name\n";  
  $email_content .= "Email Address: $email_address\n";  
  $email_content .= "Message:\n\n$message";  
        
  // send the email  
  mail ("info@kevincornelissen.be", "New Contact Message", $email_content);  
        
  // send the user back to the form  
  function goback()
    {
        header("Location: {$_SERVER['HTTP_REFERER']}");
        exit;
    }
    goback();
?>
