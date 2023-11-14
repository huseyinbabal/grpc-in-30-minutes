package main

import (
	"context"
	"github.com/go-faker/faker/v4"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"server/auth"
	"server/product"
)

type productServiceServer struct {
	product.UnimplementedProductServiceServer
}

type authServiceServer struct {
	auth.UnimplementedAuthServiceServer
}

func (p *productServiceServer) GetProduct(_ context.Context, req *product.ProductRequest) (*product.ProductResponse, error) {
	var pr product.ProductResponse
	err := faker.FakeData(&pr)
	if err != nil {
		return nil, err
	}
	return &pr, nil
}

func (p *authServiceServer) Login(_ context.Context, req *auth.LoginRequest) (*auth.LoginResponse, error) {
	var lr auth.LoginResponse
	err := faker.FakeData(&lr)
	if err != nil {
		return nil, err
	}
	return &lr, nil
}

func main() {
	listener, err := net.Listen("tcp", ":8083")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	opts := []grpc.ServerOption{}
	grpcServer := grpc.NewServer(opts...)

	reflection.Register(grpcServer)

	product.RegisterProductServiceServer(grpcServer, &productServiceServer{})
	auth.RegisterAuthServiceServer(grpcServer, &authServiceServer{})

	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
