import React, {Component } from "react";
import MessageService from "./../../services/MessageService";
class MessageComponent extends Component  {

constructor(props){
super(props)
this.messages=['Komponent obsługuje dane z props bądź z URL','-','Dane są zapisywane w pamięci LocalStorage','-','Edycja, dodawanie i usuwanie zmieniają tylko lokalne','-','Przełączenie na obslugę danych z serwera niewymagają przeprojektowania logiki komponentu a jedynie zmian jedynie w pliku dataservice.js'];
}

render (){

    return (
      <div>
      {this.messages.map(function(val,i){
         return (<p key={"message",i}  >{val}</p>)
       })}
      </div>
    );
}
}


export default MessageComponent