# fullcycle3-codebank

## Codebank

docker-compose up -d
docker exec -it appbank bash
go install

- cria a tabela do pg

localhost:9000
   Login:
      admin@user.com
      123456

      Add new server:
         General:
            name: db
         Connection:
            host name: db
            maintance: codebank
            username: postgres
            password: root
            save password: yes

clique em db>databases>codebank>Schemas, clique com o botao direito em schemas e va em query tool, cole o codigo sql e rode

go run main.go

execute o comando `select * from credit_cards;` pra verificar se o credit card foi adicionado

## Comandos usados

iniciar projeto golang
go mod init github.com/felippedesouza/fullcycle3-codebank
go get 