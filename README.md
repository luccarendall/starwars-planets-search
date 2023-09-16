## [Star Wars Planet Search](https://luccarendall.github.io/starwars-planets-search/)
The project's objective was to develop a list of Star Wars universe planets with filters using Context API and Hooks to manage global states.

<div align="center">
<img src="https://i.ibb.co/92Ww8K5/Star-Wars-Planet-Search.png" alt="starwars-tatooine">  
</div>

The project's development included the following five main functionalities:

**1** - Create a request to the /planets endpoint of the Star Wars API and populate a table with the returned data, except for the residents' column.

**2** - Filter the table using a text input field, displaying only the planets whose names include the entered text.

**3** - Create a comparison filter for numeric values (greater than, less than, or equal to).

**4** - Create an 'X' button next to each generated filter, which, when clicked, removes the numeric value filter and undoes the table filtering.

**5** - Enable column sorting in ascending or descending order.

Access the application via the link:
> https://luccarendall.github.io/starwars-planets-search/

## Libraries / API
* React
	 * React Router
	 * React Hooks
	 * React Context API
* I used the `fetch` method to call the API.
* The API used in the project was:    
[Swapi Planets API](https://swapi-trybe.herokuapp.com/api/planets/)

> ## Usage Demonstration

## Run Locally
1) Clone the repository
2) Install dependencies with `npm install`
3) Navigate to the project folder and run `npm start`
4) Your project is now running at: `http://localhost:3000/`

## Author
| [<img src="https://avatars.githubusercontent.com/u/92706411?v=4" width=115><br><sub>@luccarendall</sub>](https://github.com/LuccaRendall) |
| :---: |
