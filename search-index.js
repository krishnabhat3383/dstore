var searchIndex = JSON.parse('{\
"dstore":{"doc":"","i":[[3,"DstoreError","dstore","Error type for Dstore, contains message as string",null,null],[12,"0","","",0,null],[0,"dstore_proto","","",null,null],[3,"KeyValue","dstore::dstore_proto","",null,null],[12,"key","","",1,null],[12,"value","","",1,null],[3,"Null","","",null,null],[3,"Byte","","",null,null],[12,"body","","",2,null],[3,"Size","","",null,null],[12,"size","","",3,null],[0,"dstore_client","","Generated client implementations.",null,null],[3,"DstoreClient","dstore::dstore_proto::dstore_client","",null,null],[11,"connect","","Attempt to create a new client by connecting to a given…",4,[[]]],[11,"new","","",4,[[]]],[11,"with_interceptor","","",4,[[]]],[11,"push","","",4,[[]]],[11,"push_file","","",4,[[]]],[11,"pull","","",4,[[]]],[11,"pull_file","","",4,[[]]],[11,"contains","","",4,[[]]],[11,"remove","","",4,[[]]],[11,"update","","",4,[[]]],[11,"join","","",4,[[]]],[0,"dstore_server","dstore::dstore_proto","Generated server implementations.",null,null],[3,"DstoreServer","dstore::dstore_proto::dstore_server","",null,null],[8,"Dstore","","Generated trait containing gRPC methods that should be…",null,null],[10,"push","","",5,[[["request",3],["keyvalue",3]],[["pin",3],["box",3]]]],[10,"push_file","","",5,[[["request",3],["streaming",3]],[["pin",3],["box",3]]]],[10,"pull","","",5,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[16,"PullFileStream","","Server streaming response type for the PullFile method.",5,null],[10,"pull_file","","",5,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[10,"contains","","",5,[[["request",3],["byte",3]],[["box",3],["pin",3]]]],[10,"remove","","",5,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[10,"update","","",5,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[10,"join","","",5,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[11,"new","","",6,[[]]],[11,"with_interceptor","","",6,[[]]],[0,"global","dstore","",null,null],[3,"Global","dstore::global","Strore reference counted pointers to HashMaps maintaining…",null,null],[11,"start_server","","Initialiaze server and start Global service on `addr`",7,[[["socketaddr",4]]]],[0,"local","dstore","",null,null],[3,"Local","dstore::local","Maintain state of Local cache",null,null],[12,"addr","","Using an address as UID",8,null],[11,"new","","Generate reference counted pointer to datastructure…",8,[[["string",3]]]],[11,"update","","Remove cached mappings as per directions from Global…",8,[[]]],[11,"insert","","Insert VALUEs onto Global in either a single packet or as…",8,[[["bytes",3]]]],[11,"insert_single","","Insert a single packet sized KEY->VALUE mapping onto…",8,[[["bytes",3]]]],[11,"insert_file","","Insert large KEY -> VALUE mappings on Global and store in…",8,[[["bytes",3]]]],[11,"get","","Get VALUE associated with KEY from system",8,[[["bytes",3]]]],[11,"get_single","","Get VALUES that can fit in a single packet",8,[[["bytes",3]]]],[11,"get_file","","Get VALUES that don\'t fit in a single packet",8,[[["bytes",3]]]],[11,"remove","","Remove a KEY from the system",8,[[["bytes",3]]]],[17,"MAX_BYTE_SIZE","dstore","Maximum size of contents in a gRPC packet as per standard",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"from","dstore::dstore_proto","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"into_request","","",9,[[],["request",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_request","","",2,[[],["request",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"into_request","","",3,[[],["request",3]]],[11,"vzip","","",3,[[]]],[11,"from","dstore::dstore_proto::dstore_client","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"into_request","","",4,[[],["request",3]]],[11,"vzip","","",4,[[]]],[11,"from","dstore::dstore_proto::dstore_server","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"poll_ready","","",6,[[["context",3]],[["result",4],["poll",4]]]],[11,"call","","",6,[[["request",3]]]],[11,"into_request","","",6,[[],["request",3]]],[11,"vzip","","",6,[[]]],[11,"from","dstore::global","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"into_request","","",7,[[],["request",3]]],[11,"vzip","","",7,[[]]],[11,"from","dstore::local","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"into_request","","",8,[[],["request",3]]],[11,"vzip","","",8,[[]]],[11,"join","dstore::global","RPC to add new Local to cluster, with empty invalidation…",7,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[11,"contains","","Check if a certain KEY exists on Global, if yes return…",7,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[11,"push","","RPC that maps KEY to VALUE, if it doesn\'t already exist on…",7,[[["request",3],["keyvalue",3]],[["pin",3],["box",3]]]],[11,"push_file","","RPC that maps KEY to streamed VALUE, provided it doesn\'t…",7,[[["request",3],["streaming",3]],[["pin",3],["box",3]]]],[11,"pull","","RPC that returns VALUE associated with KEY, provided it…",7,[[["request",3],["byte",3]],[["box",3],["pin",3]]]],[11,"pull_file","","RPC that streams VALUE associated with KEY, if it exist on…",7,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[11,"remove","","RPC to remove KEY mappings on Global and add KEY to…",7,[[["request",3],["byte",3]],[["pin",3],["box",3]]]],[11,"update","","RPC to help Local invalidate cached VALUES",7,[[["request",3],["byte",3]],[["box",3],["pin",3]]]],[11,"clone","dstore::dstore_proto","",1,[[],["keyvalue",3]]],[11,"clone","","",9,[[],["null",3]]],[11,"clone","","",2,[[],["byte",3]]],[11,"clone","","",3,[[],["size",3]]],[11,"clone","dstore::dstore_proto::dstore_client","",4,[[]]],[11,"clone","dstore::dstore_proto::dstore_server","",6,[[]]],[11,"default","dstore::dstore_proto","",1,[[],["keyvalue",3]]],[11,"default","","",9,[[],["null",3]]],[11,"default","","",2,[[],["byte",3]]],[11,"default","","",3,[[],["size",3]]],[11,"eq","","",1,[[["keyvalue",3]]]],[11,"ne","","",1,[[["keyvalue",3]]]],[11,"eq","","",9,[[["null",3]]]],[11,"eq","","",2,[[["byte",3]]]],[11,"ne","","",2,[[["byte",3]]]],[11,"eq","","",3,[[["size",3]]]],[11,"ne","","",3,[[["size",3]]]],[11,"fmt","dstore","",0,[[["formatter",3]],["result",6]]],[11,"fmt","dstore::dstore_proto","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","dstore::dstore_proto::dstore_client","",4,[[["formatter",3]],["result",6]]],[11,"fmt","dstore::dstore_proto::dstore_server","",6,[[["formatter",3]],["result",6]]],[11,"fmt","dstore","",0,[[["formatter",3]],["result",6]]],[11,"poll_ready","dstore::dstore_proto::dstore_server","",6,[[["context",3]],[["poll",4],["result",4]]]],[11,"call","","",6,[[["request",3]]]],[11,"encode_raw","dstore::dstore_proto","",1,[[]]],[11,"merge_field","","",1,[[["decodecontext",3],["wiretype",4]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",1,[[]]],[11,"clear","","",1,[[]]],[11,"encode_raw","","",9,[[]]],[11,"merge_field","","",9,[[["decodecontext",3],["wiretype",4]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",9,[[]]],[11,"clear","","",9,[[]]],[11,"encode_raw","","",2,[[]]],[11,"merge_field","","",2,[[["decodecontext",3],["wiretype",4]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",2,[[]]],[11,"clear","","",2,[[]]],[11,"encode_raw","","",3,[[]]],[11,"merge_field","","",3,[[["decodecontext",3],["wiretype",4]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",3,[[]]],[11,"clear","","",3,[[]]]],"p":[[3,"DstoreError"],[3,"KeyValue"],[3,"Byte"],[3,"Size"],[3,"DstoreClient"],[8,"Dstore"],[3,"DstoreServer"],[3,"Global"],[3,"Local"],[3,"Null"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);