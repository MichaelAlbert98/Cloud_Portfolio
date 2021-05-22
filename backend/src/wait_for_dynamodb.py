import boto3
import botocore
import time

start = time.time()
timeout_limit = 180   # 3 minutes
dynamo = boto3.client('dynamodb', endpoint_url='http://localhost:8000')


def wait_until_starts():
    if time.time() > start + timeout_limit:
        print('Could not start Docker container within {} seconds.'.format(timeout_limit))
        return
    try:
        response = dynamo.list_tables()
    except botocore.exceptions.EndpointConnectionError as e:
        print('Waiting for Docker container to start...')
        return wait_until_starts()
    else:
        print('Docker container started after {} seconds.'.format(time.time()-start))
        return


if __name__ == "__main__":
    wait_until_starts()
