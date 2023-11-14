PROTO_SRC_DIR := ../proto
TS_OUT_DIR := ./product/src/dist
PROTO_FILES := $(wildcard $(PROTO_SRC_DIR)/**/**/*.proto)

proto-gen:
	@echo "Generating proto files for UI"
	protoc -I=$(PROTO_SRC_DIR) --ts_out=$(TS_OUT_DIR) --ts_opt=target=web $(shell find $(PROTO_SRC_DIR) -name '*.proto')
	@echo "Finished generating proto files for UI"
