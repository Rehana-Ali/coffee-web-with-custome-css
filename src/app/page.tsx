import React from 'react';
import Image from 'next/image';


const Home = () => {
    return (
        <div>
           <div className="banner"></div>
            <div className="hero">
        

<h1>Welcome to Our Coffee World</h1>  
<p>Discover the finest coffee beans and blends from around the world. Whether you prefer a bold espresso,<br/> a smooth cappuccino, or a comforting cup of black coffee, we bring you the best flavors to suit every taste.<br/> Our carefully curated selection showcases the craftsmanship of coffee growers from exotic locations,<br/> ensuring an unforgettable experience in every sip. Join us in celebrating the art<br/> and passion behind every cup of coffee.</p>

            </div>
            <div className="flavours">
                <div className="flavour">
                    <img src="/coffee1.png" alt="Coffee 1" />
                    <h2>Rich and Bold</h2>
                    <p>Rich and bold coffee offers a deep, intense flavor with a perfect balance of robustness and smoothness. Its full-bodied profile leaves a lasting impression with every sip.</p>
                </div>
                <div className="flavour">
                    <img src="/coffee2.png" alt="Coffee 2" />
                    <h2>Sweet and Smooth</h2>
                    <p>Sweet and smooth coffee delights with its gentle, mellow flavors and subtle sweetness. It’s the perfect choice for a comforting and well-rounded cup.</p>
                </div>
                <div className="flavour">
                    <img src="/coffee3.png" alt="Coffee 3" />
                    <h2>Fruity and Bright</h2>
                    <p>Fruity and bright coffee bursts with vibrant notes of citrus, berries, and tropical fruits. Its lively acidity creates a refreshing and invigorating flavor profile.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;