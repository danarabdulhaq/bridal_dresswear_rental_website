import './Style.css';

const about = () => {

    return(
        
 

    <div>
        
<div className='border-for-about'>
         <div  className="head">
                <h1 className='tithead'>About Us</h1>
            </div> 

            <div>

                <p className='welcome-letterhead'>" Welcome dear La Belle , We hope to gain your trust Get to know us "</p>

            </div>
            <section className='images'>
                    
                    <img className='img-circle' src={require("./dresse.jpg")} alt ="logo" width="200px" />
                    
            </section>
        </div>

        <ul>
               
                    
                <section className='subject-titles-and-explan-r'>
                    <img className='img-circle' src={require('./img-history.jpg')} alt ="logo" width="200px" />
                    
                        <h2 className='tit-his' > history :</h2>

                    <div>
                        <p className='text-r  '> La Belle Company was established in 2019. During this period, we have been able to develop our website so that we can rent bridal dresses remotely, with good quality and great trust between us,
During this period, and with the spread of Corona disease, the demand increased through our website for renting dresses, to be a helpful factor in identifying us by the community</p>
                    </div>
                    
                </section>
                    

                <section className='subject-titles-and-explan-l'>
                    
                <img className='img-circle' src={require('./img- Our features.jpg')} alt ="logo" width="200px" />
                    
                    <h2 className='tit-feat' >  Our features :</h2>

                <div>
                    <p className='text-l '>

                    We save time and effort and ease of booking and receiving the order.
There is ease in booking with complete clarity with Tfaasy. Also, there are a large number of options available from different designs and prices, and we provide all the needs of the bride from one place and with the click of a button, and we have easy electronic payment methods for everyone</p>
                </div>
                    
                </section>
                    


                    
         </ul>
    </div>



    );
    
}

export default about 

