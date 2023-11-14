PROTO_SRC_DIR := ../proto
PROTO_FILES := $(wildcard $(PROTO_SRC_DIR)/**/**/*.proto)

proto-gen:
	@echo "Generating proto files for server"
	protoc -I=../proto --go_out=./ --go_opt=paths=source_relative --go-grpc_out=./ --go-grpc_opt=paths=source_relative $(shell find $(PROTO_SRC_DIR) -name '*.proto')
	@echo "Finished generating proto files for server"
