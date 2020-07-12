const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user,msg){

    let menu = " CARDAPIO \n\n";

    Object.keys(cardapio.menu).forEach((value)=> {
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}          R$ ${element.preco} \n`;
    });

    banco.db[user].stage = 1;

    return ["Olá sua uma assistente virtual, irei apresentar o cardápio para fazer o pedido basta enviar o código", menu];
};

exports.execute = execute;