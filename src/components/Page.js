import { faFontAwesome } from '@fortawesome/free-regular-svg-icons'
import React, { Fragment } from 'react'
import oyo from '../assets/oyo.png'
import '../../src/index.css'

const info = [
    { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work" }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work" }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work" }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work" }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work" }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }, { logo: "", title: "Diwali Campaign", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, placeat?", button: "Submit Work", }
]

const Page = (props) => {
    return (
        <>
            <form className=" item_search ms-auto" role="search" >
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger " type="submit">Search</button>
            </form>

            <div className="container-fluid my-3  ">

                <div className='row'>
                    {info.map((element, i) =>
                        <div className='col-12 col-md-6 col-xl-4' key={i}>
                            <div className="card mx-2 my-2 " >
                                <div className="card-body">
                                    <div className="head">
                                        <img src={oyo} className="card-img-top" alt="..." />
                                        <a href="#" className="btn btn-outline-danger">Submit Work</a>
                                    </div>
                                    <h5 className="card-title"> {element.title}</h5>
                                    <div className="row ">
                                        <div className='col-9'>
                                            <p className="card-text">{element.text}</p>
                                        </div> <div className='col-3'>
                                            <h3 style={{ width: "fit-content", color: "red", fontSize: "20px" }}>₹ 2500</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Page
