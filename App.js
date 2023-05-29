import React from 'react';
import logo from './logo.png'
import User from './User.jpeg'
import Metaverse from './Metaverse.webp'
import Robots from './Robot.webp'
import SocialMedia from './SocialMedia.jpeg'
import Facebook from './facebook.jpeg'
import Instagram from './instagram logo.jpeg'
import Twitter from './twitter.jpeg'
import Linkedin from './linkedin.jpeg'
import Copyright from './Heart.png'
import './App.css';
import Tabs from './Script';

function App() 
{
  return (
    <div>
<div id="header">
    <div className="container">
        <nav>
            <img src={logo} class="logo" alt="logo"/>
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#services">Servies</a></li>
                <li><a href="#mywork">My Work</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
        <div className="header-text">
            <h1>I'M <span>ASHMI STALIN</span>,</h1>
            <pre> </pre>
            <p>I am a Front End Developer passionate about creating modern, engaging, and intuitive<br/> user experiences through web and mobileapplications. I have extensive experience with HTML,<br/> CSS, JavaScript, and React. I have a keen eye for detail and am always looking for ways to improve <br/> my designs and code. My goal is to create applications that are beautiful, user-friendly, and <br/>provide the best possible experience for the end user. I am also familiar with Agile development<br/> methodologies,and have been involved in the full software development life cycle.<br/> I am eager to learn new technologies and take on challenges.</p>
        </div>
    </div>
</div>







<div id="about">
    <div className="container">
        <div className="row">
            <div className="about-column1">
<img src={User}width="400px" height="600px" alt="User"/>
            </div>
            <div class="about-column2">
<h1 class="subtitle">About Me , </h1>
<p>My name is Ashmi Stalin, and I am a Front End Developer. I specialize in building user-friendly websites and applications that are both aesthetically pleasing and highly functional. I have a passion for creating engaging user interfaces that keep users coming back.
    My portfolio showcases some of my front end work. I have included several webpages I have designed, as well as a few of my applications. I have also included code samples that show off my coding skills and demonstrate my ability to write clean and organized code.I am highly motivated and eager to learn new web technologies. I am always looking for new challenges and opportunities to expand my skillset. If you are looking for a Front End Developer who is passionate about creating excellent user experiences, please contact me. I would be glad to discuss how I can help you with your project.</p>
 <Tabs></Tabs>            
</div>
        </div>
    </div>
</div>







<div id="services">
    <div class="container">
        <h1 class="subtitle">My Services </h1>  
        <div class="services-list">
            <div>
                <i class="fa-solid fa-code"></i>
                <h2>Web Designing</h2>
                <p> Front end developers work with design to create aesthetically pleasing user interfaces that are functional, user-friendly, and intuitive. They use design tools such as Adobe Photoshop and Sketch to create mockups and prototypes.</p>
                <a href="#header">learn more</a>
            </div>
            <div>
                <i class="fa-sharp fa-solid fa-pen-nib" ></i>
                <h2>Optimization</h2>
                <p> Front end developers optimize websites and applications for speed, performance, and compatibility with different browsers and devices. They use techniques such as minification, caching, and compression to make sure the user experience is as fast and seamless as possible.</p>
                <a href="#header">learn more</a>
            </div><div>
                <i class="fa-solid fa-flask-vial"></i>
                                <h2>Testing</h2>
<p> Front end developers test the user interface to ensure it works correctly and is free of bugs. They use tools such as JSLint and QUnit to test the code and catch any errors or inconsistencies.</p>       
         <a href="#Home">learn more</a>
            </div>
            <div>
                <i class="fa-brands fa-app-store-ios" ></i>
            <h2>App Designing</h2>
                <p> Front end developers optimize websites and applications for speed, performance, and compatibility with different browsers and devices. They use techniques such as minification, caching, and compression to make sure the user experience is as fast and seamless as possible.</p>
                <a href="#header">learn more</a>
            </div>
        </div>
    </div>
</div>






<div id="mywork">
    <div class="container">
        <h1 class="subtitle">My Work </h1> 
        <h3>A few of my works</h3> 
   <div class="worklist">
    <div class="work1">
        <img src={Metaverse} alt="Metaverse"/>
        <div class="layer">
            <h3>AR/VR Metaverse</h3>
            <p>This platform is designed to facilitate the creation of Digital Assets and Smart Contracts. It is designed to be an open platform that allows users to access a wide range of decentralized applications and services.
            </p>
        </div>
    </div>
<div class="work1">
        <img src={Robots} alt="Robots"/>
        <div class="layer">
            <h3>Robots</h3>
<p>Robots are machines that can be programmed to carry out a series of actions autonomously. This project will also investigate ways to make robots more user-friendly, as well as making them more affordable.</p>
        
    </div>
    </div><div class="work1">
        <img src={SocialMedia} alt="SocialMedia"/>
        <div class="layer">
            <h3>Social Media</h3>
            <p>This project focuses on creating a social media platform that is easy to use, reliable and secure. The goal is to create a platform that is intuitive and accessible to a wide range of users. </p>
    </div>
    </div>
   </div>
   <a href="#Home" class="btn">See More</a>
    </div>
</div>







<div id="contact">
    <div class="container">
        <div class="row">
           <div class="contactleft">
<h1 class="subtitle">Contact Me</h1>
<p><i class="fa-solid fa-paper-plane"></i>ashmistalin@gmail.com</p>
<p><i class="fa-solid fa-phone"></i>9500-760-840</p>
<div class="socialicons">
  <img src={Facebook} width="50px" height="50px" alt="Facebook" />
  <a href="https://m.facebook.com/">Facebook</a>
<img src={Twitter} width="50px" height="50px" alt="Twitter" href=""/>
<a href="https://m.facebook.com/">Twitter</a>
<img src={Instagram} width="50px" height="50px" alt="Instagram" href="https://instagram.com/ashmi_stalin?igshid=YmMyMTA2M2Y="/>
<a href="https://m.facebook.com/">Instagram</a>
<img src={Linkedin} width="50px" height="50px" alt="Linkedin" href=""/>
<a href="https://m.facebook.com/">LinkedIn</a>

</div>
<a href="images/my cv.pdf" download class="btn btn2">Download CV</a>
           </div>
           <div class="contactright">
<form >
  <label>Name</label>
    <input type="text" name="Name" placeholder="Your name " required/>
      <label>E-mail id</label>
    <input type="email" name="E-Mail" placeholder="Your e-mail " required/>
    <textarea name="Message"  rows="6" placeholder="Your Message"></textarea>
    <button type="submit" class="btn btn2">Submit</button>

</form>
           </div> 
        </div>
    </div>
    <div class="copyright">
    <p>
       Copyright 
        </p> 
      <img src={Copyright} alt="Copyright"/>
      <p>
       Ashmi Stalin 
        </p>  
    </div>
</div>


</div>
  );
}

export default App
