import Image from "next/image";

const About =  () =>{
    return (
        <div>
        
            <div className="about">
                <h1>About Us</h1>
                 <img src="/aboutcoffee.png" alt="About Coffee"  />

                <p>Welcome to our coffee website! We are passionate about providing the best coffee experience.</p>
                <p>Our mission is to source high-quality beans and deliver them to coffee lovers everywhere.</p>
                <p>Join us on our journey to explore the world of coffee!</p>
            </div>
        
        </div>
    );
};

export default About;