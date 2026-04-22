import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "./customers.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
   keepCase: true,
   longs: String,
   enums: String,
   arrays: true,
});

const customersProto = grpc.loadPackageDefinitions(packageDefinition);
