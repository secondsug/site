import React from 'react';
import Footer from '../../components/Footer';

function About() {
    return (
        <div>
            <div className="bg-white h-[100vh] flex-1 flex items-center">
                <div
                    data-aos="fade-left"

                    data-aos-duration="1000"
                    className="flex-[0.5px] ml-10">
                    <img

                        className="insert-0 w-full h-[550px] "
                        src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                    />
                </div>
                <div className="flex-[0.5px] text-black pl-10 pt-0">
                    <h4
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="font-extrabold font-sans text-3xl">Corporate overview</h4>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="font-semibold font-sans text-1xl pt-4">
                        Seconds is unlocking the potential of the ride sharing industry in Uganda, giving opportunity to
                        millions of drivers to earn more with an open platform, inspiring and igniting more
                        opportunities for people and businesses to do more.

                        <br/>
                    </p>
                    <p className="font-semibold font-sans text-1xl pt-4">
                        Seconds provides drivers with flexible work and better income. It is committed to collaborating
                        with policy makers, the taxi industry, automobile industry and communities to solve transport
                        problems, environmental and employment challenges through encouraging public and private
                        transport. Seconds strives to create better experiences and greater social value, by building an
                        Open , safe , inclusive and sustainable transportation with local service ecosystem for better
                        future cities.

                    </p>


                </div>
            </div>

            <Footer />
        </div>
    )
}


export default About;