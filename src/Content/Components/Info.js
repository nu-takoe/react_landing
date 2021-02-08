import React from "react";
import '../Content.scss';
import img from "../../img/JasonWood.png";

export default function Info() {

    return (
        <div className='info-body'>
            <div className='img-body'>
                <img src={img} alt='img' />
            </div>
            <div className='about'>
                <h1>ABOUT ME</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio nostrum vero voluptatibus doloribus!
                    Repudiandae non dolorem ipsam velit illum vero in accusantium tenetur fugit praesentium? Distinctio, mollitia id. Quasi.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque recusandae quasi explicabo culpa. Facere, id sint.
                </p>
                <h2>Jason Wood</h2>
            </div>
        </div>
    )
}