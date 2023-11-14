/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: product/product.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
import * as grpc_web_1 from "grpc-web";
export namespace product {
    export class ProductRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: number;
        }): ProductRequest {
            const message = new ProductRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt32(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProductRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProductRequest {
            return ProductRequest.deserialize(bytes);
        }
    }
    export class ProductResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: number;
            name?: string;
            description?: string;
            price?: number;
            image?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("price" in data && data.price != undefined) {
                    this.price = data.price;
                }
                if ("image" in data && data.image != undefined) {
                    this.image = data.image;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get price() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set price(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get image() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set image(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            id?: number;
            name?: string;
            description?: string;
            price?: number;
            image?: string;
        }): ProductResponse {
            const message = new ProductResponse({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.price != null) {
                message.price = data.price;
            }
            if (data.image != null) {
                message.image = data.image;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: number;
                name?: string;
                description?: string;
                price?: number;
                image?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.price != null) {
                data.price = this.price;
            }
            if (this.image != null) {
                data.image = this.image;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id != 0)
                writer.writeInt32(1, this.id);
            if (this.name.length)
                writer.writeString(2, this.name);
            if (this.description.length)
                writer.writeString(3, this.description);
            if (this.price != 0)
                writer.writeFloat(4, this.price);
            if (this.image.length)
                writer.writeString(5, this.image);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProductResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProductResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readInt32();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.description = reader.readString();
                        break;
                    case 4:
                        message.price = reader.readFloat();
                        break;
                    case 5:
                        message.image = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProductResponse {
            return ProductResponse.deserialize(bytes);
        }
    }
    export abstract class UnimplementedProductServiceService {
        static definition = {
            GetProduct: {
                path: "/product.ProductService/GetProduct",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: ProductRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => ProductRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ProductResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ProductResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetProduct(call: grpc_1.ServerUnaryCall<ProductRequest, ProductResponse>, callback: grpc_1.sendUnaryData<ProductResponse>): void;
    }
    export class ProductServiceClient {
        private _address: string;
        private _client: grpc_web_1.GrpcWebClientBase;
        constructor(address: string, credentials?: Object, options?: grpc_web_1.GrpcWebClientBaseOptions) {
            if (!options)
                options = {};
            options.format = options.format || "text";
            this._address = address;
            this._client = new grpc_web_1.GrpcWebClientBase(options);
        }
        private static GetProduct = new grpc_web_1.MethodDescriptor<ProductRequest, ProductResponse>("/product.ProductService/GetProduct", grpc_web_1.MethodType.UNARY, ProductRequest, ProductResponse, (message: ProductRequest) => message.serialize(), ProductResponse.deserialize);
        GetProduct(message: ProductRequest, metadata: grpc_web_1.Metadata | null, callback: (error: grpc_web_1.RpcError, response: ProductResponse) => void) {
            return this._client.rpcCall<ProductRequest, ProductResponse>(this._address + "/product.ProductService/GetProduct", message, metadata || {}, ProductServiceClient.GetProduct, callback);
        }
    }
}