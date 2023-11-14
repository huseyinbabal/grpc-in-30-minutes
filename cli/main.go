package main

import (
	"cli/auth"
	"context"
	"flag"
	"github.com/spf13/cobra"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
)

var serverAddr = flag.String("server_addr", "localhost:8083", "The server address in the format of host:port")

var loginUsername string
var loginPassword string

var loginCmd = &cobra.Command{
	Use:   "login",
	Short: "Login to the server",
	Long:  "Login to the server with username and password",
	Run: func(cmd *cobra.Command, args []string) {
		var opts []grpc.DialOption
		opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
		conn, err := grpc.Dial(*serverAddr, opts...)
		if err != nil {
			log.Fatalf("fail to dial: %v", err)
		}
		defer conn.Close()

		client := auth.NewAuthServiceClient(conn)
		login, err := client.Login(context.Background(), &auth.LoginRequest{
			Username: loginUsername,
			Password: loginPassword,
		})
		if err != nil {
			log.Fatalf("fail to login: %v", err)
		}
		log.Printf("Login: %v", login)
	},
}

func main() {
	rootCmd := &cobra.Command{Use: "app"}
	rootCmd.AddCommand(loginCmd)

	loginCmd.Flags().StringVarP(&loginUsername, "username", "u", "", "Username")
	err := loginCmd.MarkFlagRequired("username")
	if err != nil {
		log.Fatalf("Failed to mark username as required: %s", err)
	}
	loginCmd.Flags().StringVarP(&loginPassword, "password", "p", "", "Password")
	err = loginCmd.MarkFlagRequired("password")
	if err != nil {
		log.Fatalf("Failed to mark password as required: %s", err)
	}
	err = rootCmd.Execute()
	if err != nil {
		log.Fatalf("Error: %s", err)
	}
}
