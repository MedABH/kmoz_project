import React from "react"
import { Link } from "react-router-dom"

function MenuBar3() {
    return(
        <React.Fragment>
            <div class="btn-group">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Large button
            </button>
            <ul class="dropdown-menu">
                <li><span class="dropdown-item-text">Dropdown item text</span></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            <div class="btn-group">
            <button class="btn btn-secondary btn-lg" type="button">
                Large split button
            </button>
            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><span class="dropdown-item-text">Dropdown item text</span></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
        </React.Fragment>
    )}

    export default MenuBar3;