
# remenberToken

## Laravel authentication offers remember me functionality out of the box

---

## In order to use it you need to do 2 things

    1- add remember_token column in your users table - this is where the token will be stored

    2- pass true as a second parameter of Auth::attempt() to enable remember me behaviour If you do this, Laravel will generate a token that will be saved in users table and in a cookie. On subsequent requests, even if session cookie is not available, user will be authenticated automatically as long as remember-me cookie is there.

    You can find more details and example in the docs:

    https://laravel.com/docs/8.x/authentication#remembering-users
    this piece of code may help you, i cutted this from laravel sample project:

### Code

---
    <?php
        if ( Auth::attempt($this->only('email', 'password'), $this->filled('remember')) ){
            // logged in succcessfully, if remember key exist in request then remember me will be true
        }

    ?>    
---
