# 1. Write an AWS Lambda function that adds two numbers and returns the result

import json

def lambda_handler(event, context):
    # Extract numbers from the event
    try:
        num1 = event.get('num1')
        num2 = event.get('num2')

        if num1 is None or num2 is None:
            raise ValueError("Both 'num1' and 'num2' are required in the input.")

        # Ensure the numbers are integers or floats
        if not isinstance(num1, (int, float)) or not isinstance(num2, (int, float)):
            raise ValueError("'num1' and 'num2' must be integers or floats.")
        
        # Add the numbers
        result = num1 + num2

        # Return the result
        return {
            'statusCode': 200,
            'body': json.dumps({'result': result})
        }

    except Exception as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': str(e)})
        }


# 2. Code an AWS Lambda function to store a document or PDF file in an S3 bucket.

import json
import base64
import boto3
import uuid

def lambda_handler(event, context):
    BUCKET_NAME = 'your-s3-bucket-name'
    
    # Initialize the S3 client
    s3 = boto3.client('s3')
    
    try:
        file_data_base64 = event['body'] 
        file_name = event['file_name']   
        file_extension = event.get('file_extension', 'pdf') 

        # decode the base64 
        file_data = base64.b64decode(file_data_base64)

        # unique file name
        unique_file_name = f"{uuid.uuid4()}.{file_extension}"

        # uploading
        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=unique_file_name,
            Body=file_data,
            ContentType='application/pdf',  # or you can use content type based on file type
        )
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'File uploaded successfully!',
                'file_url': f'https://{BUCKET_NAME}.s3.amazonaws.com/{unique_file_name}'
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({
                'error': f'Failed to upload file: {str(e)}'
            })
        }
