 class MessageService    {
   
  constructor(){
  this.messages =[];
  this.add = this.add.bind(this);
  }

   add(message) {
console.log(message)
    this.messages.push(message);

    if(this.messages.length>3) {
    this.messages.shift();
    
    }
    return true;
  }
  getMessages(){
    return this.messages
  }

  clear() {
    this.messages = [];
  }
}
 export default MessageService
