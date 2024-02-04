<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preload" href="{{ mix('/css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>

        <link rel="icon" href="{{ url('icons/favicon.png') }}">
        <link rel="canonical" href="https://yannisnikolaidis.com/"/>


    <meta name="description" content="Currently working as a Full Stack Developer, expanding the skills attained through rigorous training and hands-on experience as well as various courses. Started as a Back-End developer but fell equally in love with Front-End, trying to participate in the creation of a web app from inception to completion."/>
    <meta name="keywords" content="Yannis Nikolaidis, fullstack, web developer, web app, laravel, css, js, html" />

        <title>Yannis Nikolaidis</title>
        <style>
.mask{ position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000000; z-index: 30;     animation: fadeAway 1s forwards ease-in;}
 .svs{   position: absolute;   top: 50%;   left: 50%;   transform: translate(-50%,-50%); }

        </style>
    </head>
    <body class="antialiased">
        <div class="mask">
            <div class="svs">
            <img 
                                width="100" 
                                height="200" 
                                data-main-image="" alt="screensave" sizes="(min-width: 200px) 200px, 100%" 
                                src='/icons/favicon.png'>
            </div>
          </div>

        <div id="app">
        </div>
        
        <!-- React JS -->
        <script src="{{ mix('/js/app.js') }}" async defer></script>
        <script>
          const appJsUrl = '{{ mix('/js/app.js') }}';
          const appCssUrl = '{{ mix('/css/app.css') }}';
          const appOpenSansBold = '{{ mix('/fonts/OpenSans-Bold.ttf') }}';
          const appOpenSansMedium = '{{ mix('/fonts/OpenSans-Medium.ttf') }}';
          const appOpenSansRegular = '{{ mix('/fonts/OpenSans-Regular.ttf') }}';
          const appFaviconPng = '{{ mix('/icons/favicon.png') }}';
      </script>
        <script>
          if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register("/sw.js")
                  
          }
      </script>
      </body>
</html>
