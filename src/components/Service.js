
import "./style.css"


const service =()=>{
        return(
          <div>
            <h1 className="head">Our service</h1>
             <h3 className="text-tit">
              Hello
                Welcome to our site,
                 if you are a girl,
                we are looking for your 
                convenience to find your dream wedding 
                 dress to make your day more brilliant,
                and if you are a young man 
                looking for your fianncee for  a dress that shows her as a queen as she is always in your view,
                it has been recommended
              </h3>
             
             <section className="images">
                 <img  src={require("./dresss.jpg")} width ="300" />
                 <p className="text-l-up">
                    Our site provides many dresses in
                     various designs for many designers,
                   in different sizes and lengths.
                   Dresses are also available in
                    various fabrics and different prices.
                   Dresses with distinctive modern
                    designs that make you look like
                     the queen of that night.
                  </p>
                  
             </section>
              <section className="images">
                 <img    src={require('./a.jpg')}  width ="350" />
                 <p className="text-l-up1">
                    We also have a special section for all the accessories you need, accessories of the utmost delicacy and beauty that suit a beautiful bride like you,
                    Different designs by many designers, with different prices, high quality, and designs
                 </p>
              </section>

              <section className="images">
                 <img   src={require('./flower.jpg')}  width ="400" />
                  <p className="text-l-cent">
                      And we do not forget roses, one of the most important requirements for the wedding day, so we provided bouquets of roses of all kinds and different colors and the most beautiful and latest designs, roses and winds that suit your hands
                  </p>
              </section>
             <section className="images">
                <img  src={require('./del.jpg')}  width ="400" />
                  <p className="text-r-up">
                  Because we care about your comfort,
                   we have a door-to-door delivery service 
                   available wherever you are, and in a short 
                   time your order will be in your hands.
                  </p>
              </section>
              
             <section className="images">
                <img  src={require('./sale.jpg')} width ="600" />
                 <p className="text-r-cent">
                 We also have many offers and discounts. After every 5 rentals, one customer gets a 30% discount in the sixth time.
                 There are also discounts for all products.
                  All you have to do is enter the site,
                   then choose the product you want, whether it is a dress, accessories, 
                   or a bouquet of flowers, then click on the “Discount” button.
                 </p>
              </section>
        
            </div>
        )

}
export default service;