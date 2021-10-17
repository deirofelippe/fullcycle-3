## Codebank (Go)

### Usando Evans

1. docker-compose up -d

1. criar tabela no postgres

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

execute o comando `select * from credit_cards;` pra verificar se o credit card foi adicionado

1. docker exec -it appbank bash
   - go run main.go

1. docker exec -it appbank bash
   - evans -r repl -p=50052
      - call Payment

localhost:9021

ir ate o topico do kafka

### Codebank

go mod init <repositorio-do-projeto>: go mod init github.com/felippedesouza/fullcycle3-codebank (inicia o projeto goland)

go get github.com/satori/go.uuid

go get github.com/confluentinc/confluent-kafka-go/kafka

make <nome-comando>: make gen (gera os stubs do gRPC usando o comando no arquivo Makefile)

evans -r repl -p=50052 (testa o client gRPC) (deve ser rodado em conjunto com `go run main.go`, em uma outra instancia do terminal)