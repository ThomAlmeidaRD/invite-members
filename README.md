# invite-members
Trocando informações entre duas telas usando javascript

# Ao clicar em "adicionar usuario ao grupo"
 
 ## Caso usuario nao exista {
    - abrir tela de invite;
    - pegar email anteriormente inserido para o input de invite;
    - enviar mensagem de sucesso;
 }

 ## Possiveis soluções;
 - 1 LocalStorage(); 
 ou
 - 2 Passar valor do input pela URL{
     limpar valor;
     adicionar ao input da pagina seguinte
 }


 ### resolvi usar a soluçõa 2 passando o valor pela URL, com isso o email vai para a outra tela em forma de variavel pela url, com isso o script pega essa url e trata para que venha somente o email e joga isso dentro do valor de input.
