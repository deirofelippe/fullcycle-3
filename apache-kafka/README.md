# fullcycle3-codebank

## Kafka

docker-compose exec kafka bash
kafka-console-producer --topic transactions --bootstrap-server localhost:9092

{
   credit_card_number: string;

   amount: number;

   payment_date: Date;

   store: string;

   description: string;
}
