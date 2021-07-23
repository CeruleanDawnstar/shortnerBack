# :link:shortnerBack:link:
Backend web app for a link shortner

# :white_check_mark:Prerequisites:white_check_mark:

First of all, make sure to have [Node](https://nodejs.org/en/) installed.

You will also need [Docker](https://www.docker.com/) to start the container in order to make the project work.

# :rocket:Launch the project:rocket:

To launch the project, first you need to clone the project repository on [git](https://github.com/CeruleanDawnstar/shortnerBack.git)

Then you use `docker-compose up` to create the container.


# :memo:Sidenote:memo:

Localhost is http://localhost:8125/

Access to myphpadmin via http://localhost:8080/index.php?route=/database/structure&server=1&db=bitly

If you need to restart the container you can use :

> `docker-compose down`

And restart the server back up :

> `docker-compose up --build`

To test out the project, you can use applications like [Postman].(https://www.postman.com/)
You can try different CRUD operations via Postman with the following setups :
## Users
- To get a list of all Users, select GET(choice list left to where you insert your link) then paste the following link [http://localhost:8125/users] then click Send
- To get a User using his ID, select GET(choice list left to where you insert your link) then paste the following link [http://localhost:8125/users/1] to list the User whose ID is 1
- To edit a User using his ID, select PUT(choice list left to where you insert your link) then paste the following link [http://localhost:8125/users/1] to edit the User whose ID is 1
- To delete a User using his ID, select DELETE(choice list left to where you insert your link) then paste the following link [http://localhost:8125/users/1] to delete the User whose ID is 1

## Links
- To get a list of all Links, select GET(choice list left to where you insert your link) then paste the following link [http://localhost:8125/link] then click Send
- To get a Link using his ID, select GET(choice list left to where you insert your link) then paste the following link [http://localhost:8125/link/1] to list the Link whose ID is 1
- To edit a Link using his ID, select PUT(choice list left to where you insert your link) then paste the following link [http://localhost:8125/link/1] to edit the Link whose ID is 1
- To delete a Link using his ID, select DELETE(choice list left to where you insert your link) then paste the following link [http://localhost:8125/link/1] to delete the Link whose ID is 1


# :busts_in_silhouette:Contributors:busts_in_silhouette:
Contributors of this project include :
# [skillyHawk](https://github.com/skillyHawk) (Rémi)
# [296341](https://github.com/296341) (Antoine)
# [CeruleanDawnstar](https://github.com/CeruleanDawnstar) (Tahir)


# :trident:How to contribute:trident:
If you want to contribute, you can ask for a pull request. For merge and changes, open an issue; we will come back to you shortly. If approved, checkout a new branch then make sure to not have the same branch name as the branches already created. Also make sure to start your branch name with "feature/". Finally you can make a pull request, we will validate if your code is valid.

Thank you !
