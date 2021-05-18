import boto3
import json
import os
import traceback

# create resource outside handler
region_name = os.environ['REGION_NAME']
table_name = os.environ['TABLE_NAME']
aws_env = os.environ['AWS_ENV']

# determine if executing locally or on AWS
if aws_env == 'LOCAL':
    dynamo = boto3.resource('dynamodb', endpoint_url="http://host.docker.internal:8000").Table(table_name)
else:
    dynamo = boto3.resource('dynamodb', region_name=region_name).Table(table_name)


def handler(event, context):
    """Provide an event that contains the following keys:
      - operation: one of the operations in the operations dict below
      - payload: a parameter to pass to the operation being performed
    """
    # print("Received event: " + json.dumps(event, indent=2))
    event = json.loads(event["body"])
    operation = event['operation']
    payload = event['payload']

    if operation == 'read':
        try:
            response = dynamo.get_item(**payload)
        except ClientError as e:
            print(e.response['Error']['Message'])
            return {'statusCode': 400, 'body': e.response['Error']['Message']}
        else:
            item = response['Item']
            return { "statusCode": 200, "body": str(item['visits']) }
    elif operation == 'update':
        try:
            response = dynamo.update_item(**payload)
        except:
            traceback.print_exc()
            return {'statusCode': 400, 'body': 'Error in putting item.'}
        else:
            item = response['Attributes']
            return {"statusCode": 200, "body": str(item['visits'])}
    elif operation == 'create':
        try:
            dynamo.put_item(**payload)
        except:
            traceback.print_exc()
            return {'statusCode': 400, 'body': 'Error in creating item.'}
        else:
            return {"statusCode": 200, "body": "0"}
    else:
        raise ValueError('Unrecognized operation "{}"'.format(operation))
