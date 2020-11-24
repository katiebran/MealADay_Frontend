# MealADay_Frontend

### What should I have to eat today? 
Cooking for yourself or your family can be hard, and if not done the right way can result in frustration and dissatisfaction. Meal-A-Day aims to pair you with the meal to suit your mood.
# 
### Functions:
#### Quiz
User's work their way through a quiz to determine what mood they are in. Using an algorithm that assigns food types to moods, a recipe is decided for them. 

```javascript 
  let happyOptions = ["chicken", "salad", "tacos", "american"];
  let sadOptions = ["chinese", "pizza", "soup", "icecream"];
  let angryOptions = ["mexican", "indian", "beef", "vegetables"];
  let excitedOptions = ["italian", "steak", "fried", "pasta"];

```

#### [Edamam Api](https://developer.edamam.com/)
The [Edamam Api](https://developer.edamam.com/) is a public API. This code uses the specific Recipe Search API Documentation which allows for get requests to be made from a variety of different parameters. Using the information from thee quiz, this code uses a get request based off of which ever meal option (seen in the code snippet above) has the most points. These key words above provide information for the cuisine and dish type for the get request. 
```javascript 
      //where foodList corresponds to the list of options that were chosed based off mood

for(let i = 0; i < foodList.length; i++){
      const result = await axios({
          method: 'get',
          url: 'https://api.edamam.com/search?app_id=a827a21b&app_key=ec74908f00f3210c21a1a90c37518b97&q='+foodList[i],
        });
  
      foodObjArr[i] = result.data;
      
    }
```
#### Recipe Library
#### Login



#

[Edamam Api](https://developer.edamam.com/)
