# ContactBook

Contact book made with React, Laravel and MySQL.

## How to use

Clone the GitHub repo

```
$ git clone https://github.com/alandours/contactbook-react.git
```

Install Composer dependencies

```
$ composer install
```

Copy ``.env.example`` and rename it ``.env``

```
$ cp .env.example .env
```

Generate an app key

```
$ php artisan key:generate
```

Create a new MySQL database and configure the ``.env`` file accordingly

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=username
DB_PASSWORD=password
```

Run migrations

```
$ php artisan migrate
```

Seed database

```
$ php artisan db:seed
```

Install dependencies

```
$ npm install
```

Start server

```
$ php artisan serve
```