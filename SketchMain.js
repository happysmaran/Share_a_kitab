var NumOfBooks = 0;
var database, app, form, putGenre="unselected",book_ageLevel="", requestGenre="unselected", request=0, index=1, bookPutName="", bookRef, bookRequest="";
var back;
var BookS=[];
var bookImg, introductionTxt, p2, p3, bookimg2, htu, instructions, p4, quote;

function preload(){
    back=loadImage("back.png");
    bookImg=loadImage("bookImg.png");
    bookImg2=loadImage("books.png");
    instructions=loadImage("Instructions.png");
}

function setup(){
    canvas = createCanvas(2000, 3000);
    database = firebase.database();
    app = new App();
    app.getCount();
    app.start();

    introductionTxt=createElement("h2");
    introductionTxt.position(350, 1050);
    introductionTxt.html("Share a kitab is a system where anyone can donate and get books for free. Many underprivileged children doesn't have books.");

    p2=createElement("h2");
    p2.position(350, 1090);
    p2.html("Every 3 of 10 children have no books. Share a kitab can allow anyone to add any book for donating, so that who are in need of a book");

    p3=createElement("h2");
    p3.position(350, 1120);
    p3.html(" can get the book for free. especially during this Covid-19 pandemic time, these kids are deprived of education, as they cannot access online ");

    p4=createElement("h2");
    p4.position(350, 1150);
    p4.html("education, because of high-costs and economic inequalities, as they cannot afford neither the technology nor the gadgets.");



    htu=createElement("h1");
    htu.position(100, 1400);
    htu.html("How To Use:");

}
function draw(){
    background(back);
    drawSprites();

    
    textSize(20);
    fill("Black");
    var pos=100;
    for(var bk in BookS){
        text("book Name: "+BookS[bk].book_name, 100, pos);
        text("book AgeLevel: "+BookS[bk].book_ageLevel, 100, pos+20);
        text("book Genre: "+BookS[bk].book_genre, 100, pos+40);
        text("book Adress: "+BookS[bk].book_dropOff, 100, pos+60);
        text("Donor phoneNumber: "+BookS[bk].book_donor_phone, 100, pos+80);

        pos=pos+120;
    }     

    image(bookImg, 200, 1000);
    image(bookImg2, 400, 1270);

    image(instructions, 300, 1460);
    
}

