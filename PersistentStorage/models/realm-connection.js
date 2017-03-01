import Realm from 'realm';

const sampleSchemaName = 'SampleRecord';

let repository = new Realm({
    schema: [{
        name: sampleSchemaName,
        primaryKey: 'id',
        properties: {
            id: {type: 'string', indexed: true},
            title: 'string',
            value: 'float',
            created: 'date'
        }
    }]
});

export class SampleService {
    all(){
        return repository.objects(sampleSchemaName);
    }

    find(id){
        return repository.objectForPrimaryKey(sampleSchemaName, id);
    }

    insert(record){
        repository.write(() => {
            repository.create(sampleSchemaName, record);
        });
    }

    update(updateCallback){
        if(!updateCallback) return;

        repository.write(() => {
           updateCallback();
        });
    }

    delete(records){
        repository.write(() => {
            repository.delete(records);
        });
    }
}