import "./components.css"

export const Banner = (props) => {
  return (
    <div className="banner">
        <div className="banner-container">
          <h1>Consecionaria Herbox</h1>
          <p>Los mejores autos de Argentina</p>
          <h2>{props.Titulo}</h2>
        </div>
    </div>
  )
}

