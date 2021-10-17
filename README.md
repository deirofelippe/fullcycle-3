# fullcycle3-codebank

## Kafka

- Producer: vai produzir a mensagem e enviar pro kafka.
- Broker: uma máquina que faz parte de um cluster (conjunto de máquinas) do Kafka, que vai receber a mensagem enviada pelo Producer. Cada Broker tem seu banco de dados pra armazenar as mensagens.
- Consumer: quem vai ler as mensagens do Kafka, que está em alguma partição do tópico. O Kafka não envia as mensagens pro consumer.
- Consumer Groups: cada consumer de um grupo pode ler uma ou mais partições distintas, ao inves de somente um consumer ler todas as partições.
- Tópico: é um canal responsavel por receber e disponibilizar os dados pros consumers poderem ler. Exemplo, todas as vendas que o producer fizer, ele vai publicar no Kafka atraves do tópico 'vendas', o consumer vai ler a mesnagem do tópico 'vendas' e emitir a nota fiscal referente a venda.
- Partições: é onde será armazenado as informações. Um tópico pode ter várias partições e cada partição pode estar em um broker diferente. Se tiver problema em um broker que tem só uma partição, não há mais nenhuma informação no tópico. Se as informações estiverem distribuidas em várias partições, então poucas informações ficarão indisponíveis caso tenha problema em algum broker.

## gRPC

- Checkout Frontend: usuario faz a compra, a informação da transação (compra) será enviada pro backend. mostra pro usuario o status da transação, se deu tudo certo.
- Checkout Backend: recebe a informação da compra, envia a transação pro banco via gRPC. recebe o status da transação do banco e envia pro frontend.
- Bank: simula o processamento do cartão de crédito, da transação. banco responde pro backend se deu tudo certo com a transação. sempre que o banco processar uma transação, ele publica um tópico no Apache Kafka.
- Extrato Backend: vai ficar lendo o Apache Kafka pra quando surgir uma nova transação no Kafka, o sistema do extrato bancario vai pegar a transação e vai guardar. 
- Extrato Frontend: vai fazendo solicitações em background pra pegar as transações do extrato bancario e exibir pro cliente






- gRPC: comunicação entre sistemas de altissima performance, mais veloz que REST. É recomendado o uso com microsserviços, quando pequenos sistemas precisam se comunicar o tempo todo. É em binário, não em plain text como XML e JSON, sendo mais leve. Usa como plataforma de envio o HTTP/2.
- Apache Kafka: comunicação assincrona entre sistemas, eliminando a chance de perder dados. Se um sistemas sair do ar, quando voltar, conseguirá dar continuidade ao processamento.
- Kafka Connect: se conecta ao Kafka e insere os dados consumidos no Elasticsearch
- ElasticSearch: banco de dados
- Kibana: acessa o Elasticsearch e gerar dashboard de metricas dos dados.

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

## ordem de criacao dos containers

- apache-kafka
- codebank em go
- checkout em nestjs
- checkout em nextjs



POST LINKEDIN

esse o sistema desse evento deu um trabalhão pra fazer. muitas tecnologias que nunca usei e queria saber como é:

Bank em Golang:
Checkout e Extrato backend: Nest.js
Checkout e Extrato frontend: Next.js
Kafka e Kafka Connect: 
Elasticsearch e Kibana: 
Docker e Kubernetes: ambiente pra rodar a aplicacao
Istio, Kiali, Prometheus e Grafana: service mesh
CI/CD com GitHun Actions