package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/felippedesouza/fullcycle3-codebank/infrastructure/grpc/server"
	"github.com/felippedesouza/fullcycle3-codebank/infrastructure/kafka"
	"github.com/felippedesouza/fullcycle3-codebank/infrastructure/repository"
	"github.com/felippedesouza/fullcycle3-codebank/usecase"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
}

func main() {
	db := setupDb()
	defer db.Close()
	producer := setupKafkaProducer()
	processTransactionUseCase := setupTransactionUseCase(db, producer)
	fmt.Println("rodando grpc server")
	serveGrpc(processTransactionUseCase)
}

func setupKafkaProducer() kafka.KafkaProducer {
	producer := kafka.NewKafkaProducer()
	producer.SetupProducer(os.Getenv("KafkaBootstrapServers"))
	return producer
}

func setupTransactionUseCase(db *sql.DB, producer kafka.KafkaProducer) usecase.UseCaseTransaction {
	transactionRepository := repository.NewTransactionRepositoryDb(db)
	usecase := usecase.NewUseCaseTransaction(transactionRepository)
	usecase.KafkaProducer = producer
	return usecase
}

func setupDb() *sql.DB {
	psqlinfo := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("host"),
		os.Getenv("port"),
		os.Getenv("user"),
		os.Getenv("password"),
		os.Getenv("dbname"),
	)
	db, err := sql.Open("postgres", psqlinfo)
	if err != nil {
		log.Fatal("error connection to database")
	}
	return db
}

func serveGrpc(processTransactionUseCase usecase.UseCaseTransaction) {
	grpcServer := server.NewGRPCServer()
	grpcServer.ProcessTransactionUseCase = processTransactionUseCase
	grpcServer.Serve()
}
