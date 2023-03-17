import React from 'react'

export default function About(props) {
    
    return (
        <div className="container">
            <h1 className={`my-3 text-${props.mode === "light"?"dark":"light"}`}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === "light"?"dark":"light"} show`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This is TextUtils. A tool to make your work with text easier.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Developer</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Made with React by TheCoder with the help of tutorial video of CodeWithHarry, TextUtils gives you an easy way to write text and customize it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Costs</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is absolutely free of cost and is very fast. You can use it anytime, anywhere and in any device
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
