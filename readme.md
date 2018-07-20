# Course Manager using Spring Boot and React
This is a Spring Boot application built on top of Java, JQuery, and MySQL. Maven is used as a build tool. 

# Live Demo
Navigate to: https://feewet-adminapp.herokuapp.com/jquery/components/login/login.template.client.html

Existing users (username/password)
admin/admin 
hal/hal 
feewet/feewet 
  
# Setup  
Install Java 8 JDK  
Install Spring Boot CLI 2.0.2  
Install Maven 3.13w
Install node & npm
Instal react  

# Running with Heroku  
git push heroku master  
  
# Running with the Command Line 
 
## Server 
cd coursemanager-server  
mvn -clean install  
mvn compile  
mvn package  
java -jar target/adminapp-0.0.1-SNAPSHOT.jar  

## Client
cd coursemanager-client
npm install
npm start
navigate to localhost:3000