class Form {

    constructor() {
        this.title=createElement('h1');

        this.quote=createElement("h5");
        this.quote.position(600, 20);
        this.quote.html("for kids, from kids");

        this.addBookB=createButton('Add A Book');
        this.getBookB=createButton('get A Book');
        this.genreLabel=createElement('h3');

        this.scienceB=createButton('Science');
        this.socialB=createButton('Social');
        this.mathB=createButton('Math');
        this.languagesB=createButton('Languages');
        this.fictionB=createButton('Fiction');
        this.nonFictionB=createButton('Non Fiction');
        this.mythologicalB=createButton('Mythological');
        this.computerScienceB=createButton('Computer Science');
        this.economicsB=createButton('Economics');
        this.otherB=createButton('Other(music, art, etc)');

        this.selectedGenre=createElement("h4");
        this.nameBox=createInput();
        this.nameLabel=createElement("h4");
        this.ageBox=createInput();
        this.ageLabel=createElement("h4");
        this.donorNameBox=createInput();
        this.donorNameLabel=createElement("h4");
        this.drop_offAdress=createInput();
        this.drop_offLabel=createElement("h4");
        this.setB=createButton('Add book');
        this.phoneLabel=createElement("h4");
        this.phoneBox=createInput();
        this.messageLabel=createElement("h4");
        this.messageBox=createInput();

        this.searchButton=createButton("find me books");
    }
    hide1(){
      this.title.hide();
      this.addBookB.hide();
      this.getBookB.hide();
      this.quote.hide();
    }
    reset(){
      this.selectedGenre.html("selected Genre:unselected");
    }
    hideAddInp(){
      this.scienceB.hide();
      this.mathB.hide();
      this.languagesB.hide();
      this.socialB.hide();
      this.fictionB.hide();
      this.nonFictionB.hide();
      this.mythologicalB.hide();
      this.computerScienceB.hide();
      this.economicsB.hide();
      this.otherB.hide();

      this.selectedGenre.hide();
      this.nameBox.hide();
      this.nameLabel.hide();
      this.ageBox.hide();
      this.ageLabel.hide();
      this.donorNameBox.hide();
      this.donorNameLabel.hide();
      this.drop_offAdress.hide();
      this.drop_offLabel.hide();
      this.phoneLabel.hide();
      this.phoneBox.hide();
      this.messageLabel.hide();
      this.messageBox.hide();

      this.setB.hide();
    }

    hideGetInput(){

      this.searchButton.hide();
    }

    showAddInp(){
      this.scienceB.show();
      this.mathB.show();
      this.socialB.show();
      this.languagesB.show();
      this.fictionB.show();
      this.nonFictionB.show();
      this.mythologicalB.show();
      this.computerScienceB.show();
      this.economicsB.show();
      this.otherB.show();

      this.selectedGenre.show();
      this.nameBox.show();
      this.nameLabel.show();
      this.ageBox.show();
      this.ageLabel.show();
      this.donorNameBox.show();
      this.donorNameLabel.show();
      this.drop_offAdress.show();
      this.drop_offLabel.show();
      this.phoneLabel.show();
      this.phoneBox.show();
      this.messageLabel.show();
      this.messageBox.show();

      this.setB.show();
    }

    showGetInput(){

      this.searchButton.show();
    }
  
    display(){

      this.title.html("share a kitab");
      this.title.position(375, 50);

      this.hideAddInp();
      this.hideGetInput();
      
      this.addBookB.position(370, 300);
      this.getBookB.position(470, 300);

      this.addBookB.mousePressed(()=>{
        this.hide1();

        this.showAddInp();
        
        this.genreLabel.html("Genres(for donating book):");
        this.genreLabel.position(80, 50);

        this.selectedGenre.html("selected Genre: Unselected");
        this.selectedGenre.position(80, 120);

        this.nameBox.position(180, 240);
        this.nameLabel.html("Book name:");
        this.nameLabel.position(80, 220);

        this.ageBox.position(510, 240);
        this.ageLabel.html("Book age-group:");
        this.ageLabel.position(380, 220);

        this.donorNameBox.position(850, 240);
        this.donorNameLabel.html("Donor name:");
        this.donorNameLabel.position(750, 220);

        this.drop_offAdress.position(1210, 240);
        this.drop_offLabel.html("Drop-Off/pickup Adress:");
        this.drop_offLabel.position(1020, 220);

        this.phoneLabel.position(10,280);
        this.phoneLabel.html("Your phone number:")
        this.phoneBox.position(180,300);

        this.messageLabel.position(360,280);
        this.messageLabel.html("Your message related to books:")
        this.messageBox.position(610,300);

        this.setB.position(200, 170);

        this.scienceB.position(100, 100);
        this.socialB.position(170, 100);
        this.mathB.position(235, 100);
        this.languagesB.position(290, 100);
        this.fictionB.position(380, 100);
        this.nonFictionB.position(440, 100);
        this.mythologicalB.position(530, 100);
        this.computerScienceB.position(630, 100);
        this.economicsB.position(770, 100);
        this.otherB.position(860, 100);

        this.scienceB.mousePressed(()=>{
          putGenre="Science";
          this.selectedGenre.html("selected Genre: Science");
        });

        this.socialB.mousePressed(()=>{
          putGenre="Social";
          this.selectedGenre.html("selected Genre: Social");
        });

        this.mathB.mousePressed(()=>{
          putGenre="Math";
          this.selectedGenre.html("selected Genre: Math");
        });

        this.languagesB.mousePressed(()=>{
          putGenre="Languages";
          this.selectedGenre.html("selected Genre: Languages");
        });

        this.fictionB.mousePressed(()=>{
          putGenre="Fiction";
          this.selectedGenre.html("selected Genre: Fiction");
        });

        this.nonFictionB.mousePressed(()=>{
          putGenre="Non_Fiction";
          this.selectedGenre.html("selected Genre: Non-Fiction");
        });

        this.mythologicalB.mousePressed(()=>{
          putGenre="Mythological";
          this.selectedGenre.html("selected Genre: Mythological");
        });

        this.computerScienceB.mousePressed(()=>{
          putGenre="Computer_Science";
          this.selectedGenre.html("selected Genre: Computer Science");
        });

        this.economicsB.mousePressed(()=>{
          putGenre="Economics";
          this.selectedGenre.html("selected Genre: Economics");
        });

        this.otherB.mousePressed(()=>{
          putGenre="Other";
          this.selectedGenre.html("selected Genre: Other");
        });

        this.setB.mousePressed(()=>{
          NumOfBooks+1
          app.addBook(this.nameBox.value(), putGenre, this.drop_offAdress.value(), this.ageBox.value(), this.donorNameBox.value(), this.phoneBox.value(), this.messageBox.value()); 
          this.reset();
          app.updateCount(NumOfBooks);
        });



      });
      this.getBookB.mousePressed(()=>{
        this.hide1();
        
        this.showGetInput();



        this.searchButton.position(50, 50);


        this.searchButton.mousePressed(function(){
          App.getBook();
          
        });
      });

    }
  }
  