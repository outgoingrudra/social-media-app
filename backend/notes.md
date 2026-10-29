# package.json 
   - configuration file
   - it contains metadata of the project
   
# what we have done 

 - we created an express server
 - we connected db to it 
 - make routes
 - added authRouter
 - added signup function
 - added bcyrpt for password hashing
 - add login route 
 - added jwt and cookie system
 - add logout route 




 bcrypt is a js package which is used for hashing the password 

 plain password => bcrypt => hashed version

and hashed version is stored in DB


# imagekit configs
-  go to imagekit website and get public and private URLS
 - npm install @imagekit/nodejs
 - copy imagekit config file



 # email sending flow
  - generate password from google
     - go to goole account
     - require 2 step verification , enable it 
     - go to google search app password and generate
     - copy the password 
   - npm i nodemailer
   -create mail.js
