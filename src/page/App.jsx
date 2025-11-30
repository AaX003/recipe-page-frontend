import '../css/App.css';

// images
import img from "../assets/images/image-omelette.jpeg";

function App() {
 
  return (
    <div className="container">
      {/* IMAGE */}
      <div className="img-wrapper">
        <img src={img} alt="omelette img"/>
      </div>

      <header className="main">
        <h1 className="title">
          Simple Omelette Recipe
        </h1>
        <p className="subtitle">
          An easy and quick dish, perfect for any meal.
          This classic omelette combines beaten eggs
          cooked to perfection, optionally filled with
          your choice of cheese, vegetables, or meats.
        </p>
      </header>

      <section className="preparation-wrapper">
        <h3 className="title">Preparation time</h3>
        <ul>
          <li><strong>Total</strong>:{" "}
            <span className="info">
              Approximately 10 minutes
            </span>
          </li>
          <li><strong>Preparation</strong>:{" "}
            <span className="info">
              5 minutes
            </span>
           </li>
          <li><strong>Cooking</strong>:{" "}
            <span className="info">
              5 minutes
            </span>
          </li>
        </ul>
      </section>

      <section className="ingredients-wrapper">
        <h3 className="title">Ingredients</h3>
        <ul>
          <li>
            <span className="info">
              2-3 large eggs
            </span>
            
          </li>
          <li>
            <span className="info">
              Salt, to taste
            </span>
          </li>
          <li>
            <span className="info">
              1 tablespoon of butter or oil
            </span>
          </li>
          <li>
            <span className="info">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </span>
          </li>
        </ul>
      </section>

      <hr />

      <section className="instructions-wrapper">
        <h3 className="title">Instructions</h3>
        <ol>
          <li><strong>Beat the eggs</strong>:{" "}
            <span className="info">
              In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk 
              for a fluffier texture.
            </span>
          </li>
          <li><strong>Heat the pan</strong>:{" "}
            <span className="info">
              Place a non-stick frying pan over
              medium heat and add butter or oil.
            </span>
          </li>
          <li><strong>Cook the omelette</strong>:{" "}
            <span className="info">
              Once the butter is melted and bubbling, 
              pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.
            </span>
          </li>
          <li><strong>Add fillings (optional)</strong>:{" "}
            <span className="info">
              When the eggs begin to set at the edges 
              but are still slightly runny in the middle,
              sprinkle your chosen fillings over one 
              half of the omelette.
            </span>
          </li>
          <li><strong>Fold and serve</strong>:{" "}
            <span className="info">
              As the omelette continues to cook,
              carefully lift one edge and fold it
              over the fillings. Let it cook for 
              another minute, then slide it onto 
              a plate.
            </span>
          </li>
          <li><strong>Enjoy</strong>:{" "}
            <span className="info">
              Serve hot, with additional
              salt and pepper if needed.
            </span>
          </li>
        </ol>
      </section>

      <hr />

      <section className="nutrition-wrapper">
        <h3 className="title">Nutrition</h3>
        <p className="subtitle">
          The table below shows nutritional values per serving without the additional fillings.
        </p>
        <ul className="nutrition-info">
          <li>
            <span className="text">Calories</span>
            <span className="value">277kcal</span>
          </li>
          
          <li>
            <span className="text">Carbs</span>
            <span className="value">0g</span>
          </li>
       
          <li>
            <span className="text">Protein</span>
            <span className="value">20g</span>
          </li>
  
          <li>
            <span className="text">Fat</span>
            <span className="value">22g</span>
          </li>
        </ul>
      </section>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">AXACODES</a>.
    </div>
    </div>
  )
}

export default App
