import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='container'>
            <h2 className='text-center my-5'>Question & Answer</h2>
            <div className="row gx-5">
                <div className='col-lg-7'>
                    <div className='question-1 my-5'>
                        <h3>What is contex api? how is use</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus quasi iusto quam vitae veniam nostrum quae, labore a dolorum molestias, provident odit error? Libero voluptatum asperiores ea consequuntur at.</p>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='blog-img my-5'>
                        <img className='img-fulid' src="sim2.png" alt="" />
                    </div>
                </div>   
            </div>
            <div className="row gx-5" >
                <div className='col-lg-7'>
                    <div className='quetion-2 my-5'>
                        <h3>What is semantic tag? </h3>
                        <p className=''>A new system of semantic tag html-5 . Which is called semantic element. The main parts of websites were done with div before html-5 came. But the semaintic element is using different tags such as header, footer, nav, section, article, main, asid, etc. The tag are often called semantic element.</p>
                    </div>
                </div>   
                <div className='col-lg-5'>
                    <div className='blog-img my-5'>
                        <img className='img-fulid' src="sim1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="row gx-5">
                <div className='col-lg-7'>
                    <div className='quetion-3 my-5'>
                        <h3>What is blog & inline elements ?</h3>
                        <p><b>Block element: </b>Block elemts will open every-time new line. And will take all the space along its line. These are the features of block elements. p , div, ul, li, aside, main, h1-h6, header, footer, table, video etc block elements. <br />
                        <b>Inline-Elements:</b> Inline elements are those elements that will take up as much space as he needs. span, a, abbr, b, big, br, button, input, small, label etc. inline elements
                        </p>
                    </div>
                </div>      
                <div className='col-lg-5'>
                    <div className='blog-img my-5'>
                        <img className='img-fulid' src="sim3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Blogs;

                    
                    