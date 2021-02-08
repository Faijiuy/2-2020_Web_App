# Deploy on Heroku

## References:
- [Getting Started on Heroku with PHP
](https://devcenter.heroku.com/articles/getting-started-with-php#set-up)
- [ClearDB MySQL](https://devcenter.heroku.com/articles/cleardb#provisioning-the-shared-mysql-add-on)
0. create account
install php, composer
1. install heroku, MSI, Choco + set path
2. heroku login
3. git clone https://github.com/heroku/php-getting-started.git
4. heroku create
    git remote -v
5. git push heroku main
6. heroku ps:scale web=1
7. heroku open
    heroku logs --tail
    heroku ps


MySQL --> ClearDB
1. heroku addons:create cleardb:ignite
2. heroku config
    look for --> CLEARDB_DATABASE_URL

    mysql://b4c7ffe5a5a37c:218c61d0@us-cdbr-east-02.cleardb.com/heroku_07c44eac08d0ae1?reconnect=true
    -h us-cdbr-east-02.cleardb.com
    -u b4c7ffe5a5a37c
    p 218c61d0
    db heroku_07c44eac08d0ae1

    can't create new DB employee, 
    - go an comment them out
    - use heroku_07c44eac08d0ae1
    - comment line 111: flush