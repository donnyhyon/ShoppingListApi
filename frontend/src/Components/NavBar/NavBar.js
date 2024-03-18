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
                    <NavLink to="/shoppinglist">Shopping List</NavLink>
                    <a class="nav-link" href="/recipes">Recipes</a>
                    <NavLink to="/counter">Counter</NavLink>

                    {/* <a class="nav-link" href="/Calendar">Calendar</a> */}
                    {/* <a class="nav-link" href="/Calories">Calories</a> */}
                </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;