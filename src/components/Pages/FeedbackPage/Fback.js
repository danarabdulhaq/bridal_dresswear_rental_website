import React from 'react';
import './Fback.css'
import { Link } from 'react-router-dom';
import FBone from './FBI/FB1.jpg';
import FBtw from './FBI/FB2.jpg';
import FBth from './FBI/FB3.jpg';
import FBfo from './FBI/FB4.jpg';
import FBfi from './FBI/FB5.jpg';
import FBsi from './FBI/FB6.jpg';
import FBse from './FBI/FB7.jpg';
import FBei from './FBI/FB8.jpg';
import FBni from './FBI/FB9.jpg';
import FBte from './FBI/FB10.jpg';
import FBel from './FBI/FB11.jpg';
import FBtwe from './FBI/FB12.jpg';
import FBthi from './FBI/FB13.jpg';
import FBfou from './FBI/FB14.jpg';
import FBfif from './FBI/FB15.jpg';
import FBsixt from './FBI/FB16.jpg';




const Fback =()=>{
    return(

<div class="container" id="ffb">
    <div id='PA'>
     <h1>You are a member of our family, share your beautiful moment with us</h1>
       <p> You can send your photos to us through our social media accounts, which you can find at the bottom of this page</p>
    </div>
	

       
		<div class="box" id="boxI">
			<img src={FBone} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBtw} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBth} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBfo} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBfi} alt='...'></img>
		</div>
        <div class="box" id="boxI">
			<img src={FBsi} alt='...'></img>
		</div>
        <div class="box" id="boxI">
			<img src={FBse} alt='...'></img>
		</div>
        <div class="box" id="boxI">
			<img src={FBei} alt='...'></img>
		</div>
        <div class="box" id="boxI">
			<img src={FBni} alt='...'></img>
		</div>
        <div class="box" id="boxI">
			<img src={FBte} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBel} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBtwe} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBthi} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBfou} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBfif} alt='...'></img>
		</div>
		<div class="box" id="boxI">
			<img src={FBsixt} alt='...'></img>
		</div>
		<div id='bottom'>
		<h2>U can find all this items and more in our site </h2>
		<Link to='/' id='go' className="btn"> Go to </Link>
	</div>
</div>

    );
}

export default Fback