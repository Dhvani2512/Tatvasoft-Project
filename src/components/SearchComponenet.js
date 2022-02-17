import React from "react";

const SearchComponent = () => {
    return (
        
        <div className="search">
            <nav className="navbar navbar-nav navbar-light bg-light">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="What are you looking for..." aria-label="Search" style={{ height: "40px", width:"422px", fontStyle:"italic" }} />
                    <button className="btn btn-outline-success" type="submit" style={{backgroundColor: "#80BF32", color:"white", borderColor:"#80BF32", fontSize:"16px", width:"129px", display:"block"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="white" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <b>Search</b>
                    </button>
                    <button className="btn btn-danger" type="submit" style={{backgroundColor: "#f14d54", color:"white",  fontSize:"16px"}}><b>Cancel</b></button>
                </form>
            </nav>
        </div>
    );
}
export default SearchComponent;