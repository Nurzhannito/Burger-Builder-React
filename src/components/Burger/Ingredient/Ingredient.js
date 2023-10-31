import './Ingredient.css';

const Ingredient = ({ type }) => {
  switch (type) {
    case "bread-top":
      return <div className="BreadTop">
        <div className="Seeds1" />
        <div className="Seeds2" />
      </div>

    case "salad":
      return <div className="Salad" />

    case "bacon":
      return <div className="Bacon" />

    case "cheese":
      return <div className="Cheese" />

    case "meat":
      return <div className="Meat" />

    case "bread-bottom":
      return <div className="BreadBottom" />

    default:
      return null
  }
};

export default Ingredient;