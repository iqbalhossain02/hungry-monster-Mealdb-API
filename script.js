



    let base_url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetch(base_url)
        .then(res => res.json())
        .then(data => foodDetails(data.meals))
        

    const foodDetails = foodsAll => {
        console.log(foodsAll)
        const div = document.getElementById('foodDiv')
        for (let i = 0; i < foodsAll.length; i++) {

            const food = foodsAll[i];
            
            const inputValue = document.getElementById('search-box').value;
            
            
            const foodsInfo = `
                <h3>${inputValue.strMeal}</h3>
                <img src="${inputValue.strMealThumb}" alt="food-Img">
            `
            
            div.innerHTML = foodsInfo;
            
            

        }
    }


