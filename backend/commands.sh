# create s3 bucket
aws s3 mb s3://cloud-portfolio-bucket

# package cloudformation
aws cloudformation package --s3-bucket cloud-portfolio-bucket \
--template-file template.yaml --output-template-file gen/template-gen.yaml

# deploy
aws cloudformation deploy --template-file gen/template-gen.yaml --stack-name cloud-formation-portfolio \
--capabilities CAPABILITY_IAM

