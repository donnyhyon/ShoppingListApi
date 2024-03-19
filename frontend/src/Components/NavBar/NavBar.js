import { NavLink } from "react-router-dom";


function NavBar() {
// TODO - add more pages
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink className="nav-link" to="/shoppinglist">Shopping List</NavLink>
                    <NavLink className="nav-link" to="/counter">Counter</NavLink>
                    <NavLink className="nav-link" to="/recipes">Recipes</NavLink>

                    {/* <NavLink className="nav-link" to="/shoppinglist">Shopping List</NavLink> */}
                    {/* <NavLink className="nav-link" to="/shoppinglist">Shopping List</NavLink> */}
                    {/* <NavLink className="nav-link" to="/shoppinglist">Shopping List</NavLink> */}

                </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;