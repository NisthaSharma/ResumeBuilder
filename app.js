const express = require('express');
const fs= require('fs');
const path = require('path');
const app = express();
const port= 80;
app.use('/static',express.static("static"));

app.use(express.urlencoded());

app.set('view engine','pug');

app.set('views',path.join(__dirname,'views'));

app.get("/",function(req,res){
    res.render("form.pug");
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    qua = req.body.qua
    desp = req.body.desp
    exp1= req.body.exp1
    exp2=req.body.exp2
    exp3 = req.body.exp3
    skill1 = req.body.skill1
    skill2 = req.body.skill2
    skill3 = req.body.skill3
    skill4 = req.body.skill4
    skill5 = req.body.skill5
    skill6 = req.body.skill6
    m12 = req.body.m12
    mc = req.body.mc
    email = req.body.email
    mobile = req.body.mobile
    let outputToWrite = `<!DOCTYPE html>
    <html>
    <head>
    <title>Joe Bloggs - Curriculum Vitae</title>
    
    <meta name="viewport" content="width=device-width"/>
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs."/>
    <meta charset="UTF-8"> 
    
    <link type="text/css" rel="stylesheet" href="output.css">
    <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
    
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    </head>
    <body id="top">
    <div id="cv" class="instaFade">
        <div class="mainDetails">
            <div id="headshot" class="quickFade">
                <img src="headshot.jpg" alt="Alan Smith" />
            </div>
            
            <div id="name">
                <h1 class="quickFade delayTwo">${name}</h1>
                <h2 class="quickFade delayThree">${qua}</h2>
            </div>
            
            <div id="contactDetails" class="quickFade delayFour">
                <ul>
                    <li>e: <a href="mailto:joe@bloggs.com" target="_blank">${email}</a></li>
                    <li>${mobile}</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        
        <div id="mainArea" class="quickFade delayFive">
            <section>
                <article>
                    <div class="sectionTitle">
                        <h1>Personal Profile</h1>
                    </div>
                    
                    <div class="sectionContent">
                        <p>${desp}.</p>
                    </div>
                </article>
                <div class="clear"></div>
            </section>
            
            
            <section>
                <div class="sectionTitle">
                    <h1>Work Experience</h1>
                </div>
                
                <div class="sectionContent">
                    <article>
                        <h2></h2>
                        <p class="subDetails"></p>
                        <p>${exp1}</p>
                    </article>
                    
                    <article>
                        <p>${exp2}</p>
                    </article>
                    
                    <article>
                    
                        <p>${exp3}</p>
                    </article>
                </div>
                <div class="clear"></div>
            </section>
            
            
            <section>
                <div class="sectionTitle">
                    <h1>Key Skills</h1>
                </div>
                
                <div class="sectionContent">
                    <ul class="keySkills">
                        <li>${skill1}</li>
                        <li>${skill2}</li>
                        <li>${skill3}</li>
                        <li>${skill4}</li>
                        <li>${skill5}</li>
                        <li>${skill6}</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </section>
            
            
            <section>
                <div class="sectionTitle">
                    <h1>Education</h1>
                </div>
                
                <div class="sectionContent">
                    <article>
                        <h2>College/University</h2>
                        <p class="subDetails">${qua}</p>
                        <p>${mc}</p>
                    </article>
                    
                    <article>
                        <h2>School</h2>
                        <p class="subDetails">12th board</p>
                        <p>${m12}</p>
                    </article>
                </div>
                <div class="clear"></div>
            </section>
            
        </div>
    </div>
    <script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
    var pageTracker = _gat._getTracker("UA-3753241-1");
    pageTracker._initData();
    pageTracker._trackPageview();
    </script>
    </body>
    </html>`;
    fs.writeFileSync('output.html', outputToWrite)
    //const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('form.pug');

})
app.get("/output.html",function(req,res){
    res.sendfile("output.html");
})
app.get("/output.css",function(req,res){
    res.sendfile("output.css");
})

app.listen(port,()=>{
    console.log(`started on this port ${port} sucessufully`);
})