
const search = () =>{
    const searchText = document.getElementById('input-field').value;
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    // data load
    fetch(url)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data.meals)
            displayFoods(data.meals)
        })
        .catch(error =>console.log(error))
}


// display Food
const displayFoods = foods =>{
    const foodContainer = document.getElementById('food-container');
    const searchText = document.getElementById('input-field').value; //1
    foodContainer.innerHTML = ''
    foods.forEach(food =>{
        const foodDiv = document.createElement('div');
        // console.log(food)
        foodDiv.className = 'food-item'
        foodDiv.innerHTML = `
            <div class="sing-food-item ">
                <img  src="${food.strMealThumb}" onclick="signFoodAllDetails('${food.idMeal}')" >
                <h3>${food.strMeal}</h3>
            </div>
        `
        
        foodContainer.appendChild(foodDiv);
    })
}


const signFoodAllDetails = (foodItem) =>{
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodItem}`
    fetch(url)
        .then(res =>res.json())
        .then(data =>foodDisplayDetails(data.meals))
        .catch(err => console.log(err))
}


const foodDisplayDetails = (food) =>{
    const foodDisplay = document.getElementById('food-display-details');
    foodDisplay.innerHTML = '';
    console.log(food)
    const foodDetailsDiv = document.createElement('div');
    foodDetailsDiv.className = 'food-details'
    foodDetailsDiv.innerHTML = `
        <div class="img-h2">
        <img src="${food[0].strMealThumb}">
        <h2>${food[0].strMeal}</h2>
        <br>
        <h3>Ingredients</h3>
        <br>
        <p>Area: ${food[0].strArea}</p>
        <p>Category: ${food[0].strCategory}</p>
        <p>Drink Alternate: ${food[0].strDrinkAlternate}</p>
        <p>Ingredients-1: ${food[0].strIngredient3}</p>
        <p>Ingredients-2: ${food[0].strIngredient4}</p>
        <p>Ingredients-3: ${food[0].strIngredient5}</p>
        <p>Ingredients-4: ${food[0].strIngredient6}</p>
        </div>
        
        <strong style="font-size:20px;">Instructions:<strong><p> ${food[0].strInstructions}</p>

    `
    foodDisplay.appendChild(foodDetailsDiv);

}

