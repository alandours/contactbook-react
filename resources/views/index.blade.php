<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="ContactBook v2 made with React/Redux, Laravel and MySQL">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env('APP_NAME')}}</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <meta name="apple-mobile-web-app-title" content="ContactBook">
    <meta name="application-name" content="ContactBook">
    <meta name="msapplication-TileColor" content="#12c450">
    <meta name="theme-color" content="#ffffff">
</head>
<body class="preload">
  <div id="contact-book"></div>
  <script src="{{ secure_asset('/js/app.js') }}"></script>
</body>
</html>