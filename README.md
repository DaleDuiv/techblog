# Tech Blog

## Description
This week we needed to develop a fullstack tech blog with no prior code.

We need to utilize the handlebars templated learned in the MVC week, as well as prior knowledge.
This challenge was tricky to do for me, as I am still not overly confident with the API setups.
We must be able to login and logout, write a post, comment on a post and delete our input.
The posts must also have a date on them.



## Table of Contents

- [Key features](#key-features)
- [Technology stack](#technology-stack)
- [Installation](#installation)
- [Usage instructions](#usage-instructions)
- [Future work](#future-work)


## Installation

How to install

```md
npm install
```

Create a .env file (your MySQL username and password)

```md
DB_NAME='blog_db'
DB_USER=''
DB_PASSWORD=''
```

Login to MySQL

```md
mysql -u root -p
```

```md
source db/schema.sql
```

```md
quit
```

To populate the database

```md
node seeds/seed.js
```

```md
npm start
```

## Usage
Link to site: 

![Quick run through](./public/images/techblogRunthrough.gif)

## Credits

Made by [Dale Duivesteyn](https://github.com/DaleDuiv)

---