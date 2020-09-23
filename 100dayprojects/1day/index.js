const get_food_btn = document.getElementById('get_food');
const food_container = document.getElementById('food');


get_food_btn.addEventListener('click',() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createFood(res.meals[0]);
    });
});

const createFood = (meal) =>{
    const ingredients =[];
    //객체를 20개가져오기
    for(let i = 1; i <= 20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

const newInnerHTML =`
        <div class="box_wrapper">
            <div class="box box1">
                <img src="${meal.strMealThumb}" alt="음식사진">
                ${meal.strCategory ? `<p><strong>카테고리 :</strong> ${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p><strong>지역:</strong> ${meal.strArea}</p>` : ''}
                ${meal.strTags ? `<p><strong>태그:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
                <h5>재료:</h5>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="box box2">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        ${meal.strYoutube ? `
        <div class="video_wrapper">
            <h5>음식비디오</h5>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
            </div>
        </div>` : ''}
        `;
    food_container.innerHTML=newInnerHTML;
}