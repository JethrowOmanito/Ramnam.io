
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    $to = "omanitojethrow0915@gmail.com"; // Your email address
    $subject = "Reservation from RAMNAM Restaurant";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nTime: $time";

    // Send the email
    if (mail($to, $subject, $message)) {
        echo "Reservation submitted successfully. Thank you!";
    } else {
        echo "Error submitting reservation. Please try again later.";
    }

    echo "Hello, PHP is working!";
}
