# fullcycle3-codebank

## Kafka



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
go get github.com/satori/go.uuid
go get github.com/confluentinc/confluent-kafka-go/kafka







- Checkout Frontend: usuario faz a compra, a informação da transação (compra) será enviada pro backend. mostra pro usuario o status da transação, se deu tudo certo.
- Checkout Backend: recebe a informação da compra, envia a transação pro banco via gRPC. recebe o status da transação do banco e envia pro frontend.
- Bank: simula o processamento do cartão de crédito, da transação. banco responde pro backend se deu tudo certo com a transação. sempre que o banco processar uma transação, ele publica um tópico no Apache Kafka.
- Extrato Backend: vai ficar lendo o Apache Kafka pra quando surgir uma nova transação no Kafka, o sistema do extrato bancario vai pegar a transação e vai guardar. 
- Extrato Frontend: vai fazendo solicitações em background pra pegar as transações do extrato bancario e exibir pro cliente





Microserviços: 
gRPC: comunicação entre sistemas de altissima performance, mais veloz que REST. 
Apache Kafka: comunicação assincrona entre sistemas, eliminando a chance de perder dados. Se um sistemas sair do ar, quando voltar, conseguirá dar continuidade ao processamento.
Kafka Connect: se conecta ao Kafka e insere os dados consumidos no Elasticsearch
ElasticSearch: banco de dados
Kibana: acessa o Elasticsearch e gerar dashboard de metricas dos dados.

Docker: onde sistema irá rodar no momento de desenvolvimento
Kubernetes: simular o sistema rodando em produção

Service mesh: conjunto de ferramentas pra monitorar a aplicação e ver tudo acontecendo em tempo real
Prometheus: pega as metricas pra fazer o monitoramento
Grafana: pegar coisas mais técnicas da aplicação pra monitorar





Bank: Golang
Checkout e Extrato backend: Nest.js
Checkout e Extrato frontend: Next.js
Kafka e Kafka Connect
Elasticsearch e Kibana
Docker e Kubernetes
Istio, Kiali, Prometheus e Grafana