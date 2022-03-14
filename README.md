# memes-app
Memes application to display trending memes which is an example app for Angular integrated with Spring boot


# memes-app-ui
This folder contains angular application that will communicate with Spring Boot Application to get the trending memes to render in the UI

```sh
mvn clean install 
```
when you run this command this will build angular application and spring boot together using frontend-maven-plugin and creates a jar file by bundling both application and can be deployed together.



```sh
java -jar <jar-file-name> 
```
This will let you to use the application anywhere. Use http://localhost:8080/ to view the application.

## Tech
- Angular 11
- Spring Boot 2.6.0
