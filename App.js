class App {
  constructor(){

  }

  getCount(){
    var bookCountRef  = database.ref('NumOfBooks');
    bookCountRef.on("value",function(data){
      NumOfBooks = data.val(); 
    });

  }

  updateCount(count){
    database.ref('/').update({
      NumOfBooks: count
    });
  }

  addBook(bookName, bookGenre, dropOff, ageLevel, donor, phone, message){

    var Index = "Books/book"+index;
    database.ref(Index).set({
      book_name:bookName,
      book_genre:bookGenre,
      book_dropOff:dropOff,
      book_ageLevel:ageLevel,
      book_donor:donor,
      book_donor_Phone:phone,
      donors_message:message
    });
    index=index+1;

  }

  static getBook(){
    database.ref('Books/').on("value",(data)=>{
      BookS=data.val();
    });
  }



  async start(){
    
      form = new Form()
      form.display();
  }

}