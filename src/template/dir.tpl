<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width"/>
        <meta charset="utf-8"/>
        <title>{{title}}</title>
        <style>
            body {
                margin: 30px;
            }

            a {
                display: block;
                font-size: 30px;
            }
        </style>
    </head>
    <body>
    {{#each files}}
        <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}
    </body>
</html>