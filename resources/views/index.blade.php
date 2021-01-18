<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="ContactBook v2 made with React/Redux, Laravel and MySQL">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env('APP_NAME')}}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('img/site/favicon.ico') }}">
    <link rel="icon" href="{{ asset('img/site/favicon.ico') }}">
</head>
<body class="preload">
  <div id="contact-book"></div>
  <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>