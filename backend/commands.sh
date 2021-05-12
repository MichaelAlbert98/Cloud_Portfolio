# create s3 bucket
aws s3 mb s3://cloud-resume-bucket

# package cloudformation
aws cloudformation package --s3-bucket cloud-resume-bucket \
--template-file template.yaml --output-template-file gen/template-gen.yaml

# deploy
aws cloudformation deploy --template-file gen/template-gen.yaml --stack-name cloud-formation-resume \
--capabilities CAPABILITY_IAM

