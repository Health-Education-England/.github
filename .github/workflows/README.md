# PR Analysis Workflow

## Required Permissions

### AWS

These permissions are required for the Maven tests in generic-upload:

- `s3:ListBucket`
- `s3:GetObject`
- `s3:PutObject`

#### CodeArtifact (Optional)

These permissions are required if `use-codeartifact` is `true`.

- `codeartifact:GetAuthorizationToken`
- `codeartifact:ReadFromRepository`
- `sts:GetServiceBearerToken`

# Build Workflow

## Required Permissions

### AWS

These permissions are required for the Maven tests in generic-upload:

- `s3:ListBucket`
- `s3:GetObject`
- `s3:PutObject`

#### CodeArtifact (Optional)

These permissions are required if `use-codeartifact` is `true`.

- `codeartifact:GetAuthorizationToken`
- `codeartifact:ReadFromRepository`
- `sts:GetServiceBearerToken`

#### Elastic Container Registry (ECR)

- `ecr:GetAuthorizationToken`
- `ecr:PutImage`
- `ecr:BatchCheckLayerAvailability`
- `ecr:InitiateLayerUpload`
- `ecr:UploadLayerPart`
- `ecr:CompleteLayerUpload`

# Clear outdated runs

## Required Permissions

### Github

The reject runs endpoint requires the personal access tokens (PAT) of user which is set to be required reviewers with read access to the repository contents.

# Deploy Workflow

## Required Permissions

### AWS

#### Elastic Container Registry (ECR)

- `ecr:GetAuthorizationToken`

#### Elastic Container Service (ECS)

- `ecs:RegisterTaskDefinition`
- `ecs:DescribeServices`
- `ecs:UpdateService`

#### Identity and Access Management (IAM)

- `iam:PassRole`
