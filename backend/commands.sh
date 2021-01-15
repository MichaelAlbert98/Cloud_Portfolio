# create lambda function
aws lambda create-function --function-name LambdaFunctionOverHttps \
--zip-file fileb://function.zip --handler dynamoDB_lambda.handler --runtime python3.8 \
--role arn:aws:iam::425411088051:role/lambda-apigateway-role